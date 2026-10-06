import type { ReactNode } from "react";
import type { VFile } from "./vscode/data";

const DOCS = ["sobre-mim", "servicos", "projetos", "experiencia", "habilidades", "formacao", "certificados", "contato"].map((n) => `docs/${n}.md`);

function inline(s: string, key: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\*([^*]+)\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)|:[a-z-]+:\s?/g;
  let last = 0;
  let n = 0;
  for (let m; (m = re.exec(s)); ) {
    if (m.index > last) out.push(s.slice(last, m.index));
    const k = `${key}.${n++}`;
    if (m[1] !== undefined) out.push(<strong key={k}>{inline(m[1], k)}</strong>);
    else if (m[2] !== undefined) out.push(<em key={k}>{inline(m[2], k)}</em>);
    else if (m[3] !== undefined) out.push(m[3]);
    else if (m[4] !== undefined) out.push(/^(https?:|mailto:)/.test(m[5]) ? <a key={k} href={m[5]}>{inline(m[4], k)}</a> : inline(m[4], k));
    last = re.lastIndex;
  }
  if (last < s.length) out.push(s.slice(last));
  return out;
}

function render(src: string, doc: number): ReactNode[] {
  const lines = src.split("\n");
  const out: ReactNode[] = [];
  const HEAD = ["h2", "h3", "h4"] as const;
  for (let i = 0; i < lines.length; ) {
    const l = lines[i];
    const k = `${doc}.${i}`;
    const h = l.match(/^(#{1,3}) (.*)/);
    if (!l.trim() || /^!\[/.test(l) || /^\[\[.+\]\]$/.test(l.trim())) i++;
    else if (h) {
      const H = HEAD[h[1].length - 1];
      out.push(<H key={k}>{inline(h[2], k)}</H>);
      i++;
    } else if (/^(\* |\d+\. )/.test(l)) {
      const ordered = /^\d/.test(l);
      const items: string[] = [];
      while (i < lines.length && /^(\* |\d+\. )/.test(lines[i])) items.push(lines[i++].replace(/^(\* |\d+\. )/, ""));
      const List = ordered ? "ol" : "ul";
      out.push(
        <List key={k}>
          {items.map((it, j) => (
            <li key={j}>{inline(it, `${k}.${j}`)}</li>
          ))}
        </List>,
      );
    } else {
      const buf: string[] = [];
      while (i < lines.length && lines[i].trim() && !/^(#{1,3} |\* |\d+\. |!\[)/.test(lines[i])) buf.push(lines[i++].replace(/^> /, ""));
      out.push(<p key={k}>{inline(buf.join(" "), k)}</p>);
    }
  }
  return out;
}

export default function SeoText({ files }: { files: VFile[] }) {
  return (
    <article className="sr-only" aria-label="Portfólio de Yhago Felipe em texto">
      <h1>Yhago Felipe, Desenvolvedor Full Stack</h1>
      {DOCS.map((path, d) => {
        const f = files.find((x) => x.path === path);
        return f ? <section key={path}>{render(f.content, d)}</section> : null;
      })}
    </article>
  );
}
