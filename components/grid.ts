export type Cell = { c: number; r: number };
export const ICON_W = 78, ICON_H = 82;
const MIN_CW = 84, MIN_CH = 92, PAD = 6;

export function makeGrid(w: number, h: number) {
  const cols = Math.max(1, Math.floor((w - 2 * PAD) / MIN_CW));
  const rows = Math.max(1, Math.floor((h - 2 * PAD) / MIN_CH));
  const cw = (w - 2 * PAD) / cols;
  const ch = (h - 2 * PAD) / rows;
  return {
    cols,
    rows,
    toPx: ({ c, r }: Cell) => ({ x: Math.round(PAD + c * cw + (cw - ICON_W) / 2), y: Math.round(PAD + r * ch + (ch - ICON_H) / 2) }),
    toCell: (x: number, y: number): Cell => ({
      c: Math.max(0, Math.round((x - PAD - (cw - ICON_W) / 2) / cw)),
      r: Math.max(0, Math.round((y - PAD - (ch - ICON_H) / 2) / ch)),
    }),
  };
}

export function settle(want: Record<string, Cell>, order: string[], cols: number, rows: number) {
  const taken = new Set<string>();
  const out: Record<string, Cell> = {};
  for (const id of order) {
    const c0 = Math.min(cols - 1, Math.max(0, want[id].c));
    const r0 = Math.min(rows - 1, Math.max(0, want[id].r));
    let best: Cell = { c: c0, r: r0 };
    let bestD = Infinity;
    for (let c = 0; c < cols; c++)
      for (let r = 0; r < rows; r++) {
        const d = (c - c0) ** 2 + (r - r0) ** 2;
        if (d < bestD && !taken.has(`${c},${r}`)) [best, bestD] = [{ c, r }, d];
      }
    out[id] = best;
    taken.add(`${best.c},${best.r}`);
  }
  return out;
}
