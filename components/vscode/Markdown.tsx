import { type ReactNode, useEffect, useState } from "react";
import { pick, type Locale } from "../i18n";
import { matches, SKILL_LOGOS, type Ext } from "./data";
import { PUBLICADOS } from "./depoimentos";
import { fmtDate, type Day } from "./live";
import { useLive, useLocale } from "./live-context";
import QuoteForm from "./QuoteForm";

type Block =
  | { t: "h"; level: number; text: string }
  | { t: "p"; text: string }
  | { t: "ul" | "ol"; items: string[] }
  | { t: "quote"; text: string }
  | { t: "img"; alt: string; src: string };

const LIST = /^(\* |\d+\. )/;
const START = /^(#{1,3} |\* |\d+\. |> |!\[)/;

function parse(src: string): Block[] {
  const lines = src.split("\n");
  const out: Block[] = [];
  let m: RegExpMatchArray | null;
  for (let i = 0; i < lines.length; ) {
    const l = lines[i];
    if (!l.trim()) i++;
    else if ((m = l.match(/^(#{1,3}) (.*)/))) {
      out.push({ t: "h", level: m[1].length, text: m[2] });
      i++;
    } else if ((m = l.match(/^!\[([^\]]*)\]\(([^)]+)\)\s*$/))) {
      out.push({ t: "img", alt: m[1], src: m[2] });
      i++;
    } else if (LIST.test(l)) {
      const items: string[] = [];
      while (i < lines.length && LIST.test(lines[i])) items.push(lines[i++].replace(LIST, ""));
      out.push({ t: /^\d/.test(l) ? "ol" : "ul", items });
    } else if (l.startsWith("> ")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) buf.push(lines[i++].slice(2));
      out.push({ t: "quote", text: buf.join(" ") });
    } else {
      const buf: string[] = [];
      while (i < lines.length && lines[i].trim() && (buf.length === 0 || !START.test(lines[i]))) buf.push(lines[i++]);
      out.push({ t: "p", text: buf.join("\n") });
    }
  }
  return out;
}

const SVG_ICONS: Record<string, ReactNode> = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
};

export function Icon({ name }: { name: string }) {
  if (SVG_ICONS[name]) return <span className="md-svg">{SVG_ICONS[name]}</span>;
  return <i className={`codicon codicon-${name}`} />;
}

type Ctx = { open: (path: string) => void; isFile: (path: string) => boolean; L: (pt: string, en: string) => string };

function inline(s: string, ctx: Ctx, key = "k"): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\*([^*]+)\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)|:([a-z-]+):|\n/g;
  let last = 0;
  let n = 0;
  for (let m; (m = re.exec(s)); ) {
    if (m.index > last) out.push(s.slice(last, m.index));
    const k = `${key}.${n++}`;
    if (m[1] !== undefined) out.push(<strong key={k}>{inline(m[1], ctx, k)}</strong>);
    else if (m[2] !== undefined) out.push(<em key={k}>{inline(m[2], ctx, k)}</em>);
    else if (m[3] !== undefined) out.push(<Chip key={k} text={m[3]} />);
    else if (m[4] !== undefined) {
      const href = m[5];
      const file = href.split("#")[0];
      const internal = href.startsWith("#") || ctx.isFile(file);
      out.push(
        <a
          key={k}
          href={internal ? undefined : href}
          target={internal ? undefined : "_blank"}
          rel="noreferrer"
          title={internal ? (file ? `${ctx.L("Abrir", "Open")} ${file}` : undefined) : href}
          onClick={internal ? () => ctx.open(href) : undefined}
        >
          {inline(m[4], ctx, k)}
        </a>,
      );
    } else if (m[6] !== undefined) out.push(<Icon key={k} name={m[6]} />);
    else out.push(<br key={k} />);
    last = re.lastIndex;
  }
  if (last < s.length) out.push(s.slice(last));
  return out;
}

function Chip({ text }: { text: string }) {
  const logo = SKILL_LOGOS[text.replace(/ \(\d+\)$/, "")];
  return (
    <code>
      {logo && <img className="chip-logo" src={`/skills/${logo}.svg`} alt="" />}
      {text}
    </code>
  );
}

