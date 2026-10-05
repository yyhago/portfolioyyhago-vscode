"use client";

import { type PointerEvent, type ReactNode, useEffect, useRef, useState } from "react";
import { FileIcon, VSCodeLogo } from "../icons";
import { onDrag } from "../drag";
import { EMAIL, GITHUB, INSTAGRAM, LANG_NAME, langOf, LINKEDIN, ROOT } from "./data";
import { Icon } from "./Markdown";
import type { Live } from "./live";
import { LiveCtx, useLive } from "./live-context";
import Editor, { Keys } from "./Editor";
import Sidebar from "./Sidebar";
import Terminal from "./Terminal";

export type View = "explorer" | "search" | "scm" | "debug" | "extensions";
export type Cursor = { ln: number; col: number };
export type Api = {
  open: (id: string, pin?: boolean, line?: number) => void;
  activate: (id: string) => void;
  close: (id: string) => void;
  show: (v: View) => void;
  terminal: (cmd?: string) => void;
  notify: (msg: string) => void;
  quick: (prefix: string) => void;
};

type Props = {
  live: Live;
  focused: boolean;
  maximized: boolean;
  request: { path: string; n: number } | null;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  onReload: () => void;
  onDragStart: (e: PointerEvent) => void;
};

type Item = [label: string, key?: string, run?: () => void] | "-";
type Command = { label: string; desc?: string; key?: string; icon?: ReactNode; run: () => void };

let seq = 0;
const READ_ONLY = "Aqui é só leitura, mas pode fuçar à vontade.";
const ACTIVITY: [View, string, string][] = [
  ["explorer", "files", "Explorador (Ctrl+Shift+E)"],
  ["search", "search", "Pesquisar (Ctrl+Shift+F)"],
  ["scm", "source-control", "Controle do Código-Fonte (Ctrl+Shift+G)"],
  ["debug", "debug-alt", "Executar e Depurar (Ctrl+Shift+D)"],
  ["extensions", "extensions", "Extensões (Ctrl+Shift+X)"],
];
const LINKS: [string, string, string][] = [
  ["github", "GitHub", GITHUB],
  ["linkedin", "LinkedIn", LINKEDIN],
  ["instagram", "Instagram", INSTAGRAM],
  ["mail", EMAIL, `mailto:${EMAIL}`],
];
const START_TAB = "docs/sobre-mim.md";

