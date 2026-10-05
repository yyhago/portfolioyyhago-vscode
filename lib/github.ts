import fs from "node:fs";
import path from "node:path";
import type { Cv, GitHubData, Repo } from "@/components/vscode/live";

const USER = "yyhago";
const REVALIDATE = 600;

const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};

async function json<T>(url: string): Promise<T> {
  const res = await fetch(url, { headers, next: { revalidate: REVALIDATE, tags: ["github"] } });
  if (!res.ok) throw new Error(`${url}: ${res.status}`);
  return res.json();
}

type ApiRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  pushed_at: string;
  created_at: string;
  fork: boolean;
  archived: boolean;
};

export function parseContributions(html: string) {
  const counts = new Map<string, number>();
  for (const m of html.matchAll(/<tool-tip[^>]*\bfor="([^"]+)"[^>]*>\s*(No|\d+) contributions?/g)) counts.set(m[1], m[2] === "No" ? 0 : Number(m[2]));
  const days: { date: string; count: number; level: number }[] = [];
  for (const m of html.matchAll(/<td\b[^>]*\bdata-date="[^"]+"[^>]*>/g)) {
    const tag = m[0];
    const date = tag.match(/data-date="([^"]+)"/)![1];
    const id = tag.match(/\bid="([^"]+)"/)?.[1] ?? "";
    const level = Number(tag.match(/data-level="(\d)"/)?.[1] ?? 0);
    days.push({ date, level, count: counts.get(id) ?? 0 });
  }
  days.sort((a, b) => a.date.localeCompare(b.date));
  const total = Number(html.match(/([\d.,]+)\s+contributions?\s+in the last year/)?.[1].replace(/[.,]/g, "") ?? NaN);
  return days.length ? { total: Number.isFinite(total) ? total : days.reduce((s, d) => s + d.count, 0), days } : null;
}

export async function getGitHub(): Promise<GitHubData | null> {
  try {
    const [user, repos, contrib] = await Promise.all([
      json<{ followers: number; following: number; public_repos: number; created_at: string; bio: string | null }>(`https://api.github.com/users/${USER}`),
      json<ApiRepo[]>(`https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`),
      fetch(`https://github.com/users/${USER}/contributions`, { next: { revalidate: REVALIDATE, tags: ["github"] } })
        .then((r) => (r.ok ? r.text() : ""))
        .then(parseContributions)
        .catch(() => null),
    ]);
    const list: Repo[] = repos
      .filter((r) => r.name.toLowerCase() !== USER && !r.fork)
      .map((r) => ({
        name: r.name,
        description: r.description ?? "",
        url: r.html_url,
        homepage: r.homepage || "",
        language: r.language ?? "",
        stars: r.stargazers_count,
        forks: r.forks_count,
        topics: r.topics ?? [],
        pushedAt: r.pushed_at,
        createdAt: r.created_at,
        archived: r.archived,
      }));
    return {
      followers: user.followers,
      following: user.following,
      publicRepos: list.length,
      since: user.created_at,
      repos: list,
      contributions: contrib,
      fetchedAt: new Date().toISOString(),
    };
  } catch (e) {
    console.error("GitHub indisponível, usando o conteúdo fixo:", e);
    return null;
  }
}

export function getCvs(): Cv[] {
  const dir = path.join(process.cwd(), "public", "cv");
  let names: string[] = [];
  try {
    names = fs.readdirSync(dir).filter((n) => n.toLowerCase().endsWith(".pdf"));
  } catch {}
  return names
    .map((name) => ({
      name,
      href: `/cv/${encodeURIComponent(name)}`,
      lang: /(^|[^a-z])(en|eng|english|ingles|inglês)([^a-z]|$)/i.test(name) ? ("en" as const) : ("pt" as const),
      kb: Math.round(fs.statSync(path.join(dir, name)).size / 1024),
    }))
    .sort((a, b) => a.lang.localeCompare(b.lang) * -1);
}

export function getPrints(): string[] {
  try {
    return fs.readdirSync(path.join(process.cwd(), "public", "projetos")).filter((n) => /\.(png|jpe?g|webp|gif)$/i.test(n));
  } catch {
    return [];
  }
}
