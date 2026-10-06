import { useEffect, useRef, useState } from "react";
import { dateLocale, pick, type Locale } from "../i18n";
import { baseName, EMAIL, GITHUB, INSTAGRAM, LINKEDIN, matches, ROOT, type VFile } from "./data";
import { terminalFor } from "./data-en";
import { fmtDate, type GitHubData } from "./live";
import { useLive, useLocale } from "./live-context";
import type { Api } from "./VSCode";

type Line = { t: string; c?: string } | { cmd: string } | { neofetch: true };
type Props = {
  tab: string;
  setTab: (t: string) => void;
  request: { cmd: string; n: number } | null;
  api: Api;
  onClose: () => void;
  onToggleMax: () => void;
};

const RED = "#f14c4c", GREEN = "#23d18b", YELLOW = "#e5e510", DIM = "#8b8b8b", BLUE = "#3b8eea";
const TABS: [id: string, pt: string, en: string][] = [
  ["PROBLEMS", "PROBLEMAS", "PROBLEMS"],
  ["OUTPUT", "SAÍDA", "OUTPUT"],
  ["DEBUG", "CONSOLE DE DEPURAÇÃO", "DEBUG CONSOLE"],
  ["TERMINAL", "TERMINAL", "TERMINAL"],
  ["PORTS", "PORTAS", "PORTS"],
];
const EMPTY: Record<string, [string, string]> = {
  PROBLEMS: ["Nenhum problema foi detectado no workspace.", "No problems have been detected in the workspace."],
  OUTPUT: ["", ""],
  DEBUG: ["Nenhuma sessão de depuração rodando. No terminal, npm run dev sobe a API.", "No debug session running. In the terminal, npm run dev starts the API."],
  PORTS: ["Nenhuma porta encaminhada.", "No forwarded ports."],
};
const HELP: [pt: string, en: string, ptDesc: string, enDesc: string][] = [
  ["sobre", "about", "quem sou eu", "who I am"],
  ["experiencia", "experience", "onde já trabalhei", "where I've worked"],
  ["projetos", "projects", "o que eu construí", "what I've built"],
  ["servicos", "services", "como posso ajudar sua empresa", "how I can help your company"],
  ["orcamento", "quote", "abre o formulário de orçamento", "opens the quote form"],
  ["habilidades", "skills", "tecnologias que uso", "the tech I use"],
  ["formacao", "education", "estudos e idiomas", "studies and languages"],
  ["certificados", "certificates", "meus 23 certificados", "my 23 certificates"],
  ["repos", "repos", "repositórios públicos, ao vivo do GitHub", "public repositories, live from GitHub"],
  ["cv", "cv", "abre meu currículo em PDF", "opens my resume in PDF"],
  ["contato", "contact", "onde me encontrar", "where to find me"],
  ["guia", "guide", "mostra o guia de navegação", "shows the navigation guide"],
  ["idioma", "lang", "troca para inglês", "switches to Portuguese"],
  ["neofetch", "neofetch", "resumo com foto", "summary with a photo"],
  ["linkedin", "linkedin", "abre meu LinkedIn", "opens my LinkedIn"],
  ["github", "github", "abre meu GitHub", "opens my GitHub"],
  ["instagram", "instagram", "abre meu Instagram", "opens my Instagram"],
  ["email", "email", "escreve um e-mail para mim", "writes me an email"],
  ["open <arquivo>", "open <file>", "abre um arquivo no editor", "opens a file in the editor"],
  ["cat <arquivo>", "cat <file>", "mostra o conteúdo de um arquivo", "prints a file"],
  ["ls", "ls", "lista os arquivos", "lists the files"],
  ["git log", "git log", "histórico do projeto", "project history"],
  ["npm run dev", "npm run dev", "roda o projeto", "runs the project"],
  ["clear", "clear", "limpa o terminal", "clears the terminal"],
  ["exit", "exit", "fecha o terminal", "closes the terminal"],
];
const ALIASES: Record<string, string> = {
  about: "sobre",
  experience: "experiencia",
  experiência: "experiencia",
  projects: "projetos",
  services: "servicos",
  serviços: "servicos",
  quote: "orcamento",
  orçamento: "orcamento",
  skills: "habilidades",
  stack: "habilidades",
  education: "formacao",
  formação: "formacao",
  certificates: "certificados",
  certificacoes: "certificados",
  contact: "contato",
  resume: "cv",
  curriculo: "cv",
  currículo: "cv",
  guide: "guia",
  tour: "guia",
  lang: "idioma",
  language: "idioma",
};
const LINKS: Record<string, string> = { linkedin: LINKEDIN, github: GITHUB, instagram: INSTAGRAM, email: `mailto:${EMAIL}` };
const NAMES = (locale: Locale) => [...HELP.map((h) => h[locale === "en" ? 1 : 0].split(" ")[0]), "help", "whoami", "date", "echo", "code", "cls"];

