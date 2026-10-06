import { type ReactNode, useMemo, useState } from "react";
import { FileIcon, FolderIcon } from "../icons";
import { baseName, ROOT, shown, type Ext, type VFile } from "./data";
import { extensionsFor } from "./data-en";
import { useL, useLive, useLocale } from "./live-context";
import { ExtIcon, headingId } from "./Markdown";
import type { Api, View } from "./VSCode";

const dir = (p: string) => (p.includes("/") ? p.slice(0, p.lastIndexOf("/")) : "");

type Props = { view: View; width: number; active: string | null; booting: boolean; api: Api };

export default function Sidebar({ view, width, active, booting, api }: Props) {
  const L = useL();
  const TITLES: Record<View, string> = {
    explorer: L("Explorador", "Explorer"),
    search: L("Pesquisar", "Search"),
    scm: L("Controle do Código-Fonte", "Source Control"),
    debug: L("Executar e Depurar", "Run and Debug"),
    extensions: L("Extensões", "Extensions"),
  };
  return (
    <aside className="vsc-side" style={{ width }}>
      {booting && <div className="progress" />}
      <div className="side-head">
        <span>{TITLES[view]}</span>
        <button className="tb codicon codicon-ellipsis" title={L("Mais Ações...", "More Actions...")} onClick={() => api.quick(">")} />
      </div>
      {!booting && view === "explorer" && <Explorer active={active} api={api} />}
      {view === "search" && <Search api={api} />}
      {view === "scm" && <Scm api={api} />}
      {view === "debug" && (
        <div className="side-pad">
          <button className="btn wide" onClick={() => api.terminal("npm run dev")}>{TITLES.debug}</button>
          <p>
            {L("Para personalizar Executar e Depurar, ", "To customize Run and Debug, ")}
            <a onClick={api.readOnly}>{L("crie um arquivo launch.json", "create a launch.json file")}</a>.
          </p>
          <p>
            {L("Mostrar ", "Show ")}
            <a onClick={() => api.terminal("npm run dev")}>{L("todas as configurações de depuração automática", "all automatic debug configurations")}</a>.
          </p>
        </div>
      )}
      {view === "extensions" && <Extensions api={api} />}
    </aside>
  );
}

type Node = { name: string; path: string; dir: boolean; children: Node[]; git?: VFile["git"] };

function buildTree(files: VFile[]): Node[] {
  const root: Node = { name: "", path: "", dir: true, children: [] };
  for (const f of files) {
    let cur = root;
    const label = (f.alias ?? f.path).split("/");
    f.path.split("/").forEach((part, i, all) => {
      let n = cur.children.find((c) => c.path === all.slice(0, i + 1).join("/"));
      if (!n) cur.children.push((n = { name: label[i] ?? part, path: all.slice(0, i + 1).join("/"), dir: i < all.length - 1, children: [] }));
      if (!n.git) n.git = f.git;
      cur = n;
    });
  }
  const sort = (ns: Node[]) => {
    ns.sort((a, b) => Number(b.dir) - Number(a.dir));
    ns.forEach((n) => sort(n.children));
  };
  sort(root.children);
  return root.children;
}