export const headingId = (text: string) =>
  "h-" +
  text
    .replace(/:[a-z-]+:/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const onlyChips = (s: string) => /^(`[^`]+`\s*)+$/.test(s.trim());

export default function Markdown({ src, open }: { src: string; open: (path: string) => void }) {
  const { files, gh } = useLive();
  const { locale } = useLocale();
  const L = pick(locale);
  const ctx: Ctx = { open, isFile: (p: string) => !!p && files.some((f) => matches(f, p)), L };
  const [zoom, setZoom] = useState<number | null>(null);
  const blocks = parse(src);
  const nodes: ReactNode[] = [];
  const shots: { src: string; alt: string }[] = [];
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    const next = blocks[i + 1];
    if (i === 0 && b.t === "img" && next?.t === "ul") {
      nodes.push(
        <div key={i} className="md-card">
          <img src={b.src} alt={b.alt} />
          <ul>
            {next.items.map((it, k) => (
              <li key={k}>{inline(it, ctx)}</li>
            ))}
          </ul>
        </div>,
      );
      i++;
    } else if (b.t === "h") {
      const H = (["h1", "h2", "h3"] as const)[b.level - 1];
      nodes.push(
        <H key={i} id={headingId(b.text)}>
          {inline(b.text, ctx)}
        </H>,
      );
    } else if (b.t === "p" && b.text === "[[contribuicoes]]") {
      if (gh?.contributions) nodes.push(<Contributions key={i} days={gh.contributions.days} locale={locale} />);
    } else if (b.t === "p" && b.text === "[[orcamento]]") nodes.push(<QuoteForm key={i} />);
    else if (b.t === "p" && b.text === "[[depoimentos]]") nodes.push(<Testimonials key={i} locale={locale} />);
    else if (b.t === "p") nodes.push(<p key={i} className={onlyChips(b.text) ? "md-chips" : undefined}>{inline(b.text, ctx)}</p>);
    else if (b.t === "ul" || b.t === "ol") {
      const L = b.t;
      nodes.push(
        <L key={i}>
          {b.items.map((it, k) => (
            <li key={k}>{inline(it, ctx)}</li>
          ))}
        </L>,
      );
    } else if (b.t === "quote") nodes.push(<blockquote key={i}>{inline(b.text, ctx)}</blockquote>);
    else if (b.t === "img") {
      const group = [b];
      while (blocks[i + 1]?.t === "img") group.push(blocks[++i] as typeof b);
      nodes.push(
        <div key={i} className={`md-gallery n${Math.min(group.length, 3)}`}>
          {group.map((g) => {
            const at = shots.push(g) - 1;
            return (
              <button key={g.src} className="md-shot" onClick={() => setZoom(at)} title={L("Ver maior", "View larger")}>
                <span className="md-shot-img">
                  <img src={g.src} alt={g.alt} loading="lazy" />
                </span>
                <span className="md-shot-cap">
                  <i className="codicon codicon-zoom-in" />
                  {g.alt}
                </span>
              </button>
            );
          })}
        </div>,
      );
    }
  }
  return (
    <>
      <div className="md">
        <div className="md-inner">{nodes}</div>
      </div>
      {zoom !== null && shots[zoom] && <Lightbox shots={shots} index={zoom} onChange={setZoom} L={L} />}
    </>
  );
}

function Testimonials({ locale }: { locale: Locale }) {
  return (
    <div className="md-quotes">
      {PUBLICADOS.map((d) => (
        <figure key={d.nome + d.empresa} className="md-quote">
          <i className="codicon codicon-quote" />
          <blockquote>{locale === "en" && d.textoEn ? d.textoEn : d.texto}</blockquote>
          <figcaption>
            <b>{d.nome}</b>
            <span>{[locale === "en" && d.cargoEn ? d.cargoEn : d.cargo, d.empresa].filter(Boolean).join(", ")}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function Lightbox({ shots, index, onChange, L }: { shots: { src: string; alt: string }[]; index: number; onChange: (i: number | null) => void; L: Ctx["L"] }) {
  const go = (d: number) => onChange((index + d + shots.length) % shots.length);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      else if (e.key === "ArrowRight") onChange((index + 1) % shots.length);
      else if (e.key === "ArrowLeft") onChange((index - 1 + shots.length) % shots.length);
      else return;
      e.preventDefault();
      e.stopPropagation();
    };
    addEventListener("keydown", onKey, true);
    return () => removeEventListener("keydown", onKey, true);
  }, [index, shots.length, onChange]);
  const shot = shots[index];
  return (
    <div className="md-lightbox" onClick={() => onChange(null)}>
      <button className="lb-btn lb-close codicon codicon-close" title={L("Fechar (Esc)", "Close (Esc)")} onClick={() => onChange(null)} />
      {shots.length > 1 && <button className="lb-btn codicon codicon-chevron-left" title={L("Anterior", "Previous")} onClick={(e) => (e.stopPropagation(), go(-1))} />}
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={shot.src} alt={shot.alt} />
        <figcaption>
          {shot.alt}
          {shots.length > 1 && <span className="lb-count">{index + 1} {L("de", "of")} {shots.length}</span>}
        </figcaption>
      </figure>
      {shots.length > 1 && <button className="lb-btn codicon codicon-chevron-right" title={L("Próxima", "Next")} onClick={(e) => (e.stopPropagation(), go(1))} />}
    </div>
  );
}

const LEVELS = ["#2d333b", "#0e4429", "#006d32", "#26a641", "#39d353"];
const MONTHS: Record<Locale, string[]> = {
  pt: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

function Contributions({ days, locale }: { days: Day[]; locale: Locale }) {
  const L = pick(locale);
  const MONTH = MONTHS[locale];
  const offset = new Date(`${days[0].date}T12:00:00Z`).getUTCDay();
  const cells: (Day | null)[] = [...Array(offset).fill(null), ...days];
  const weeks = Math.ceil(cells.length / 7);
  const labels: { col: number; name: string }[] = [];
  for (let w = 0; w < weeks; w++) {
    const first = cells.slice(w * 7, w * 7 + 7).find(Boolean);
    const m = first ? Number(first.date.slice(5, 7)) - 1 : -1;
    if (m >= 0 && labels.at(-1)?.name !== MONTH[m] && (w > 0 || offset < 4) && w < weeks - 2) labels.push({ col: w, name: MONTH[m] });
  }
  return (
    <div className="contrib">
      <div className="contrib-scroll">
        <div className="contrib-inner">
          <div className="contrib-months" style={{ gridTemplateColumns: `repeat(${weeks}, 14px)` }}>
            {labels.map((l) => (
              <span key={l.col} style={{ gridColumn: l.col + 1 }}>
                {l.name}
              </span>
            ))}
          </div>
          <div className="contrib-grid">
            {cells.map((d, i) =>
              d ? (
                <i key={i} style={{ background: LEVELS[d.level] }} title={`${d.count} ${d.count === 1 ? L("contribuição", "contribution") : L("contribuições", "contributions")} ${L("em", "on")} ${fmtDate(`${d.date}T12:00:00Z`, locale)}`} />
              ) : (
                <i key={i} style={{ visibility: "hidden" }} />
              ),
            )}
          </div>
        </div>
      </div>
      <div className="contrib-legend">
        {L("Menos", "Less")}
        {LEVELS.map((c) => (
          <i key={c} style={{ background: c }} />
        ))}
        {L("Mais", "More")}
      </div>
    </div>
  );
}

export function ExtIcon({ ext, big }: { ext: Ext; big?: boolean }) {
  const logo = SKILL_LOGOS[ext.name];
  const size = big ? (ext.label.length > 2 ? 34 : 56) : ext.label.length > 2 ? 13 : 18;
  return (
    <div className={big ? "ep-icon" : "ext-icon"} style={logo ? { background: "transparent" } : { background: ext.bg, color: ext.fg, fontSize: size }}>
      {logo ? <img src={`/skills/${logo}.svg`} alt="" /> : ext.label}
    </div>
  );
}
