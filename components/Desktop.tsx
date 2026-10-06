"use client";

import { type PointerEvent, useEffect, useLayoutEffect, useRef, useState } from "react";
import { GitHubMark, LinkedInMark, PdfDoc, RecycleBin, VSCodeLogo, WinFlag, XPFolder } from "./icons";
import { onDrag } from "./drag";
import { type Cell, ICON_H, ICON_W, makeGrid, settle } from "./grid";
import { dateLocale, detectLocale, LOCALE_KEY, pick, type Locale } from "./i18n";
import { GITHUB, LINKEDIN } from "./vscode/data";
import type { Live } from "./vscode/live";
import { LocaleCtx } from "./vscode/live-context";
import VSCode from "./vscode/VSCode";

type Win = "closed" | "open" | "min";
type Rect = { x: number; y: number; w: number; h: number };
const TASKBAR = 30;
const MIN_W = 480, MIN_H = 320;
const ICON_IDS = ["vscode", "cv", "github", "linkedin", "lixeira"];
const grid = () => makeGrid(innerWidth, innerHeight - TASKBAR);

function defaultLayout() {
  const { cols, rows } = grid();
  const right = cols - 1;
  return settle(
    { lixeira: { c: 0, r: 0 }, vscode: { c: right, r: 0 }, linkedin: { c: right, r: 1 }, github: { c: right, r: 2 }, cv: { c: right, r: 3 } },
    ICON_IDS,
    cols,
    rows,
  );
}
const gesture = { dragged: false };

function zoom(el: HTMLElement, target: Element | null, out: boolean) {
  const a = el.getBoundingClientRect();
  const b = target?.getBoundingClientRect() ?? { left: innerWidth / 2, top: innerHeight, width: 0, height: 0 };
  const dx = b.left + b.width / 2 - (a.left + a.width / 2);
  const dy = b.top + b.height / 2 - (a.top + a.height / 2);
  const small = { transform: `translate(${dx}px, ${dy}px) scale(.12)`, opacity: 0 };
  const full = { transform: "none", opacity: 1 };
  return el.animate(out ? [full, small] : [small, full], { duration: out ? 220 : 280, easing: "cubic-bezier(.2,.8,.2,1)" }).finished;
}