const SYMBOL_ICON: Record<string, string> = { const: "symbol-constant", function: "symbol-method", class: "symbol-class", interface: "symbol-interface", type: "symbol-interface" };
function symbols(f?: VFile) {
  if (!f) return [];
  return f.content.split("\n").flatMap((l, i) => {
    const h = f.path.endsWith(".md") && l.match(/^(#{1,3}) (.+)/);
    if (h) return [{ name: h[2], line: i + 1, depth: h[1].length - 1, icon: "symbol-string" }];
    const e = l.match(/^export (?:default )?(?:async )?(const|function|class|interface|type) (\w+)/);
    return e ? [{ name: e[2], line: i + 1, depth: 0, icon: SYMBOL_ICON[e[1]] }] : [];
  });
}

function Explorer({ active, api }: { active: string | null; api: Api }) {
  const { files } = useLive();
  const L = useL();
  const [outlineOpen, setOutlineOpen] = useState(false);
  const outline = useMemo(() => symbols(files.find((f) => f.path === active)), [files, active]);
  const tree = useMemo(() => buildTree(files), [files]);
  const [openDirs, setOpenDirs] = useState(() => new Set(["docs"]));
  const [rootOpen, setRootOpen] = useState(true);
  const [sel, setSel] = useState<string | null>(null);

  const row = (n: Node, depth: number): ReactNode => {
    const isOpen = openDirs.has(n.path);
    return (
      <div key={n.path}>
        <div
          data-path={n.path}
          className={`row ${active === n.path ? "active" : ""} ${sel === n.path ? "sel" : ""}`}
          style={{ paddingLeft: 8 + depth * 8 }}
          title={`~\\${ROOT}\\${shown(files, n.path).replaceAll("/", "\\")}`}
          onClick={() => {
            setSel(n.path);
            if (!n.dir) return api.open(n.path, false);
            const next = new Set(openDirs);
            if (isOpen) next.delete(n.path);
            else next.add(n.path);
            setOpenDirs(next);
          }}
          onDoubleClick={() => !n.dir && api.open(n.path, true)}
        >
          {Array.from({ length: depth }, (_, k) => (
            <i key={k} className="guide" style={{ left: 16 + k * 8 }} />
          ))}
          {n.dir ? <i className={`twistie codicon codicon-chevron-${isOpen ? "down" : "right"}`} /> : <span className="twistie" />}
          {n.dir ? <FolderIcon name={n.name} open={isOpen} /> : <FileIcon name={n.name} />}
          <span className={`row-label ${n.git ? `git-${n.git}` : ""}`}>{n.name}</span>
          {n.git && <span className={`git-letter git-${n.git}`}>{n.dir ? "•" : n.git}</span>}
        </div>
        {n.dir && isOpen && n.children.map((c) => row(c, depth + 1))}
      </div>
    );
  };

  return (
    <div className="explorer">
      <div className="sec-head" onClick={() => setRootOpen((v) => !v)}>
        <i className={`codicon codicon-chevron-${rootOpen ? "down" : "right"}`} />
        <span>{ROOT.replace(/(^|-)\w/g, (s) => s.toUpperCase())}</span>
        <div className="sec-actions" onClick={(e) => e.stopPropagation()}>
          <button className="tb codicon codicon-new-file" title={L("Novo Arquivo...", "New File...")} onClick={api.readOnly} />
          <button className="tb codicon codicon-new-folder" title={L("Nova Pasta...", "New Folder...")} onClick={api.readOnly} />
          <button className="tb codicon codicon-refresh" title={L("Atualizar Explorador", "Refresh Explorer")} onClick={() => setOpenDirs(new Set(["docs"]))} />
          <button className="tb codicon codicon-collapse-all" title={L("Recolher Pastas no Explorador", "Collapse Folders in Explorer")} onClick={() => setOpenDirs(new Set())} />
        </div>
      </div>
      {rootOpen && <div className="tree">{tree.map((n) => row(n, 0))}</div>}
      <div className="sec-bottom">
        <div className="sec-head" onClick={() => setOutlineOpen((v) => !v)}>
          <i className={`codicon codicon-chevron-${outlineOpen ? "down" : "right"}`} /> <span>{L("Estrutura Do Código", "Outline")}</span>
        </div>
        {outlineOpen && (
          <div className="outline">
            {!outline.length && <div className="outline-empty">{L("O editor ativo não tem símbolos.", "The active editor has no symbols.")}</div>}
            {outline.map((s) => (
              <div
                key={s.line}
                className="row"
                style={{ paddingLeft: 12 + s.depth * 10 }}
                onClick={() => {
                  const el = document.getElementById(headingId(s.name));
                  if (el && active?.endsWith(".md")) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  else if (active) api.open(active, true, s.line);
                }}
              >
                <i className={`codicon codicon-${s.icon} outline-icon`} />
                <span className="row-label">{s.name.replace(/:[a-z-]+:\s*/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")}</span>
              </div>
            ))}
          </div>
        )}
        <div className="sec-head" onClick={() => api.terminal("git log")}>
          <i className="codicon codicon-chevron-right" /> <span>{L("Linha Do Tempo", "Timeline")}</span>
        </div>
      </div>
    </div>
  );
}

function Search({ api }: { api: Api }) {
  const { files } = useLive();
  const L = useL();
  const [q, setQ] = useState("");
  const [opts, setOpts] = useState({ cs: false, word: false, re: false });
  const toggle = (k: keyof typeof opts) => setOpts((o) => ({ ...o, [k]: !o[k] }));
  const matcher = useMemo(() => {
    if (!q) return null;
    try {
      const src = opts.re ? q : q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return new RegExp(opts.word ? `(?<![\\p{L}\\d_])(?:${src})(?![\\p{L}\\d_])` : src, opts.cs ? "u" : "iu");
    } catch {
      return undefined;
    }
  }, [q, opts]);
  const results = useMemo(() => {
    if (!matcher) return [];
    return files
      .map((f) => ({
        f,
        hits: f.content.split("\n").flatMap((line, i) => {
          const m = matcher.exec(line);
          return m && m[0] ? [{ i, line, idx: m.index, len: m[0].length }] : [];
        }),
      }))
      .filter((r) => r.hits.length);
  }, [matcher, files]);
  const total = results.reduce((a, r) => a + r.hits.length, 0);
  const plural = (n: number, pt: string, en: string) => `${n} ${L(pt, en)}${n > 1 ? "s" : ""}`;

  return (
    <div className="search">
      <div className="search-box">
        <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder={L("Pesquisar", "Search")} spellCheck={false} />
        <button className={`tog codicon codicon-case-sensitive ${opts.cs ? "on" : ""}`} title={L("Diferenciar Maiúsculas de Minúsculas", "Match Case")} onClick={() => toggle("cs")} />
        <button className={`tog codicon codicon-whole-word ${opts.word ? "on" : ""}`} title={L("Coincidir Palavra Inteira", "Match Whole Word")} onClick={() => toggle("word")} />
        <button className={`tog codicon codicon-regex ${opts.re ? "on" : ""}`} title={L("Usar Expressão Regular", "Use Regular Expression")} onClick={() => toggle("re")} />
      </div>
      {q && (
        <div className="search-summary">
          {matcher === undefined
            ? L("Expressão regular inválida.", "Invalid regular expression.")
            : total
              ? `${plural(total, "resultado", "result")} ${L("em", "in")} ${plural(results.length, "arquivo", "file")}`
              : L("Nenhum resultado encontrado.", "No results found.")}
        </div>
      )}
      {!q && <div className="search-summary dim">{L("Experimente pesquisar “NestJS”, “ERP” ou “Docker”.", "Try searching for “NestJS”, “ERP” or “Docker”.")}</div>}
      <div className="search-results">
        {results.map(({ f, hits }) => (
          <div key={f.path}>
            <div className="row" style={{ paddingLeft: 4 }}>
              <i className="twistie codicon codicon-chevron-down" />
              <FileIcon name={f.path} />
              <span className="row-label">{baseName(f.alias ?? f.path)}</span>
              <span className="row-dim">{dir(f.path)}</span>
              <span className="count">{hits.length}</span>
            </div>
            {hits.map((h) => {
              const start = Math.max(0, h.idx - 18);
              return (
                <div key={h.i} className="row hit" style={{ paddingLeft: 38 }} onClick={() => api.open(f.path, true, h.i + 1)}>
                  <span className="hit-text">
                    {start > 0 && "…"}
                    {h.line.slice(start, h.idx).trimStart()}
                    <mark>{h.line.slice(h.idx, h.idx + h.len)}</mark>
                    {h.line.slice(h.idx + h.len)}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function Scm({ api }: { api: Api }) {
  const { files } = useLive();
  const L = useL();
  const changed = files.filter((f) => f.git);
  const joke = () => api.notify(L("Aqui só eu faço commit, haha.", "Only I get to commit here, haha."));
  return (
    <div className="scm">
      <div className="side-pad">
        <textarea
          rows={1}
          className="scm-input"
          placeholder={L("Mensagem (Ctrl+Enter)", "Message (Ctrl+Enter)")}
          spellCheck={false}
          onKeyDown={(e) => e.key === "Enter" && (e.ctrlKey || e.metaKey) && (e.preventDefault(), joke())}
        />
        <button className="btn wide" onClick={joke}>
          <i className="codicon codicon-check" /> {L("Confirmar", "Commit")}
        </button>
      </div>
      <div className="sec-head">
        <i className="codicon codicon-chevron-down" /> <span>{L("Alterações", "Changes")}</span>
        <span className="count" style={{ marginLeft: "auto", marginRight: 12 }}>
          {changed.length}
        </span>
      </div>
      {changed.map((f) => (
        <div key={f.path} className="row" style={{ paddingLeft: 22 }} onClick={() => api.open(f.path)}>
          <FileIcon name={f.path} />
          <span className={`row-label git-${f.git}`}>{baseName(f.alias ?? f.path)}</span>
          <span className="row-dim">{dir(f.path)}</span>
          <span className={`git-letter git-${f.git}`}>{f.git}</span>
        </div>
      ))}
    </div>
  );
}

function Extensions({ api }: { api: Api }) {
  const L = useL();
  const all = extensionsFor(useLocale().locale);
  const [q, setQ] = useState("");
  const [closed, setClosed] = useState<Set<string>>(new Set());
  const list = all.filter((e) => `${e.name} ${e.desc} ${e.cat}`.toLowerCase().includes(q.toLowerCase()));
  const cats = [...new Set(list.map((e) => e.cat))];
  const toggle = (cat: string) => {
    const next = new Set(closed);
    if (next.has(cat)) next.delete(cat);
    else next.add(cat);
    setClosed(next);
  };
  return (
    <div className="exts">
      <div className="side-pad" style={{ paddingTop: 0 }}>
        <input className="input" value={q} onChange={(e) => setQ(e.target.value)} placeholder={L("Pesquisar Extensões no Marketplace", "Search Extensions in Marketplace")} spellCheck={false} />
      </div>
      {cats.map((cat) => {
        const items = list.filter((e) => e.cat === cat);
        const open = !closed.has(cat) || q !== "";
        return (
          <div key={cat}>
            <div className="sec-head" onClick={() => toggle(cat)}>
              <i className={`codicon codicon-chevron-${open ? "down" : "right"}`} /> <span>{cat}</span>
              <span className="count" style={{ marginLeft: "auto", marginRight: 12 }}>
                {items.length}
              </span>
            </div>
            {open && items.map((e) => <ExtItem key={e.id} e={e} api={api} />)}
          </div>
        );
      })}
      {!list.length && <div className="search-summary">{L("Nenhuma extensão encontrada.", "No extensions found.")}</div>}
    </div>
  );
}

function ExtItem({ e, api }: { e: Ext; api: Api }) {
  return (
    <div className="ext-item" onClick={() => api.open(`ext:${e.id}`)}>
      <ExtIcon ext={e} />
      <div className="ext-body">
        <div className="ext-name">{e.name}</div>
        <div className="ext-desc">{e.desc}</div>
        <div className="ext-pub">
          <i className="codicon codicon-verified-filled" />
          <span>{e.publisher}</span>
          <i className="codicon codicon-gear ext-gear" />
        </div>
      </div>
    </div>
  );
}
