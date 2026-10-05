import assert from "node:assert";
import { ICON_H, ICON_W, makeGrid, settle } from "../components/grid.ts";

const a = settle({ x: { c: 0, r: 0 }, y: { c: 0, r: 0 } }, ["x", "y"], 5, 5);
assert.deepStrictEqual(a.x, { c: 0, r: 0 });
assert.notDeepStrictEqual(a.y, a.x);

const b = settle({ x: { c: 40, r: -3 } }, ["x"], 5, 4);
assert.deepStrictEqual(b.x, { c: 4, r: 0 });

const c = settle({ x: { c: 0, r: 0 }, y: { c: 0, r: 0 } }, ["x", "y"], 1, 1);
assert.equal(Object.keys(c).length, 2);

for (const [w, h] of [[1907, 913], [1600, 870], [1366, 738], [390, 814]]) {
  const g = makeGrid(w, h);
  const last = g.toPx({ c: g.cols - 1, r: g.rows - 1 });
  assert.ok(last.x >= 0 && last.x + ICON_W <= w && last.y + ICON_H <= h, `${w}x${h} dentro`);
  assert.ok(w - (last.x + ICON_W) < 50 && h - (last.y + ICON_H) < 60, `${w}x${h} no canto`);
  for (const cell of [{ c: 0, r: 0 }, { c: g.cols - 1, r: g.rows - 1 }]) assert.deepStrictEqual(g.toCell(g.toPx(cell).x, g.toPx(cell).y), cell);
}

console.log("grid ok");
