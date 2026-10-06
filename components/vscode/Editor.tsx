import { type MouseEvent as ReactMouseEvent, useEffect, useMemo, useRef, useState } from "react";
import { FileIcon, VSCodeLogo } from "../icons";
import { baseName, GITHUB, langOf, ROOT, shown, type Ext, type VFile } from "./data";
import { extensionsFor } from "./data-en";
import { highlight } from "./highlight";
import Markdown, { ExtIcon } from "./Markdown";
import { useL, useLive, useLocale } from "./live-context";
import type { Api, Cursor } from "./VSCode";

const LH = 19;
const MM = 2 / LH;

type Props = {
  tabs: string[];
  active: string | null;
  preview: string | null;
  booting: boolean;
  cursor: Cursor;
  setCursor: (c: Cursor) => void;
  reveal: { path: string; line: number; n: number };
  raw: Set<string>;
  toggleRaw: (id: string) => void;
  api: Api;
};

type Pick = (pt: string, en: string) => string;

export const Keys = ({ k }: { k: string }) => (
  <span className="keys">
    {k.split("+").map((part, i) => (
      <kbd key={i}>{part}</kbd>
    ))}
  </span>
);

const winPath = (p: string) => `~\\${ROOT}\\${p.replaceAll("/", "\\")}`;

const tabInfo = (id: string, files: VFile[], exts: Ext[], L: Pick) => {
  if (id === "welcome") return { label: L("Bem-vindo", "Welcome"), icon: null };
  const ext = exts.find((e) => `ext:${e.id}` === id);
  if (ext) return { label: `${L("Extensão", "Extension")}: ${ext.name}`, icon: <i className="codicon codicon-extensions" style={{ color: "#75beff" }} /> };
  return { label: baseName(shown(files, id)), icon: <FileIcon name={id} />, git: files.find((f) => f.path === id)?.git };
};

export default function Editor({ tabs, active, preview, booting, cursor, setCursor, reveal, raw, toggleRaw, api }: Props) {
  const { files } = useLive();
  const L = useL();
  const exts = extensionsFor(useLocale().locale);
  if (booting) return null;
  if (!active) return <Watermark />;
  const file = files.find((f) => f.path === active);
  const ext = exts.find((e) => `ext:${e.id}` === active);
  const isMd = !!file && langOf(file.path) === "md";
  const rendered = isMd && !raw.has(file.path);

  return (
    <div className="editor">
      <div className="tabs">
        <div className="tabs-scroll">
          {tabs.map((t) => {
            const info = tabInfo(t, files, exts, L);
            return (
              <div
                key={t}
                title={t === "welcome" || t.startsWith("ext:") ? info.label : winPath(shown(files, t))}
                className={`tab ${t === active ? "active" : ""} ${t === preview ? "preview" : ""}`}
                onMouseDown={(e) => (e.button === 1 ? (e.preventDefault(), api.close(t)) : api.activate(t))}
                onDoubleClick={() => api.open(t, true)}
              >
                {info.icon}
                <span className={`tab-label ${info.git ? `git-${info.git}` : ""}`}>{info.label}</span>
                <button className="tab-close codicon codicon-close" title={L("Fechar (Ctrl+F4)", "Close (Ctrl+F4)")} onMouseDown={(e) => e.stopPropagation()} onClick={() => api.close(t)} />
              </div>
            );
          })}
        </div>
        <div className="tabs-actions">
          {isMd && (
            <button
              className={`tb codicon codicon-${rendered ? "go-to-file" : "open-preview"}`}
              title={rendered ? L("Abrir Código-Fonte", "Open Source") : L("Abrir Visualização (Ctrl+Shift+V)", "Open Preview (Ctrl+Shift+V)")}
              onClick={() => toggleRaw(file.path)}
            />
          )}
          <button className="tb codicon codicon-ellipsis" title={L("Mais Ações...", "More Actions...")} onClick={() => api.quick(`>${L("Exibir", "View")}`)} />
        </div>
      </div>
      {file && !rendered && (
        <div className="crumbs">
          {shown(files, file.path).split("/").map((seg, i, all) => (
            <span key={i} className="crumb">
              {i === all.length - 1 && <FileIcon name={seg} />}
              {seg}
              {i < all.length - 1 && <i className="codicon codicon-chevron-right" />}
            </span>
          ))}
        </div>
      )}
      <div className="ed-content">
        {active === "welcome" && <Welcome api={api} />}
        {rendered && <Markdown key={file.path} src={file.content} open={(p) => api.open(p)} />}
        {file && !rendered && <Code key={file.path} file={file} cursor={cursor} setCursor={setCursor} reveal={reveal} />}
        {ext && <ExtPage ext={ext} api={api} />}
      </div>
    </div>
  );
}

function indent(s: string) {
  return s.length - s.trimStart().length;
}

