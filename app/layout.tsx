import type { Metadata, Viewport } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";
import "@vscode/codicons/dist/codicon.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Yhago Felipe Rocha Teles", url: SITE_URL }],
  creator: "Yhago Felipe Rocha Teles",
  keywords: [
    "Yhago Felipe",
    "desenvolvedor full stack",
    "desenvolvedor back-end",
    "NestJS",
    "Next.js",
    "TypeScript",
    "Node.js",
    "integração com ERP",
    "sistema sob medida",
    "automação de processos",
    "n8n",
    "Hortolândia",
    "Campinas",
    "full stack developer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: "Sistemas sob medida, integrações, APIs, sites e automação. Abra o VS Code e veja projetos, clientes, serviços e currículo.",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    firstName: "Yhago",
    lastName: "Felipe",
    username: "yyhago",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: "Sistemas sob medida, integrações, APIs, sites e automação. Veja projetos, clientes, serviços e currículo.",
  },
  robots: { index: true, follow: true },
  category: "technology",
};

export const viewport: Viewport = { themeColor: "#245edb" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
