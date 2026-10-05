export const ROOT = "portfolio-yhago";
export const GITHUB = "https://github.com/yyhago";
export const LINKEDIN = "https://www.linkedin.com/in/yhagofelipe";
export const EMAIL = "yhago.felipe.teles@gmail.com";
export const INSTAGRAM = "https://www.instagram.com/yyhago_";

export type Lang = "ts" | "tsx" | "json" | "md";
export type VFile = { path: string; content: string; git?: "M" | "U" };

export const files: VFile[] = [
  {
    path: ".vscode/settings.json",
    content: `{
  "editor.fontSize": 14,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "workbench.colorTheme": "Default Dark+",
  "workbench.iconTheme": "vs-seti",
  "markdown.preview.fontSize": 15
}
`,
  },
  {
    path: "docs/sobre-mim.md",
    git: "M",
    content: `![Yhago Felipe](/yhago.jpg)

* :account: Yhago Felipe Rocha Teles
* :terminal-bash: Desenvolvedor Full Stack, com foco em back-end
* :location: Hortolândia, São Paulo, Brasil
* :mortar-board: Engenharia de Software, Estácio
* :rocket: Aberto a novas oportunidades
* :file-pdf: {{cv-link}}

> Oi, que bom que você chegou até aqui! Esse é o meu portfólio. Dá uma olhada no que eu faço e nos projetos que entreguei, e se fizer sentido para o seu time, me chama. {{cv-frase}}

## :person: Sobre mim

Me chamo Yhago Felipe, sou desenvolvedor Full Stack e estou terminando o bacharelado em **Engenharia de Software**. Sou técnico em Desenvolvimento de Sistemas pelo **SENAI** e pela **ETEC**.

O que eu faço bem é transformar operação manual e sistema fragmentado em plataforma própria e integrada. Construí do zero um sistema que sustenta uma empresa de ponta a ponta, do pedido no e-commerce ao despacho com nota fiscal, em **Next.js, NestJS e TypeScript**, substituindo o legado em WordPress sem parar a operação.

Back-end é onde tenho mais experiência. Em consultorias, entreguei APIs em **Node.js e NestJS** com **Clean Architecture** para mais de **20 projetos** de clientes, de agronegócio, saúde, gestão financeira e logística. Isso me acostumou a lidar com regra de negócio complexa e com requisito levantado direto com o cliente, em reunião.

Entrei na área pelo time de **Cibersegurança** de uma indústria farmacêutica, criando automações em **Python** que cortaram **40%** do tempo de operações manuais. Foi ali que nasceu a lógica de *automatizar antes de escalar*, que eu aplico em toda arquitetura que desenho.

## :tools: O que eu faço

* **APIs RESTful** em Node.js e NestJS, com Clean Architecture, autenticação, RBAC e documentação no Swagger
* **Plataformas completas** com Next.js e TypeScript, do banco de dados ao front-end
* **Integração de sistemas**: ERPs (Bling, OMIE, ERPFLEX e Datasul/TOTVS), CRM, pagamento e logística
* **Automação de processos** com n8n, Python e web scraping
* **Modernização de sistema legado** sem parar a operação
* **Infraestrutura**: VPS, Docker, Nginx, CI/CD, AWS e Azure

## :rocket: Alguns números

* **Mais de 20 projetos** de clientes entregues com APIs em Node.js e NestJS
* **40% menos tempo** em operações manuais com as automações em Python
* **4 ERPs integrados**: Bling, OMIE, ERPFLEX e Datasul/TOTVS
* {{github}}

## :search: O que estou buscando

Estou aberto a novas oportunidades como desenvolvedor **Full Stack** ou **Back-end**. Se o seu time precisa de alguém para construir API, integrar sistemas ou tirar processo manual do caminho, vamos conversar.

## :comment-discussion: Vamos conversar?

Me chama no [LinkedIn](https://www.linkedin.com/in/yhagofelipe), no [GitHub](https://github.com/yyhago) ou por [e-mail](mailto:yhago.felipe.teles@gmail.com).
`,
  },
  {
    path: "docs/experiencia.md",
    content: `# :briefcase: Experiência

O que eu faço hoje e o que fiz em cada empresa. {{cv-frase}}

## Freecook Brasil

**Desenvolvedor de Software Full Stack**, CLT
*mar. de 2026 até hoje, Campinas, SP, presencial*

Cuido da arquitetura e da evolução técnica de todo o ecossistema de TI da empresa, com foco em performance, escalabilidade e automação de processos.

* Arquitetei e construí do zero a plataforma que sustenta a operação de ponta a ponta, do pedido no e-commerce até a baixa no estoque: loja virtual, painel administrativo, portal comercial e site institucional em um sistema só.
* Conduzi a saída do legado em **WordPress** para uma stack própria em **Next.js, NestJS e TypeScript**, definindo padrão de código, estrutura de API e a estratégia de migração sem parar a operação.
* Back-end em **PHP e MySQL** no e-commerce legado durante a transição, com módulos e integrações sob medida.
* Automações no **n8n** orquestrando ERP, CRM (RD Station) e sistemas internos.
* Migrei a integração do ERP legado (**ERPFLEX**) para o atual (**OMIE**), mantendo estoque, pedidos e clientes consistentes.
* Arquivos no **Amazon S3** com presigned URLs e infraestrutura própria (**VPS, Docker, Nginx e SSL**) com backup automatizado.
* Integração com gateways de pagamento, APIs REST e logística (Frenet).

\`Next.js\` \`NestJS\` \`TypeScript\` \`Node.js\` \`PHP\` \`MySQL\` \`n8n\` \`Amazon S3\` \`Docker\` \`Nginx\`

Alguns dos sistemas que estão no ar:

* [:link-external: Loja oficial](https://lojaoficial.freecook.com.br/)
* [:link-external: Portal comercial](https://comercial.freecook.com.br/)
* [:link-external: Equipamentos para cozinha profissional](https://equipamentos-para-cozinha-profissional.freecook.com.br/)

{{prints:freecookloja|Loja oficial da Freecook}}
{{prints:freecookcomercial|Portal comercial da Freecook}}
{{prints:freecookequipamentos|Equipamentos para cozinha profissional}}

## CroSoften Tecnologia

**Desenvolvedor de Software Back-end**, PJ
*jan. de 2026 a ago. de 2026, São Paulo, SP, remoto*

Desenvolvimento e manutenção de APIs RESTful em ambiente corporativo, atendendo **mais de 20 projetos** de clientes diferentes ao mesmo tempo.

* APIs com **Node.js, NestJS e TypeScript**, aplicando **Clean Architecture** para manter projetos de longo prazo fáceis de evoluir.
* Regras de negócio complexas, autenticação, autorização e integração com várias APIs externas.
* Documentação completa no **Swagger**, consumida ao mesmo tempo por apps iOS e front-ends em Angular.
* Levantamento de requisitos direto com o cliente, traduzindo necessidade de negócio em arquitetura.
* Várias demandas em paralelo, com entrega contínua, em Scrum e Kanban.
* Projetos de agronegócio (Vitrine do Campo), saúde (Cardio Shop), gestão financeira (SAFE/ERICA) e logística (Ships Manager), entre outros.

\`Node.js\` \`NestJS\` \`TypeScript\` \`Clean Architecture\` \`Swagger\` \`Angular\`

Alguns dos projetos em que trabalhei:

* [:link-external: 2Clicks](https://2clicks.app/), para encontrar o que você precisa na cidade em poucos cliques
* [:link-external: Minha Revenda](https://minharevenda.com.br/), gestão para revendedores de cosméticos
* [:link-external: Cupom Clube](https://cupomclube.com.br/)
* [:link-external: LeSalvi](https://lesalvi.com/)
* [:link-external: Vermont](https://vermont.com.br/), contact center omnichannel
* [:link-external: Vitrine do Campo](https://vitrinedocampo.com.br/), consultoria agronômica e crédito rural
* Também Academia Alma, AJ Crypto, Alvino, Cardio Shop, City, Conexes, Corremaq, Erasmo, Fluitz, Pendragon, Copeme, Regia Maria, SAFE/ERICA, Sapyem, Ships Manager, Tito e Wincoin.

{{prints:2clicks|2Clicks}}
{{prints:minharevenda|Minha Revenda}}
{{prints:cupomclube|Cupom Clube}}
{{prints:lesalvi|LeSalvi}}
{{prints:vitrinedocampo|Vitrine do Campo}}

## DBS System Consultoria

**Desenvolvedor de Software Full Stack**, PJ
*set. de 2025 a dez. de 2025, Campinas, SP, remoto*

Modernização de sistemas legados em ambiente industrial, trocando fluxo manual por integração automatizada via API.

* Refiz as integrações com o ERP **Datasul (TOTVS)**, trocando a troca manual de dados por consumo direto de API e diminuindo o risco de inconsistência.
* APIs RESTful em **PHP e Node.js**, com **MySQL e PostgreSQL**.
* Reconstrução das telas legadas com **Next.js e TypeScript**, sem parar a produção.
* Levantamento de requisitos com a equipe de negócio para achar os gargalos e propor a nova arquitetura.
* Projeto de escopo fechado entregue em 4 meses, com autonomia total sobre as decisões técnicas.

\`PHP\` \`Node.js\` \`Next.js\` \`TypeScript\` \`MySQL\` \`PostgreSQL\`

Alguns dos clientes para quem desenvolvi:

* [:link-external: NG Metalúrgica](https://www.ngmetalurgica.com.br/)
* [:link-external: Pronutrition](https://pronutrition.com.br/)

{{prints:ngmetalurgica|NG Metalúrgica}}
{{prints:pronutrition|Pronutrition}}

## Grupo EMS

**Jovem Aprendiz em TI, Cibersegurança**, CLT
*jan. de 2025 a set. de 2025, Hortolândia, SP, presencial*

Minha primeira experiência em empresa, no time de Cibersegurança, focado em automação de processos internos e proteção de dados.

* Aplicações internas em **Python** (Streamlit, FastAPI e Flask) para as demandas da área de segurança.
* Automações que reduziram em **40%** o tempo de operações manuais da equipe. Foi meu primeiro contato real com a ideia de automatizar antes de escalar.
* Pipelines de **CI/CD** para rodar e monitorar as automações.
* Integração com Supabase, Firebase, PostgreSQL e MySQL para juntar o fluxo de dados entre sistemas.

\`Python\` \`Streamlit\` \`FastAPI\` \`Flask\` \`Supabase\` \`Firebase\` \`PostgreSQL\` \`MySQL\`
`,
  },
  {
    path: "docs/projetos.md",
    git: "M",
    content: `# :project: Projetos

Alguns projetos que entreguei, com o problema de cada cliente e como eu resolvi. Os de cliente ficam em repositório privado, por contrato, então nem sempre dá para mostrar código ou tela.

## SafetyKeeper, gestão de SST

*Full Stack, cliente JCFireWall, mai. de 2026 a jun. de 2026*

\`NestJS\` \`TypeScript\` \`Next.js\` \`PostgreSQL\` \`Docker\` \`Nginx\`

**Dor do cliente.** A JCFireWall atendia vários clientes corporativos e controlava a conformidade de SST de todos eles em planilha, sem separação confiável entre empresas, sem histórico de quem alterou o quê e sem visibilidade de vencimentos.

**Solução.**

* Back-end modular em **NestJS**, separando clientes, usuários, conformidade e documentação em módulos independentes e testáveis.
* **Multitenancy** com isolamento de dados por empresa e **RBAC** por perfil, então cada cliente só enxerga o que é dele.
* **PostgreSQL** com índices pensados para as consultas de conformidade e para a trilha de auditoria.
* Front-end em **Next.js** para documentos, vencimentos e status de conformidade, com telas diferentes por perfil.
* Deploy em VPS com Docker, Nginx, SSL e backup automatizado.

O sistema é interno e fica atrás de login. [:link-external: Site da JCFireWall](https://jcfirewall.com.br)

{{prints:safetykeeper|SafetyKeeper, telas do sistema}}
{{prints:clientejcfirewall|Site da JCFireWall, cliente do SafetyKeeper}}

## CUBE, análise política

*Full Stack, cliente CUBE Inteligência, jul. de 2025 a nov. de 2025*

\`React\` \`TypeScript\` \`Vite\` \`Node.js\` \`Express\` \`Prisma\` \`PostgreSQL\` \`Gemini AI\`

**Dor do cliente.** A CUBE precisava acompanhar em tempo real o que saía sobre temas e figuras políticas, medir o tom dessas menções e mostrar tudo em painéis que aguentassem pico de acesso em período eleitoral, com permissões diferentes para a equipe interna e para os clientes.

**Solução.**

* Front-end em **React 18 com Vite** e back-end em **Node.js e Express**, separados, com deploy versionado para rollback rápido.
* **React Query** para cache e revalidação, e dashboards em tempo real com Chart.js e Recharts.
* **Prisma** com PostgreSQL, migrations versionadas e índices estratégicos.
* Autenticação **JWT** com rotação de refresh token e **RBAC** por rota.
* Coleta de dados públicos com **Apify** e análise de sentimento com a API do **Google Gemini**.
* Agregador de RSS com node-cron e deploy em VPS com Nginx e **PM2** em cluster mode.

A plataforma é privada, por contrato. [:link-external: Site da CUBE](https://cubeinteligencia.com.br)

{{prints:cube|CUBE, telas da plataforma}}
{{prints:clientecube|Site da CUBE Inteligência, cliente da plataforma}}

## Landing page, Raquel Ribeiro Advocacia

*Front-end, set. de 2025 a out. de 2025*

\`React\` \`TypeScript\` \`Vite\` \`Tailwind CSS\` \`Vercel\`

**Dor do cliente.** O escritório queria aparecer no Google para quem procura advogado trabalhista na região, com uma página rápida no celular que virasse contato pelo WhatsApp e pelo formulário.

**Solução.**

* React 18, TypeScript e Vite, com Tailwind e layout mobile first testado em aparelho de verdade.
* SEO técnico com React Helmet, HTML semântico e dados estruturados schema.org.
* Lazy loading e imagens WebP, chegando a **Lighthouse acima de 95** em todas as categorias e **LCP abaixo de 2,5 s**.
* Acessibilidade **WCAG 2.1 nível A** e deploy na Vercel com preview a cada pull request.

{{prints:advocacia|Landing page da Raquel Ribeiro Advocacia}}

## Site da SGI Treinamentos e Assessoria

*Full Stack, ago. de 2025 a set. de 2025*

\`PHP\` \`WordPress\` \`MySQL\` \`Sass\`

**Dor do cliente.** A SGI precisava de um site no ar rápido, que a equipe conseguisse atualizar sozinha, com formulário de contato confiável.

**Solução.**

* WordPress com tema próprio em **PHP 8**, organizado em um esquema inspirado em MVC.
* Formulários via AJAX com nonce e sanitização, prevenindo CSRF e XSS.
* Tabelas próprias no banco para os dados estruturados, mantendo as consultas rápidas.
* Deploy automatizado via Git na Hostinger, com rollback.

[:link-external: sgitreinamentosassessoria.com](https://sgitreinamentosassessoria.com/)

{{prints:sgi|Site da SGI Treinamentos e Assessoria}}

## Cyberbot, assistente de cibersegurança

*Protótipo em equipe, Grupo EMS, jun. de 2025*

\`Python\` \`Streamlit\` \`Git\`

Protótipo que fizemos em quatro desenvolvedores para ajudar na conscientização sobre segurança digital dentro da empresa: um chatbot para dúvidas, um gerador e verificador de senhas e um simulador de phishing. Feito em Python com processamento de linguagem natural e interface em Streamlit.

{{prints:cyberbot|Cyberbot, telas do protótipo}}

## MundoPet, meu TCC

*Full Stack, ETEC Hortolândia, 2024*

\`Node.js\` \`Express\` \`React\` \`Redux\` \`MongoDB\` \`Bootstrap\`

Marketplace voltado para o mercado pet, com back-end em Node.js e Express, MongoDB e front-end em React com Redux. Mostra os pet shops mais próximos no mapa e tem carrinho, cadastro e pagamento.

[:github: Ver o código no GitHub](https://github.com/yyhago/pet-marketplace-etec)

{{prints:mundopet|MundoPet}}
`,
  },
  {
    path: "docs/habilidades.md",
    content: `# :tools: Habilidades

O que eu uso no dia a dia. Na aba **Extensões**, aqui do lado, cada tecnologia tem uma página contando onde eu usei.

## :code: Linguagens

\`TypeScript\` \`JavaScript\` \`Python\` \`PHP\` \`SQL\`

## :browser: Front-end

\`React\` \`Next.js\` \`React Native\` \`Angular\` \`Redux\` \`Vite\` \`Tailwind CSS\` \`Bootstrap\` \`HTML5\` \`CSS3\` \`Sass\`

## :server-process: Back-end

\`Node.js\` \`NestJS\` \`Express\` \`FastAPI\` \`Flask\` \`Prisma\` \`TypeORM\` \`Redis\` \`BullMQ\` \`Swagger\` \`Zod\`

## :shield: Segurança

\`JWT\` \`OAuth2\` \`RBAC\` \`Multitenancy\` \`bcrypt\`

## :database: Bancos de dados

\`PostgreSQL\` \`MySQL\` \`SQL Server\` \`MongoDB\` \`SQLite\` \`Supabase\` \`Firebase\`

## :cloud: DevOps e Cloud

\`Docker\` \`Nginx\` \`Linux\` \`Bash\` \`GitHub Actions\` \`AWS\` \`Azure\` \`Vercel\` \`PM2\`

## :robot: Automação e IA

\`n8n\` \`Playwright\` \`Puppeteer\` \`Selenium\` \`BeautifulSoup\` \`Apify\` \`Google Gemini\` \`LLMs\`

## :plug: Integrações

\`Bling\` \`OMIE\` \`ERPFLEX\` \`Datasul/TOTVS\` \`RD Station\` \`WooCommerce\` \`Frenet\`

## :graph: Dados e BI

\`Power BI\` \`Pandas\` \`Jupyter\` \`Streamlit\` \`Azure Databricks\`

## :wrench: Ferramentas e práticas

\`Git\` \`GitHub\` \`Figma\` \`Postman\` \`WordPress\` \`Clean Architecture\` \`TDD\` \`MVC\` \`Scrum\` \`Kanban\`
`,
  },
  {
    path: "docs/formacao.md",
    content: `# :mortar-board: Formação

## Bacharelado em Engenharia de Software

*Centro Universitário Estácio de Sá, remoto, 2025 a 2028*

Arquitetura de software, padrões de projeto, engenharia de requisitos e metodologias ágeis. Muito do que vi no curso eu apliquei no CUBE.

## Técnico em Desenvolvimento de Sistemas

*SENAI Dr. Celso Charuri, Sumaré, SP, jan. a set. de 2025*

Modelagem de dados, arquitetura de sistemas, orientação a objetos, metodologias ágeis e CI/CD. Fiz pela EMS, junto com o programa de aprendiz.

## Técnico em Desenvolvimento de Sistemas com Ensino Médio

*ETEC Hortolândia, 2022 a 2024*

Onde eu comecei de verdade: desenvolvimento web, APIs RESTful, SPAs, UML e metodologias ágeis. Meu TCC foi o **MundoPet**.

## Inglês, Programa Cidadão Pró-Mundo

*Universidade Presbiteriana Mackenzie, Campinas, SP, 2025 a 2029*

Passei num processo seletivo da **Microsoft com o SENAI Sumaré** que deu bolsa para só **20 alunos** da região. Estou fazendo inglês no Mackenzie do A2 até a fluência.

## :globe: Idiomas

* **Português:** nativo
* **Inglês:** intermediário, estudando para chegar na fluência
`,
  },
  {
    path: "docs/certificados.md",
    content: `# :verified-filled: Certificados

São 23 no total. Dá para conferir todos no meu [LinkedIn](https://www.linkedin.com/in/yhagofelipe).

## :azure: Microsoft Azure

1. **AZ-900, Implantação de Serviços em Nuvem**, SENAI São Paulo, mar. de 2025
2. **AI-900, Serviços de Inteligência Artificial em Nuvem**, SENAI São Paulo, jun. de 2025, credencial \`51225165392/15101009\`
3. **SC-900, Fundamentos de Segurança em Nuvem**, SENAI São Paulo, jun. de 2025, credencial \`51225165446/15103069\`

## :code: Desenvolvimento

1. **Full Stack Web com Node, JavaScript e TypeScript 2026**, Udemy, ago. de 2026, credencial \`UC-474840c2-840c-46fc-914b-77f2c0ad0987\`
2. **Formação Node.js Fundamentals**, DIO, dez. de 2024, credencial \`MIZNXWDK\`
3. **Formação JavaScript Developer**, DIO, set. de 2024, credencial \`H425GU1W\`
4. **Formação PHP Experience**, DIO, fev. de 2024, credencial \`JEUS5JGP\`
5. **Formação Lógica de Programação**, DIO, fev. de 2024, credencial \`UOUKMAW6\`

## :symbol-method: Python e Data Science

1. **Python para Análise de Dados e Data Science, nível intermediário**, Data Science Academy, jul. de 2025, credencial \`687ee777b78d950ae60514ac\`
2. **Python para Análise de Dados e Data Science, nível básico**, Data Science Academy, jul. de 2025, credencial \`687ee28bfacf11326d0907d9\`
3. **Python para Análise de Dados e Data Science, nível introdutório**, Data Science Academy, jul. de 2025, credencial \`68703fb4c804eeb2e505fff7\`
4. **Programação em Python**, SENAI São Paulo, jun. de 2025, credencial \`51225163139/15001035\`
5. **Fundamentos do Python**, SENAI São Paulo, mar. de 2025
6. **Python Essentials 1**, Cisco, mar. de 2025

## :cloud: Cloud e DevOps

1. **Microsoft AI for Tech: Azure Databricks**, DIO, abr. de 2025, credencial \`CBBXBH6Y\`
2. **Formação Linux Fundamentals**, DIO, fev. de 2024, credencial \`55H61VYI\`

## :database: Banco de dados e BI

1. **Banco de Dados para Data Science**, SENAI São Paulo, jun. de 2025, credencial \`51225165940/15137309\`
2. **Microsoft Power BI**, SENAI São Paulo, jan. de 2025
3. **Oracle APEX Foundations**, Oracle, mar. de 2025

## :paintcan: UX e UI

1. **Design UX e UI**, SENAI São Paulo, abr. de 2025, credencial \`51225163352/15008839\`
2. **Formação UX Designer**, DIO, jul. de 2024, credencial \`ZMJDWZTS\`

## :sparkle: IA e inovação

1. **Inteligências Artificiais Generativas Aplicadas à Programação: ChatGPT**, SENAI São Paulo, jun. de 2025, credencial \`51225165344/15099813\`
2. **Soluções Integradas com IoT**, SENAI São Paulo, jun. de 2025, credencial \`51225165318/15099664\`
`,
  },
  {
    path: "docs/repositorios.md",
    git: "U",
    content: `# :github: Repositórios

Meus repositórios públicos ficam em [github.com/yyhago](https://github.com/yyhago). Quando o GitHub responde, esta lista é montada na hora com os dados de lá.
`,
  },
  {
    path: "docs/contato.md",
    content: `# :mail: Contato

O jeito mais rápido de falar comigo é pelo LinkedIn ou por e-mail.

* :mail: [yhago.felipe.teles@gmail.com](mailto:yhago.felipe.teles@gmail.com)
* :linkedin: [linkedin.com/in/yhagofelipe](https://www.linkedin.com/in/yhagofelipe)
* :github: [github.com/yyhago](https://github.com/yyhago)
* :instagram: [instagram.com/yyhago_](https://www.instagram.com/yyhago_)
* :location: Hortolândia, São Paulo, Brasil
`,
  },
  {
    path: "src/config/env.ts",
    content: `export const env = {
  PORT: Number(process.env.PORT ?? 3000),
  GITHUB_USER: process.env.GITHUB_USER ?? "yyhago",
  GITHUB_TOKEN: process.env.GITHUB_TOKEN ?? "",
} as const;
`,
  },
  {
    path: "src/controllers/portfolio.controller.ts",
    content: `import type { Request, Response } from "express";
import { GithubService } from "../services/github.service";
import { perfil } from "../views/perfil.view";

export class PortfolioController {
  constructor(private readonly github = new GithubService()) {}

  sobre(_req: Request, res: Response) {
    return res.json(perfil);
  }

  async repositorios(_req: Request, res: Response) {
    const repos = await this.github.repositorios();
    return res.json(repos);
  }
}
`,
  },
  {
    path: "src/models/desenvolvedor.model.ts",
    content: `export interface Contato {
  email: string;
  linkedin: string;
  github: string;
}

export interface Desenvolvedor {
  nome: string;
  titulo: string;
  local: string;
  stack: string[];
  contato: Contato;
}
`,
  },
  {
    path: "src/models/projeto.model.ts",
    content: `export type StatusProjeto = "em produção" | "entregue" | "em andamento";

export interface Projeto {
  nome: string;
  cliente: string;
  stack: string[];
  status: StatusProjeto;
  site?: string;
}
`,
  },
  {
    path: "src/routes/portfolio.routes.ts",
    content: `import { Router } from "express";
import { PortfolioController } from "../controllers/portfolio.controller";

const controller = new PortfolioController();

export const portfolioRoutes = Router()
  .get("/sobre", (req, res) => controller.sobre(req, res))
  .get("/repositorios", (req, res) => controller.repositorios(req, res));
`,
  },
  {
    path: "src/services/github.service.ts",
    content: `import { env } from "../config/env";

const API = "https://api.github.com";

export class GithubService {
  constructor(private readonly usuario = env.GITHUB_USER) {}

  async repositorios() {
    const res = await fetch(\`\${API}/users/\${this.usuario}/repos?sort=pushed\`, {
      headers: env.GITHUB_TOKEN ? { Authorization: \`Bearer \${env.GITHUB_TOKEN}\` } : {},
    });
    if (!res.ok) throw new Error(\`GitHub respondeu \${res.status}\`);
    return res.json();
  }
}
`,
  },
  {
    path: "src/views/perfil.view.tsx",
    content: `import type { Desenvolvedor } from "../models/desenvolvedor.model";

export const perfil: Desenvolvedor = {
  nome: "Yhago Felipe Rocha Teles",
  titulo: "Desenvolvedor Full Stack",
  local: "Hortolândia, SP",
  stack: ["TypeScript", "NestJS", "Next.js", "Python", "PHP"],
  contato: {
    email: "yhago.felipe.teles@gmail.com",
    linkedin: "https://www.linkedin.com/in/yhagofelipe",
    github: "https://github.com/yyhago",
  },
};

export default function PerfilView() {
  return (
    <section className="perfil">
      <h1>{perfil.nome}</h1>
      <p>{perfil.titulo}, de {perfil.local}.</p>
      <a href={perfil.contato.linkedin}>Vamos conversar</a>
    </section>
  );
}
`,
  },
  {
    path: "src/main.ts",
    content: `import express from "express";
import { env } from "./config/env";
import { portfolioRoutes } from "./routes/portfolio.routes";

const app = express();

app.use(express.json());
app.use("/api", portfolioRoutes);

app.listen(env.PORT, () => {
  console.log(\`Portfólio rodando na porta \${env.PORT}\`);
});
`,
  },
  {
    path: "package.json",
    content: `{
  "name": "portfolio-yhago",
  "version": "1.0.0",
  "description": "Portfólio do Yhago Felipe, desenvolvedor Full Stack",
  "author": "Yhago Felipe <yhago.felipe.teles@gmail.com>",
  "main": "dist/main.js",
  "scripts": {
    "dev": "tsx watch src/main.ts",
    "build": "tsc",
    "start": "node dist/main.js"
  },
  "dependencies": {
    "express": "^5.1.0"
  },
  "devDependencies": {
    "@types/express": "^5.0.0",
    "tsx": "^4.20.0",
    "typescript": "^5.9.0"
  },
  "license": "MIT"
}
`,
  },
  {
    path: "tsconfig.json",
    content: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "strict": true,
    "jsx": "react-jsx",
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src"]
}
`,
  },
  {
    path: "README.md",
    content: `# :info: portfolio-yhago

Oi, eu sou o Yhago! Aqui você conhece o que eu faço, os projetos que entreguei e como falar comigo. Em vez da landing page de sempre, montei um Windows XP com um VS Code funcionando dentro, que é onde eu passo boa parte do dia.

## Como navegar

1. Os textos ficam na pasta **docs**, aqui no Explorador.
2. Os arquivos .md abrem formatados. O botão no canto do editor mostra o código-fonte.
3. **Ctrl + P** busca arquivos e **Ctrl + Shift + P** abre a paleta de comandos.
4. **Ctrl + J** abre o terminal. Digita **help** lá para ver os comandos.
5. Na aba **Extensões** estão as tecnologias que eu uso.

## Estrutura

1. \`docs/\`, os textos do portfólio
2. \`src/models/\`, os tipos de dados
3. \`src/services/\`, a integração com o GitHub
4. \`src/controllers/\` e \`src/routes/\`, a API em Express
5. \`src/views/\`, o componente do perfil
`,
  },
];

