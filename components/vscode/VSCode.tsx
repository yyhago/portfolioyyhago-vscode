"use client";

import { type PointerEvent, type ReactNode, useEffect, useRef, useState } from "react";
import { FileIcon, VSCodeLogo } from "../icons";
import { onDrag } from "../drag";
import { baseName, EMAIL, GITHUB, INSTAGRAM, LANG_NAME, langOf, LINKEDIN, matches, ROOT, shown } from "./data";
import { Icon } from "./Markdown";
import type { Live } from "./live";
import { LiveCtx, useLive, useLocale } from "./live-context";
import { pick } from "../i18n";
import Editor, { Keys } from "./Editor";
import Sidebar from "./Sidebar";
import Terminal from "./Terminal";
import Tour from "./Tour";

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
  tour: () => void;
  readOnly: () => void;
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
const LINKS: [string, string, string][] = [
  ["github", "GitHub", GITHUB],
  ["linkedin", "LinkedIn", LINKEDIN],
  ["instagram", "Instagram", INSTAGRAM],
  ["mail", EMAIL, `mailto:${EMAIL}`],
];
const START_TAB = "docs/sobre-mim.md";
const TOUR_SEEN = "portfolio-guia-visto";

function scrollToAnchor(id: string, tries = 12) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  else if (tries > 0) setTimeout(() => scrollToAnchor(id, tries - 1), 120);
}

