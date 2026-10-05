import type { Metadata, Viewport } from "next";
import "@vscode/codicons/dist/codicon.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yhago Felipe · Desenvolvedor Full Stack",
  description: "Portfólio interativo de Yhago Felipe, desenvolvedor Full Stack (TypeScript, NestJS, Next.js): um VS Code funcionando dentro de um Windows XP.",
};

export const viewport: Viewport = { themeColor: "#245edb" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
