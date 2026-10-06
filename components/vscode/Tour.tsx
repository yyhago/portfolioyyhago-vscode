import { useEffect, useEffectEvent, useRef, useState } from "react";
import type { Locale } from "../i18n";
import { useLocale } from "./live-context";

export type Prepare = "explorer" | "panel";
type Text = Record<Locale, string>;
type TourStep = { target?: string; icon: string; title: Text; text: Text; cta?: Text; prepare?: Prepare };

export const STEPS: TourStep[] = [
  {
    icon: "compass",
    title: { pt: "Bem-vindo ao meu portfólio", en: "Welcome to my portfolio" },
    text: {
      pt: "Isso aqui é um VS Code de verdade, funcionando no seu navegador. Em menos de um minuto eu te mostro onde está cada coisa.",
      en: "This is a real VS Code, running in your browser. In less than a minute I'll show you where everything is.",
    },
    cta: { pt: "Bora", en: "Let's go" },
  },
  {
    target: '[data-path="docs"]',
    prepare: "explorer",
    icon: "files",
    title: { pt: "Comece pela pasta docs", en: "Start with the docs folder" },
    text: {
      pt: "Cada arquivo aqui é uma parte do portfólio, como sobre mim, experiência, projetos e habilidades. É só clicar para abrir.",
      en: "Each file here is a part of the portfolio, like about me, experience, projects and skills. Just click to open.",
    },
  },
  {
    target: '[data-path="docs/projetos.md"]',
    prepare: "explorer",
    icon: "project",
    title: { pt: "Meus projetos", en: "My projects" },
    text: {
      pt: "Em projetos.md estão os sistemas que entreguei, com o problema de cada cliente, a solução, links e prints. Clique nas imagens para ver maior.",
      en: "projects.md has the systems I've delivered, with each client's problem, the solution, links and screenshots. Click the images to see them larger.",
    },
  },
  {
    target: '[data-path="docs/servicos.md"]',
    prepare: "explorer",
    icon: "rocket",
    title: { pt: "Precisa de um sistema?", en: "Need a system?" },
    text: {
      pt: "Em servicos.md eu conto como posso ajudar a sua empresa, os clientes que atendo hoje e como funciona. No final tem um formulário para pedir orçamento.",
      en: "In services.md I explain how I can help your company, the clients I work with today and how it works. At the end there's a form to ask for a quote.",
    },
  },
  {
    target: '[data-path="docs/curriculo.md"]',
    prepare: "explorer",
    icon: "file-pdf",
    title: { pt: "Meu currículo", en: "My resume" },
    text: {
      pt: "Meu currículo fica aqui, em português e em inglês, pronto para baixar. Também dá para abrir pelo ícone na área de trabalho.",
      en: "My resume lives here, in Portuguese and in English, ready to download. You can also open it from the desktop icon.",
    },
  },
  {
    target: ".vsc-editor-box",
    icon: "book",
    title: { pt: "Os arquivos abrem aqui", en: "Files open here" },
    text: {
      pt: "Tudo abre já formatado, em abas, igual no VS Code. Se quiser ver o texto puro, use o botão no canto superior direito do editor.",
      en: "Everything opens formatted, in tabs, just like in VS Code. To see the plain text, use the button in the top right corner of the editor.",
    },
  },
  {
    target: ".cc-box",
    icon: "search",
    title: { pt: "Procurando algo?", en: "Looking for something?" },
    text: {
      pt: "Clique aqui ou aperte Ctrl + P para achar qualquer arquivo pelo nome. A lupa da barra lateral pesquisa dentro dos textos.",
      en: "Click here or press Ctrl + P to find any file by name. The magnifier on the side bar searches inside the texts.",
    },
  },
  {
    target: ".act-links",
    icon: "mention",
    title: { pt: "Meus contatos", en: "My contacts" },
    text: {
      pt: "GitHub, LinkedIn, Instagram e e-mail ficam aqui do lado, a um clique.",
      en: "GitHub, LinkedIn, Instagram and email are right here, one click away.",
    },
  },
  {
    target: ".act.codicon-extensions",
    icon: "extensions",
    title: { pt: "Minhas tecnologias", en: "My tech stack" },
    text: {
      pt: "Na aba Extensões cada tecnologia que eu uso tem uma página contando onde e como eu usei.",
      en: "In the Extensions tab, every technology I use has a page about where and how I used it.",
    },
  },
  {
    target: ".vsc-panel-box",
    prepare: "panel",
    icon: "terminal",
    title: { pt: "Curte terminal?", en: "Into terminals?" },
    text: {
      pt: "Digite help aqui embaixo para ver os comandos. Dá para abrir arquivos, ver meus repositórios e até meu currículo.",
      en: "Type help down here to see the commands. You can open files, browse my repositories and even get my resume.",
    },
  },
  {
    target: ".sb-lang",
    icon: "globe",
    title: { pt: "Prefere inglês?", en: "Prefer Portuguese?" },
    text: {
      pt: "Este botão troca o portfólio inteiro para inglês, e o PT da barra de tarefas faz o mesmo.",
      en: "This button switches the whole portfolio to Portuguese, and so does the EN on the taskbar.",
    },
  },
  {
    target: ".sb-guide",
    icon: "pass",
    title: { pt: "É isso!", en: "That's it!" },
    text: {
      pt: "Se quiser rever este guia, é só clicar aqui embaixo. Agora fica à vontade para explorar.",
      en: "If you want to see this guide again, just click down here. Now feel free to explore.",
    },
    cta: { pt: "Ver meus projetos", en: "See my projects" },
  },
];

