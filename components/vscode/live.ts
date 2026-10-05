import { files as base, GITHUB, type VFile } from "./data";

export type Repo = {
  name: string;
  description: string;
  url: string;
  homepage: string;
  language: string;
  stars: number;
  forks: number;
  topics: string[];
  pushedAt: string;
  createdAt: string;
  archived: boolean;
};
export type Day = { date: string; count: number; level: number };
export type GitHubData = {
  followers: number;
  following: number;
  publicRepos: number;
  since: string;
  repos: Repo[];
  contributions: { total: number; days: Day[] } | null;
  fetchedAt: string;
};
export type Cv = { name: string; href: string; lang: "pt" | "en"; kb: number };
export type Live = { files: VFile[]; gh: GitHubData | null; cvs: Cv[] };

export const FEATURED_TOPIC = "portfolio";
export const DOCS = "docs/";

export const fmtDate = (iso: string) => new Date(iso).toLocaleDateString("pt-BR", { day: "numeric", month: "short", year: "numeric", timeZone: "America/Sao_Paulo" });

function repoBlock(r: Repo) {
  const meta = [r.language, r.stars ? `★ ${r.stars}` : "", `atualizado em ${fmtDate(r.pushedAt)}`].filter(Boolean).join(", ");
  const lines = [`### :repo: [${r.name}](${r.url})`, "", r.description || "Sem descrição.", `*${meta}*`];
  if (r.homepage) lines.push(`[:link-external: Ver online](${r.homepage})`);
  if (r.topics.length) lines.push("", r.topics.map((t) => `\`${t}\``).join(" "));
  return lines.join("\n");
}

function repositorios(gh: GitHubData) {
  const langs = new Map<string, number>();
  for (const r of gh.repos) if (r.language) langs.set(r.language, (langs.get(r.language) ?? 0) + 1);
  const chips = [...langs].sort((a, b) => b[1] - a[1]).map(([l, n]) => `\`${l} (${n})\``).join(" ");
  return [
    "# :github: Repositórios",
    "",
    `Meus ${gh.publicRepos} repositórios públicos em [github.com/yyhago](${GITHUB}), do mais recente para o mais antigo. Essa lista vem direto do GitHub. Projeto de cliente fica em repositório privado, então não aparece aqui.`,
    "",
    chips,
    "",
    gh.repos.map(repoBlock).join("\n\n"),
    "",
  ].join("\n");
}

function atividade(gh: GitHubData) {
  const out = ["# :pulse: Atividade no GitHub", ""];
  if (gh.contributions) out.push(`**${gh.contributions.total} contribuições** no último ano, contando os repositórios privados.`, "", "[[contribuicoes]]", "");
  out.push(
    "## :graph: No GitHub",
    "",
    `* **${gh.publicRepos}** repositórios públicos`,
    `* **${gh.followers}** seguidores e **${gh.following}** seguindo`,
    `* Desde ${fmtDate(gh.since)}`,
    "",
    "## :history: Mexi por último",
    "",
    ...gh.repos.slice(0, 5).map((r) => `* **[${r.name}](${r.url})**, ${fmtDate(r.pushedAt)}${r.description ? `: ${r.description}` : ""}`),
    "",
    `> Esses dados vêm do GitHub e se atualizam sozinhos. Última leitura em ${fmtDate(gh.fetchedAt)}.`,
    "",
  );
  return out.join("\n");
}

function curriculo(cvs: Cv[]) {
  const label = { pt: "Português", en: "English" };
  const out = ["# :file-pdf: Currículo", ""];
  if (!cvs.length)
    out.push(
      "Estou finalizando meu currículo em PDF, em português e em inglês. Em breve ele fica disponível aqui para baixar.",
      "",
      "Enquanto isso, está tudo em [experiencia.md](experiencia.md) e no meu [LinkedIn](https://www.linkedin.com/in/yhagofelipe).",
      "",
    );
  else {
    out.push("Escolhe a versão. / Pick a version.", "");
    for (const cv of cvs) out.push(`* :cloud-download: **${label[cv.lang]}**: [${cv.name}](${cv.href}), ${cv.kb} KB`);
    out.push("", "> No terminal, **cv** abre direto e **cv en** abre a versão em inglês.", "");
  }
  return out.join("\n");
}

function prints(content: string, images: string[]) {
  return content.replace(/\{\{prints:([a-z0-9]+)\|([^}]+)\}\}\n?/g, (_, slug: string, caption: string) => {
    const found = images.filter((n) => n.toLowerCase().startsWith(slug)).sort();
    return found.length ? `${found.map((n) => `![${caption}](/projetos/${encodeURIComponent(n)})`).join("\n")}\n` : "";
  });
}

export function buildFiles(gh: GitHubData | null, cvs: Cv[], images: string[] = []): VFile[] {
  const cvLink = cvs.length ? "[Currículo em PDF](curriculo.md)" : "[Currículo em PDF, em breve](curriculo.md)";
  const cvFrase = cvs.length
    ? "Meu currículo em PDF, em português e em inglês, está em [curriculo.md](curriculo.md)."
    : "Meu currículo em PDF, em português e em inglês, chega em breve.";
  const files = base.map((f) => {
    let content = prints(f.content, images).replaceAll("{{cv-link}}", cvLink).replaceAll("{{cv-frase}}", cvFrase);
    if (f.path === `${DOCS}sobre-mim.md`) {
      const n = gh ? `**${gh.publicRepos} repositórios públicos** e **${gh.contributions?.total ?? "várias"} contribuições** no último ano no GitHub` : "**14 repositórios públicos** no GitHub";
      content = content.replace("{{github}}", n);
    }
    if (f.path === `${DOCS}repositorios.md` && gh) content = repositorios(gh);
    if (f.path === `${DOCS}projetos.md` && gh) {
      const featured = gh.repos.filter((r) => r.topics.includes(FEATURED_TOPIC));
      if (featured.length) content += `\n## :star-full: Em destaque no GitHub\n\n${featured.map(repoBlock).join("\n\n")}\n`;
    }
    return { ...f, content };
  });
  const extra: VFile[] = [{ path: `${DOCS}curriculo.md`, content: curriculo(cvs), git: cvs.length ? undefined : "U" }];
  if (gh) extra.push({ path: `${DOCS}atividade.md`, content: atividade(gh) });
  files.splice(files.findIndex((f) => f.path === `${DOCS}contato.md`), 0, ...extra);
  return files;
}
