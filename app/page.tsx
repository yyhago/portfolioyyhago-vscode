import Desktop from "@/components/Desktop";
import SeoText from "@/components/SeoText";
import { EMAIL, GITHUB, INSTAGRAM, LINKEDIN } from "@/components/vscode/data";
import { buildFiles } from "@/components/vscode/live";
import { getCvs, getGitHub, getPrints } from "@/lib/github";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

export const revalidate = 600;

const SERVICES = [
  ["Sistemas sob medida", "Painéis administrativos, sistemas de gestão e portais com login, permissão por perfil e dados separados por empresa."],
  ["Integrações e APIs", "Integração com ERPs como Bling, OMIE, ERPFLEX e Datasul/TOTVS, CRM, gateways de pagamento e logística."],
  ["Dados, dashboards e IA", "Painéis em tempo real, coleta de dados públicos e análise de texto com IA."],
  ["Sites e landing pages", "Sites rápidos no celular, bem posicionados no Google e fáceis de atualizar."],
  ["E-commerce e saída de sistema legado", "Migração de sistemas antigos para uma plataforma própria sem parar a operação."],
  ["Automação de processos", "Automação de tarefas repetitivas com n8n, Python e robôs de coleta de dados."],
];

function jsonLd() {
  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#yhago`,
    name: "Yhago Felipe Rocha Teles",
    alternateName: "Yhago Felipe",
    jobTitle: "Desenvolvedor Full Stack",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}/yhago.jpg`,
    email: `mailto:${EMAIL}`,
    sameAs: [GITHUB, LINKEDIN, INSTAGRAM],
    address: { "@type": "PostalAddress", addressLocality: "Hortolândia", addressRegion: "SP", addressCountry: "BR" },
    knowsLanguage: ["pt-BR", "en"],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Centro Universitário Estácio de Sá" },
      { "@type": "EducationalOrganization", name: "ETEC Hortolândia" },
      { "@type": "EducationalOrganization", name: "SENAI Dr. Celso Charuri" },
    ],
    knowsAbout: ["TypeScript", "Node.js", "NestJS", "Next.js", "React", "Python", "PHP", "PostgreSQL", "MySQL", "Docker", "Nginx", "n8n", "Integração com ERP", "Clean Architecture", "Automação de processos"],
    hasCredential: ["Microsoft Azure AZ-900", "Microsoft Azure AI-900", "Microsoft Azure SC-900"].map((name) => ({ "@type": "EducationalOccupationalCredential", name })),
  };
  const service = {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#servicos`,
    name: "Yhago Felipe, desenvolvimento de software",
    url: SITE_URL,
    image: `${SITE_URL}/yhago.jpg`,
    email: EMAIL,
    founder: { "@id": `${SITE_URL}/#yhago` },
    areaServed: { "@type": "Country", name: "Brasil" },
    address: { "@type": "PostalAddress", addressLocality: "Hortolândia", addressRegion: "SP", addressCountry: "BR" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços",
      itemListElement: SERVICES.map(([name, description]) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name, description } })),
    },
  };
  const site = { "@type": "WebSite", "@id": `${SITE_URL}/#site`, url: SITE_URL, name: "Yhago Felipe", inLanguage: ["pt-BR", "en"], author: { "@id": `${SITE_URL}/#yhago` } };
  return JSON.stringify({ "@context": "https://schema.org", "@graph": [person, service, site] }).replace(/</g, "\\u003c");
}

export default async function Home() {
  const gh = await getGitHub();
  const cvs = getCvs();
  const prints = getPrints();
  const live = {
    pt: { files: buildFiles(gh, cvs, prints, "pt"), gh, cvs },
    en: { files: buildFiles(gh, cvs, prints, "en"), gh, cvs },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd() }} />
      <SeoText files={live.pt.files} />
      <Desktop live={live} />
    </>
  );
}