type Box = { x: number; y: number; w: number; h: number };
const CARD_W = 330, CARD_H = 200, GAP = 16, PAD = 6;

function place(box: Box | null, W: number, H: number) {
  if (!box) return { left: Math.max(12, (W - CARD_W) / 2), top: Math.max(12, (H - CARD_H) / 2) };
  const clamp = (v: number, max: number) => Math.min(Math.max(12, v), Math.max(12, max));
  if (box.x + box.w + GAP + CARD_W < W) return { left: box.x + box.w + GAP, top: clamp(box.y, H - CARD_H - 12) };
  if (box.y + box.h + GAP + CARD_H < H) return { left: clamp(box.x, W - CARD_W - 12), top: box.y + box.h + GAP };
  if (box.y - GAP - CARD_H > 0) return { left: clamp(box.x, W - CARD_W - 12), top: box.y - GAP - CARD_H };
  return { left: clamp(box.x - GAP - CARD_W, W - CARD_W - 12), top: clamp(box.y, H - CARD_H - 12) };
}

export default function Tour({ onPrepare, onClose, onFinish }: { onPrepare: (p: Prepare) => void; onClose: () => void; onFinish: () => void }) {
  const steps = STEPS;
  const { locale } = useLocale();
  const [i, setI] = useState(0);
  const [box, setBox] = useState<Box | null>(null);
  const [size, setSize] = useState({ W: 0, H: 0 });
  const root = useRef<HTMLDivElement>(null);
  const step = steps[i];
  const last = i === steps.length - 1;

  const prepare = useEffectEvent((p?: Prepare) => p && onPrepare(p));

  useEffect(() => {
    prepare(step.prepare);
    let frame = 0;
    const measure = () => {
      const el = root.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const t = step.target ? el.parentElement?.querySelector(step.target) : null;
      const tr = t?.getBoundingClientRect();
      setSize({ W: r.width, H: r.height });
      setBox(tr && tr.width > 0 && tr.height > 0 ? { x: tr.left - r.left, y: tr.top - r.top, w: tr.width, h: tr.height } : null);
    };
    const later = () => (frame = requestAnimationFrame(() => (frame = requestAnimationFrame(measure))));
    later();
    const t = setTimeout(measure, 350);
    const ro = new ResizeObserver(later);
    if (root.current) ro.observe(root.current);
    return () => (cancelAnimationFrame(frame), clearTimeout(t), ro.disconnect());
  }, [step]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if ((e.key === "ArrowRight" || e.key === "Enter") && last) onFinish();
      else if (e.key === "ArrowRight" || e.key === "Enter") setI(i + 1);
      else if (e.key === "ArrowLeft") setI(Math.max(0, i - 1));
      else return;
      e.preventDefault();
      e.stopPropagation();
    };
    addEventListener("keydown", onKey, true);
    return () => removeEventListener("keydown", onKey, true);
  }, [i, last, onClose, onFinish]);

  const pos = place(box, size.W, size.H);
  return (
    <div className="tour" ref={root} onMouseDown={(e) => e.stopPropagation()}>
      {box ? (
        <div className="tour-hole" style={{ left: box.x - PAD, top: box.y - PAD, width: box.w + PAD * 2, height: box.h + PAD * 2 }} />
      ) : (
        <div className="tour-dim" />
      )}
      <div key={i} className="tour-card" style={{ left: pos.left, top: pos.top, width: Math.min(CARD_W, size.W - 24) }}>
        <div className="tour-head">
          <i className={`codicon codicon-${step.icon}`} />
          <b>{step.title[locale]}</b>
          <span className="tour-count">
            {i + 1} {locale === "en" ? "of" : "de"} {steps.length}
          </span>
        </div>
        <p>{step.text[locale]}</p>
        <div className="tour-dots">
          {steps.map((_, k) => (
            <i key={k} className={k === i ? "on" : k < i ? "done" : ""} />
          ))}
        </div>
        <div className="tour-foot">
          <button className="tour-skip" onClick={onClose}>
            {last ? (locale === "en" ? "Explore on my own" : "Explorar sozinho") : locale === "en" ? "Skip guide" : "Pular guia"}
          </button>
          {i > 0 && (
            <button className="btn tour-back" onClick={() => setI(i - 1)}>
              {locale === "en" ? "Back" : "Voltar"}
            </button>
          )}
          <button className="btn" onClick={() => (last ? onFinish() : setI(i + 1))}>
            {step.cta?.[locale] ?? (locale === "en" ? "Next" : "Próximo")}
          </button>
        </div>
      </div>
    </div>
  );
}