export default function VSCode(p: Props) {
  const files = p.live.files;
  const [booting, setBooting] = useState(true);
  const [view, setView] = useState<View>("explorer");
  const [sideOpen, setSideOpen] = useState(() => innerWidth > 700);
  const [sideW, setSideW] = useState(250);
  const [tabs, setTabs] = useState<string[]>([]);
  const [preview, setPreview] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const [cursors, setCursors] = useState<Record<string, Cursor>>({});
  const [reveal, setReveal] = useState({ path: "", line: 1, n: 0 });
  const [panel, setPanel] = useState(() => innerWidth > 700 && innerHeight > 600);
  const [raw, setRaw] = useState<Set<string>>(new Set());
  const [panelTab, setPanelTab] = useState("TERMINAL");
  const [panelH, setPanelH] = useState(() => Math.round(Math.min(280, innerHeight * 0.3)));
  const [termCmd, setTermCmd] = useState<{ cmd: string; n: number } | null>(null);
  const [quick, setQuick] = useState<string | null>(null);
  const [menu, setMenu] = useState<string | null>(null);
  const [toasts, setToasts] = useState<{ id: number; msg: string }[]>([]);
  const [hist, setHist] = useState<{ list: string[]; i: number }>({ list: [], i: -1 });
  const handled = useRef(0);

  useEffect(() => {
    const t = setTimeout(() => {
      setBooting(false);
      setTabs([START_TAB]);
      setActive(START_TAB);
      setHist({ list: [START_TAB], i: 0 });
    }, 900);
    return () => clearTimeout(t);
  }, []);

  const show = (v: View) => {
    setView(v);
    setSideOpen(true);
  };
  const terminal = (cmd?: string) => {
    setPanel(true);
    setPanelTab("TERMINAL");
    if (cmd) setTermCmd({ cmd, n: ++seq });
  };
  const notify = (msg: string) => {
    const id = ++seq;
    setToasts((t) => [...t.slice(-2), { id, msg }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 6000);
  };
  const resolve = (id: string) =>
    id === "welcome" || id.startsWith("ext:") || files.some((f) => f.path === id) ? id : (files.find((f) => f.path.endsWith(`/${id}`))?.path ?? id);
  const go = (id: string) => {
    setActive(id);
    setHist((h) => (h.list[h.i] === id ? h : { list: [...h.list.slice(0, h.i + 1), id], i: h.i + 1 }));
  };
  const step = (d: number) => {
    const id = hist.list[hist.i + d];
    if (!id) return;
    setHist({ ...hist, i: hist.i + d });
    setActive(id);
    if (!tabs.includes(id)) setTabs([...tabs, id]);
  };
  const open = (raw0: string, pin = true, line?: number) => {
    const id = resolve(raw0);
    go(id);
    if (innerWidth <= 700) setSideOpen(false);
    if (line && id.endsWith(".md")) setRaw((r) => new Set(r).add(id));
    if (line) {
      setCursors((c) => ({ ...c, [id]: { ln: line, col: 1 } }));
      setReveal({ path: id, line, n: ++seq });
    }
    if (tabs.includes(id)) {
      if (pin && preview === id) setPreview(null);
      return;
    }
    setTabs(!pin && preview ? tabs.map((t) => (t === preview ? id : t)) : [...tabs, id]);
    setPreview(pin ? preview : id);
  };
  const close = (id: string) => {
    const i = tabs.indexOf(id);
    const next = tabs.filter((t) => t !== id);
    setTabs(next);
    if (preview === id) setPreview(null);
    if (active === id) setActive(next[i] ?? next[i - 1] ?? null);
  };
  const toggleRaw = (id: string) =>
    setRaw((r) => {
      const next = new Set(r);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  const api: Api = { open, activate: go, close, show, terminal, notify, quick: setQuick };

  useEffect(() => {
    if (booting || !p.request || handled.current === p.request.n) return;
    handled.current = p.request.n;
    open(p.request.path);
  });

  const MENUS: [string, Item[]][] = [
    ["Arquivo", [["Novo Arquivo de Texto", "Ctrl+N"], ["Nova Janela", "Ctrl+Shift+N"], "-", ["Abrir Arquivo...", "Ctrl+P", () => setQuick("")], ["Abrir Recente"], "-", ["Salvar", "Ctrl+S"], ["Salvar Como...", "Ctrl+Shift+S"], "-", ["Fechar Editor", "Ctrl+F4", () => active && close(active)], ["Fechar Janela", "Alt+F4", p.onClose], "-", ["Sair", "", p.onClose]]],
    ["Editar", [["Desfazer", "Ctrl+Z"], ["Refazer", "Ctrl+Y"], "-", ["Recortar", "Ctrl+X"], ["Copiar", "Ctrl+C"], ["Colar", "Ctrl+V"], "-", ["Localizar nos Arquivos", "Ctrl+Shift+F", () => show("search")]]],
    ["Seleção", [["Selecionar Tudo", "Ctrl+A"], ["Expandir Seleção", "Shift+Alt+RightArrow"], "-", ["Copiar Linha Acima", "Shift+Alt+UpArrow"], ["Copiar Linha Abaixo", "Shift+Alt+DownArrow"]]],
    ["Exibir", [["Paleta de Comandos...", "Ctrl+Shift+P", () => setQuick(">")], "-", ["Explorador", "Ctrl+Shift+E", () => show("explorer")], ["Pesquisar", "Ctrl+Shift+F", () => show("search")], ["Controle do Código-Fonte", "Ctrl+Shift+G", () => show("scm")], ["Executar", "Ctrl+Shift+D", () => show("debug")], ["Extensões", "Ctrl+Shift+X", () => show("extensions")], "-", ["Terminal", "Ctrl+J", () => setPanel((v) => !v)], ["Barra Lateral Primária", "Ctrl+B", () => setSideOpen((v) => !v)]]],
    ["Ir", [["Voltar", "Alt+LeftArrow"], ["Avançar", "Alt+RightArrow"], "-", ["Ir para Arquivo...", "Ctrl+P", () => setQuick("")]]],
    ["Executar", [["Iniciar Depuração", "F5", () => terminal("npm run dev")], ["Executar Sem Depuração", "Ctrl+F5", () => terminal("npm run dev")]]],
    ["Terminal", [["Novo Terminal", "", () => terminal()], ["Executar Tarefa...", "", () => terminal("npm run build")]]],
    ["Ajuda", [["Bem-vindo", "", () => open("welcome")], ["Mostrar Todos os Comandos", "Ctrl+Shift+P", () => setQuick(">")], "-", ["Meu GitHub", "", () => window.open(GITHUB, "_blank")], "-", ["Como Navegar", "", () => open("README.md")], ["Sobre Mim", "", () => open("sobre-mim.md")]]],
  ];

  const commands: Command[] = [
    ...MENUS.flatMap(([m, items]) =>
      items.flatMap((i) => (i !== "-" && i[2] ? [{ label: `${m}: ${i[0].replace("...", "")}`, key: i[1], run: i[2] }] : [])),
    ),
    { label: "Exibir: Fechar Todos os Editores", run: () => (setTabs([]), setActive(null), setPreview(null)) },
    { label: "Desenvolvedor: Recarregar Janela", key: "Ctrl+R", run: p.onReload },
    { label: "Git: Clonar", run: () => window.open(`${GITHUB}/portfolioyyhago-vscode`, "_blank") },
  ];

  useEffect(() => {
    if (!p.focused) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
        e.preventDefault();
        return step(e.key === "ArrowLeft" ? -1 : 1);
      }
      if (!(e.ctrlKey || e.metaKey)) return;
      const k = e.key.toLowerCase();
      const views: Record<string, View> = { e: "explorer", f: "search", g: "scm", d: "debug", x: "extensions" };
      let hit = true;
      if (k === "p") setQuick(e.shiftKey ? ">" : "");
      else if (k === "b") setSideOpen((v) => !v);
      else if (e.code === "Backquote" || k === "j") setPanel((v) => !v);
      else if (e.shiftKey && views[k]) show(views[k]);
      else if (e.shiftKey && k === "v" && active?.endsWith(".md")) toggleRaw(active);
      else hit = false;
      if (hit) e.preventDefault();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const file = files.find((f) => f.path === active);
  const cursor = (active && cursors[active]) || { ln: 1, col: 1 };

  return (
    <LiveCtx.Provider value={p.live}>
    <div className={`vsc ${p.focused ? "" : "inactive"}`}>
      <div
        className="vsc-title"
        onPointerDown={(e) => {
          if (!(e.target as HTMLElement).closest(".mi")) setMenu(null);
          p.onDragStart(e);
        }}
        onDoubleClick={(e) => !(e.target as HTMLElement).closest("[data-nodrag]") && p.onMaximize()}
      >
        <div className="vsc-logo">
          <VSCodeLogo size={16} />
        </div>
        <button className="vsc-burger tb codicon codicon-menu" data-nodrag title="Menu do Aplicativo" onClick={() => setQuick(">")} />
        <div className="vsc-menubar" data-nodrag>
          {MENUS.map(([name, items]) => (
            <div
              key={name}
              className={`mi ${menu === name ? "open" : ""}`}
              onMouseDown={() => setMenu(menu === name ? null : name)}
              onMouseEnter={() => menu && setMenu(name)}
            >
              {name}
              {menu === name && (
                <div className="menu" onMouseDown={(e) => e.stopPropagation()}>
                  {items.map((it, i) =>
                    it === "-" ? (
                      <div key={i} className="menu-sep" />
                    ) : (
                      <div
                        key={i}
                        className="menu-item"
                        onClick={() => {
                          setMenu(null);
                          (it[2] ?? (() => notify(READ_ONLY)))();
                        }}
                      >
                        <span>{it[0]}</span>
                        <span className="menu-key">{it[1]}</span>
                      </div>
                    ),
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="vsc-cc" data-nodrag>
          <button className="tb codicon codicon-arrow-left" title="Voltar (Alt+LeftArrow)" disabled={hist.i <= 0} onClick={() => step(-1)} />
          <button className="tb codicon codicon-arrow-right" title="Avançar (Alt+RightArrow)" disabled={hist.i >= hist.list.length - 1} onClick={() => step(1)} />
          <button className="cc-box" onClick={() => setQuick("")} title="Pesquisar arquivos pelo nome (Ctrl+P)">
            <i className="codicon codicon-search" />
            <span>{ROOT}</span>
          </button>
        </div>
        <div className="vsc-title-actions" data-nodrag>
          <button className={`tb codicon codicon-layout-sidebar-left${sideOpen ? "" : "-off"}`} title="Alternar Barra Lateral Primária (Ctrl+B)" onClick={() => setSideOpen((v) => !v)} />
          <button className={`tb codicon codicon-layout-panel${panel ? "" : "-off"}`} title="Alternar Painel (Ctrl+J)" onClick={() => setPanel((v) => !v)} />
          <button className="tb codicon codicon-layout" title="Personalizar Layout..." onClick={() => setQuick(">Exibir")} />
        </div>
        <div className="vsc-winctl" data-nodrag>
          <button className="codicon codicon-chrome-minimize" title="Minimizar" onClick={p.onMinimize} />
          <button className={`codicon codicon-chrome-${p.maximized ? "restore" : "maximize"}`} title={p.maximized ? "Restaurar" : "Maximizar"} onClick={p.onMaximize} />
          <button className="codicon codicon-chrome-close close" title="Fechar" onClick={p.onClose} />
        </div>
      </div>

      <div className="vsc-body">
        <div className="vsc-activity">
          {ACTIVITY.map(([v, icon, title]) => (
            <button
              key={v}
              title={title}
              className={`act codicon codicon-${icon} ${sideOpen && view === v ? "on" : ""}`}
              onClick={() => (sideOpen && view === v ? setSideOpen(false) : show(v))}
            >
              {v === "scm" && <span className="act-badge">{files.filter((f) => f.git).length}</span>}
            </button>
          ))}
          <div className="act-sep" />
          {LINKS.map(([icon, title, href]) => (
            <a key={icon} className="act act-link" title={title} href={href} target="_blank" rel="noreferrer">
              <Icon name={icon} />
            </a>
          ))}
          <div style={{ flex: 1 }} />
          <button className={`act codicon codicon-terminal ${panel ? "on-soft" : ""}`} title="Alternar Terminal (Ctrl+J)" onClick={() => setPanel((v) => !v)} />
          <button className="act codicon codicon-account" title="Contas" onClick={() => open("sobre-mim.md")} />
          <button className="act codicon codicon-settings-gear" title="Gerenciar" onClick={() => setQuick(">")} />
        </div>

        {sideOpen && (
          <>
            <Sidebar view={view} width={sideW} active={active} booting={booting} api={api} />
            <div className="sash sash-v" onPointerDown={(e) => { const w = sideW; onDrag(e, (dx) => setSideW(Math.min(600, Math.max(170, w + dx))), "ew-resize"); }} />
          </>
        )}

        <div className="vsc-main" style={sideOpen ? undefined : { marginLeft: 4 }}>
          <div className="vsc-editor-box">
            <Editor
              tabs={tabs}
              active={active}
              preview={preview}
              booting={booting}
              cursor={cursor}
              setCursor={(c) => active && setCursors((all) => ({ ...all, [active]: c }))}
              reveal={reveal}
              raw={raw}
              toggleRaw={toggleRaw}
              api={api}
            />
          </div>
          {panel && (
            <>
              <div className="sash sash-h" onPointerDown={(e) => { const h = panelH; onDrag(e, (_, dy) => setPanelH(Math.max(100, h - dy)), "ns-resize"); }} />
              <div className="vsc-panel-box" style={{ height: panelH }}>
                <Terminal
                  tab={panelTab}
                  setTab={setPanelTab}
                  request={termCmd}
                  api={api}
                  onClose={() => setPanel(false)}
                  onToggleMax={() => setPanelH((h) => (h > 2000 ? 240 : 9999))}
                />
              </div>
            </>
          )}
        </div>

        {quick !== null && <QuickOpen init={quick} commands={commands} api={api} onClose={() => setQuick(null)} />}
        {menu && <div className="vsc-overlay under" onMouseDown={() => setMenu(null)} />}

        <div className="vsc-toasts">
          {toasts.map((t) => (
            <div key={t.id} className="toast">
              <i className="codicon codicon-info" />
              <span>{t.msg}</span>
              <button className="tb codicon codicon-close" onClick={() => setToasts((all) => all.filter((x) => x.id !== t.id))} />
            </div>
          ))}
        </div>
      </div>

      <div className="vsc-status">
        <button className="sb remote" title="Abrir o repositório remoto no GitHub" onClick={() => window.open(GITHUB, "_blank")}>
          <i className="codicon codicon-remote" />
        </button>
        <button className="sb" title="main* (Controle do Código-Fonte)" onClick={() => show("scm")}>
          <i className="codicon codicon-git-branch" /> main*
        </button>
        <button className="sb" title="Sincronizar Alterações" onClick={() => terminal("git status")}>
          <i className="codicon codicon-sync" />
        </button>
        <button className="sb" title="Nenhum Problema" onClick={() => (setPanel(true), setPanelTab("PROBLEMAS"))}>
          <i className="codicon codicon-error" /> 0 <i className="codicon codicon-warning" /> 0
        </button>
        <span style={{ flex: 1 }} />
        {file && !(file.path.endsWith(".md") && !raw.has(file.path)) && (
          <>
            <span className="sb sb-info">Ln {cursor.ln}, Col {cursor.col}</span>
            <span className="sb sb-info sb-extra">Espaços: 2</span>
            <span className="sb sb-info sb-extra">UTF-8</span>
            <span className="sb sb-info sb-extra">LF</span>
            <span className="sb sb-info">
              <span className="sb-braces">{"{ }"}</span> {LANG_NAME[langOf(file.path)]}
            </span>
          </>
        )}
        <button className="sb" title="Notificações" onClick={() => notify("Nenhuma notificação nova. Valeu pela visita!")}>
          <i className="codicon codicon-bell" />
        </button>
      </div>
    </div>
    </LiveCtx.Provider>
  );
}

function fuzzy(q: string, s: string): number[] | null {
  const hits: number[] = [];
  let j = 0;
  const low = s.toLowerCase();
  for (const ch of q.toLowerCase()) {
    if (ch === " ") continue;
    j = low.indexOf(ch, j);
    if (j < 0) return null;
    hits.push(j++);
  }
  return hits;
}

function QuickOpen({ init, commands, api, onClose }: { init: string; commands: Command[]; api: Api; onClose: () => void }) {
  const { files } = useLive();
  const [q, setQ] = useState(init);
  const [sel, setSel] = useState(0);
  const isCmd = q.startsWith(">");
  const query = isCmd ? q.slice(1).trim() : q.trim();
  const source: Command[] = isCmd
    ? commands
    : files.map((f) => ({
        label: f.path.split("/").pop()!,
        desc: f.path.includes("/") ? f.path.slice(0, f.path.lastIndexOf("/")) : "",
        icon: <FileIcon name={f.path} />,
        run: () => api.open(f.path),
      }));
  const spread = (m: number[]) => (m.length ? m[m.length - 1] - m[0] : 0);
  const items = source
    .flatMap((c) => {
      const m = fuzzy(query, c.label);
      return m ? [{ ...c, m }] : [];
    })
    .sort((a, b) => spread(a.m) - spread(b.m));
  const run = (c?: Command) => {
    onClose();
    c?.run();
  };

  return (
    <>
      <div className="vsc-overlay" onMouseDown={onClose} />
      <div className="qi">
        <input
          autoFocus
          value={q}
          spellCheck={false}
          placeholder={isCmd ? "" : "Pesquisar arquivos pelo nome (acrescente > para mostrar e executar comandos)"}
          onChange={(e) => (setQ(e.target.value), setSel(0))}
          onKeyDown={(e) => {
            if (e.key === "Escape") onClose();
            else if (e.key === "Enter") run(items[sel]);
            else if (e.key === "ArrowDown") setSel((s) => Math.min(items.length - 1, s + 1));
            else if (e.key === "ArrowUp") setSel((s) => Math.max(0, s - 1));
            else return;
            e.preventDefault();
          }}
        />
        <div className="qi-list">
          {!isCmd && !query && <div className="qi-label">arquivos do workspace</div>}
          {items.map((c, i) => (
            <div key={c.label + i} className={`qi-item ${i === sel ? "sel" : ""}`} onMouseMove={() => setSel(i)} onClick={() => run(c)}>
              {c.icon}
              <span className="qi-name">
                {[...c.label].map((ch, k) => (c.m.includes(k) ? <b key={k}>{ch}</b> : ch))}
              </span>
              {c.desc && <span className="qi-desc">{c.desc}</span>}
              {c.key && <Keys k={c.key} />}
            </div>
          ))}
          {!items.length && <div className="qi-empty">{isCmd ? "Nenhum comando correspondente" : "Nenhum resultado correspondente"}</div>}
        </div>
      </div>
    </>
  );
}
