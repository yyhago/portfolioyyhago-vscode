import Desktop from "@/components/Desktop";
import { buildFiles } from "@/components/vscode/live";
import { getCvs, getGitHub, getPrints } from "@/lib/github";

export const revalidate = 600;

export default async function Home() {
  const gh = await getGitHub();
  const cvs = getCvs();
  return <Desktop live={{ files: buildFiles(gh, cvs, getPrints()), gh, cvs }} />;
}