export default function VSCode(p: Props) {
  const files = p.live.files;
  const { locale, setLocale } = useLocale();
  const L = pick(locale);
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
  const [tourOn, setTourOn] = useState(false);
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
  const readOnly = () => notify(L("Aqui é só leitura, mas pode fuçar à vontade.", "This is read only, but feel free to look around."));
  const toggleLocale = () => setLocale(locale === "en" ? "pt" : "en");
  const resolve = (id: string) =>
    id === "welcome" || id.startsWith("ext:") || files.some((f) => f.path === id) ? id : (files.find((f) => matches(f, id))?.path ?? id);
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
  const open = (target: string, pin = true, line?: number) => {
    const [raw0, anchor] = target.split("#");
    if (!raw0 && anchor) return scrollToAnchor(anchor);
    const id = resolve(raw0);
    go(id);
    if (anchor) {
      setRaw((r) => {
        const next = new Set(r);
        next.delete(id);
        return next;
      });
      scrollToAnchor(anchor);
    }
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
  const endTour = () => {
    setTourOn(false);
    try {
      localStorage.setItem(TOUR_SEEN, "1");
    } catch {}
  };
  const api: Api = { open, activate: go, close, show, terminal, notify, quick: setQuick, tour: () => setTourOn(true), readOnly };

  useEffect(() => {
    if (booting) return;
    let seen = false;
    try {
      seen = !!localStorage.getItem(TOUR_SEEN);
    } catch {}
    if (seen) return;
    const t = setTimeout(() => setTourOn(true), 800);
    return () => clearTimeout(t);
  }, [booting]);

  useEffect(() => {
    if (booting || !p.request || handled.current === p.request.n) return;
    handled.current = p.request.n;
    open(p.request.path);
  });

  const VIEW = L("Exibir", "View");
  const MENUS: [string, Item[]][] = [
    [L("Arquivo", "File"), [[L("Novo Arquivo de Texto", "New Text File"), "Ctrl+N"], [L("Nova Janela", "New Window"), "Ctrl+Shift+N"], "-", [L("Abrir Arquivo...", "Open File..."), "Ctrl+P", () => setQuick("")], [L("Abrir Recente", "Open Recent")], "-", [L("Salvar", "Save"), "Ctrl+S"], [L("Salvar Como...", "Save As..."), "Ctrl+Shift+S"], "-", [L("Fechar Editor", "Close Editor"), "Ctrl+F4", () => active && close(active)], [L("Fechar Janela", "Close Window"), "Alt+F4", p.onClose], "-", [L("Sair", "Exit"), "", p.onClose]]],
    [L("Editar", "Edit"), [[L("Desfazer", "Undo"), "Ctrl+Z"], [L("Refazer", "Redo"), "Ctrl+Y"], "-", [L("Recortar", "Cut"), "Ctrl+X"], [L("Copiar", "Copy"), "Ctrl+C"], [L("Colar", "Paste"), "Ctrl+V"], "-", [L("Localizar nos Arquivos", "Find in Files"), "Ctrl+Shift+F", () => show("search")]]],
    [L("Seleção", "Selection"), [[L("Selecionar Tudo", "Select All"), "Ctrl+A"], [L("Expandir Seleção", "Expand Selection"), "Shift+Alt+RightArrow"], "-", [L("Copiar Linha Acima", "Copy Line Up"), "Shift+Alt+UpArrow"], [L("Copiar Linha Abaixo", "Copy Line Down"), "Shift+Alt+DownArrow"]]],
    [VIEW, [[L("Paleta de Comandos...", "Command Palette..."), "Ctrl+Shift+P", () => setQuick(">")], "-", [L("Explorador", "Explorer"), "Ctrl+Shift+E", () => show("explorer")], [L("Pesquisar", "Search"), "Ctrl+Shift+F", () => show("search")], [L("Controle do Código-Fonte", "Source Control"), "Ctrl+Shift+G", () => show("scm")], [L("Executar", "Run"), "Ctrl+Shift+D", () => show("debug")], [L("Extensões", "Extensions"), "Ctrl+Shift+X", () => show("extensions")], "-", ["Terminal", "Ctrl+J", () => setPanel((v) => !v)], [L("Barra Lateral Primária", "Primary Side Bar"), "Ctrl+B", () => setSideOpen((v) => !v)], "-", [L("Idioma de Exibição, English", "Display Language, Português"), "", toggleLocale]]],
    [L("Ir", "Go"), [[L("Voltar", "Back"), "Alt+LeftArrow"], [L("Avançar", "Forward"), "Alt+RightArrow"], "-", [L("Ir para Arquivo...", "Go to File..."), "Ctrl+P", () => setQuick("")]]],
    [L("Executar", "Run"), [[L("Iniciar Depuração", "Start Debugging"), "F5", () => terminal("npm run dev")], [L("Executar Sem Depuração", "Run Without Debugging"), "Ctrl+F5", () => terminal("npm run dev")]]],
    ["Terminal", [[L("Novo Terminal", "New Terminal"), "", () => terminal()], [L("Executar Tarefa...", "Run Task..."), "", () => terminal("npm run build")]]],
    [L("Ajuda", "Help"), [[L("Guia de Navegação", "Navigation Guide"), "", () => setTourOn(true)], [L("Bem-vindo", "Welcome"), "", () => open("welcome")], [L("Mostrar Todos os Comandos", "Show All Commands"), "Ctrl+Shift+P", () => setQuick(">")], "-", [L("Pedir Orçamento", "Get a Quote"), "", () => open("servicos.md#orcamento")], [L("Meu GitHub", "My GitHub"), "", () => window.open(GITHUB, "_blank")], "-", [L("Como Navegar", "How to Navigate"), "", () => open("README.md")], [L("Sobre Mim", "About Me"), "", () => open("sobre-mim.md")]]],
  ];

  const commands: Command[] = [
    { label: L("Preferências: Configurar Idioma de Exibição", "Preferences: Configure Display Language"), desc: L("English", "Português"), run: toggleLocale },
    ...MENUS.flatMap(([m, items]) =>
      items.flatMap((i) => (i !== "-" && i[2] ? [{ label: `${m}: ${i[0].replace("...", "")}`, key: i[1], run: i[2] }] : [])),
    ),
    { label: L("Exibir: Fechar Todos os Editores", "View: Close All Editors"), run: () => (setTabs([]), setActive(null), setPreview(null)) },
    { label: L("Desenvolvedor: Recarregar Janela", "Developer: Reload Window"), key: "Ctrl+R", run: p.onReload },
    { label: L("Git: Clonar", "Git: Clone"), run: () => window.open(`${GITHUB}/portfolioyyhago-vscode`, "_blank") },
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
  const ACTIVITY: [View, string, string][] = [
    ["explorer", "files", L("Explorador (Ctrl+Shift+E)", "Explorer (Ctrl+Shift+E)")],
    ["search", "search", L("Pesquisar (Ctrl+Shift+F)", "Search (Ctrl+Shift+F)")],
    ["scm", "source-control", L("Controle do Código-Fonte (Ctrl+Shift+G)", "Source Control (Ctrl+Shift+G)")],
    ["debug", "debug-alt", L("Executar e Depurar (Ctrl+Shift+D)", "Run and Debug (Ctrl+Shift+D)")],
    ["extensions", "extensions", L("Extensões (Ctrl+Shift+X)", "Extensions (Ctrl+Shift+X)")],
  ];

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
        <button className="vsc-burger tb codicon codicon-menu" data-nodrag title={L("Menu do Aplicativo", "Application Menu")} onClick={() => setQuick(">")} />
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
                          (it[2] ?? readOnly)();
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
          <button className="tb codicon codicon-arrow-left" title={L("Voltar (Alt+LeftArrow)", "Go Back (Alt+LeftArrow)")} disabled={hist.i <= 0} onClick={() => step(-1)} />
          <button className="tb codicon codicon-arrow-right" title={L("Avançar (Alt+RightArrow)", "Go Forward (Alt+RightArrow)")} disabled={hist.i >= hist.list.length - 1} onClick={() => step(1)} />
          <button className="cc-box" onClick={() => setQuick("")} title={L("Pesquisar arquivos pelo nome (Ctrl+P)", "Search files by name (Ctrl+P)")}>
            <i className="codicon codicon-search" />
            <span>{ROOT}</span>
          </button>
        </div>
        <div className="vsc-title-actions" data-nodrag>
          <button className={`tb codicon codicon-layout-sidebar-left${sideOpen ? "" : "-off"}`} title={L("Alternar Barra Lateral Primária (Ctrl+B)", "Toggle Primary Side Bar (Ctrl+B)")} onClick={() => setSideOpen((v) => !v)} />
          <button className={`tb codicon codicon-layout-panel${panel ? "" : "-off"}`} title={L("Alternar Painel (Ctrl+J)", "Toggle Panel (Ctrl+J)")} onClick={() => setPanel((v) => !v)} />
          <button className="tb codicon codicon-layout" title={L("Personalizar Layout...", "Customize Layout...")} onClick={() => setQuick(`>${VIEW}`)} />
        </div>
        <div className="vsc-winctl" data-nodrag>
          <button className="codicon codicon-chrome-minimize" title={L("Minimizar", "Minimize")} onClick={p.onMinimize} />
          <button className={`codicon codicon-chrome-${p.maximized ? "restore" : "maximize"}`} title={p.maximized ? L("Restaurar", "Restore") : L("Maximizar", "Maximize")} onClick={p.onMaximize} />
          <button className="codicon codicon-chrome-close close" title={L("Fechar", "Close")} onClick={p.onClose} />
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
          <div className="act-links">
            {LINKS.map(([icon, title, href]) => (
              <a key={icon} className="act act-link" title={title} href={href} target="_blank" rel="noreferrer">
                <Icon name={icon} />
              </a>
            ))}
          </div>
          <div style={{ flex: 1 }} />
          <button className={`act codicon codicon-terminal ${panel ? "on-soft" : ""}`} title={L("Alternar Terminal (Ctrl+J)", "Toggle Terminal (Ctrl+J)")} onClick={() => setPanel((v) => !v)} />
          <button className="act codicon codicon-account" title={L("Contas", "Accounts")} onClick={() => open("sobre-mim.md")} />
          <button className="act codicon codicon-settings-gear" title={L("Gerenciar", "Manage")} onClick={() => setQuick(">")} />
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
        <button className="sb remote" title={L("Abrir o repositório remoto no GitHub", "Open the remote repository on GitHub")} onClick={() => window.open(GITHUB, "_blank")}>
          <i className="codicon codicon-remote" />
        </button>
        <button className="sb" title={L("main* (Controle do Código-Fonte)", "main* (Source Control)")} onClick={() => show("scm")}>
          <i className="codicon codicon-git-branch" /> main*
        </button>
        <button className="sb" title={L("Sincronizar Alterações", "Synchronize Changes")} onClick={() => terminal("git status")}>
          <i className="codicon codicon-sync" />
        </button>
        <button className="sb" title={L("Nenhum Problema", "No Problems")} onClick={() => (setPanel(true), setPanelTab("PROBLEMS"))}>
          <i className="codicon codicon-error" /> 0 <i className="codicon codicon-warning" /> 0
        </button>
        <button className="sb sb-guide" title={L("Guia de navegação", "Navigation guide")} onClick={() => setTourOn(true)}>
          <i className="codicon codicon-question" /> {L("Guia", "Guide")}
        </button>
        <span style={{ flex: 1 }} />
        {file && !(file.path.endsWith(".md") && !raw.has(file.path)) && (
          <>
            <span className="sb sb-info">Ln {cursor.ln}, Col {cursor.col}</span>
            <span className="sb sb-info sb-extra">{L("Espaços", "Spaces")}: 2</span>
            <span className="sb sb-info sb-extra">UTF-8</span>
            <span className="sb sb-info sb-extra">LF</span>
            <span className="sb sb-info">
              <span className="sb-braces">{"{ }"}</span> {LANG_NAME[langOf(file.path)]}
            </span>
          </>
        )}
        <button className="sb sb-lang" title={L("Idioma de exibição, clique para ler em inglês", "Display language, click to read in Portuguese")} onClick={toggleLocale}>
          <i className="codicon codicon-globe" /> {locale === "en" ? "EN" : "PT"}
        </button>
        <button className="sb" title={L("Notificações", "Notifications")} onClick={() => notify(L("Nenhuma notificação nova. Valeu pela visita!", "No new notifications. Thanks for stopping by!"))}>
          <i className="codicon codicon-bell" />
        </button>
      </div>
      {tourOn && (
        <Tour
          onPrepare={(p) => (p === "explorer" ? show("explorer") : setPanel(true))}
          onClose={endTour}
          onFinish={() => (endTour(), open("projetos.md"))}
        />
      )}
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
  const L = pick(useLocale().locale);
  const [q, setQ] = useState(init);
  const [sel, setSel] = useState(0);
  const isCmd = q.startsWith(">");
  const query = isCmd ? q.slice(1).trim() : q.trim();
  const source: Command[] = isCmd
    ? commands
    : files.map((f) => {
        const name = shown(files, f.path);
        return {
          label: baseName(name),
          desc: name.includes("/") ? name.slice(0, name.lastIndexOf("/")) : "",
          icon: <FileIcon name={f.path} />,
          run: () => api.open(f.path),
        };
      });
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
          placeholder={isCmd ? "" : L("Pesquisar arquivos pelo nome (acrescente > para mostrar e executar comandos)", "Search files by name (append > to show and run commands)")}
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
          {!isCmd && !query && <div className="qi-label">{L("arquivos do workspace", "workspace files")}</div>}
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
          {!items.length && <div className="qi-empty">{isCmd ? L("Nenhum comando correspondente", "No matching commands") : L("Nenhum resultado correspondente", "No matching results")}</div>}
        </div>
      </div>
    </>
  );
}