export const SKILL_LOGOS: Record<string, string> = {
  TypeScript: "ts", JavaScript: "js", Python: "py", PHP: "php", React: "react", "React Native": "react", "Next.js": "nextjs",
  Angular: "angular", Redux: "redux", "Tailwind CSS": "tailwind", Bootstrap: "bootstrap", HTML5: "html", CSS3: "css", Sass: "sass",
  Vite: "vite", "Node.js": "nodejs", NestJS: "nestjs", Express: "express", FastAPI: "fastapi", Flask: "flask", Prisma: "prisma",
  Redis: "redis", BullMQ: "redis", PostgreSQL: "postgres", MySQL: "mysql", MongoDB: "mongodb", SQLite: "sqlite", Supabase: "supabase",
  Firebase: "firebase", Docker: "docker", Nginx: "nginx", Linux: "linux", Bash: "bash", "GitHub Actions": "githubactions", AWS: "aws",
  "Amazon S3": "aws", Azure: "azure", "Microsoft Azure": "azure", "Azure Databricks": "azure", Vercel: "vercel", Git: "git",
  GitHub: "github", "Git e GitHub": "git", Figma: "figma", Postman: "postman", WordPress: "wordpress", WooCommerce: "wordpress",
  Selenium: "selenium", "Linux e Bash": "linux", "Redis e BullMQ": "redis", "HTML5, CSS3 e Sass": "html",
};