function foldEnd(lines: string[], i: number) {
  let end = i;
  for (let j = i + 1; j < lines.length; j++) {
    if (!lines[j].trim()) continue;
    if (indent(lines[j]) <= indent(lines[i])) break;
    end = j;
  }
  return end;
}

function Code({ file, cursor, setCursor, reveal }: { file: VFile; cursor: Cursor; setCursor: (c: Cursor) => void; reveal: Props["reveal"] }) {
  const L = useL();
  const raw = useMemo(() => file.content.replace(/\n$/, "").split("\n"), [file]);
  const toks = useMemo(() => highlight(raw.join("\n"), langOf(file.path)), [raw, file.path]);
  const [folded, setFolded] = useState<Set<number>>(new Set());
  const [scroll, setScroll] = useState({ top: 0, h: 0 });
  const scroller = useRef<HTMLDivElement>(null);
  const meas = useRef<HTMLSpanElement>(null);

  const levels = useMemo(() => {
    const lv = raw.map((l) => (l.trim() ? Math.floor(indent(l) / 2) : -1));
    return lv.map((v, i) => {
      if (v >= 0) return v;
      const prev = lv.slice(0, i).findLast((x) => x >= 0) ?? 0;
      const next = lv.slice(i + 1).find((x) => x >= 0) ?? 0;
      return Math.min(next, prev + 1);
    });
  }, [raw]);

  const visible: number[] = [];
  for (let i = 0; i < raw.length; i++) {
    visible.push(i);
    if (folded.has(i)) i = foldEnd(raw, i);
  }

  useEffect(() => {
    const el = scroller.current!;
    if (reveal.path === file.path && reveal.line > 1) el.scrollTop = Math.max(0, (reveal.line - 1) * LH - el.clientHeight / 3);
    const sync = () => setScroll({ top: el.scrollTop, h: el.clientHeight });
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, [reveal, file.path]);

  const place = (e: ReactMouseEvent, i: number) => {
    const txt = (e.currentTarget as HTMLElement).querySelector(".txt")!;
    const ch = meas.current!.getBoundingClientRect().width / 10;
    const col = Math.round((e.clientX - txt.getBoundingClientRect().left) / ch) + 1;
    setCursor({ ln: i + 1, col: Math.min(raw[i].length + 1, Math.max(1, col)) });
  };
  const toggleFold = (i: number) => {
    const next = new Set(folded);
    if (next.has(i)) next.delete(i);
    else next.add(i);
    setFolded(next);
  };

  return (
    <div className="code-wrap">
      <div className="code" ref={scroller} onScroll={(e) => setScroll({ top: e.currentTarget.scrollTop, h: e.currentTarget.clientHeight })}>
        <span ref={meas} className="meas">
          0000000000
        </span>
        <div className="code-lines">
          {visible.map((i) => {
            const cur = cursor.ln === i + 1;
            const canFold = foldEnd(raw, i) > i;
            return (
              <div key={i} className={`ln ${cur ? "cur" : ""}`} onMouseDown={(e) => place(e, i)}>
                <span className="gut">
                  <span className="num">{i + 1}</span>
                  {canFold && (
                    <i
                      className={`fold codicon codicon-chevron-${folded.has(i) ? "right" : "down"} ${folded.has(i) ? "pinned" : ""}`}
                      onMouseDown={(e) => (e.stopPropagation(), toggleFold(i))}
                    />
                  )}
                </span>
                <span className="txt">
                  {Array.from({ length: levels[i] }, (_, k) => (
                    <i key={k} className="iguide" style={{ left: `${k * 2}ch` }} />
                  ))}
                  {toks[i].map((t, k) => (
                    <span
                      key={k}
                      style={{ color: t.c, fontWeight: t.b ? "bold" : undefined }}
                      className={t.url ? "link" : undefined}
                      title={t.url ? L("Seguir o link (ctrl + clique)", "Follow link (ctrl + click)") : undefined}
                      onClick={t.url ? (e) => (e.ctrlKey || e.metaKey) && window.open(t.url, "_blank") : undefined}
                    >
                      {t.t}
                    </span>
                  ))}
                  {folded.has(i) && <span className="fold-dots">⋯</span>}
                  {cur && <i className="caret" style={{ left: `${cursor.col - 1}ch` }} />}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="minimap"
        onMouseDown={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          scroller.current!.scrollTop = (e.clientY - r.top) / MM - scroll.h / 2;
        }}
      >
        <div className="mm-lines">
          {visible.map((i) => (
            <div key={i}>
              {toks[i].map((t, k) => (
                <span key={k} style={{ background: t.t.trim() ? t.c ?? "#d4d4d4" : undefined }}>
                  {t.t}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="mm-slider" style={{ top: scroll.top * MM, height: scroll.h * MM }} />
      </div>
    </div>
  );
}

function Welcome({ api }: { api: Api }) {
  const { files } = useLive();
  const L = useL();
  const link = (icon: string, label: string, run: () => void) => (
    <button className="wl-link" onClick={run}>
      <i className={`codicon codicon-${icon}`} />
      {label}
    </button>
  );
  return (
    <div className="welcome">
      <div className="wl-grid">
        <div>
          <h1>Visual Studio Code</h1>
          <p className="wl-sub">{L("Edição evoluída", "Editing evolved")}</p>
          <h2>{L("Iniciar", "Start")}</h2>
          {link("new-file", L("Novo Arquivo...", "New File..."), api.readOnly)}
          {link("go-to-file", L("Abrir o Arquivo...", "Open File..."), () => api.quick(""))}
          {link("folder-opened", L("Abrir a Pasta...", "Open Folder..."), () => api.show("explorer"))}
          {link("source-control", L("Abrir o repositório...", "Clone Git Repository..."), () => window.open(`${GITHUB}/portfolioyyhago-vscode`, "_blank"))}
          <h2>{L("Recente", "Recent")}</h2>
          {files.filter((f) => f.path.startsWith("docs/")).slice(0, 5).map((f) => (
            <div key={f.path} className="wl-recent">
              <button onClick={() => api.open(f.path)}>{baseName(f.alias ?? f.path)}</button>
              <span>~\{ROOT}\{f.path.includes("/") ? f.path.slice(0, f.path.lastIndexOf("/")) : ""}</span>
            </div>
          ))}
        </div>
        <div>
          <h2>{L("Passo a passo", "Walkthroughs")}</h2>
          <button className="wl-card featured" onClick={() => api.open("sobre-mim.md")}>
            <i className="codicon codicon-star-full wl-badge" />
            <span>
              <b>{L("Conheça o Yhago Felipe", "Meet Yhago Felipe")}</b>
              <span className="wl-desc">{L("Descubra quem eu sou, o que eu construo e como falar comigo", "Find out who I am, what I build and how to reach me")}</span>
            </span>
          </button>
          <button className="wl-card" onClick={() => api.show("extensions")}>
            <i className="codicon codicon-extensions" />
            <b>{L("Ver minha stack", "See my stack")}</b>
          </button>
          <button className="wl-card" onClick={() => api.terminal()}>
            <i className="codicon codicon-lightbulb" />
            <b>{L("Abrir o terminal interativo", "Open the interactive terminal")}</b>
          </button>
        </div>
      </div>
      <label className="wl-foot">
        <input type="checkbox" defaultChecked /> {L("Mostrar a página inicial na inicialização", "Show welcome page on startup")}
      </label>
    </div>
  );
}

function ExtPage({ ext, api }: { ext: Ext; api: Api }) {
  const L = useL();
  return (
    <div className="extpage">
      <div className="ep-head">
        <ExtIcon ext={ext} big />
        <div>
          <h1>{ext.name}</h1>
          <div className="ep-pub">
            <i className="codicon codicon-verified-filled" /> {ext.publisher}
            <span className="ep-sep">|</span>
            <span className="ep-stars">★★★★★</span>
            <span className="ep-sep">|</span>
            {ext.cat}
          </div>
          <p>{ext.desc}</p>
          <div className="ep-btns">
            <button className="btn" onClick={() => api.notify(L(`Desabilitar ${ext.name}? Uso demais para isso.`, `Disable ${ext.name}? I use it way too much for that.`))}>
              {L("Desabilitar", "Disable")}
            </button>
            <button className="btn" onClick={() => api.notify(L(`Desinstalar ${ext.name}? Uso demais para isso.`, `Uninstall ${ext.name}? I use it way too much for that.`))}>
              {L("Desinstalar", "Uninstall")}
            </button>
            <label>
              <input type="checkbox" defaultChecked /> {L("Atualização Automática", "Auto Update")}
            </label>
          </div>
        </div>
      </div>
      <div className="ep-tabs">
        <span className="on">{L("DETALHES", "DETAILS")}</span>
        <span>{L("RECURSOS", "FEATURES")}</span>
        <span>{L("LOG DE MUDANÇAS", "CHANGELOG")}</span>
      </div>
      <div className="ep-body">
        <h2>{L(`${ext.name} no meu dia a dia`, `${ext.name} in my day to day`)}</h2>
        <p>{ext.about}</p>
      </div>
    </div>
  );
}

function Watermark() {
  const L = useL();
  return (
    <div className="watermark">
      <div className="wm-logo">
        <VSCodeLogo size={260} />
      </div>
      <dl>
        <dt>{L("Mostrar Todos os Comandos", "Show All Commands")}</dt>
        <dd><Keys k="Ctrl+Shift+P" /></dd>
        <dt>{L("Ir para o Arquivo", "Go to File")}</dt>
        <dd><Keys k="Ctrl+P" /></dd>
        <dt>{L("Localizar nos Arquivos", "Find in Files")}</dt>
        <dd><Keys k="Ctrl+Shift+F" /></dd>
        <dt>{L("Alternar Terminal", "Toggle Terminal")}</dt>
        <dd><Keys k="Ctrl+J" /></dd>
      </dl>
    </div>
  );
}
