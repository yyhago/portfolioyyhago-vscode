import { useEffect, useRef, useState } from "react";
import { EMAIL, GITHUB, INSTAGRAM, LINKEDIN, ROOT, TERMINAL, type VFile } from "./data";
import { fmtDate, type GitHubData } from "./live";
import { useLive } from "./live-context";
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
const TABS = ["PROBLEMAS", "SAÍDA", "CONSOLE DE DEPURAÇÃO", "TERMINAL", "PORTAS"];
const EMPTY: Record<string, string> = {
  PROBLEMAS: "Nenhum problema foi detectado no workspace.",
  SAÍDA: "",
  "CONSOLE DE DEPURAÇÃO": "Nenhuma sessão de depuração rodando. No terminal, npm run dev sobe a API.",
  PORTAS: "Nenhuma porta encaminhada.",
};
const HELP: [string, string][] = [
  ["sobre", "quem sou eu"],
  ["experiencia", "onde já trabalhei"],
  ["projetos", "o que eu construí"],
  ["habilidades", "tecnologias que uso"],
  ["formacao", "estudos e idiomas"],
  ["certificados", "meus 23 certificados"],
  ["repos", "repositórios públicos, ao vivo do GitHub"],
  ["cv", "abre meu currículo em PDF"],
  ["contato", "onde me encontrar"],
  ["neofetch", "resumo com foto"],
  ["linkedin", "abre meu LinkedIn"],
  ["github", "abre meu GitHub"],
  ["instagram", "abre meu Instagram"],
  ["email", "escreve um e-mail para mim"],
  ["open <arquivo>", "abre um arquivo no editor"],
  ["cat <arquivo>", "mostra o conteúdo de um arquivo"],
  ["ls", "lista os arquivos"],
  ["git log", "histórico do projeto"],
  ["npm run dev", "roda o projeto"],
  ["clear", "limpa o terminal"],
  ["exit", "fecha o terminal"],
];
const ALIASES: Record<string, string> = { stack: "habilidades", certificacoes: "certificados", formação: "formacao", experiência: "experiencia" };
const LINKS: Record<string, string> = { linkedin: LINKEDIN, github: GITHUB, instagram: INSTAGRAM, email: `mailto:${EMAIL}` };
const NAMES = [...HELP.map(([c]) => c.split(" ")[0]), "help", "whoami", "date", "echo", "code", "cls"];