export type Ext = {
  id: string;
  cat: string;
  name: string;
  publisher: string;
  label: string;
  bg: string;
  fg: string;
  desc: string;
  about: string;
};

const ext = (cat: string, name: string, publisher: string, label: string, bg: string, fg: string, desc: string, about: string): Ext => ({
  id: name.toLowerCase().replace(/[^a-z0-9]+/g, ""),
  cat, name, publisher, label, bg, fg, desc, about,
});

export const extensions: Ext[] = [
  ext("Linguagens", "TypeScript", "Microsoft", "TS", "#3178c6", "#fff", "JavaScript com tipagem estática.", "É a linguagem que eu mais uso, no front e no back. Tipo bem definido e Zod validando os dados na entrada evitam muito bug."),
  ext("Linguagens", "JavaScript", "Ecma International", "JS", "#f7df1e", "#000", "A linguagem da web.", "Foi por onde eu comecei na web, ainda na ETEC."),
  ext("Linguagens", "Python", "Python Software Foundation", "Py", "#3776ab", "#ffd43b", "Automação, dados e APIs.", "Meu primeiro trabalho foi com Python, nas automações da Cibersegurança do Grupo EMS que cortaram 40% do trabalho manual."),
  ext("Linguagens", "PHP", "The PHP Group", "php", "#777bb4", "#fff", "A linguagem que move boa parte da web.", "Uso bastante em e-commerce legado, tema de WordPress e integração com ERP."),
  ext("Linguagens", "SQL", "ISO/IEC", "SQL", "#4479a1", "#fff", "A linguagem dos bancos relacionais.", "Modelagem, índice e consulta pensados para performance e auditoria."),

  ext("Front-end", "React", "Meta", "Re", "#20232a", "#61dafb", "Interfaces com componentes.", "Dashboards e painéis administrativos, como os do CUBE."),
  ext("Front-end", "Next.js", "Vercel", "N", "#000", "#fff", "O framework React para a web.", "Base da plataforma que construí na Freecook e das telas que modernizei na DBS. Esse portfólio também é Next.js."),
  ext("Front-end", "React Native", "Meta", "RN", "#20232a", "#61dafb", "Apps nativos com React.", "Apps para iOS e Android consumindo as mesmas APIs da web."),
  ext("Front-end", "Angular", "Google", "A", "#dd0031", "#fff", "Framework web do Google.", "Front-ends corporativos que consumiam as APIs que eu documentava no Swagger na CroSoften."),
  ext("Front-end", "Redux", "Redux Team", "Rx", "#764abc", "#fff", "Gerenciamento de estado.", "Usei no MundoPet, meu TCC."),
  ext("Front-end", "Vite", "VoidZero", "Vi", "#646cff", "#ffd62e", "Build rápido para o front-end.", "No CUBE e na landing page da advocacia."),
  ext("Front-end", "Tailwind CSS", "Tailwind Labs", "Tw", "#0b1120", "#38bdf8", "CSS utilitário.", "É o que eu uso na maioria dos projetos para estilizar rápido."),
  ext("Front-end", "Bootstrap", "Bootstrap Team", "B", "#7952b3", "#fff", "Componentes responsivos prontos.", "Usei no MundoPet."),
  ext("Front-end", "HTML5, CSS3 e Sass", "W3C", "H5", "#e34f26", "#fff", "Marcação e estilo.", "HTML semântico pensando em SEO e acessibilidade, e Sass nos temas de WordPress."),

  ext("Back-end", "Node.js", "OpenJS Foundation", "node", "#2b3a2b", "#8cc84b", "JavaScript no servidor.", "Onde eu passo a maior parte do tempo: API, fila, job agendado e integração."),
  ext("Back-end", "NestJS", "NestJS", "Ns", "#1a1a1a", "#ea2845", "Framework para back-end escalável.", "É o que mais uso no back-end. Na CroSoften foram mais de 20 projetos com Nest e Clean Architecture."),
  ext("Back-end", "Express", "OpenJS Foundation", "ex", "#353535", "#fff", "Framework web minimalista.", "Back-end do CUBE e do MundoPet."),
  ext("Back-end", "FastAPI", "Sebastián Ramírez", "FA", "#009688", "#fff", "APIs rápidas em Python.", "APIs internas na EMS e a BookAPI que está no meu GitHub."),
  ext("Back-end", "Flask", "Pallets", "Fl", "#000", "#fff", "Microframework em Python.", "Aplicações internas na EMS."),
  ext("Back-end", "Prisma", "Prisma Data", "Pr", "#0c344b", "#fff", "ORM com tipagem de ponta a ponta.", "Migrations versionadas no CUBE."),
  ext("Back-end", "TypeORM", "TypeORM", "TO", "#fe0803", "#fff", "ORM para TypeScript.", "Persistência nas APIs em NestJS."),
  ext("Back-end", "Redis e BullMQ", "Redis Ltd.", "Rd", "#dc382d", "#fff", "Cache e filas.", "Fila para tirar tarefa pesada de dentro da requisição."),
  ext("Back-end", "Swagger", "SmartBear", "Sw", "#173647", "#85ea2d", "Documentação de APIs.", "Minhas APIs saem documentadas. Na CroSoften o time de iOS e o de Angular consumiam tudo pelo Swagger."),
  ext("Back-end", "JWT, OAuth2 e RBAC", "IETF", "JWT", "#000", "#d63aff", "Autenticação e permissões.", "Refresh token com rotação e permissão por rota e por perfil."),

  ext("Bancos de dados", "PostgreSQL", "PostgreSQL Global Development Group", "Pg", "#336791", "#fff", "Banco relacional open source.", "Meu banco padrão hoje."),
  ext("Bancos de dados", "MySQL", "Oracle", "My", "#00758f", "#f29111", "Banco relacional popular na web.", "E-commerce legado e APIs em PHP e Node."),
  ext("Bancos de dados", "SQL Server", "Microsoft", "SS", "#a91d22", "#fff", "Banco relacional da Microsoft.", "Ambientes corporativos."),
  ext("Bancos de dados", "MongoDB", "MongoDB Inc.", "Mg", "#023430", "#00ed64", "Banco de documentos.", "Usei no MundoPet."),
  ext("Bancos de dados", "SQLite", "SQLite Consortium", "Lt", "#003b57", "#fff", "Banco leve e embutido.", "Protótipo e teste."),
  ext("Bancos de dados", "Supabase", "Supabase", "Sb", "#1c1c1c", "#3ecf8e", "Postgres com back-end pronto.", "Integração de dados na EMS."),
  ext("Bancos de dados", "Firebase", "Google", "Fb", "#1a2b34", "#ffca28", "Plataforma de apps do Google.", "Integração de dados na EMS."),

  ext("DevOps e Cloud", "Docker", "Docker Inc.", "Dk", "#1d63ed", "#fff", "Containers.", "Tudo que eu subo em VPS roda em Docker."),
  ext("DevOps e Cloud", "Nginx", "F5", "Nx", "#009639", "#fff", "Servidor web e proxy reverso.", "Na frente das APIs em produção, com SSL."),
  ext("DevOps e Cloud", "Linux e Bash", "Linux Foundation", "$_", "#333", "#fcc624", "O sistema dos servidores.", "Administro minhas VPS e as rotinas de backup."),
  ext("DevOps e Cloud", "GitHub Actions", "GitHub", "GA", "#2088ff", "#fff", "CI/CD no GitHub.", "Pipeline de build, teste e deploy."),
  ext("DevOps e Cloud", "AWS", "Amazon Web Services", "aws", "#232f3e", "#ff9900", "Nuvem da Amazon.", "Amazon S3 com presigned URLs na Freecook."),
  ext("DevOps e Cloud", "Microsoft Azure", "Microsoft", "Az", "#0078d4", "#fff", "Nuvem da Microsoft.", "Tenho as certificações AZ-900, AI-900 e SC-900."),
  ext("DevOps e Cloud", "Vercel", "Vercel", "Vc", "#000", "#fff", "Deploy de front-end.", "Deploy com preview a cada pull request."),

  ext("Automação e IA", "n8n", "n8n GmbH", "n8n", "#ea4b71", "#fff", "Automação de workflows.", "Na Freecook ligo ERP, CRM e sistemas internos com n8n."),
  ext("Automação e IA", "Playwright", "Microsoft", "Pw", "#2d4552", "#45ba4b", "Automação de navegador.", "Web scraping e automação de portais."),
  ext("Automação e IA", "Puppeteer", "Google", "Pp", "#40b5a4", "#fff", "Chrome controlado por código.", "Coleta de dados em portais."),
  ext("Automação e IA", "Selenium", "Software Freedom Conservancy", "Se", "#43b02a", "#fff", "Automação de navegador.", "Automação de tarefa repetitiva em sistema web."),
  ext("Automação e IA", "Google Gemini", "Google", "Gm", "#1a73e8", "#fff", "IA generativa do Google.", "Análise de sentimento no CUBE e alguns projetos meus no GitHub."),

  ext("Integrações", "ERPs", "Bling, OMIE, ERPFLEX e TOTVS", "ERP", "#0a5c91", "#fff", "Sistemas de gestão.", "Já integrei Bling, OMIE, ERPFLEX e Datasul/TOTVS, inclusive migrando do ERPFLEX para o OMIE."),
  ext("Integrações", "RD Station", "RD Station", "RD", "#19c4b4", "#fff", "CRM e marketing.", "Fluxos automáticos entre CRM e ERP com n8n."),
  ext("Integrações", "WooCommerce", "Automattic", "Wc", "#7f54b3", "#fff", "E-commerce no WordPress.", "Manutenção do e-commerce legado durante a migração."),

  ext("Dados e BI", "Power BI", "Microsoft", "BI", "#f2c811", "#000", "BI da Microsoft.", "Relatórios e indicadores."),
  ext("Dados e BI", "Streamlit", "Snowflake", "St", "#ff4b4b", "#fff", "Apps de dados em Python.", "Aplicações internas na EMS e os projetos de IA no meu GitHub."),

  ext("Ferramentas", "Git e GitHub", "GitHub", "Git", "#f05033", "#fff", "Controle de versão.", "Commit pequeno e mensagem que explica o porquê."),
  ext("Ferramentas", "Figma", "Figma", "Fg", "#1e1e1e", "#a259ff", "Design de interfaces.", "Fiz formação de UX e UI pelo SENAI e pela DIO."),
  ext("Ferramentas", "Postman", "Postman", "Pm", "#ff6c37", "#fff", "Teste de APIs.", "Coleção para cada API que eu construo."),
  ext("Ferramentas", "WordPress", "WordPress Foundation", "WP", "#21759b", "#fff", "CMS.", "Tema próprio em PHP, como o da SGI, e migração para stack própria, como na Freecook."),
];

