import { dateLocale, localePath, pick, type Locale } from "../i18n";
import { files as base, GITHUB, type VFile } from "./data";
import { EN_DOCS } from "./data-en";
import { PUBLICADOS } from "./depoimentos";

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
export const CV_DIR = "cv/";

export const fmtDate = (iso: string, locale: Locale = "pt") =>
  new Date(iso).toLocaleDateString(dateLocale(locale), { day: "numeric", month: "short", year: "numeric", timeZone: "America/Sao_Paulo" });

function repoBlock(r: Repo, locale: Locale) {
  const L = pick(locale);
  const meta = [r.language, r.stars ? `★ ${r.stars}` : "", `${L("atualizado em", "updated")} ${fmtDate(r.pushedAt, locale)}`].filter(Boolean).join(", ");
  const lines = [`### :repo: [${r.name}](${r.url})`, "", r.description || L("Sem descrição.", "No description."), `*${meta}*`];
  if (r.homepage) lines.push(`[:link-external: ${L("Ver online", "See it live")}](${r.homepage})`);
  if (r.topics.length) lines.push("", r.topics.map((t) => `\`${t}\``).join(" "));
  return lines.join("\n");
}

function repositorios(gh: GitHubData, locale: Locale) {
  const L = pick(locale);
  const langs = new Map<string, number>();
  for (const r of gh.repos) if (r.language) langs.set(r.language, (langs.get(r.language) ?? 0) + 1);
  const chips = [...langs].sort((a, b) => b[1] - a[1]).map(([l, n]) => `\`${l} (${n})\``).join(" ");
  return [
    L("# :github: Repositórios", "# :github: Repositories"),
    "",
    L(
      `Meus ${gh.publicRepos} repositórios públicos em [github.com/yyhago](${GITHUB}), do mais recente para o mais antigo. Essa lista vem direto do GitHub. Projeto de cliente fica em repositório privado, então não aparece aqui.`,
      `My ${gh.publicRepos} public repositories at [github.com/yyhago](${GITHUB}), from newest to oldest. This list comes straight from GitHub. Client projects live in private repositories, so they don't show up here.`,
    ),
    "",
    chips,
    "",
    gh.repos.map((r) => repoBlock(r, locale)).join("\n\n"),
    "",
  ].join("\n");
}

function atividade(gh: GitHubData, locale: Locale) {
  const L = pick(locale);
  const out = [L("# :pulse: Atividade no GitHub", "# :pulse: GitHub activity"), ""];
  if (gh.contributions)
    out.push(
      L(`**${gh.contributions.total} contribuições** no último ano, contando os repositórios privados.`, `**${gh.contributions.total} contributions** in the last year, including private repositories.`),
      "",
      "[[contribuicoes]]",
      "",
    );
  out.push(
    L("## :graph: No GitHub", "## :graph: On GitHub"),
    "",
    L(`* **${gh.publicRepos}** repositórios públicos`, `* **${gh.publicRepos}** public repositories`),
    L(`* **${gh.followers}** seguidores e **${gh.following}** seguindo`, `* **${gh.followers}** followers and **${gh.following}** following`),
    `* ${L("Desde", "Since")} ${fmtDate(gh.since, locale)}`,
    "",
    L("## :history: Mexi por último", "## :history: Recently updated"),
    "",
    ...gh.repos.slice(0, 5).map((r) => `* **[${r.name}](${r.url})**, ${fmtDate(r.pushedAt, locale)}${r.description ? `, ${r.description}` : ""}`),
    "",
    L(
      `> Esses dados vêm do GitHub e se atualizam sozinhos. Última leitura em ${fmtDate(gh.fetchedAt, locale)}.`,
      `> This data comes from GitHub and updates on its own. Last read on ${fmtDate(gh.fetchedAt, locale)}.`,
    ),
    "",
  );
  return out.join("\n");
}

