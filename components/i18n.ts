export type Locale = "pt" | "en";

export const LOCALE_KEY = "portfolio-idioma";

const EN_NAMES: Record<string, string> = {
  "sobre-mim.md": "about-me.md",
  "experiencia.md": "experience.md",
  "projetos.md": "projects.md",
  "servicos.md": "services.md",
  "habilidades.md": "skills.md",
  "formacao.md": "education.md",
  "certificados.md": "certificates.md",
  "repositorios.md": "repositories.md",
  "curriculo.md": "resume.md",
  "atividade.md": "activity.md",
  "contato.md": "contact.md",
};

const PT_NAMES = Object.fromEntries(Object.entries(EN_NAMES).map(([pt, en]) => [en, pt]));

export function localePath(path: string, to: Locale) {
  const cut = path.lastIndexOf("/") + 1;
  const name = (to === "en" ? EN_NAMES : PT_NAMES)[path.slice(cut)];
  return name ? path.slice(0, cut) + name : path;
}

export const pick = (locale: Locale) => (pt: string, en: string) => (locale === "en" ? en : pt);

export const dateLocale = (locale: Locale) => (locale === "en" ? "en-US" : "pt-BR");

export function detectLocale(): Locale | null {
  const param = new URLSearchParams(location.search).get("lang");
  if (param === "en" || param === "pt") return param;
  try {
    const saved = localStorage.getItem(LOCALE_KEY);
    if (saved === "en" || saved === "pt") return saved;
  } catch {}
  return null;
}