export const TERMINAL: Record<string, string> = {
  sobre: `Yhago Felipe Rocha Teles, desenvolvedor Full Stack
Hortolândia, São Paulo, Brasil

Transformo operação manual e sistema fragmentado em plataforma
própria e integrada. Back-end é onde eu mais trabalho.

Estou aberto a novas oportunidades como Full Stack ou Back-end.

Mais: open sobre-mim.md`,
  experiencia: `Freecook Brasil          Full Stack       mar. de 2026 até hoje
CroSoften Tecnologia     Back-end         jan. de 2026 a ago. de 2026
DBS System Consultoria   Full Stack       set. de 2025 a dez. de 2025
Grupo EMS                Aprendiz em TI   jan. de 2025 a set. de 2025

Mais: open experiencia.md`,
  projetos: `SafetyKeeper   gestão de SST multitenant (NestJS, Next.js)
CUBE           análise política com IA (React, Node.js, Gemini)
Advocacia      landing page com Lighthouse acima de 95
SGI            site em WordPress com tema próprio
Cyberbot       assistente de cibersegurança (Python)
MundoPet       marketplace pet, meu TCC

Mais: open projetos.md`,
  repos: `Repositórios públicos em https://github.com/yyhago

Mais: open repositorios.md`,
  habilidades: `linguagens   TypeScript, JavaScript, Python, PHP, SQL
front-end    React, Next.js, React Native, Angular, Tailwind CSS
back-end     Node.js, NestJS, Express, FastAPI, Flask, Prisma, Redis
bancos       PostgreSQL, MySQL, SQL Server, MongoDB, Supabase
devops       Docker, Nginx, Linux, GitHub Actions, AWS, Azure
automação    n8n, Playwright, Puppeteer, Selenium, LLMs

Mais: open habilidades.md`,
  formacao: `Engenharia de Software        Estácio     2025 a 2028
Técnico em Desenv. Sistemas   SENAI       2025
Técnico em Desenv. Sistemas   ETEC        2022 a 2024
Inglês, Programa CPM          Mackenzie   2025 a 2029

Mais: open formacao.md`,
  certificados: `23 certificados, incluindo Microsoft AZ-900, AI-900 e SC-900.

Mais: open certificados.md`,
  contato: `email      yhago.felipe.teles@gmail.com
linkedin   https://www.linkedin.com/in/yhagofelipe
github     https://github.com/yyhago
instagram  https://www.instagram.com/yyhago_`,
};

export const langOf = (path: string): Lang => (path.split(".").pop() as Lang) ?? "ts";

export const LANG_NAME: Record<Lang, string> = { ts: "TypeScript", tsx: "TypeScript JSX", json: "JSON", md: "Markdown" };
