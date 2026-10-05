import assert from "node:assert";
import { files, langOf } from "../components/vscode/data.ts";
import { highlight } from "../components/vscode/highlight.ts";

for (const f of files) {
  const lines = highlight(f.content, langOf(f.path));
  assert.deepStrictEqual(lines.map((l) => l.map((t) => t.t).join("")), f.content.split("\n"), f.path);
}

const [line] = highlight(`const x = "https://a.b"; // oi`, "ts");
assert.equal(line.find((t) => t.t === "x")?.c, "#4fc1ff");
assert.equal(line.find((t) => t.url)?.url, "https://a.b");
assert.equal(line.at(-1)?.c, "#6a9955");

const tsx = highlight(`  return (\n    <p className="a">oi {n}</p>\n  );`, "tsx")[1];
assert.equal(tsx.find((t) => t.t === "p")?.c, "#569cd6");
assert.equal(tsx.find((t) => t.t === "oi")?.c, "#d4d4d4");
assert.equal(tsx.find((t) => t.t === "className")?.c, "#9cdcfe");

console.log("highlight ok");
