"use server";

import { headers } from "next/headers";

export type QuoteState = { status: "idle" | "sent" | "invalid" | "limited" | "unconfigured" | "error" };

const WINDOW = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;
const recent = new Map<string, number[]>();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function limited(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW);
  if (hits.length >= MAX_PER_WINDOW) return true;
  recent.set(ip, [...hits, now]);
  return false;
}

export async function sendQuote(_: QuoteState, form: FormData): Promise<QuoteState> {
  const field = (k: string, max: number) => String(form.get(k) ?? "").trim().slice(0, max);
  if (field("site", 200)) return { status: "sent" };

  const name = field("name", 120);
  const email = field("email", 200);
  const phone = field("phone", 40);
  const company = field("company", 120);
  const kind = field("kind", 80);
  const message = field("message", 5000);
  const locale = field("locale", 2) === "en" ? "en" : "pt";
  if (name.length < 2 || !EMAIL_RE.test(email) || message.length < 10) return { status: "invalid" };

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0].trim() || h.get("x-real-ip") || "local";
  if (limited(ip)) return { status: "limited" };

  const key = process.env.RESEND_API_KEY;
  if (!key) return { status: "unconfigured" };

  const details = [
    `Nome: ${name}`,
    `E-mail: ${email}`,
    phone && `Telefone: ${phone}`,
    company && `Empresa: ${company}`,
    kind && `Tipo de projeto: ${kind}`,
    `Idioma do site: ${locale === "en" ? "inglês" : "português"}`,
  ].filter(Boolean);
  const body = `${details.join("\n")}\n\n${message}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM ?? "Portfólio <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO ?? "yhago.felipe.teles@gmail.com"],
        reply_to: email,
        subject: `Pedido de orçamento, ${name}${company ? `, ${company}` : ""}`,
        text: body,
      }),
    });
    return { status: res.ok ? "sent" : "error" };
  } catch {
    return { status: "error" };
  }
}
