export const ROOT = "portfolio-yhago";
export const GITHUB = "https://github.com/yyhago";
export const LINKEDIN = "https://www.linkedin.com/in/yhagofelipe";
export const EMAIL = "yhago.felipe.teles@gmail.com";
export const INSTAGRAM = "https://www.instagram.com/yyhago_";

export type Lang = "ts" | "tsx" | "json" | "md" | "pdf";
export type VFile = { path: string; content: string; git?: "M" | "U"; alias?: string; href?: string };

export const shown = (files: VFile[], id: string) => files.find((f) => f.path === id)?.alias ?? id;
export const baseName = (p: string) => p.split("/").pop()!;
export const matches = (f: VFile, name: string) => {
  const n = name.toLowerCase();
  return [f.path, f.alias ?? f.path].some((p) => p.toLowerCase() === n || baseName(p).toLowerCase() === n);
};

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
* :globe: Português nativo, inglês intermediário
* :briefcase: Atendendo muitos clientes, de vários nichos
* :file-pdf: {{cv-link}}

> Opa, tudo bem? Seja bem-vindo! Aqui eu guardo um pouco de tudo que construí, os sistemas que coloquei no ar, os clientes que atendo e as tecnologias do meu dia a dia. Se a sua empresa precisa de um sistema, de uma integração ou de um site, fica à vontade para fuçar e me chamar. {{cv-frase}}

## :compass: Por onde começar

* [experiencia.md](experiencia.md), onde eu trabalhei e os sistemas que estão no ar
* [projetos.md](projetos.md), projetos com prints, links e como resolvi cada problema
* [habilidades.md](habilidades.md), as tecnologias do meu dia a dia
* [formacao.md](formacao.md) e [certificados.md](certificados.md), estudos e cursos
* [servicos.md](servicos.md), como eu posso ajudar a sua empresa
* [curriculo.md](curriculo.md), meu currículo em PDF, em português e em inglês
* [contato.md](contato.md), onde me encontrar

Na barra azul lá embaixo tem o botão **Guia**, que mostra onde está cada coisa.

## :person: Sobre mim

Me chamo Yhago Felipe, sou desenvolvedor Full Stack e o back-end é onde eu me sinto em casa. Tenho dois técnicos em Desenvolvimento de Sistemas, pelo **SENAI** e pela **ETEC**, e estou terminando o bacharelado em **Engenharia de Software** na Estácio.

Minha história com programação começou de verdade na **ETEC Hortolândia**, onde fiz o técnico junto com o ensino médio e desenvolvi o **MundoPet**, um marketplace pet, como TCC. Em 2025 entrei no time de **Cibersegurança do Grupo EMS** como jovem aprendiz e criei automações em **Python** que cortaram **40%** do tempo de operações manuais da equipe. Ali nasceu uma ideia que eu levo para todo projeto, a de *automatizar antes de escalar*.

Depois vieram as consultorias. Na **DBS System** modernizei sistemas de uma operação industrial e refiz as integrações com o ERP Datasul (TOTVS). Na **CroSoften** atendi mais de **20 projetos** ao mesmo tempo, sempre com APIs em **Node.js e NestJS**, Clean Architecture e requisito levantado direto com o cliente, em agronegócio, saúde, gestão financeira e logística.

Hoje arquiteto e mantenho uma plataforma que sustenta uma empresa de ponta a ponta, do pedido no e-commerce ao despacho com nota fiscal, em **Next.js, NestJS e TypeScript**, e que substituiu um legado em WordPress sem parar a operação. Também cuido das integrações com ERP, das automações no **n8n** e da infraestrutura em VPS, Docker e Nginx.

Em paralelo, atendo muitos clientes por projeto, nos mais variados nichos, de negócios que estão começando a empresas grandes como a **CUBE Inteligência**, a **JCFireWall**, com o SafetyKeeper, e o **CoJurOS**, que vem aí. Esses são só alguns nomes, a carteira é bem maior e não para de crescer. Se quiser saber como eu posso ajudar a sua empresa, dá uma olhada em [servicos.md](servicos.md).

