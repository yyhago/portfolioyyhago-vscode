const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? (vercel ? `https://${vercel}` : "http://localhost:3000")).replace(/\/$/, "");

export const SITE_NAME = "Yhago Felipe";
export const SITE_TITLE = "Yhago Felipe, Desenvolvedor Full Stack";
export const SITE_DESCRIPTION =
  "Desenvolvedor Full Stack em Hortolândia, SP. Sistemas sob medida, integrações com ERP, APIs em NestJS, sites e automação para empresas de vários nichos. Portfólio interativo com projetos, serviços e currículo.";