const text = (s: string, c?: string): Line[] => s.split("\n").map((t) => ({ t, c }));
const findFile = (files: VFile[], arg: string) => {
  const a = arg.replaceAll("\\", "/").replace(/^\.\//, "");
  return a ? files.find((f) => matches(f, a)) : undefined;
};
const label = (f: VFile) => f.alias ?? f.path;

const linkify = (t: string) =>
  t.split(/(https?:\/\/\S+)/).map((part, i) =>
    i % 2 ? (
      <a key={i} className="term-link" href={part} target="_blank" rel="noreferrer">
        {part}
      </a>
    ) : (
      part
    ),
  );

const Prompt = () => (
  <span className="prompt">
    <span className="p-user">yhago</span>
    <span className="p-dim">@</span>
    <span className="p-host">portfolio</span> <span className="p-path">~/{ROOT}</span> <span className="p-branch">main</span>{" "}
    <span className="p-arrow">❯</span>{" "}
  </span>
);

const COLORS = ["#000", "#cd3131", "#0dbc79", "#e5e510", "#2472c8", "#bc3fbc", "#11a8cd", "#e5e5e5"];

const Neofetch = ({ gh, locale }: { gh: GitHubData | null; locale: Locale }) => {
  const L = pick(locale);
  const fetch: [string, string][] = [
    [L("Nome", "Name"), "Yhago Felipe Rocha Teles"],
    [L("Cargo", "Role"), L("Desenvolvedor Full Stack", "Full Stack Developer")],
    [L("Local", "Location"), L("Hortolândia, São Paulo, Brasil", "Hortolândia, São Paulo, Brazil")],
    ["Stack", "TypeScript, NestJS, Next.js, Python, PHP"],
    [L("Estudo", "Studies"), L("Engenharia de Software", "Software Engineering")],
    [L("Contato", "Contact"), EMAIL],
  ];
  return (
    <div className="neofetch">
      <img src="/yhago.jpg" alt={L("Foto de Yhago Felipe", "Photo of Yhago Felipe")} />
      <div>
        <div className="nf-title">
          <span className="p-user">yhago</span>
          <span className="p-dim">@</span>
          <span className="p-host">portfolio</span>
        </div>
        {fetch.map(([k, v]) => (
          <div key={k}>
            <span className="nf-key">{k}</span> {v}
          </div>
        ))}
        {gh && (
          <div>
            <span className="nf-key">GitHub</span> {gh.publicRepos} {L("repositórios", "repositories")}
            {gh.contributions ? `, ${gh.contributions.total} ${L("contribuições no último ano", "contributions in the last year")}` : ""}
          </div>
        )}
        <div className="nf-colors">
          {COLORS.map((c) => (
            <i key={c} style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Terminal({ tab, setTab, request, api, onClose, onToggleMax }: Props) {
  const { files, gh, cvs } = useLive();
  const { locale, setLocale } = useLocale();
  const L = pick(locale);
  const [lines, setLines] = useState<Line[]>(() => [{ neofetch: true }]);
  const [input, setInput] = useState("");
  const [hist, setHist] = useState<string[]>([]);
  const [hi, setHi] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const handled = useRef(0);

  useEffect(() => {
    bodyRef.current?.scrollTo(0, 1e9);
  }, [lines, tab]);

  useEffect(() => {
    if (tab === "TERMINAL" && innerWidth > 700) inputRef.current?.focus();
  }, [tab]);

  function run(raw: string) {
    const [first = "", ...args] = raw.trim().split(/\s+/);
    const name = ALIASES[first.toLowerCase()] ?? first.toLowerCase();
    const arg = args.join(" ");
    const TERMINAL = terminalFor(locale);
    let out: Line[] = [];
    if (name === "repos" && gh) {
      out = [
        { t: L(`${gh.publicRepos} repositórios públicos em ${GITHUB}, do mais recente para o mais antigo.`, `${gh.publicRepos} public repositories at ${GITHUB}, from newest to oldest.`), c: YELLOW },
        ...gh.repos.map((r) => ({ t: `  ${r.name.padEnd(34)}${(r.language || "").padEnd(12)}${fmtDate(r.pushedAt, locale)}` })),
        { t: "" },
        { t: L("Para ver mais, digite open repositorios.md", "To see more, type open repositories.md"), c: DIM },
        { t: "" },
      ];
    } else if (name === "cv") {
      if (!cvs.length) out = text(L("O currículo em PDF chega em breve. Enquanto isso, digite open experiencia.md", "The PDF resume is coming soon. In the meantime, type open experience.md"), DIM);
      else {
        const cv = cvs.find((c) => c.lang === (arg ? (arg.toLowerCase().startsWith("en") ? "en" : "pt") : locale)) ?? cvs[0];
        window.open(cv.href, "_blank");
        out = [
          ...text(`${L("Abrindo", "Opening")} ${cv.name}...`, DIM),
          ...cvs.map((c) => ({ t: `  ${c.lang === "pt" ? L("Português", "Portuguese") : L("Inglês   ", "English   ")}  ${location.origin}${c.href}` })),
          ...text(L("Use cv en para abrir a versão em inglês.", "Use cv pt to open the Portuguese version."), DIM),
          { t: "" },
        ];
      }
    } else if (TERMINAL[name]) out = [...text(TERMINAL[name]), { t: "" }];
    else if (LINKS[name]) {
      window.open(LINKS[name], "_blank");
      out = text(`${L("Abrindo", "Opening")} ${LINKS[name].replace("mailto:", "")}...`, DIM);
    } else
      switch (name) {
        case "":
          break;
        case "help":
          out = [
            { t: L("Comandos disponíveis", "Available commands"), c: YELLOW },
            ...HELP.map((h) => ({ t: `  ${(locale === "en" ? h[1] : h[0]).padEnd(17)}${locale === "en" ? h[3] : h[2]}` })),
            { t: "" },
          ];
          break;
        case "guia":
          api.tour();
          out = text(L("Abrindo o guia de navegação...", "Opening the navigation guide..."), DIM);
          break;
        case "orcamento":
          api.open("servicos.md#orcamento");
          out = text(L("Abrindo o formulário de orçamento...", "Opening the quote form..."), DIM);
          break;
        case "idioma": {
          const to: Locale = arg ? (arg.toLowerCase().startsWith("en") ? "en" : "pt") : locale === "en" ? "pt" : "en";
          setLocale(to);
          out = text(to === "en" ? "Switching to English..." : "Mudando para português...", DIM);
          break;
        }
        case "neofetch":
          out = [{ neofetch: true }, { t: "" }];
          break;
        case "ls":
        case "dir":
          out = [...text(files.map(label).join("   "), BLUE), { t: "" }];
          break;
        case "cat":
        case "type":
        case "open":
        case "code": {
          const f = findFile(files, arg);
          if (!f) out = text(L(`Não encontrei o arquivo ${arg || "informado"}. Digite ls para ver a lista.`, `Couldn't find the file ${arg || "you asked for"}. Type ls to see the list.`), RED);
          else if (name === "open" || name === "code") {
            api.open(f.path);
            out = text(`${L("Abrindo", "Opening")} ${label(f)} ${L("no editor...", "in the editor...")}`, DIM);
          } else out = text(f.content);
          break;
        }
        case "whoami":
          out = text("yhago");
          break;
        case "date":
          out = text(new Date().toLocaleString(dateLocale(locale)));
          break;
        case "echo":
          out = text(arg);
          break;
        case "git":
          out =
            arg === "status"
              ? [
                  ...text(L("No ramo main\nAlterações não preparadas para commit", "On branch main\nChanges not staged for commit")),
                  ...text(files.filter((f) => f.git === "M").map((f) => `        ${L("modificado", "modified")}   ${label(f)}`).join("\n"), RED),
                  ...text(L("\nArquivos não monitorados", "\nUntracked files")),
                  ...text(files.filter((f) => f.git === "U").map((f) => `        ${label(f)}`).join("\n"), RED),
                  { t: "" },
                ]
              : [
                  { t: "commit b5d414a (HEAD, main, origin/main)", c: YELLOW },
                  ...text(
                    L(
                      "Autor   Yhago Felipe <yhago.felipe.teles@gmail.com>\nData    hoje\n\n    Um VS Code dentro de um Windows XP dentro do navegador\n",
                      "Author  Yhago Felipe <yhago.felipe.teles@gmail.com>\nDate    today\n\n    A VS Code inside a Windows XP inside the browser\n",
                    ),
                  ),
                ];
          break;
        case "npm":
          out =
            arg === "run build"
              ? [...text(`\n> portfolio-yhago@1.0.0 build\n> tsc\n`), { t: L(" ✓ Compilado sem erros", " ✓ Compiled with no errors"), c: GREEN }, { t: "" }]
              : [
                  ...text(`\n> portfolio-yhago@1.0.0 dev\n> tsx watch src/main.ts\n`),
                  { t: L("Portfólio rodando na porta 3000", "Portfolio running on port 3000"), c: GREEN },
                  { t: "     GET /api/sobre          200", c: DIM },
                  { t: "     GET /api/repositorios   200", c: DIM },
                  { t: "" },
                ];
          break;
        case "sudo":
          out = text(L("Boa tentativa.", "Nice try."));
          break;
        case "clear":
        case "cls":
          setLines([]);
          return;
        case "exit":
          onClose();
          return;
        default:
          out = [...text(L(`Comando não encontrado, ${first}. Digite help para ver os comandos.`, `Command not found, ${first}. Type help to see the commands.`), RED), { t: "" }];
      }
    setLines((l) => [...l, { cmd: raw }, ...out]);
  }

  useEffect(() => {
    if (!request || handled.current === request.n) return;
    handled.current = request.n;
    run(request.cmd);
  });

  return (
    <div className="panel">
      <div className="panel-head">
        {TABS.map(([id, pt, en]) => (
          <button key={id} className={`ptab ${id === tab ? "on" : ""}`} onClick={() => setTab(id)}>
            {L(pt, en)}
          </button>
        ))}
        <div className="panel-actions">
          {tab === "TERMINAL" && (
            <>
              <span className="term-name">
                <i className="codicon codicon-terminal-bash" /> bash
              </span>
              <button className="tb codicon codicon-add" title={L("Novo Terminal", "New Terminal")} onClick={() => setLines([{ neofetch: true }, { t: "" }])} />
              <button className="tb codicon codicon-trash" title={L("Encerrar Terminal", "Kill Terminal")} onClick={onClose} />
            </>
          )}
          <button className="tb codicon codicon-chevron-up" title={L("Maximizar Tamanho do Painel", "Maximize Panel Size")} onClick={onToggleMax} />
          <button className="tb codicon codicon-close" title={L("Ocultar Painel", "Hide Panel")} onClick={onClose} />
        </div>
      </div>
      {tab === "TERMINAL" ? (
        <div className="term" ref={bodyRef} onMouseUp={() => !getSelection()?.toString() && inputRef.current?.focus()}>
          {lines.map((l, i) =>
            "neofetch" in l ? (
              <Neofetch key={i} gh={gh} locale={locale} />
            ) : "cmd" in l ? (
              <div key={i}>
                <Prompt />
                {l.cmd}
              </div>
            ) : (
              <div key={i} style={{ color: l.c }}>
                {l.t ? linkify(l.t) : " "}
              </div>
            ),
          )}
          <div className="term-in">
            <Prompt />
            <input
              ref={inputRef}
              value={input}
              spellCheck={false}
              autoComplete="off"
              aria-label="Terminal"
              placeholder={L("Digite um comando (help para ver todos)", "Type a command (help to see them all)")}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  run(input);
                  if (input.trim()) setHist((h) => [input, ...h]);
                  setInput("");
                  setHi(-1);
                } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                  e.preventDefault();
                  const n = Math.max(-1, Math.min(hist.length - 1, hi + (e.key === "ArrowUp" ? 1 : -1)));
                  setHi(n);
                  setInput(n < 0 ? "" : hist[n]);
                } else if (e.key === "Tab") {
                  e.preventDefault();
                  const [cmd, ...rest] = input.split(" ");
                  const pool = rest.length ? files.map((f) => baseName(label(f))) : NAMES(locale);
                  const word = rest.length ? rest.join(" ") : cmd;
                  const hit = pool.find((x) => x.toLowerCase().startsWith(word.toLowerCase()));
                  if (hit) setInput(rest.length ? `${cmd} ${hit}` : hit);
                } else if (e.key === "l" && e.ctrlKey) {
                  e.preventDefault();
                  setLines([]);
                }
              }}
            />
          </div>
        </div>
      ) : (
        <div className="panel-msg">{L(...EMPTY[tab])}</div>
      )}
    </div>
  );
}