Fora do código, estudo inglês no **Mackenzie** como bolsista do programa Cidadão Pró-Mundo, uma parceria da Microsoft com o SENAI que selecionou só 20 alunos da região, e tenho as certificações **Microsoft Azure AZ-900, AI-900 e SC-900**.

## :tools: O que eu faço

### :server-process: APIs e back-end

Desenho e construo APIs RESTful em **Node.js** e **NestJS**, organizadas com **Clean Architecture** para a regra de negócio não depender do framework. Cuido de autenticação com JWT e refresh token, permissão por perfil (RBAC), multitenancy, filas com Redis e BullMQ e documentação completa no Swagger, para quem for consumir não precisar me perguntar nada.

### :layers: Plataformas completas

Levo o projeto do banco de dados até a tela, com modelagem em PostgreSQL ou MySQL, API e front-end em **Next.js**, **React** ou **Angular**, com TypeScript de ponta a ponta. Foi assim que construí do zero uma loja virtual, um painel administrativo e um portal comercial que hoje rodam como um sistema só.

### :plug: Integração de sistemas

Conecto os sistemas que a empresa já usa, como os ERPs **Bling, OMIE, ERPFLEX e Datasul/TOTVS**, CRM (RD Station), gateways de pagamento e logística (Frenet). Já fiz migração de ERP com estoque, pedidos e clientes rodando no meio do caminho.

### :robot: Automação de processos

Tiro tarefa repetitiva das mãos das pessoas com **n8n**, **Python** e web scraping (Playwright, Puppeteer e Selenium). Foi automatizando processo que eu comecei, e continua sendo uma das partes que eu mais gosto.

### :history: Modernização de legado

Troco sistema antigo por stack própria sem parar a operação. Estudo o legado, levanto os gargalos com quem usa todo dia e migro por partes, com o sistema antigo rodando até o novo assumir.

### :cloud: Infraestrutura

Coloco e mantenho tudo no ar, com VPS, **Docker** e **Nginx**, SSL, backup automatizado, CI/CD com GitHub Actions, arquivos no Amazon S3 e serviços na Azure.

## :rocket: Alguns números

* **Mais de 20 projetos** de clientes atendidos com APIs em Node.js e NestJS
* **40% menos tempo** gasto em operações manuais com as automações em Python
* **4 ERPs integrados**, Bling, OMIE, ERPFLEX e Datasul/TOTVS
* **23 certificados**, incluindo Microsoft Azure AZ-900, AI-900 e SC-900
* {{github}}

{{depoimentos}}

## :checklist: Como eu trabalho

* Gosto de entender o problema antes de abrir o editor. Levanto requisito direto com quem vai usar o sistema e só depois desenho a arquitetura.
* Regra de negócio não pertence ao framework. Uso controller fino e lógica isolada, que dá para testar e trocar de lugar sem reescrever o núcleo.
* O dado errado precisa morrer na entrada, com validação em Zod, e não três camadas depois.
* O schema é a decisão mais cara do projeto, então modelo o banco com calma e versiono tudo em migrations.
* O que eu entrego sai documentado e com deploy reproduzível em Docker.

## :comment-discussion: Vamos conversar?

