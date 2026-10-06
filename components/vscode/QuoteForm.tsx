import { useActionState, useState } from "react";
import { sendQuote, type QuoteState } from "@/app/actions";
import { EMAIL } from "./data";
import { useL, useLocale } from "./live-context";

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP?.replace(/\D/g, "") ?? "";

function mailto(form: FormData) {
  const get = (k: string) => String(form.get(k) ?? "").trim();
  const lines = [get("message"), "", get("name"), get("company"), get("phone"), get("kind")].filter((l, i) => i < 2 || l);
  const subject = `Orçamento de projeto${get("company") ? `, ${get("company")}` : ""}`;
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export default function QuoteForm() {
  const [round, setRound] = useState(0);
  return <Form key={round} again={() => setRound((r) => r + 1)} />;
}

function Form({ again }: { again: () => void }) {
  const L = useL();
  const { locale } = useLocale();
  const [state, action, pending] = useActionState(async (prev: QuoteState, form: FormData) => {
    const next = await sendQuote(prev, form);
    if (next.status === "unconfigured") location.href = mailto(form);
    return next;
  }, { status: "idle" } as QuoteState);

  const KINDS = [
    L("Sistema sob medida", "Custom system"),
    L("Integração ou API", "Integration or API"),
    L("Dashboard, dados ou IA", "Dashboard, data or AI"),
    L("Site ou landing page", "Website or landing page"),
    L("E-commerce ou saída de legado", "E-commerce or legacy replacement"),
    L("Automação de processos", "Process automation"),
    L("Outro", "Something else"),
  ];

  if (state.status === "sent" || state.status === "unconfigured")
    return (
      <div className="qf qf-done" id="orcamento" role="status">
        <i className="codicon codicon-pass-filled" />
        <div>
          <b>{state.status === "sent" ? L("Mensagem enviada!", "Message sent!") : L("Quase lá!", "Almost there!")}</b>
          <p>
            {state.status === "sent"
              ? L("Recebi seu pedido e respondo no e-mail que você deixou assim que puder.", "I got your request and I'll reply to the email you left as soon as I can.")
              : L("Abri seu programa de e-mail com tudo preenchido, é só enviar.", "I opened your email app with everything filled in, just hit send.")}
          </p>
          <button type="button" className="btn" onClick={again}>
            {L("Enviar outra mensagem", "Send another message")}
          </button>
        </div>
      </div>
    );

  return (
    <form className="qf" id="orcamento" action={action}>
      <input type="hidden" name="locale" value={locale} />
      <label className="qf-trap" aria-hidden>
        Site
        <input name="site" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="qf-grid">
        <label className="qf-field">
          <span>{L("Seu nome", "Your name")} *</span>
          <input name="name" required minLength={2} maxLength={120} autoComplete="name" />
        </label>
        <label className="qf-field">
          <span>{L("Seu e-mail", "Your email")} *</span>
          <input name="email" type="email" required maxLength={200} autoComplete="email" />
        </label>
        <label className="qf-field">
          <span>{L("WhatsApp ou telefone", "WhatsApp or phone")}</span>
          <input name="phone" type="tel" maxLength={40} autoComplete="tel" />
        </label>
        <label className="qf-field">
          <span>{L("Empresa", "Company")}</span>
          <input name="company" maxLength={120} autoComplete="organization" />
        </label>
        <label className="qf-field qf-wide">
          <span>{L("O que você precisa", "What you need")}</span>
          <select name="kind" defaultValue={KINDS[0]}>
            {KINDS.map((k) => (
              <option key={k}>{k}</option>
            ))}
          </select>
        </label>
        <label className="qf-field qf-wide">
          <span>{L("Conte um pouco do projeto", "Tell me a bit about the project")} *</span>
          <textarea
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={5}
            placeholder={L("O problema que você quer resolver, prazo e qualquer detalhe que ajude.", "The problem you want to solve, the timeline and any detail that helps.")}
          />
        </label>
      </div>
      {state.status === "invalid" && <p className="qf-msg err">{L("Confira nome, e-mail e mensagem, algo ficou faltando.", "Check your name, email and message, something is missing.")}</p>}
      {state.status === "limited" && <p className="qf-msg err">{L("Muitas mensagens em pouco tempo. Tente de novo daqui a alguns minutos.", "Too many messages in a short time. Try again in a few minutes.")}</p>}
      {state.status === "error" && (
        <p className="qf-msg err">
          {L("Não consegui enviar agora. Me chama direto em ", "I couldn't send it right now. Reach me directly at ")}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      )}
      <div className="qf-actions">
        <button className="btn" type="submit" disabled={pending}>
          <i className={`codicon codicon-${pending ? "loading codicon-modifier-spin" : "send"}`} />
          {pending ? L("Enviando...", "Sending...") : L("Enviar pedido", "Send request")}
        </button>
        {WHATSAPP && (
          <a
            className="btn qf-wa"
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(L("Oi, Yhago! Vi seu portfólio e queria um orçamento.", "Hi Yhago! I saw your portfolio and I'd like a quote."))}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className="codicon codicon-comment-discussion" />
            {L("Chamar no WhatsApp", "Message on WhatsApp")}
          </a>
        )}
        <span className="qf-note">{L("Respondo pelo e-mail que você deixar.", "I'll reply to the email you leave.")}</span>
      </div>
    </form>
  );
}
