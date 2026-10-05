import type { Lang } from "./data";

export type Tok = { t: string; c?: string; url?: string; b?: boolean };

const C = {
  comment: "#6a9955", str: "#ce9178", num: "#b5cea8", blue: "#569cd6", purple: "#c586c0",
  fn: "#dcdcaa", type: "#4ec9b0", var: "#9cdcfe", konst: "#4fc1ff", text: "#d4d4d4", tagBr: "#808080",
};
const BLUE = new Set("const let var function class interface type enum true false null undefined new this typeof as extends void readonly".split(" "));
const PURPLE = new Set("import export from return if else default for while switch case break continue await async try catch throw".split(" "));
const PRIM = new Set("string number boolean any unknown never object".split(" "));
const BRACKETS = ["#ffd700", "#da70d6", "#179fff"];

type St = { depth: number; jsx: boolean; inTag: boolean };

export function highlight(code: string, lang: Lang): Tok[][] {
  const lines = code.split("\n");
  if (lang === "md") return lines.map(md);
  const st: St = { depth: 0, jsx: false, inTag: false };
  return lines.map((line) => {
    const out: Tok[] = [];
    if (st.jsx && /^\s*\);?\s*$/.test(line)) st.jsx = false;
    (st.jsx ? jsx : js)(line, out, st, lang);
    if (lang === "tsx" && /return \($/.test(line)) st.jsx = true;
    return out;
  });
}

function bracket(s: string, st: St): Tok {
  if ("([{".includes(s)) return { t: s, c: BRACKETS[st.depth++ % 3] };
  st.depth = Math.max(0, st.depth - 1);
  return { t: s, c: BRACKETS[st.depth % 3] };
}

function js(src: string, out: Tok[], st: St, lang: Lang) {
  const re = /(\/\/.*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(`(?:[^`\\]|\\.)*`)|(\d[\d.]*)|([A-Za-z_$][\w$]*)|([()[\]{}])|(\s+|.)/gu;
  for (const m of src.matchAll(re)) {
    const [s, com, str, tpl, num, id, br] = m;
    const rest = src.slice(m.index + s.length);
    if (com) out.push({ t: s, c: C.comment });
    else if (str) out.push({ t: s, c: lang === "json" && /^\s*:/.test(rest) ? C.var : C.str, url: s.match(/(https?:|mailto:)[^"'\s]+/)?.[0] });
    else if (tpl) {
      for (const part of s.split(/(\$\{[^}]*\})/))
        if (part.startsWith("${")) out.push({ t: "${", c: C.blue }, { t: part.slice(2, -1), c: C.var }, { t: "}", c: C.blue });
        else if (part) out.push({ t: part, c: C.str });
    } else if (num) out.push({ t: s, c: C.num });
    else if (id) out.push({ t: s, c: ident(id, rest, out) });
    else if (br) out.push(bracket(s, st));
    else out.push({ t: s, c: C.text });
  }
}

function ident(id: string, rest: string, prev: Tok[]) {
  const before = prev.filter((t) => t.t.trim()).at(-1)?.t;
  if (BLUE.has(id)) return C.blue;
  if (PURPLE.has(id)) return C.purple;
  if (PRIM.has(id)) return C.type;
  if (before === "const") return C.konst;
  if (/^\s*\(/.test(rest)) return C.fn;
  if (/^[A-Z]/.test(id)) return C.type;
  return C.var;
}

function jsx(src: string, out: Tok[], st: St, lang: Lang) {
  const re = /(<\/?)([A-Za-z][\w.]*)|(\/?>)|(\{[^{}]*\})|("[^"]*")|(\s+)|([^<>{}"\s=]+)|(.)/gu;
  for (const m of src.matchAll(re)) {
    const [s, lt, tag, gt, expr, str, ws, word] = m;
    if (lt) {
      out.push({ t: lt, c: C.tagBr }, { t: tag, c: /^[A-Z]/.test(tag) ? C.type : C.blue });
      st.inTag = true;
    } else if (gt) {
      out.push({ t: s, c: C.tagBr });
      st.inTag = false;
    } else if (expr) {
      out.push(bracket("{", st));
      js(expr.slice(1, -1), out, st, lang);
      out.push(bracket("}", st));
    } else if (str) out.push({ t: s, c: C.str });
    else if (ws) out.push({ t: s });
    else if (word) out.push({ t: s, c: st.inTag ? C.var : C.text });
    else out.push({ t: s, c: C.text });
  }
}

function md(line: string): Tok[] {
  if (/^#{1,6} /.test(line)) return [{ t: line, c: C.blue, b: true }];
  if (line.startsWith(">")) return [{ t: line, c: C.comment }];
  const out: Tok[] = [];
  const list = line.match(/^(\s*)([-*]|\d+\.)(?= )/);
  if (list) {
    out.push({ t: list[1] }, { t: list[2], c: "#6796e6" });
    line = line.slice(list[0].length);
  }
  for (const m of line.matchAll(/(`[^`]+`)|(\*\*[^*]+\*\*)|([^`*]+|.)/gu))
    out.push(m[1] ? { t: m[0], c: C.str } : m[2] ? { t: m[0], c: C.blue, b: true } : { t: m[0], c: C.text });
  return out;
}