Se quiser trocar uma ideia sobre arquitetura, automação ou algum projeto, me chama no [LinkedIn](https://www.linkedin.com/in/yhagofelipe), no [GitHub](https://github.com/yyhago) ou por [e-mail](mailto:yhago.felipe.teles@gmail.com). Se for orçamento, o caminho mais rápido é o [formulário de orçamento](servicos.md#orcamento).
`,
  },
  {
    path: "docs/experiencia.md",
    content: `# :briefcase: Experiência

Comecei como jovem aprendiz em 2025 e, de lá para cá, passei por consultoria, por uma software house atendendo dezenas de clientes ao mesmo tempo e hoje cuido de toda a tecnologia de uma empresa. Aqui está o que eu fiz em cada lugar, com alguns dos sistemas que estão no ar. {{cv-frase}}

## Freecook Brasil

**Desenvolvedor de Software Full Stack**, CLT
*mar. de 2026 até hoje, Campinas, SP, presencial*

Cuido da arquitetura e da evolução técnica de todo o ecossistema de TI da empresa, com foco em performance, escalabilidade e automação de processos.

* Arquitetei e construí do zero a plataforma que sustenta a operação de ponta a ponta, do pedido no e-commerce até a baixa no estoque, juntando loja virtual, painel administrativo, portal comercial e site institucional em um sistema só.
* Conduzi a saída do legado em **WordPress** para uma stack própria em **Next.js, NestJS e TypeScript**, definindo padrão de código, estrutura de API e a estratégia de migração sem parar a operação.
* Back-end em **PHP e MySQL** no e-commerce legado durante a transição, com módulos e integrações sob medida.
* Automações no **n8n** orquestrando ERP, CRM (RD Station) e sistemas internos.
* Migrei a integração do ERP legado (**ERPFLEX**) para o atual (**OMIE**), mantendo estoque, pedidos e clientes consistentes.
* Arquivos no **Amazon S3** com presigned URLs e infraestrutura própria (**VPS, Docker, Nginx e SSL**) com backup automatizado.
* Integração com gateways de pagamento, APIs REST e logística (Frenet).

\`Next.js\` \`NestJS\` \`TypeScript\` \`Node.js\` \`PHP\` \`MySQL\` \`n8n\` \`Amazon S3\` \`Docker\` \`Nginx\`

Alguns dos sistemas que estão no ar.

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

Alguns dos projetos em que trabalhei.

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

Alguns dos clientes para quem desenvolvi.

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

Aqui está uma seleção dos projetos que entreguei, de inteligência política a segurança do trabalho, advocacia e comunicação jurídica, cada um com o problema que precisava ser resolvido e como eu resolvi. É só uma parte, atendo muitos outros clientes que não aparecem aqui. Projeto de cliente fica em repositório privado, por contrato, então quando não dá para mostrar o código eu mostro as telas. Clica em qualquer imagem para ver maior.

## CoJurOS, comunicação jurídica

*Full Stack, em desenvolvimento*

Projeto novo que estou desenvolvendo agora, o CoJurOS, voltado para comunicação jurídica. Em breve conto mais por aqui, com telas e detalhes.

{{prints:cojuros|CoJurOS, telas do sistema}}

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

*Front-end, cliente Raquel Ribeiro Advocacia, set. de 2025 a out. de 2025*

\`React\` \`TypeScript\` \`Vite\` \`Tailwind CSS\` \`Vercel\`

**Dor do cliente.** O escritório queria aparecer no Google para quem procura advogado trabalhista na região, com uma página rápida no celular que virasse contato pelo WhatsApp e pelo formulário.

**Solução.**

* React 18, TypeScript e Vite, com Tailwind e layout mobile first testado em aparelho de verdade.
* SEO técnico com React Helmet, HTML semântico e dados estruturados schema.org.
* Lazy loading e imagens WebP, chegando a **Lighthouse acima de 95** em todas as categorias e **LCP abaixo de 2,5 s**.
* Acessibilidade **WCAG 2.1 nível A** e deploy na Vercel com preview a cada pull request.

[:link-external: Ver a landing page no ar](https://raquel-ribeiro-advocacia-psi.vercel.app/)

{{prints:advocacia|Landing page da Raquel Ribeiro Advocacia}}

## Site da SGI Treinamentos e Assessoria

*Full Stack, consultoria, cliente SGI Treinamentos e Assessoria, ago. de 2025 a set. de 2025*

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

*Trabalho de curso, em equipe, jun. de 2025*

\`Python\` \`Streamlit\` \`Git\`

Trabalho de curso que fizemos em quatro desenvolvedores para ajudar na conscientização sobre segurança digital, com um chatbot para dúvidas, um gerador e verificador de senhas e um simulador de phishing. Feito em Python com processamento de linguagem natural e interface em Streamlit.

{{prints:cyberbot|Cyberbot, telas do protótipo}}

## MundoPet, meu TCC

*Full Stack, projeto acadêmico, ETEC Hortolândia, 2024*

\`Node.js\` \`Express\` \`React\` \`Redux\` \`MongoDB\` \`Bootstrap\`

Marketplace voltado para o mercado pet, com back-end em Node.js e Express, MongoDB e front-end em React com Redux. Mostra os pet shops mais próximos no mapa e tem carrinho, cadastro e pagamento.

[:github: Ver o código no GitHub](https://github.com/yyhago/pet-marketplace-etec)

{{prints:mundopet|MundoPet}}
`,
  },
  {
    path: "docs/servicos.md",
    git: "U",
    content: `# :rocket: Serviços

Hoje atendo muitos clientes ao mesmo tempo, de empresas grandes a negócios que estão começando, nos mais diferentes nichos. Se a sua empresa precisa de um sistema, de uma integração ou de um site que traga resultado, é aqui que eu posso ajudar.

[:comment-discussion: Pedir um orçamento](#orcamento)

## :organization: Quem já confia no meu trabalho

A lista de clientes é bem maior do que cabe aqui, e boa parte dos projetos tem contrato de sigilo, então trago só alguns nomes.

* **CUBE Inteligência**, inteligência política, com uma plataforma de monitoramento e análise de sentimento com IA
* **JCFireWall**, segurança do trabalho, com o SafetyKeeper, sistema de gestão de SST para vários clientes corporativos
* **CoJurOS**, comunicação jurídica, um projeto novo que está vindo aí
* **NG Metalúrgica** e **Pronutrition**, indústria e nutrição, com integrações e sistemas modernizados
* **Raquel Ribeiro Advocacia** e **SGI Treinamentos**, advocacia e segurança do trabalho, com sites rápidos e fáceis de manter
* **Vitrine do Campo**, **2Clicks**, **Minha Revenda**, **Cupom Clube** e mais de 20 projetos de agronegócio, saúde, finanças, varejo e logística
* E muitos outros clientes, de comércio, serviços, indústria e startups, que atendo por projeto ou com manutenção contínua

{{depoimentos}}

## :tools: O que eu posso fazer por você

### :layers: Sistemas sob medida

Painel administrativo, sistema de gestão, portal para clientes ou parceiros, com login, permissão por perfil e dados separados por empresa. Foi o que fiz no SafetyKeeper, que tirou a gestão de SST da planilha.

### :plug: Integrações e APIs

Seu ERP, seu e-commerce, seu CRM e sua logística conversando sozinhos, sem ninguém copiando dado de um lugar para o outro. Já integrei Bling, OMIE, ERPFLEX, Datasul/TOTVS, RD Station, gateways de pagamento e Frenet.

### :graph: Dados, dashboards e IA

Painéis que mostram o que importa em tempo real, coleta de dados públicos e análise de texto com IA. Foi a base da plataforma da CUBE, feita para aguentar pico de acesso em período eleitoral.

### :browser: Sites e landing pages

Site institucional ou página de captação rápida no celular, bem posicionada no Google e fácil de atualizar. A landing page da Raquel Ribeiro chegou a Lighthouse acima de 95 em todas as categorias.

### :history: E-commerce e saída de sistema legado

Troco o sistema antigo por uma plataforma própria sem parar a operação, migrando por partes. Já fiz isso com uma operação inteira, do pedido no e-commerce até a nota fiscal.

### :robot: Automação de processos

Tarefa repetitiva que toma horas da sua equipe vira processo automático com n8n, Python e robôs de coleta de dados. Minhas primeiras automações cortaram 40% do tempo de operações manuais.

## :checklist: Como funciona

1. **Conversa**, para eu entender o problema, o negócio e quem vai usar o sistema
2. **Proposta**, com escopo, prazo e valor claros, sem surpresa no meio do caminho
3. **Entregas por etapas**, para você acompanhar e validar o andamento
4. **Publicação e suporte**, com o sistema no ar, documentado e com backup

## :comment-discussion: Vamos tirar sua ideia do papel?

Me conta o que você precisa aqui embaixo. A mensagem chega direto no meu e-mail e eu respondo assim que puder. Se quiser conhecer melhor minha trajetória antes, dá uma olhada no [currículo](curriculo.md) e nos [projetos](projetos.md).

[[orcamento]]
`,
  },
  {
    path: "docs/habilidades.md",
    content: `# :tools: Habilidades

As ferramentas do meu dia a dia, separadas por área. Na aba **Extensões**, aqui do lado, cada tecnologia tem uma página contando onde e como eu usei.

## :code: Linguagens

**TypeScript** é a que eu mais uso, no front e no back. **Python** ficou para automação e dados, e **PHP** para e-commerce, WordPress e sistema legado.

\`TypeScript\` \`JavaScript\` \`Python\` \`PHP\` \`SQL\`

## :browser: Front-end

**Next.js** e **React** no dia a dia, **Angular** em projeto corporativo e **React Native** quando o produto precisa de app. Para estilo, quase sempre Tailwind.

\`React\` \`Next.js\` \`React Native\` \`Angular\` \`Redux\` \`Vite\` \`Tailwind CSS\` \`Bootstrap\` \`HTML5\` \`CSS3\` \`Sass\`

## :server-process: Back-end

Minha base é **NestJS** com Prisma ou TypeORM, fila com Redis e BullMQ, validação com Zod e documentação no Swagger. Em Python, uso **FastAPI** e **Flask**.

\`Node.js\` \`NestJS\` \`Express\` \`FastAPI\` \`Flask\` \`Prisma\` \`TypeORM\` \`SQLAlchemy\` \`APIs REST\` \`Redis\` \`BullMQ\` \`Swagger\` \`Zod\`

## :shield: Segurança

Como comecei na Cibersegurança, autenticação, permissão e cuidado com dado sensível entram no desenho desde o começo, não no fim.

\`JWT\` \`OAuth2\` \`RBAC\` \`Multitenancy\` \`bcrypt\`

## :database: Bancos de dados

**PostgreSQL** é o meu padrão, **MySQL** aparece bastante em legado e **MongoDB** quando o modelo pede documento.

\`PostgreSQL\` \`MySQL\` \`SQL Server\` \`MongoDB\` \`SQLite\` \`Supabase\` \`Firebase\`

## :cloud: DevOps e Cloud

Mantenho minha própria infraestrutura, com VPS, **Docker**, **Nginx** com SSL, backup automatizado e CI/CD com GitHub Actions. Na nuvem, Amazon S3 e Azure.

\`Docker\` \`Docker Compose\` \`VPS\` \`Nginx\` \`Linux\` \`Bash\` \`GitHub Actions\` \`AWS\` \`Azure\` \`Vercel\` \`PM2\`

## :robot: Automação e IA

**n8n** para orquestrar sistemas, scraping para coletar dado público e LLMs como o **Gemini** para análise de texto e sentimento.

\`n8n\` \`Playwright\` \`Puppeteer\` \`Selenium\` \`BeautifulSoup\` \`Apify\` \`Google Gemini\` \`LLMs\`

## :plug: Integrações

Os sistemas que fazem a operação de uma empresa girar, como ERP, CRM, pagamento e logística.

\`Bling\` \`OMIE\` \`ERPFLEX\` \`Datasul/TOTVS\` \`RD Station\` \`WooCommerce\` \`Frenet\`

## :graph: Dados e BI

Para transformar dado em relatório e decisão, uso **Power BI**, **Pandas** e notebooks no Jupyter.

\`Power BI\` \`Pandas\` \`Jupyter\` \`Streamlit\` \`Azure Databricks\`

## :wrench: Ferramentas e práticas

Git em tudo, Figma para desenhar antes de codar, Postman para testar API e Clean Architecture como base de organização.

\`Git\` \`GitHub\` \`Figma\` \`Postman\` \`WordPress\` \`XAMPP\` \`Arduino\` \`IoT\` \`Clean Architecture\` \`TDD\` \`MVC\` \`Scrum\` \`Kanban\` \`UI/UX responsivo\`
`,
  },
  {
    path: "docs/formacao.md",
    content: `# :mortar-board: Formação

Estudo desde 2022 sem parar, com um técnico junto com o ensino médio, outro técnico no SENAI, a faculdade e o inglês, quase tudo ao mesmo tempo que trabalho.

## Bacharelado em Engenharia de Software

*Centro Universitário Estácio de Sá, remoto, 2025 a 2028*

Arquitetura de software, padrões de projeto, engenharia de requisitos e metodologias ágeis, com ênfase em segurança, performance e usabilidade. Muito do que vi no curso eu apliquei no CUBE, uma plataforma com arquitetura escalável, RBAC e processamento de linguagem natural em tempo real.

## Técnico em Desenvolvimento de Sistemas

*SENAI Dr. Celso Charuri, Sumaré, SP, jan. a set. de 2025*

Análise de sistemas, modelagem de dados, lógica, arquitetura, programação orientada a objetos e funcional, metodologias ágeis e práticas de DevOps com CI/CD. Fiz pela EMS, junto com o programa de aprendiz.

## Técnico em Desenvolvimento de Sistemas com Ensino Médio

*ETEC Hortolândia, 2022 a 2024*

Foi onde eu comecei de verdade, estudando pensamento computacional, modelagem de dados, orientação a objetos, desenvolvimento web com APIs RESTful e SPAs, UML e metodologias ágeis. Meu TCC foi o **MundoPet**, um marketplace pet com Node.js, Express, React, Redux e MongoDB.

## Inglês, Programa Cidadão Pró-Mundo

*Universidade Presbiteriana Mackenzie, Campinas, SP, 2025 a 2029*

Passei num processo seletivo da **Microsoft com o SENAI Sumaré** que deu bolsa para só **20 alunos** da região. Estou fazendo inglês no Mackenzie do A2 até a fluência, com foco em conversação, escuta, leitura e escrita para situações reais.

## :globe: Idiomas

* **Português**, nativo
* **Inglês**, intermediário, estudando para chegar na fluência
`,
  },
  {
    path: "docs/certificados.md",
    content: `# :verified-filled: Certificados

São 23 no total, de Microsoft Azure a Python, dados, UX e IA. Gosto de complementar o que vejo no trabalho com curso, e dá para conferir todos no meu [LinkedIn](https://www.linkedin.com/in/yhagofelipe).

## :azure: Microsoft Azure

1. **AZ-900, Implantação de Serviços em Nuvem**, SENAI São Paulo, mar. de 2025
2. **AI-900, Serviços de Inteligência Artificial em Nuvem**, SENAI São Paulo, jun. de 2025
3. **SC-900, Fundamentos de Segurança em Nuvem**, SENAI São Paulo, jun. de 2025

## :code: Desenvolvimento

1. **Full Stack Web com Node, JavaScript e TypeScript 2026**, Udemy, ago. de 2026
2. **Formação Node.js Fundamentals**, DIO, dez. de 2024
3. **Formação JavaScript Developer**, DIO, set. de 2024
4. **Formação PHP Experience**, DIO, fev. de 2024
5. **Formação Lógica de Programação**, DIO, fev. de 2024

## :symbol-method: Python e Data Science

1. **Python para Análise de Dados e Data Science, nível intermediário**, Data Science Academy, jul. de 2025
2. **Python para Análise de Dados e Data Science, nível básico**, Data Science Academy, jul. de 2025
3. **Python para Análise de Dados e Data Science, nível introdutório**, Data Science Academy, jul. de 2025
4. **Programação em Python**, SENAI São Paulo, jun. de 2025
5. **Fundamentos do Python**, SENAI São Paulo, mar. de 2025
6. **Python Essentials 1**, Cisco, mar. de 2025

## :cloud: Cloud e DevOps

1. **Microsoft AI for Tech, Azure Databricks**, DIO, abr. de 2025
2. **Formação Linux Fundamentals**, DIO, fev. de 2024

## :database: Banco de dados e BI

1. **Banco de Dados para Data Science**, SENAI São Paulo, jun. de 2025
2. **Microsoft Power BI**, SENAI São Paulo, jan. de 2025
3. **Oracle APEX Foundations**, Oracle, mar. de 2025

## :paintcan: UX e UI

1. **Design UX e UI**, SENAI São Paulo, abr. de 2025
2. **Formação UX Designer**, DIO, jul. de 2024

## :sparkle: IA e inovação

1. **Inteligências Artificiais Generativas Aplicadas à Programação, ChatGPT**, SENAI São Paulo, jun. de 2025
2. **Soluções Integradas com IoT**, SENAI São Paulo, jun. de 2025
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

Seja para trocar ideia sobre arquitetura, falar de algum projeto ou só dar um oi, é só chamar. O jeito mais rápido é pelo LinkedIn ou por e-mail.

* :mail: [yhago.felipe.teles@gmail.com](mailto:yhago.felipe.teles@gmail.com)
* :linkedin: [linkedin.com/in/yhagofelipe](https://www.linkedin.com/in/yhagofelipe)
* :github: [github.com/yyhago](https://github.com/yyhago)
* :instagram: [instagram.com/yyhago_](https://www.instagram.com/yyhago_)
* :location: Hortolândia, São Paulo, Brasil

## :comment-discussion: Mande uma mensagem

Preencha aqui que a mensagem chega direto no meu e-mail, sem precisar abrir nenhum programa.

[[orcamento]]
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
6. Em **servicos.md** eu conto como posso ajudar a sua empresa, com um formulário para pedir orçamento, e em **curriculo.md** fica meu currículo.
7. Para ler em inglês, clique em **PT** na barra de tarefas ou na barra azul aqui embaixo.

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
  "Docker Compose": "docker", "Git and GitHub": "git", "Linux and Bash": "linux", "Redis and BullMQ": "redis", "HTML5, CSS3 and Sass": "html",
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

  ext("Back-end", "Node.js", "OpenJS Foundation", "node", "#2b3a2b", "#8cc84b", "JavaScript no servidor.", "Onde eu passo a maior parte do tempo, entre API, fila, job agendado e integração."),
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

Para ver mais, digite open sobre-mim.md`,
  experiencia: `Freecook Brasil          Full Stack       mar. de 2026 até hoje
CroSoften Tecnologia     Back-end         jan. de 2026 a ago. de 2026
DBS System Consultoria   Full Stack       set. de 2025 a dez. de 2025
Grupo EMS                Aprendiz em TI   jan. de 2025 a set. de 2025

Para ver mais, digite open experiencia.md`,
  projetos: `SafetyKeeper   gestão de SST multitenant (NestJS, Next.js)
CUBE           análise política com IA (React, Node.js, Gemini)
Advocacia      landing page com Lighthouse acima de 95
SGI            site em WordPress com tema próprio
Cyberbot       assistente de cibersegurança (Python)
MundoPet       marketplace pet, meu TCC

Para ver mais, digite open projetos.md`,
  servicos: `Sistemas sob medida, integrações e APIs, dashboards com IA,
sites e landing pages, saída de sistema legado e automação.

Atendo muitos clientes, em vários nichos. Entre eles CUBE Inteligência,
JCFireWall, com o SafetyKeeper, CoJurOS, que vem aí, e vários outros.

Para ver mais, digite open servicos.md
Para pedir um orçamento, digite orcamento`,
  repos: `Repositórios públicos em https://github.com/yyhago

Para ver mais, digite open repositorios.md`,
  habilidades: `linguagens   TypeScript, JavaScript, Python, PHP, SQL
front-end    React, Next.js, React Native, Angular, Tailwind CSS
back-end     Node.js, NestJS, Express, FastAPI, Flask, Prisma, Redis
bancos       PostgreSQL, MySQL, SQL Server, MongoDB, Supabase
devops       Docker, Nginx, Linux, GitHub Actions, AWS, Azure
automação    n8n, Playwright, Puppeteer, Selenium, LLMs

Para ver mais, digite open habilidades.md`,
  formacao: `Engenharia de Software        Estácio     2025 a 2028
Técnico em Desenv. Sistemas   SENAI       2025
Técnico em Desenv. Sistemas   ETEC        2022 a 2024
Inglês, Programa CPM          Mackenzie   2025 a 2029

Para ver mais, digite open formacao.md`,
  certificados: `23 certificados, incluindo Microsoft AZ-900, AI-900 e SC-900.

Para ver mais, digite open certificados.md`,
  contato: `email      yhago.felipe.teles@gmail.com
linkedin   https://www.linkedin.com/in/yhagofelipe
github     https://github.com/yyhago
instagram  https://www.instagram.com/yyhago_`,
};

export const langOf = (path: string): Lang => (path.split(".").pop() as Lang) ?? "ts";

export const LANG_NAME: Record<Lang, string> = { ts: "TypeScript", tsx: "TypeScript JSX", json: "JSON", md: "Markdown", pdf: "PDF" };