const text = (s: string, c?: string): Line[] => s.split("\n").map((t) => ({ t, c }));
const findFile = (files: VFile[], arg: string) => {
  const a = arg.replaceAll("\\", "/").replace(/^\.\//, "").toLowerCase();
  return a ? files.find((f) => f.path.toLowerCase() === a || f.path.split("/").pop()!.toLowerCase() === a) : undefined;
};

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

const FETCH: [string, string][] = [
  ["Nome", "Yhago Felipe Rocha Teles"],
  ["Cargo", "Desenvolvedor Full Stack"],
  ["Local", "Hortolândia, São Paulo, Brasil"],
  ["Stack", "TypeScript, NestJS, Next.js, Python, PHP"],
  ["Estudo", "Engenharia de Software"],
  ["Status", "aberto a novas oportunidades"],
  ["Contato", EMAIL],
];
const COLORS = ["#000", "#cd3131", "#0dbc79", "#e5e510", "#2472c8", "#bc3fbc", "#11a8cd", "#e5e5e5"];

const Neofetch = ({ gh }: { gh: GitHubData | null }) => (
  <div className="neofetch">
    <img src="/yhago.jpg" alt="Foto de Yhago Felipe" />
    <div>
      <div className="nf-title">
        <span className="p-user">yhago</span>
        <span className="p-dim">@</span>
        <span className="p-host">portfolio</span>
      </div>
      {FETCH.map(([k, v]) => (
        <div key={k}>
          <span className="nf-key">{k}:</span> {v}
        </div>
      ))}
      {gh && (
        <div>
          <span className="nf-key">GitHub:</span> {gh.publicRepos} repositórios{gh.contributions ? `, ${gh.contributions.total} contribuições no último ano` : ""}
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

export default function Terminal({ tab, setTab, request, api, onClose, onToggleMax }: Props) {
  const { files, gh, cvs } = useLive();
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
    let out: Line[] = [];
    if (name === "repos" && gh) {
      out = [
        { t: `${gh.publicRepos} repositórios públicos em ${GITHUB}, do mais recente para o mais antigo:`, c: YELLOW },
        ...gh.repos.map((r) => ({ t: `  ${r.name.padEnd(34)}${(r.language || "").padEnd(12)}${fmtDate(r.pushedAt)}` })),
        { t: "" },
        { t: "Mais detalhes: open repositorios.md", c: DIM },
        { t: "" },
      ];
    } else if (name === "cv" || name === "curriculo") {
      if (!cvs.length) out = text("O currículo em PDF chega em breve. Veja: open experiencia.md", DIM);
      else {
        const cv = cvs.find((c) => c.lang === (arg.toLowerCase().startsWith("en") ? "en" : "pt")) ?? cvs[0];
        window.open(cv.href, "_blank");
        out = [
          ...text(`Abrindo ${cv.name}...`, DIM),
          ...cvs.map((c) => ({ t: `  ${c.lang === "pt" ? "Português" : "English  "}  ${location.origin}${c.href}` })),
          ...text("Use cv en para abrir a versão em inglês.", DIM),
          { t: "" },
        ];
      }
    } else if (TERMINAL[name]) out = [...text(TERMINAL[name]), { t: "" }];
    else if (LINKS[name]) {
      window.open(LINKS[name], "_blank");
      out = text(`Abrindo ${LINKS[name].replace("mailto:", "")}...`, DIM);
    } else
      switch (name) {
        case "":
          break;
        case "help":
          out = [{ t: "Comandos disponíveis:", c: YELLOW }, ...HELP.map(([c, d]) => ({ t: `  ${c.padEnd(17)}${d}` })), { t: "" }];
          break;
        case "neofetch":
          out = [{ neofetch: true }, { t: "" }];
          break;
        case "ls":
        case "dir":
          out = [...text(files.map((f) => f.path).join("   "), BLUE), { t: "" }];
          break;
        case "cat":
        case "type":
        case "open":
        case "code": {
          const f = findFile(files, arg);
          if (!f) out = text(`${name}: ${arg || "?"}: arquivo não encontrado. Tente "ls".`, RED);
          else if (name === "open" || name === "code") {
            api.open(f.path);
            out = text(`Abrindo ${f.path} no editor...`, DIM);
          } else out = text(f.content);
          break;
        }
        case "whoami":
          out = text("yhago");
          break;
        case "date":
          out = text(new Date().toLocaleString("pt-BR"));
          break;
        case "echo":
          out = text(arg);
          break;
        case "git":
          out =
            arg === "status"
              ? [
                  ...text("No ramo main\nAlterações não preparadas para commit:"),
                  ...text(files.filter((f) => f.git === "M").map((f) => `        modificado:   ${f.path}`).join("\n"), RED),
                  ...text("\nArquivos não monitorados:"),
                  ...text(files.filter((f) => f.git === "U").map((f) => `        ${f.path}`).join("\n"), RED),
                  { t: "" },
                ]
              : [
                  { t: "commit b5d414a (HEAD, main, origin/main)", c: YELLOW },
                  ...text("Autor: Yhago Felipe <yhago.felipe.teles@gmail.com>\nData:  hoje\n\n    feat: um VS Code dentro de um Windows XP dentro do navegador\n"),
                ];
          break;
        case "npm":
          out =
            arg === "run build"
              ? [...text(`\n> portfolio-yhago@1.0.0 build\n> tsc\n`), { t: " ✓ Compilado sem erros", c: GREEN }, { t: "" }]
              : [
                  ...text(`\n> portfolio-yhago@1.0.0 dev\n> tsx watch src/main.ts\n`),
                  { t: "Portfólio rodando na porta 3000", c: GREEN },
                  { t: "     GET /api/sobre          200", c: DIM },
                  { t: "     GET /api/repositorios   200", c: DIM },
                  { t: "" },
                ];
          break;
        case "sudo":
          out = text("Boa tentativa.");
          break;
        case "clear":
        case "cls":
          setLines([]);
          return;
        case "exit":
          onClose();
          return;
        default:
          out = [...text(`bash: ${first}: comando não encontrado. Digite "help" para ver os comandos.`, RED), { t: "" }];
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
        {TABS.map((t) => (
          <button key={t} className={`ptab ${t === tab ? "on" : ""}`} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
        <div className="panel-actions">
          {tab === "TERMINAL" && (
            <>
              <span className="term-name">
                <i className="codicon codicon-terminal-bash" /> bash
              </span>
              <button className="tb codicon codicon-add" title="Novo Terminal" onClick={() => setLines([{ neofetch: true }, { t: "" }])} />
              <button className="tb codicon codicon-trash" title="Encerrar Terminal" onClick={onClose} />
            </>
          )}
          <button className="tb codicon codicon-chevron-up" title="Maximizar Tamanho do Painel" onClick={onToggleMax} />
          <button className="tb codicon codicon-close" title="Ocultar Painel" onClick={onClose} />
        </div>
      </div>
      {tab === "TERMINAL" ? (
        <div className="term" ref={bodyRef} onMouseUp={() => !getSelection()?.toString() && inputRef.current?.focus()}>
          {lines.map((l, i) =>
            "neofetch" in l ? (
              <Neofetch key={i} gh={gh} />
            ) : "cmd" in l ? (
              <div key={i}>
                <Prompt />
                {l.cmd}
              </div>
            ) : (
              <div key={i} style={{ color: l.c }}>
                {l.t ? linkify(l.t) : " "}
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
              placeholder="Digite um comando (help para ver todos)"
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
                  const pool = rest.length ? files.map((f) => f.path) : NAMES;
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
        <div className="panel-msg">{EMPTY[tab]}</div>
      )}
    </div>
  );
}
