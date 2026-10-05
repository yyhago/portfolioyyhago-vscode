import assert from "node:assert";
import { registerHooks } from "node:module";

registerHooks({
  resolve(spec, ctx, next) {
    try {
      return next(spec, ctx);
    } catch (e) {
      if (spec.startsWith(".")) return next(`${spec}.ts`, ctx);
      throw e;
    }
  },
});
const { buildFiles } = await import("../components/vscode/live.ts");
const { parseContributions } = await import("../lib/github.ts");

const off = buildFiles(null, []);
const sobre = off.find((f) => f.path === "docs/sobre-mim.md")!.content;
assert.ok(!sobre.includes("{{"), "token substituído");
assert.ok(off.some((f) => f.path === "docs/curriculo.md" && f.content.includes("Estou finalizando meu currículo")));
assert.ok(!off.some((f) => f.path === "docs/atividade.md"));

const repo = (name: string, topics: string[] = []) => ({
  name, description: `desc ${name}`, url: `https://github.com/yyhago/${name}`, homepage: "", language: "TypeScript",
  stars: 2, forks: 0, topics, pushedAt: "2026-10-01T10:00:00Z", createdAt: "2025-01-01T00:00:00Z", archived: false,
});
const gh = {
  followers: 40, following: 58, publicRepos: 2, since: "2022-08-30T14:05:37Z", fetchedAt: "2026-10-05T00:00:00Z",
  repos: [repo("novo-projeto", ["portfolio"]), repo("antigo")],
  contributions: { total: 467, days: [{ date: "2026-10-04", count: 3, level: 2 }] },
};
const cvs = [
  { name: "cv.pdf", href: "/cv/cv.pdf", lang: "pt" as const, kb: 90 },
  { name: "cv-en.pdf", href: "/cv/cv-en.pdf", lang: "en" as const, kb: 88 },
];
const on = buildFiles(gh, cvs, ["clientecube.jpg", "cube-1.png", "mundopet-1.jpg", "mundopet-2.jpg"]);
const get = (p: string) => on.find((f) => f.path === p)!.content;
assert.ok(get("docs/repositorios.md").includes("[novo-projeto](https://github.com/yyhago/novo-projeto)"));
assert.ok(get("docs/repositorios.md").includes("`TypeScript (2)`"));
assert.ok(get("docs/projetos.md").includes("Em destaque no GitHub") && get("docs/projetos.md").includes("novo-projeto"));
assert.ok(get("docs/atividade.md").includes("**467 contribuições**") && get("docs/atividade.md").includes("[[contribuicoes]]"));
assert.ok(get("docs/sobre-mim.md").includes("**2 repositórios públicos**"));
assert.ok(sobre.includes("em breve") && get("docs/sobre-mim.md").includes("[Currículo em PDF](curriculo.md)"), "link do CV muda quando o PDF existe");
assert.ok(get("docs/curriculo.md").includes("/cv/cv-en.pdf") && get("docs/curriculo.md").includes("English"));
assert.equal(new Set(on.map((f) => f.path)).size, on.length, "sem arquivos duplicados");

assert.ok(get("docs/projetos.md").includes("![Site da CUBE Inteligência, cliente da plataforma](/projetos/clientecube.jpg)"));
assert.ok(get("docs/projetos.md").includes("![CUBE, telas da plataforma](/projetos/cube-1.png)"), "print do projeto não pega a legenda do site do cliente");
assert.equal(get("docs/projetos.md").split("/projetos/mundopet-").length - 1, 2);
assert.ok(!on.some((f) => f.content.includes("{{")), "nenhum token sobrando");

const html = `<h2>
  467
  contributions
  in the last year</h2>
<td data-date="2026-10-04" id="d-1" data-level="2" class="x"></td>
<td data-date="2026-10-03" id="d-0" data-level="0"></td>
<tool-tip for="d-1" class="sr-only">3 contributions on October 4th.</tool-tip>
<tool-tip for="d-0">No contributions on October 3rd.</tool-tip>`;
const c = parseContributions(html)!;
assert.equal(c.total, 467);
assert.deepStrictEqual(c.days, [
  { date: "2026-10-03", level: 0, count: 0 },
  { date: "2026-10-04", level: 2, count: 3 },
]);
assert.equal(parseContributions("<html>mudou</html>"), null);

console.log("live ok");