function curriculo(cvs: Cv[], locale: Locale) {
  const L = pick(locale);
  const label = { pt: L("Português", "Portuguese"), en: L("Inglês", "English") };
  const out = [L("# :file-pdf: Currículo", "# :file-pdf: Resume"), ""];
  if (!cvs.length)
    out.push(
      L(
        "Estou finalizando meu currículo em PDF, em português e em inglês. Em breve ele fica disponível aqui para baixar.",
        "I'm finishing my resume in PDF, in Portuguese and in English. It will be available to download here soon.",
      ),
      "",
      L(
        "Enquanto isso, está tudo em [experiencia.md](experiencia.md) e no meu [LinkedIn](https://www.linkedin.com/in/yhagofelipe).",
        "In the meantime, everything is in [experience.md](experience.md) and on my [LinkedIn](https://www.linkedin.com/in/yhagofelipe).",
      ),
      "",
    );
  else {
    out.push(
      L(
        "Meu currículo completo, em português e em inglês. Dá para ler aqui mesmo no editor ou baixar o PDF.",
        "My full resume, in Portuguese and in English. You can read it right here in the editor or download the PDF.",
      ),
      "",
    );
    for (const cv of cvs)
      out.push(`* :file-pdf: **${label[cv.lang]}**, [${L("abrir aqui", "open here")}](${CV_DIR}${cv.name}) ${L("ou", "or")} [:cloud-download: ${L("baixar o PDF", "download the PDF")}](${cv.href}), ${cv.kb} KB`);
    out.push(
      "",
      L(
        "> Os dois PDFs também ficam na pasta **cv** do Explorador e na área de trabalho. No terminal, **cv** abre a versão em português e **cv en** a versão em inglês.",
        "> Both PDFs are also in the **cv** folder of the Explorer and on the desktop. In the terminal, **cv** opens the Portuguese version and **cv en** the English one.",
      ),
      "",
    );
  }
  return out.join("\n");
}

function depoimentos(locale: Locale) {
  if (!PUBLICADOS.length) return "";
  const L = pick(locale);
  return `${L("## :quote: O que dizem os clientes", "## :quote: What clients say")}\n\n[[depoimentos]]\n`;
}

function prints(content: string, images: string[]) {
  return content.replace(/\{\{prints:([a-z0-9]+)\|([^}]+)\}\}\n?/g, (_, slug: string, caption: string) => {
    const found = images.filter((n) => n.toLowerCase().startsWith(slug)).sort();
    return found.length ? `${found.map((n) => `![${caption}](/projetos/${encodeURIComponent(n)})`).join("\n")}\n` : "";
  });
}

export function buildFiles(gh: GitHubData | null, cvs: Cv[], images: string[] = [], locale: Locale = "pt"): VFile[] {
  const L = pick(locale);
  const cv = localePath("curriculo.md", locale);
  const cvLink = cvs.length ? `[${L("Currículo em PDF", "Resume in PDF")}](${cv})` : `[${L("Currículo em PDF, em breve", "Resume in PDF, coming soon")}](${cv})`;
  const cvFrase = cvs.length
    ? L(`Meu currículo em PDF, em português e em inglês, está em [${cv}](${cv}).`, `My resume in PDF, in Portuguese and in English, is in [${cv}](${cv}).`)
    : L("Meu currículo em PDF, em português e em inglês, chega em breve.", "My resume in PDF, in Portuguese and in English, is coming soon.");
  const files = base.map((f) => {
    const source = locale === "en" ? (EN_DOCS[f.path] ?? f.content) : f.content;
    let content = prints(source, images)
      .replaceAll("{{cv-link}}", cvLink)
      .replaceAll("{{cv-frase}}", cvFrase)
      .replace(/\{\{depoimentos\}\}\n?/g, depoimentos(locale));
    if (f.path === `${DOCS}sobre-mim.md`) {
      const n = gh
        ? L(
            `**${gh.publicRepos} repositórios públicos** e **${gh.contributions?.total ?? "várias"} contribuições** no último ano no GitHub`,
            `**${gh.publicRepos} public repositories** and **${gh.contributions?.total ?? "many"} contributions** in the last year on GitHub`,
          )
        : L("**14 repositórios públicos** no GitHub", "**14 public repositories** on GitHub");
      content = content.replace("{{github}}", n);
    }
    if (f.path === `${DOCS}repositorios.md` && gh) content = repositorios(gh, locale);
    if (f.path === `${DOCS}projetos.md` && gh) {
      const featured = gh.repos.filter((r) => r.topics.includes(FEATURED_TOPIC));
      if (featured.length) content += `\n## :star-full: ${L("Em destaque no GitHub", "Featured on GitHub")}\n\n${featured.map((r) => repoBlock(r, locale)).join("\n\n")}\n`;
    }
    return { ...f, content };
  });
  const extra: VFile[] = [{ path: `${DOCS}curriculo.md`, content: curriculo(cvs, locale), git: cvs.length ? undefined : "U" }];
  if (gh) extra.push({ path: `${DOCS}atividade.md`, content: atividade(gh, locale) });
  files.splice(files.findIndex((f) => f.path === `${DOCS}contato.md`), 0, ...extra);
  const pdfs: VFile[] = cvs.map((cv) => ({ path: `${CV_DIR}${cv.name}`, content: "", href: cv.href, git: "U" }));
  files.splice(files.findIndex((f) => f.path.startsWith(DOCS)), 0, ...pdfs);
  if (locale === "pt") return files;
  return files.map((f) => {
    const alias = localePath(f.path, "en");
    return alias === f.path ? f : { ...f, alias };
  });
}