export default function Desktop({ live }: { live: Record<Locale, Live> }) {
  const [locale, setLocaleState] = useState<Locale>("pt");
  const [langMenu, setLangMenu] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [win, setWin] = useState<Win>("closed");
  const [max, setMax] = useState(false);
  const [rect, setRect] = useState<Rect>({ x: 0, y: 0, w: 0, h: 0 });
  const [busy, setBusy] = useState(false);
  const [focused, setFocused] = useState(true);
  const [startOpen, setStartOpen] = useState(false);
  const [balloon, setBalloon] = useState(false);
  const [opened, setOpened] = useState(false);
  const [off, setOff] = useState<null | "desligando" | "seguro">(null);
  const [band, setBand] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const [request, setRequest] = useState<{ path: string; n: number } | null>(null);
  const [boot, setBoot] = useState(0);
  const [now, setNow] = useState<Date | null>(null);
  const [cells, setCells] = useState<Record<string, Cell> | null>(null);
  const [iconDrag, setIconDrag] = useState<{ ids: string[]; dx: number; dy: number } | null>(null);
  const winRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLButtonElement>(null);
  const taskRef = useRef<HTMLButtonElement>(null);
  const prev = useRef<Win>("closed");
  const L = pick(locale);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    setLangMenu(false);
    try {
      localStorage.setItem(LOCALE_KEY, l);
    } catch {}
  };

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setCells(defaultLayout());
      const found = detectLocale();
      if (found) setLocaleState(found);
    });
    const onResize = () => setCells(defaultLayout());
    addEventListener("resize", onResize);
    return () => (cancelAnimationFrame(frame), removeEventListener("resize", onResize));
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "pt-BR";
  }, [locale]);

  useEffect(() => {
    if (off !== "desligando") return;
    const t = setTimeout(() => {
      window.close();
      setTimeout(() => setOff("seguro"), 400);
    }, 1800);
    return () => clearTimeout(t);
  }, [off]);

  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = requestAnimationFrame(tick);
    const t = setInterval(tick, 10_000);
    const show = setTimeout(() => setBalloon(true), 1500);
    const hide = setTimeout(() => setBalloon(false), 16_000);
    return () => (cancelAnimationFrame(first), [t, show, hide].forEach(clearTimeout));
  }, []);

  useLayoutEffect(() => {
    const from = prev.current;
    prev.current = win;
    if (win !== "open" || !winRef.current) return;
    if (from === "closed") zoom(winRef.current, iconRef.current, false);
    if (from === "min") zoom(winRef.current, taskRef.current, false);
  }, [win]);

  const open = (path?: string) => {
    setOpened(true);
    setStartOpen(false);
    setBalloon(false);
    if (path) setRequest((r) => ({ path, n: (r?.n ?? 0) + 1 }));
    if (win !== "closed") return (setWin("open"), setFocused(true));
    if (busy) return;
    setBusy(true);
    setTimeout(() => {
      const vw = innerWidth, vh = innerHeight - TASKBAR;
      const w = Math.min(1280, vw - 80), h = Math.min(820, vh - 60);
      setRect({ x: Math.round((vw - w) / 2), y: Math.max(8, Math.round((vh - h) / 2)), w, h });
      setMax(vw < 900);
      setWin("open");
      setFocused(true);
      setBusy(false);
    }, 700);
  };

  const minimize = async () => {
    if (winRef.current) await zoom(winRef.current, taskRef.current, true);
    setWin("min");
    setFocused(false);
  };

  const close = async () => {
    if (winRef.current) await winRef.current.animate([{ opacity: 1 }, { opacity: 0, transform: "scale(.96)" }], { duration: 160 }).finished;
    setWin("closed");
    setMax(false);
  };

  const dragWindow = (e: PointerEvent) => {
    if ((e.target as HTMLElement).closest("button, input, [data-nodrag]")) return;
    let r = rect, wasMax = max;
    onDrag(e, (dx, dy) => {
      if (wasMax) {
        if (Math.hypot(dx, dy) < 6) return;
        r = { ...r, x: e.clientX - r.w * (e.clientX / innerWidth), y: 0 };
        wasMax = false;
        setMax(false);
      }
      setRect({ ...r, x: r.x + dx, y: Math.min(innerHeight - TASKBAR - 30, Math.max(0, r.y + dy)) });
    });
  };

  const resize = (e: PointerEvent, dir: string) => {
    e.stopPropagation();
    const r0 = rect;
    onDrag(e, (dx, dy) => {
      let { x, y, w, h } = r0;
      if (dir.includes("e")) w = Math.max(MIN_W, r0.w + dx);
      if (dir.includes("s")) h = Math.max(MIN_H, r0.h + dy);
      if (dir.includes("w")) {
        w = Math.max(MIN_W, r0.w - dx);
        x = r0.x + r0.w - w;
      }
      if (dir.includes("n")) {
        h = Math.max(MIN_H, r0.h - dy);
        y = r0.y + r0.h - h;
      }
      setRect({ x, y, w, h });
    }, `${dir}-resize`);
  };

  const startBand = (e: PointerEvent) => {
    if (e.target !== e.currentTarget) return;
    setSelected([]);
    setFocused(false);
    setStartOpen(false);
    setLangMenu(false);
    const x0 = e.clientX, y0 = e.clientY;
    const icons = [...document.querySelectorAll<HTMLElement>("[data-icon]")].map((el) => ({ id: el.dataset.icon!, r: el.getBoundingClientRect() }));
    onDrag(e, (dx, dy) => {
      const b = { x: Math.min(x0, x0 + dx), y: Math.min(y0, y0 + dy), w: Math.abs(dx), h: Math.abs(dy) };
      setBand(b);
      setSelected(icons.filter(({ r }) => r.left < b.x + b.w && r.right > b.x && r.top < b.y + b.h && r.bottom > b.y).map((i) => i.id));
    });
    addEventListener("pointerup", () => setBand(null), { once: true });
  };

  const taskClick = () => {
    if (win === "min") return (setWin("open"), setFocused(true));
    if (focused) minimize();
    else setFocused(true);
  };

  const clampPx = (x: number, y: number) => ({
    x: Math.min(innerWidth - ICON_W, Math.max(0, x)),
    y: Math.min(innerHeight - TASKBAR - ICON_H, Math.max(0, y)),
  });

  const iconDown = (e: PointerEvent, id: string) => {
    e.stopPropagation();
    setStartOpen(false);
    setFocused(false);
    if (e.ctrlKey) return setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
    const ids = selected.includes(id) ? selected : [id];
    setSelected(ids);
    let moved = false;
    onDrag(
      e,
      (dx, dy) => {
        if (!moved && Math.hypot(dx, dy) < 5) return;
        moved = true;
        setIconDrag({ ids, dx, dy });
      },
      "",
      (dx, dy) => {
        gesture.dragged = moved;
        setIconDrag(null);
        if (!moved || !cells) return setSelected([id]);
        const want = { ...cells };
        for (const i of ids) {
          const p = grid().toPx(cells[i]);
          const { x, y } = clampPx(p.x + dx, p.y + dy);
          want[i] = grid().toCell(x, y);
        }
        const { cols, rows } = grid();
        setCells(settle(want, [...ICON_IDS.filter((i) => !ids.includes(i)), ...ids], cols, rows));
      },
    );
  };

  const ICONS = [
    { id: "vscode", label: "Visual Studio Code", img: <VSCodeLogo size={44} />, run: () => open() },
    { id: "cv", label: L("Meu Currículo", "My Resume"), img: <PdfDoc size={46} />, run: () => open("curriculo.md") },
    { id: "github", label: L("Meu GitHub", "My GitHub"), img: <GitHubMark size={42} color="#fff" />, run: () => window.open(GITHUB, "_blank") },
    { id: "linkedin", label: L("Meu LinkedIn", "My LinkedIn"), img: <LinkedInMark size={42} />, run: () => window.open(LINKEDIN, "_blank") },
    { id: "lixeira", label: L("Lixeira", "Recycle Bin"), img: <RecycleBin size={48} />, run: undefined },
  ];

  const START: [path: string, label: string, bold?: boolean][] = [
    ["sobre-mim.md", L("Sobre mim", "About me"), true],
    ["projetos.md", L("Meus projetos", "My projects"), true],
    ["servicos.md", L("Serviços", "Services"), true],
    ["servicos.md#orcamento", L("Pedir orçamento", "Get a quote"), true],
    ["experiencia.md", L("Experiência", "Experience"), true],
    ["contato.md", L("Contato", "Contact"), true],
    ["-", ""],
    ["habilidades.md", L("Habilidades", "Skills")],
    ["curriculo.md", L("Meu currículo", "My resume"), true],
    ["certificados.md", L("Certificações", "Certificates")],
    ["repositorios.md", L("Repositórios", "Repositories")],
  ];

  return (
    <LocaleCtx.Provider value={{ locale, setLocale }}>
    <div className={`xp ${busy ? "busy" : ""}`} onContextMenu={(e) => e.preventDefault()}>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
        <filter id="xp-sel">
          <feFlood floodColor="#316ac5" floodOpacity=".55" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>
      </svg>

      <div className="xp-desktop" onPointerDown={startBand}>
        {cells &&
          ICONS.map(({ id, label, img, run }) => {
            const moving = iconDrag?.ids.includes(id);
            const p = grid().toPx(cells[id]);
            const { x, y } = moving ? clampPx(p.x + iconDrag!.dx, p.y + iconDrag!.dy) : p;
            return (
              <button
                key={id}
                ref={id === "vscode" ? iconRef : undefined}
                data-icon={id}
                className={`xp-icon ${selected.includes(id) ? "sel" : ""} ${moving ? "moving" : ""} ${id === "vscode" && !opened ? "hint" : ""}`}
                style={{ left: x, top: y }}
                onPointerDown={(e) => iconDown(e, id)}
                onDoubleClick={() => !gesture.dragged && run?.()}
                onClick={(e) => {
                  const touch = (e.nativeEvent as globalThis.PointerEvent).pointerType === "touch" || matchMedia("(pointer: coarse)").matches;
                  if (touch && !gesture.dragged) run?.();
                }}
                onKeyDown={(e) => e.key === "Enter" && run?.()}
              >
                <span className="xp-icon-img">{img}</span>
                <span className="xp-icon-label">{label}</span>
              </button>
            );
          })}
        {band && <div className="xp-band" style={{ left: band.x, top: band.y, width: band.w, height: band.h }} />}
      </div>

      {win !== "closed" && (
        <div
          ref={winRef}
          className={`xp-win ${max ? "max" : ""}`}
          style={max ? { left: 0, top: 0, width: "100%", height: `calc(100% - ${TASKBAR}px)` } : { left: rect.x, top: rect.y, width: rect.w, height: rect.h }}
          hidden={win === "min"}
          onPointerDownCapture={() => (setFocused(true), setStartOpen(false), setLangMenu(false))}
        >
          <VSCode
            key={boot}
            live={live[locale]}
            focused={focused && win === "open"}
            maximized={max}
            request={request}
            onMinimize={minimize}
            onMaximize={() => setMax((m) => !m)}
            onClose={close}
            onReload={() => setBoot((b) => b + 1)}
            onDragStart={dragWindow}
          />
          {!max && ["n", "s", "e", "w", "ne", "nw", "se", "sw"].map((d) => <div key={d} className={`rz rz-${d}`} onPointerDown={(e) => resize(e, d)} />)}
        </div>
      )}

      {startOpen && (
        <div className="xp-sm">
          <div className="xp-sm-head">
            <img src="/yhago.jpg" alt="" onError={(e) => (e.currentTarget.style.visibility = "hidden")} />
            <span>Yhago Felipe</span>
          </div>
          <div className="xp-sm-body">
            <div className="xp-sm-left">
              <button className="xp-sm-item big" onClick={() => open()}>
                <VSCodeLogo size={32} />
                <span>
                  <b>Visual Studio Code</b>
                  <small>{L("Meu portfólio", "My portfolio")}</small>
                </span>
              </button>
              <a className="xp-sm-item big" href={GITHUB} target="_blank" rel="noreferrer" onClick={() => setStartOpen(false)}>
                <GitHubMark size={32} color="#222" />
                <span>
                  <b>GitHub</b>
                  <small>{L("Meus repositórios", "My repositories")}</small>
                </span>
              </a>
              <a className="xp-sm-item big" href={LINKEDIN} target="_blank" rel="noreferrer" onClick={() => setStartOpen(false)}>
                <LinkedInMark size={32} />
                <span>
                  <b>LinkedIn</b>
                  <small>{L("Vamos conectar", "Let's connect")}</small>
                </span>
              </a>
              <div className="xp-sm-sep" />
              <div className="xp-sm-all">
                {L("Todos os programas", "All Programs")} <span className="xp-arrow">
                  <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden>
                    <path d="M1 0l7 4-7 4Z" fill="#fff" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="xp-sm-right">
              {START.map(([path, label, bold], i) =>
                path === "-" ? (
                  <div key={i} className="xp-sm-sep" />
                ) : (
                  <button key={i} className="xp-sm-item" onClick={() => open(path)}>
                    <XPFolder /> {bold ? <b>{label}</b> : label}
                  </button>
                ),
              )}
            </div>
          </div>
          <div className="xp-sm-foot">
            <button onClick={() => location.reload()}>
              <span className="xp-pw key">⟲</span> {L("Fazer logoff", "Log Off")}
            </button>
            <button onClick={() => (setStartOpen(false), setOff("desligando"))}>
              <span className="xp-pw">⏻</span> {L("Desligar", "Turn Off Computer")}
            </button>
          </div>
        </div>
      )}

      {balloon && (
        <div className="xp-balloon" role="status">
          <button className="xp-balloon-x" onClick={() => setBalloon(false)} aria-label={L("Fechar", "Close")}>
            ×
          </button>
          <b>
            <span className="xp-info">i</span> {L("E aí, tudo certo?", "Hey there!")}
          </b>
          {locale === "en" ? (
            <p>
              This is my portfolio. Double click <b>Visual Studio Code</b> right here to see what I do, some of the many clients I work with and my resume. On a phone, just tap.
            </p>
          ) : (
            <p>
              Esse é meu portfólio. Dá dois cliques no <b>Visual Studio Code</b> aqui do lado para ver o que eu faço, alguns dos muitos clientes que atendo e meu currículo. No celular, é só tocar.
            </p>
          )}
          <button className="xp-balloon-lang" onClick={() => setLocale(locale === "en" ? "pt" : "en")}>
            {locale === "en" ? "Ver em português" : "Read it in English"}
          </button>
        </div>
      )}

      {langMenu && (
        <div className="xp-lang-menu" role="menu">
          {(["pt", "en"] as const).map((l) => (
            <button key={l} role="menuitemradio" aria-checked={locale === l} className={locale === l ? "on" : ""} onClick={() => setLocale(l)}>
              <span className="xp-lang-code">{l.toUpperCase()}</span>
              {l === "pt" ? "Português (Brasil)" : "English"}
            </button>
          ))}
        </div>
      )}

      <div className="xp-taskbar">
        <button className={`xp-start ${startOpen ? "on" : ""}`} onClick={() => (setStartOpen((o) => !o), setLangMenu(false))}>
          <WinFlag size={22} />
          <span>{L("iniciar", "start")}</span>
        </button>
        <div className="xp-tasks">
          {win !== "closed" && (
            <button ref={taskRef} className={`xp-task ${win === "open" && focused ? "on" : ""}`} onClick={taskClick}>
              <VSCodeLogo size={16} />
              <span>Visual Studio Code</span>
            </button>
          )}
        </div>
        <button
          className={`xp-lang ${langMenu ? "on" : ""}`}
          title={L("Idioma, clique para trocar", "Language, click to change")}
          aria-label={L("Trocar idioma", "Change language")}
          onClick={() => (setLangMenu((v) => !v), setStartOpen(false), setBalloon(false))}
        >
          {locale.toUpperCase()}
        </button>
        <div className="xp-tray">
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
            <path d="M2 6h3l4-3v10l-4-3H2Z" fill="#fff" />
            <path d="M11 5.5a3.5 3.5 0 0 1 0 5M12.5 3.5a6 6 0 0 1 0 9" stroke="#fff" fill="none" strokeWidth="1.2" />
          </svg>
          <span title={now?.toLocaleDateString(dateLocale(locale), { dateStyle: "full" })}>
            {now?.toLocaleTimeString(dateLocale(locale), { hour: "2-digit", minute: "2-digit" })}
          </span>
        </div>
      </div>

      {off === "desligando" && (
        <div className="xp-off">
          <WinFlag size={64} />
          <p>{L("Desligando...", "Shutting down...")}</p>
        </div>
      )}
      {off === "seguro" && (
        <div className="xp-safe" onClick={() => setOff(null)} title={L("Clique para ligar de novo", "Click to turn it back on")}>
          <p>{L("É seguro desligar o computador.", "It's now safe to turn off your computer.")}</p>
          <small>{L("Pode fechar esta aba. Ou clique para ligar de novo.", "You can close this tab. Or click to turn it back on.")}</small>
        </div>
      )}
    </div>
    </LocaleCtx.Provider>
  );
}
