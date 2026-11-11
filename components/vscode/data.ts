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
* :terminal-bash: Engenheiro de Software Full Stack, com foco em back-end
* :location: Hortolândia, São Paulo, Brasil
* :mortar-board: Engenharia de Software, Estácio
* :globe: Português nativo, inglês avançado
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

Sou Engenheiro de Software, full stack, com a maior parte da minha experiência no back-end. Meu trabalho é pegar processos manuais e sistemas que não conversam entre si e transformar tudo isso em software que a empresa ou o cliente consiga utilizar e fazer crescer.

Comecei minha carreira no time de Cibersegurança de uma indústria farmacêutica, criando automações em **Python** que reduziram em **40%** o tempo gasto em operações manuais. Foi ali que surgiu uma regra que sigo até hoje: antes de escalar um processo, automatize o que ainda é manual.

Desde então, desenvolvi o back-end de **mais de 23 projetos**, com APIs REST bem estruturadas, regras de negócio desenhadas de ponta a ponta, autenticação e controle de acesso por perfil. Já desenvolvi do zero sistemas que gerenciam toda a operação de uma empresa, desde a compra no e-commerce até a emissão da nota fiscal no ERP, além de conduzir migrações de ERP e banco de dados sem interromper a operação.

Tenho experiência com integrações de ERPs como **OMIE, ERPFLEX, Datasul/TOTVS e Bling**, automações com **n8n** e cuido da minha própria infraestrutura: servidores VPS Linux com **Docker**, **Nginx** como proxy reverso, SSL, Cloudflare, armazenamento em AWS S3, backups automatizados e pipelines de CI/CD.

Gosto de compartilhar o que sei e, mais ainda, de estar perto de pessoas que gostam de compartilhar conhecimento e explicar como fazem as coisas. Trabalho desde o levantamento de requisitos, junto à empresa ou ao cliente, até a entrega final, com sistemas publicados na web e também com possibilidade de acesso mobile. A maioria dos projetos foi desenvolvida utilizando Scrum, Kanban ou rotinas de dailies e weeklies para alinhamento.

Minha formação inclui Bacharelado em Engenharia de Software e dois cursos técnicos em Desenvolvimento de Sistemas, pelo SENAI e pela ETEC. Sou bolsista integral em um programa de inglês do Mackenzie, no qual fui aprovado por meio de uma parceria com a Microsoft e o SENAI. Também possuo diversas certificações nas áreas de desenvolvimento, Data Science, Cloud, DevOps, bancos de dados, BI, UI/UX, IA e Microsoft Azure.

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

Troco sistema antigo por stack própria, em **Next.js, NestJS e TypeScript**, sem parar a operação. Estudo o legado, levanto os gargalos com quem usa todo dia e migro por partes, com o sistema antigo rodando até o novo assumir.

### :cloud: Infraestrutura

Coloco e mantenho tudo no ar, com VPS, **Docker** e **Nginx**, SSL, backup automatizado, CI/CD com GitHub Actions, arquivos no Amazon S3 e serviços na Azure.

## :rocket: Alguns números

* **Mais de 20 projetos** de clientes atendidos com APIs em Node.js e NestJS
* **40% menos tempo** gasto em operações manuais com as automações em Python
* **4 ERPs integrados**, Bling, OMIE, ERPFLEX e Datasul/TOTVS
* **23 certificados**, incluindo Microsoft Azure AZ-900, AI-900 e SC-900
* {{github}}

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

Comecei como jovem aprendiz em 2025 e, de lá para cá, passei por consultoria, por uma software house atendendo dezenas de clientes ao mesmo tempo e sei cuidar de toda a tecnologia de uma empresa. Aqui está o que eu fiz em cada lugar, com alguns dos sistemas que estão no ar. {{cv-frase}}

## Freecook Brasil

**Desenvolvedor de Software Full Stack**, CLT
*mar. de 2026 até hoje, Campinas, SP, presencial*

Responsável pela arquitetura e evolução técnica de todo o ecossistema de TI da empresa, com foco em performance, escalabilidade e automação de processos.

* Arquitetei e construí do zero a plataforma digital que sustenta a operação de ponta a ponta, do pedido no e-commerce até a baixa no estoque, com loja virtual, painel administrativo, portal comercial e site institucional em um sistema único.
* Conduzi a saída do legado em **WordPress** para uma stack proprietária em **Next.js, NestJS e TypeScript**, definindo padrões de código, estrutura de API e estratégia de migração sem interromper a operação.
* Desenvolvimento back-end em **PHP/MySQL** para o e-commerce legado durante a transição, com módulos e integrações sob medida.
* Arquitetura de automações via **n8n**, orquestrando fluxos entre ERP, CRM e sistemas internos.
* Migração de integração de ERP legado (**ERPFLEX**) para ERP atual (**OMIE**), garantindo consistência de estoque, pedidos e clientes.
* Armazenamento de arquivos via **Amazon S3** com presigned URLs e gestão de infraestrutura própria (**VPS, Docker, Nginx, SSL**) com backups automatizados.
* Integração com gateways de pagamento, APIs REST e sistemas de logística (**Frenet**).

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

PJ, meio período. Desenvolvimento e manutenção de APIs RESTful escaláveis em ambiente corporativo, atendendo mais de 20 projetos de clientes diferentes simultaneamente.

* Arquitetura e desenvolvimento de APIs com **Node.js, NestJS e TypeScript**, aplicando **Clean Architecture** para garantir manutenibilidade e escalabilidade em projetos de longo prazo.
* Implementação de regras de negócio complexas, autenticação/autorização e integração com múltiplas APIs externas.
* Documentação técnica completa via **Swagger**, viabilizando consumo simultâneo por aplicações mobile (iOS) e front-end (**Angular**).
* Atuação direta com clientes no levantamento de requisitos e definição de escopo técnico, traduzindo necessidades de negócio em arquitetura de sistema.
* Gerenciamento de múltiplas demandas concorrentes com foco em entregas contínuas e qualidade de código, dentro de metodologias ágeis (Scrum/Kanban).

Projetos entregues em domínios variados: agronegócio (Vitrine do Campo), saúde (Cardio Shop), gestão financeira (SAFE/ERICA), logística (Ships Manager), entre outros.

Os 23 projetos em que trabalhei.

* [:link-external: 2Clicks](https://2clicks.app/), para encontrar o que você precisa na cidade em poucos cliques
* [:link-external: Minha Revenda](https://minharevenda.com.br/), gestão para revendedores de cosméticos
* [:link-external: Cupom Clube](https://cupomclube.com.br/)
* [:link-external: LeSalvi](https://lesalvi.com/)
* [:link-external: Vermont](https://vermont.com.br/), contact center omnichannel
* [:link-external: Vitrine do Campo](https://vitrinedocampo.com.br/), consultoria agronômica e crédito rural
* E também Academia Alma, AJ Crypto, Alvino, Cardio Shop, City, Conexes, Corremaq, Erasmo, Fluitz, Pendragon, Copeme, Regia Maria, SAFE/ERICA, Sapyem, Ships Manager, Tito e Wincoin.

{{prints:2clicks|2Clicks}}
{{prints:minharevenda|Minha Revenda}}
{{prints:cupomclube|Cupom Clube}}
{{prints:lesalvi|LeSalvi}}
{{prints:vitrinedocampo|Vitrine do Campo}}

## DBS System Consultoria

**Desenvolvedor de Software Full Stack**, PJ
*set. de 2025 a dez. de 2025, Campinas, SP, remoto*

Modernização de aplicações corporativas legadas para ambiente industrial, com foco em integração de sistemas e substituição de fluxos manuais por APIs automatizadas.

* Reconstrução de integrações com o ERP **Datasul (TOTVS)**, substituindo trocas manuais de dados por consumo direto de API, reduzindo risco de inconsistência entre sistemas.
* Desenvolvimento de APIs RESTful em **PHP e Node.js**, com persistência em **MySQL e PostgreSQL**, para suportar as novas integrações.
* Reconstrução de interfaces legadas com **Next.js e TypeScript**, modernizando a experiência sem interromper a operação em produção.
* Levantamento técnico de requisitos junto à equipe de negócio, identificando gargalos na aplicação legada e propondo arquitetura de substituição.
* Entrega de projeto de escopo fechado em 4 meses, com autonomia total sobre decisões técnicas e cronograma.

Alguns dos clientes para quem desenvolvi.

* [:link-external: NG Metalúrgica](https://www.ngmetalurgica.com.br/)
* [:link-external: Pronutrition](https://pronutrition.com.br/)

{{prints:ngmetalurgica|NG Metalúrgica}}
{{prints:pronutrition|Pronutrition}}

## Grupo EMS

**Jovem Aprendiz em TI, Cibersegurança**, CLT
*jan. de 2025 a set. de 2025, Hortolândia, SP, presencial*

Primeira experiência corporativa, atuando no time de Cibersegurança com foco em automação de processos internos e proteção de dados.

* Desenvolvimento de aplicações internas em **Python** (**Streamlit, FastAPI, Flask**) para suportar demandas específicas da área de segurança.
* Criação de automações que reduziram em **40%** o tempo de operações manuais da equipe, meu primeiro contato real com a ideia de *automatizar antes de escalar*, que carrego até hoje.
* Estruturação de pipelines simples (**CI/CD**) para execução e monitoramento contínuo das automações.
* Integração com múltiplos bancos de dados (**Supabase, Firebase, PostgreSQL, MySQL**) para consolidar fluxo de dados entre sistemas.
* Apoio em práticas de segurança da informação, com foco em tratamento adequado de dados sensíveis.
`,
  },
  {
    path: "docs/projetos.md",
    git: "M",
    content: `# :project: Projetos

Aqui está uma seleção dos projetos que entreguei, de inteligência política a segurança do trabalho, advocacia e comunicação jurídica, cada um com o problema que precisava ser resolvido e como eu resolvi. É só uma parte, atendo muitos outros clientes que não aparecem aqui. Projeto de cliente fica em repositório privado, por contrato, então quando não dá para mostrar o código eu mostro as telas. Clica em qualquer imagem para ver maior. Meus projetos pessoais e de estudo ficam em [repositorios.md](repositorios.md), direto do GitHub.

## CoJurOS, comunicação jurídica

*Full Stack, em desenvolvimento*

Projeto novo que estou desenvolvendo agora, o CoJurOS, voltado para comunicação jurídica. Em breve conto mais por aqui, com telas e detalhes.

{{prints:cojuros|CoJurOS, telas do sistema}}

## SafetyKeeper, gestão de SST

*Full Stack, cliente JCFireWall*

\`NestJS\` \`TypeScript\` \`Node.js\` \`Next.js\` \`PostgreSQL\` \`APIs REST\` \`Swagger\` \`Multitenancy\` \`RBAC\` \`Docker\` \`Nginx\` \`VPS\`

**Dor do cliente.** A JCFireWall atendia vários clientes corporativos e controlava a conformidade de SST de todos eles em planilha, sem separação confiável entre empresas, sem histórico de quem alterou o quê e sem visibilidade de vencimentos. Precisava de uma plataforma em que cada cliente enxergasse só os próprios dados, com trilha de auditoria para a fiscalização e base pronta para crescer junto com a carteira.

**Solução.**

* Back-end modular em **NestJS e TypeScript**, rodando em **Node.js**, separando clientes, usuários, conformidade e documentação de segurança em módulos independentes e testáveis.
* API REST documentada no **Swagger**, com versionamento e respostas padronizadas, para o front-end consumir sem surpresa.
* **Multitenancy** com isolamento de dados por empresa e **RBAC** por perfil, então cada cliente só enxerga o que é dele.
* **PostgreSQL** com modelagem relacional e índices pensados para as consultas de conformidade e para o histórico de auditoria, sem perder performance.
* Validação de dados e tratamento de erros centralizado no **NestJS**, evitando inconsistência em informação crítica de segurança do trabalho.
* Front-end em **Next.js** para documentos, vencimentos e status de conformidade por cliente, com telas diferentes para cada perfil.
* Deploy em VPS com Docker, Nginx, SSL e backup automatizado, pronto para receber novos clientes sem mexer na arquitetura.

O sistema é interno e fica atrás de login. [:link-external: Site da JCFireWall](https://jcfirewall.com.br)

{{prints:safetykeeper|SafetyKeeper, telas do sistema}}
{{prints:clientejcfirewall|Site da JCFireWall, cliente do SafetyKeeper}}

## CUBE, análise política

*Full Stack, cliente CUBE Inteligência*

\`React\` \`TypeScript\` \`Vite\` \`Tailwind CSS\` \`Node.js\` \`Express\` \`Prisma\` \`PostgreSQL\` \`APIs REST\` \`JWT\` \`RBAC\` \`Apify\` \`Gemini AI\` \`Nginx\` \`VPS\` \`PM2\`

**Dor do cliente.** A CUBE precisava acompanhar em tempo real o que saía sobre temas e figuras políticas, medir o tom dessas menções e mostrar tudo em painéis que aguentassem pico de acesso em período eleitoral, com permissões diferentes para a equipe interna e para os clientes.

**Solução.** Separei bem o front-end, uma SPA, do back-end, uma API REST stateless, com ambientes isolados por camada e deploy versionado para voltar atrás rápido se precisasse.

* Front-end em **React 18 com TypeScript e Vite**, com code splitting, Tailwind e componentes próprios, sem biblioteca de UI pesada.
* **React Query** para cache, revalidação automática e estado assíncrono, e dashboards em tempo real com Chart.js e Recharts.
* Back-end em **Node.js e Express**, em camadas de controllers, services e repositories.
* **Prisma** com PostgreSQL, migrations versionadas e índices estratégicos.
* Autenticação **JWT** com rotação de refresh token, senhas com bcrypt e **RBAC** com middleware por rota.
* Coleta de dados públicos com **Apify** e análise de sentimento com a API do **Google Gemini**, com prompt ajustado ao contexto político.
* Agregador de RSS com node-cron para atualizar tudo em segundo plano, e validação com Zod.
* Deploy em VPS dedicada, com Nginx e firewall gerenciados pelo HestiaCP e Node em cluster mode com **PM2**, usando todos os núcleos do servidor.

A plataforma é privada, por contrato. [:link-external: Site da CUBE](https://cubeinteligencia.com.br)

{{prints:cube|CUBE, telas da plataforma}}
{{prints:clientecube|Site da CUBE Inteligência, cliente da plataforma}}

## Landing page, Raquel Ribeiro Advocacia

*Front-end, cliente Raquel Ribeiro Advocacia*

\`React\` \`TypeScript\` \`Vite\` \`Tailwind CSS\` \`HTML5\` \`Vercel\`

**Dor do cliente.** O escritório queria aparecer no Google para quem procura advogado trabalhista na região, com uma página rápida no celular que virasse contato de verdade pelo WhatsApp e pelo formulário.

**Solução.** Transformei isso em requisitos de performance, SEO e acessibilidade.

* React 18, TypeScript e Vite, com Tailwind e layout mobile first testado em aparelho de verdade.
* SEO técnico com React Helmet, HTML semântico e dados estruturados schema.org para advocacia.
* Lazy loading de componentes **React** e imagens WebP com fallback, chegando a **Lighthouse acima de 95** em todas as categorias e **LCP abaixo de 2,5 s**.
* Acessibilidade **WCAG 2.1 nível A**, com contraste adequado, navegação por teclado, ARIA labels e foco visível.
* Deploy na Vercel com preview a cada pull request.

[:link-external: Ver a landing page no ar](https://raquel-ribeiro-advocacia-psi.vercel.app/)

{{prints:advocacia|Landing page da Raquel Ribeiro Advocacia}}

## Site da SGI Treinamentos e Assessoria

*Full Stack, consultoria, cliente SGI Treinamentos e Assessoria*

\`PHP\` \`WordPress\` \`MySQL\` \`Sass\` \`Git\`

**Dor do cliente.** A SGI precisava de um site institucional no ar em pouco tempo, que a equipe conseguisse atualizar sem depender de desenvolvedor, com formulário de contato confiável e espaço para crescer quando lançasse novos serviços.

**Solução.**

* WordPress com tema próprio em **PHP 8**, aproveitando que a equipe já conhecia o painel e mantendo controle total do código.
* Tema em **PHP** organizado com separação de responsabilidades inspirada em MVC, para a manutenção ficar simples.
* SCSS com Grid e Flexbox para o layout responsivo e os componentes.
* Formulários via AJAX, em **JavaScript e PHP**, com nonce e sanitização, prevenindo CSRF e XSS.
* Tabelas próprias no **MySQL** para os dados estruturados, sem lotar a wp_postmeta e mantendo as consultas rápidas.
* Deploy automatizado via Git na Hostinger, com versionamento e rollback.

[:link-external: sgitreinamentosassessoria.com](https://sgitreinamentosassessoria.com/)

{{prints:sgi|Site da SGI Treinamentos e Assessoria}}

## Cyberbot, assistente de cibersegurança

*Trabalho de curso, em equipe*

\`Python\` \`PLN\` \`Streamlit\` \`Git\` \`GitHub\`

Trabalho de curso que fizemos em quatro desenvolvedores para ajudar na conscientização sobre segurança digital.

* Três módulos, um chatbot para dúvidas de segurança digital e boas práticas, um gerador e verificador de senhas fortes e um simulador educativo de phishing.
* Feito em Python com processamento de linguagem natural, em arquitetura modular pronta para receber APIs de segurança no futuro.
* Interface em Streamlit, pensada para quem não é da área achar tudo rápido.
* Versionamento no Git e GitHub, com gestão ágil das tarefas.

[:github: Ver o código no GitHub](https://github.com/rafafrd/Cyberbot)

{{prints:cyberbot|Cyberbot, telas do protótipo}}

## MundoPet, meu TCC

*Full Stack, projeto acadêmico, ETEC Hortolândia*

\`Node.js\` \`Express\` \`MongoDB\` \`React\` \`Redux\` \`Bootstrap\` \`PayPal\` \`AWS\`

Trabalho de Conclusão do técnico em Desenvolvimento de Sistemas, um marketplace completo para o mercado pet que junta vários pet shops numa plataforma só.

* Back-end em **Node.js e Express**, com MongoDB e Mongoose, e banco hospedado na AWS.
* Front-end em **React com Redux** para o estado e Formik nos formulários.
* Pet shops mais próximos no mapa, carrinho, cadastro e pagamento pelo **PayPal**.
* Modelo de negócio compartilhado, em que uma parte de cada venda fica com a plataforma.

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
* **NG Metalúrgica** e **Pronutrition**, indústria e nutrição, com integrações ao TOTVS Datasul e telas em Next.js
* **Raquel Ribeiro Advocacia** e **SGI Treinamentos**, advocacia e segurança do trabalho, com sites rápidos e fáceis de manter, em React e WordPress
* **Vitrine do Campo**, **2Clicks**, **Minha Revenda**, **Cupom Clube** e mais de 20 projetos de agronegócio, saúde, finanças, varejo e logística
* E muitos outros clientes, de comércio, serviços, indústria e startups, que atendo por projeto ou com manutenção contínua

## :tools: O que eu posso fazer por você

### :layers: Sistemas sob medida

Painel administrativo, sistema de gestão, portal para clientes ou parceiros, com login, permissão por perfil e dados separados por empresa. Foi o que fiz no SafetyKeeper, em **NestJS, Next.js e PostgreSQL**, que tirou a gestão de SST da planilha.

### :plug: Integrações e APIs

Seu ERP, seu e-commerce, seu CRM e sua logística conversando sozinhos, sem ninguém copiando dado de um lugar para o outro. Já integrei Bling, OMIE, ERPFLEX, Datasul/TOTVS, RD Station, gateways de pagamento e Frenet.

### :graph: Dados, dashboards e IA

Painéis que mostram o que importa em tempo real, coleta de dados públicos e análise de texto com IA. Foi a base da plataforma da CUBE, feita em **React, Node.js e PostgreSQL**, com **Google Gemini** na análise de texto, para aguentar pico de acesso em período eleitoral.

### :browser: Sites e landing pages

Site institucional ou página de captação rápida no celular, bem posicionada no Google e fácil de atualizar. A landing page da Raquel Ribeiro, feita em **React, TypeScript e Vite**, chegou a Lighthouse acima de 95 em todas as categorias.

### :history: E-commerce e saída de sistema legado

Troco o sistema antigo por uma plataforma própria sem parar a operação, migrando por partes. Já fiz isso com uma operação inteira, do pedido no e-commerce até a nota fiscal, em **Next.js, NestJS e TypeScript**.

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

Esta página está em obras. As habilidades estão na academia, malhando para voltar mais fortes, e só entram aqui quando eu dominar de verdade. Se o café ajudar, volto logo com tudo organizado.

Quer ver tudo o que eu já trabalhei? É só abrir a aba [Extensões](extensoes), aqui do lado. Cada tecnologia tem uma página contando onde e como eu usei.
`,
  },
  {
    path: "docs/formacao.md",
    content: `# :mortar-board: Formação

Estudo desde 2022 sem parar, com um técnico junto com o ensino médio, outro técnico no SENAI, a faculdade e o inglês, quase tudo ao mesmo tempo que trabalho.

## Bacharelado em Engenharia de Software

*Centro Universitário Estácio de Sá, remoto, jan. de 2025 a dez. de 2028, em andamento*

Curso focado em construir sistemas robustos e escaláveis. Estou me aprofundando em arquitetura de software, padrões de projeto, engenharia de requisitos e metodologias ágeis como Scrum e Kanban, passando por análise, modelagem, implementação e manutenção de sistemas, com ênfase em segurança, performance e usabilidade.

Muito do que vi no curso eu apliquei na prática no CUBE, uma plataforma full stack de análise política com arquitetura escalável, RBAC e processamento de linguagem natural em tempo real.

## Inglês, Programa Cidadão Pró-Mundo

*Universidade Presbiteriana Mackenzie, Campinas, SP, jul. de 2025 a dez. de 2029, em andamento*

Passei num concurso seletivo da **Microsoft com o SENAI Sumaré** que deu bolsa para só **20 alunos** da região. Estou fazendo inglês no Mackenzie, do A2 até a fluência, com foco em conversação, escuta ativa, leitura e escrita, usando ferramentas digitais num ambiente multicultural para situações reais do dia a dia.

## Técnico em Desenvolvimento de Sistemas

*SENAI Dr. Celso Charuri, Sumaré, SP, jan. de 2025 a set. de 2025, concluído*

Técnico com foco em engenharia de software aplicada, que fiz pela EMS como parte do programa de aprendiz. Desenvolvi análise de sistemas, modelagem de dados, lógica computacional avançada, arquitetura de sistemas e programação orientada a objetos e funcional, com metodologias ágeis, práticas de DevOps com CI/CD e projetos práticos pensados para escalar.

## Técnico em Desenvolvimento de Sistemas com Ensino Médio

*ETEC Hortolândia, jan. de 2022 a dez. de 2024, concluído*

Foi onde eu comecei de verdade. Estudei pensamento computacional, modelagem de dados, arquitetura de sistemas e orientação a objetos, e trabalhei com desenvolvimento web full stack, com aplicações responsivas, APIs RESTful e SPAs, além de metodologias ágeis e UML. Também tive meu primeiro contato com C, C++ e Arduino.

Meu TCC foi o **MundoPet**, um marketplace pet completo com Node.js, Express, React, Redux e MongoDB. Os detalhes estão em [projetos.md](projetos.md).

## :globe: Idiomas

* **Português**, nativo
* **Inglês**, nível avançado
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
  titulo: "Engenheiro de Software Full Stack",
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
  "description": "Portfólio do Yhago Felipe, engenheiro de software Full Stack",
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
  TypeScript: "ts", JavaScript: "js", Python: "py", PHP: "php", React: "react", "React Native": "react", "Next.js": "nextjs", Angular: "angular",
  Redux: "redux", "Tailwind CSS": "tailwind", Bootstrap: "bootstrap", HTML5: "html", CSS3: "css", Sass: "sass", Vite: "vite", "Node.js": "nodejs",
  NestJS: "nestjs", Express: "express", FastAPI: "fastapi", Flask: "flask", Prisma: "prisma", Redis: "redis", BullMQ: "redis",
  PostgreSQL: "postgres", MySQL: "mysql", MongoDB: "mongodb", SQLite: "sqlite", Supabase: "supabase", Firebase: "firebase", Docker: "docker",
  Nginx: "nginx", Linux: "linux", Bash: "bash", "GitHub Actions": "githubactions", AWS: "aws", "Amazon S3": "aws", Azure: "azure",
  "Microsoft Azure": "azure", Vercel: "vercel", Git: "git", GitHub: "github", "Git e GitHub": "git", Figma: "figma", Postman: "postman",
  WordPress: "wordpress", Selenium: "selenium", "Linux e Bash": "linux", "Redis e BullMQ": "redis", "HTML5, CSS3 e Sass": "html", SQL: "sql",
  "APIs REST": "rest", "REST APIs": "rest", Swagger: "swagger", JWT: "jwt", OAuth2: "oauth2", RBAC: "rbac", "JWT, OAuth2 e RBAC": "jwt",
  "JWT, OAuth2 and RBAC": "jwt", "SQL Server": "sqlserver", NoSQL: "nosql", Oracle: "oracle", phpMyAdmin: "phpmyadmin", VPS: "vps", "CI/CD": "cicd",
  n8n: "n8n", Playwright: "playwright", Puppeteer: "puppeteer", BeautifulSoup: "beautifulsoup", Apify: "apify", LLMs: "llms",
  "Google Gemini": "gemini", Bling: "erp", OMIE: "erp", ERPFLEX: "erp", "Datasul/TOTVS": "erp", ERPs: "erp", "RD Station": "rdstation",
  Frenet: "frenet", "BB Developer": "bb", PayPal: "paypal", "Mercado Livre": "mercadolivre", WooCommerce: "woocommerce", "Power BI": "powerbi",
  "Azure Databricks": "databricks", XAMPP: "xampp", IoT: "iot", "Arduino e IoT": "arduino", "Arduino and IoT": "arduino", "UI/UX responsivo": "uiux",
  "Responsive UI/UX": "uiux", "Estrutura de dados": "datastructures", "Data structures": "datastructures", "Design de software": "softwaredesign",
  "Software design": "softwaredesign", Redes: "network", Networking: "network", Scrum: "scrum", Kanban: "kanban", "Gemini AI": "gemini", PM2: "pm2",
  Streamlit: "streamlit", PLN: "nlp", NLP: "nlp", Multitenancy: "multitenancy", "Arquitetura de software": "architecture",
  "Software architecture": "architecture", "Engenharia de requisitos": "requirements", "Requirements engineering": "requirements",
  "Padrões de projeto": "patterns", "Design patterns": "patterns", "Modelagem de dados": "sql", "Data modeling": "sql", POO: "oop", OOP: "oop",
  "Programação funcional": "functional", "Functional programming": "functional", "Gestão de projetos": "projectmgmt",
  "Project management": "projectmgmt", UML: "uml", "Inglês": "languages", English: "languages", "Comunicação oral": "communication",
  Speaking: "speaking", Listening: "listening", "Leitura e escrita": "reading", "Reading and writing": "reading", "Liderança": "leadership",
  Leadership: "leadership", "Integração de sistemas": "erp", "System integration": "erp", CSS: "css", XML: "xml", "C++": "cpp", C: "c",
  "Express.js": "express", Axios: "axios", "Banco de dados": "sql", "Cibersegurança": "cyber", Infraestrutura: "vps", DevOps: "cicd",
  "Azure DevOps": "azure", "Computação em nuvem": "cloud", "Segurança de nuvem": "cloudsec", "Aplicativos em nuvem": "cloudapps",
  "Arquitetura de rede": "network", "Administração de redes": "netadmin", "Inteligência artificial": "ai", Jupyter: "jupyter",
  "Manipulação de dados": "datamanip", Arduino: "arduino", "Internet das Coisas": "iot", "Arquitetura MVC": "mvc", Algoritmos: "algorithms",
  "Raciocínio lógico": "logic", "Design de experiência do usuário (UX)": "uiux", UI: "ui", "Engenharia de Software": "swe",
  "Desenvolvedor de Software": "dev", "Desenvolvimento full stack": "fullstack", "Desenvolvimento de back-end": "backend",
  "Desenvolvimento de front-end": "frontend", "Desenvolvimento web": "web", "Programação (computação)": "programming",
  "Linguagens de programação": "langs", "Sistemas operacionais": "os", "Comunicação oral em inglês": "speaking",
  "Compreensão auditiva (Listening)": "listening", "Escrita e leitura em inglês": "reading", "Docker Compose": "docker", "Git and GitHub": "git",
  "Google Cloud": "gcp", "Linux and Bash": "linux", "Redis and BullMQ": "redis", "HTML5, CSS3 and Sass": "html",
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
  id: name.toLowerCase().replace(/\+/g, "p").replace(/[^a-z0-9]+/g, ""),
  cat, name, publisher, label, bg, fg, desc, about,
});

export const extensions: Ext[] = [
  ext("Linguagens", "TypeScript", "Microsoft", "TS", "#3178c6", "#fff", "JavaScript com tipagem estática.", "É a linguagem que eu mais uso, no front e no back. Tipo bem definido e Zod validando os dados na entrada evitam muito bug."),
  ext("Linguagens", "JavaScript", "Ecma International", "JS", "#f7df1e", "#000", "A linguagem da web.", "Foi por onde eu comecei na web, ainda na ETEC."),
  ext("Linguagens", "Python", "Python Software Foundation", "Py", "#3776ab", "#ffd43b", "Automação, dados e APIs.", "Meu primeiro trabalho foi com Python, nas automações da Cibersegurança do Grupo EMS que cortaram 40% do trabalho manual."),
  ext("Linguagens", "PHP", "The PHP Group", "php", "#777bb4", "#fff", "A linguagem que move boa parte da web.", "Uso bastante em e-commerce legado, tema de WordPress e integração com ERP."),
  ext("Linguagens", "SQL", "ISO/IEC", "SQL", "#4479a1", "#fff", "A linguagem dos bancos relacionais.", "Modelagem, índice e consulta pensados para performance e auditoria."),
  ext("Linguagens", "HTML5", "W3C", "H5", "#e34f26", "#fff", "Marcação da web.", "HTML semântico, pensando em SEO e acessibilidade. Aprendi na ETEC."),
  ext("Linguagens", "CSS", "W3C", "CSS", "#1572b6", "#fff", "Estilo e layout.", "Layout responsivo em todo projeto web, do TCC da ETEC aos sistemas da Estácio."),
  ext("Linguagens", "XML", "W3C", "XML", "#f5a623", "#000", "Formato de dados estruturados.", "Estudado e usado desde a ETEC."),
  ext("Linguagens", "C++", "ISO C++", "C++", "#00599c", "#fff", "C com orientação a objetos.", "Meu primeiro contato foi na ETEC."),
  ext("Linguagens", "C", "ISO C", "C", "#283593", "#fff", "A linguagem base da computação.", "Meu primeiro contato com programação de baixo nível, na ETEC."),

  ext("Back-end", "Node.js", "OpenJS Foundation", "node", "#2b3a2b", "#8cc84b", "JavaScript no servidor.", "Onde eu passo a maior parte do tempo, entre API, fila, job agendado e integração."),
  ext("Back-end", "NestJS", "NestJS", "Ns", "#1a1a1a", "#ea2845", "Framework para back-end escalável.", "É o que mais uso no back-end. Na CroSoften foram mais de 20 projetos com Nest e Clean Architecture."),
  ext("Back-end", "Express.js", "OpenJS Foundation", "ex", "#353535", "#fff", "Framework web minimalista.", "Back-end do MundoPet, meu TCC, e da plataforma da CUBE."),
  ext("Back-end", "Prisma", "Prisma Data", "Pr", "#0c344b", "#fff", "ORM com tipagem de ponta a ponta.", "Migrations versionadas no CUBE."),
  ext("Back-end", "APIs REST", "REST", "API", "#0a5c91", "#fff", "Padrão de APIs sobre HTTP.", "Endpoints versionados e documentados no Swagger."),
  ext("Back-end", "Swagger", "SmartBear", "Sw", "#173647", "#85ea2d", "Documentação de APIs.", "Minhas APIs saem documentadas. Na CroSoften o time de iOS e o de Angular consumiam tudo pelo Swagger."),
  ext("Back-end", "Redis e BullMQ", "Redis Ltd.", "Rd", "#dc382d", "#fff", "Cache e filas.", "Fila para tirar tarefa pesada de dentro da requisição."),
  ext("Back-end", "FastAPI", "Sebastián Ramírez", "FA", "#009688", "#fff", "APIs rápidas em Python.", "APIs internas na EMS e a BookAPI que está no meu GitHub."),
  ext("Back-end", "Flask", "Pallets", "Fl", "#000", "#fff", "Microframework em Python.", "Aplicações internas na EMS."),

  ext("Front-end", "React", "Meta", "Re", "#20232a", "#61dafb", "Interfaces com componentes.", "Dashboards e painéis administrativos, como os do CUBE."),
  ext("Front-end", "Next.js", "Vercel", "N", "#000", "#fff", "O framework React para a web.", "Base da plataforma que construí na Freecook e das telas que modernizei na DBS. Esse portfólio também é Next.js."),
  ext("Front-end", "Tailwind CSS", "Tailwind Labs", "Tw", "#0b1120", "#38bdf8", "CSS utilitário.", "É o que eu uso na maioria dos projetos para estilizar rápido."),
  ext("Front-end", "React Native", "Meta", "RN", "#20232a", "#61dafb", "Apps nativos com React.", "Apps para iOS e Android consumindo as mesmas APIs da web."),
  ext("Front-end", "Angular", "Google", "A", "#dd0031", "#fff", "Framework web do Google.", "Front-ends corporativos que consumiam as APIs que eu documentava no Swagger na CroSoften."),
  ext("Front-end", "Bootstrap", "Bootstrap Team", "B", "#7952b3", "#fff", "Componentes responsivos prontos.", "Usei no MundoPet."),
  ext("Front-end", "Redux", "Redux Team", "Rx", "#764abc", "#fff", "Gerenciamento de estado.", "Usei no MundoPet, meu TCC."),
  ext("Front-end", "Axios", "Axios", "Ax", "#5a29e4", "#fff", "Cliente HTTP.", "Consumo das APIs nos front-ends, desde a faculdade."),

  ext("Bancos de dados", "Banco de dados", "Conceito", "BD", "#336791", "#fff", "Modelagem e armazenamento de dados.", "Modelagem e consultas na Freecook, na DBS e nos projetos de clientes."),
  ext("Bancos de dados", "PostgreSQL", "PostgreSQL Global Development Group", "Pg", "#336791", "#fff", "Banco relacional open source.", "Meu banco padrão hoje."),
  ext("Bancos de dados", "MySQL", "Oracle", "My", "#00758f", "#f29111", "Banco relacional popular na web.", "E-commerce legado e APIs em PHP e Node."),
  ext("Bancos de dados", "MongoDB", "MongoDB Inc.", "Mg", "#023430", "#00ed64", "Banco de documentos.", "Usei no MundoPet."),
  ext("Bancos de dados", "SQL Server", "Microsoft", "SS", "#a91d22", "#fff", "Banco relacional da Microsoft.", "Ambientes corporativos."),
  ext("Bancos de dados", "Oracle", "Oracle", "Or", "#c74634", "#fff", "Banco relacional corporativo.", "Ambientes corporativos."),
  ext("Bancos de dados", "SQLite", "SQLite Consortium", "Lt", "#003b57", "#fff", "Banco leve e embutido.", "Protótipo e teste."),
  ext("Bancos de dados", "Supabase", "Supabase", "Sb", "#1c1c1c", "#3ecf8e", "Postgres com back-end pronto.", "Integração de dados na EMS."),
  ext("Bancos de dados", "Firebase", "Google", "Fb", "#1a2b34", "#ffca28", "Plataforma de apps do Google.", "Integração de dados na EMS."),
  ext("Bancos de dados", "NoSQL", "Conceito", "NoS", "#023430", "#00ed64", "Bancos não relacionais.", "Uso quando o modelo pede documento ou chave e valor."),
  ext("Bancos de dados", "phpMyAdmin", "phpMyAdmin", "pA", "#f89c0e", "#000", "Administração de MySQL pelo navegador.", "Apoio em projetos PHP e WordPress."),

  ext("Segurança", "JWT, OAuth2 e RBAC", "IETF", "JWT", "#000", "#d63aff", "Autenticação e permissões.", "Refresh token com rotação e permissão por rota e por perfil."),
  ext("Segurança", "Cibersegurança", "Segurança", "CS", "#7f0000", "#fff", "Proteção de sistemas e dados.", "Comecei no time de Cibersegurança do Grupo EMS e levo esse cuidado para o desenho dos sistemas."),
  ext("Segurança", "Segurança de nuvem", "Conceito", "SN", "#0078d4", "#fff", "Proteção de ambientes na nuvem.", "Certificação Microsoft SC-900, Fundamentos de Segurança em Nuvem."),

  ext("DevOps e Cloud", "Docker", "Docker Inc.", "Dk", "#1d63ed", "#fff", "Containers.", "Tudo que eu subo em VPS roda em Docker."),
  ext("DevOps e Cloud", "Docker Compose", "Docker Inc.", "DC", "#1d63ed", "#fff", "Vários containers em um arquivo.", "Sobe API, banco e fila juntos."),
  ext("DevOps e Cloud", "Nginx", "F5", "Nx", "#009639", "#fff", "Servidor web e proxy reverso.", "Na frente das APIs em produção, com SSL."),
  ext("DevOps e Cloud", "DevOps", "Prática", "DO", "#2088ff", "#fff", "Desenvolvimento e operação juntos.", "Pipelines, Docker e deploy automatizado, visto no AZ-900 e no Microsoft AI for Tech."),
  ext("DevOps e Cloud", "CI/CD", "Prática", "CI", "#2088ff", "#fff", "Integração e entrega contínuas.", "Build, teste e deploy automatizados."),
  ext("DevOps e Cloud", "Azure DevOps", "Microsoft", "AD", "#0078d4", "#fff", "Repositórios, boards e pipelines.", "Visto no AZ-900 e no Microsoft AI for Tech."),
  ext("DevOps e Cloud", "AWS", "Amazon Web Services", "aws", "#232f3e", "#ff9900", "Nuvem da Amazon.", "Amazon S3 com presigned URLs na Freecook."),
  ext("DevOps e Cloud", "Amazon S3", "Amazon Web Services", "S3", "#232f3e", "#e05243", "Armazenamento de arquivos na nuvem.", "Arquivos com presigned URLs na Freecook."),
  ext("DevOps e Cloud", "Microsoft Azure", "Microsoft", "Az", "#0078d4", "#fff", "Nuvem da Microsoft.", "Tenho as certificações AZ-900, AI-900 e SC-900."),
  ext("DevOps e Cloud", "Google Cloud", "Google", "GC", "#4285f4", "#fff", "Nuvem do Google.", "Serviços de nuvem do Google."),
  ext("DevOps e Cloud", "Computação em nuvem", "Conceito", "Cl", "#0078d4", "#fff", "Serviços sob demanda na nuvem.", "Certificações Microsoft AI-900 e SC-900."),
  ext("DevOps e Cloud", "Aplicativos em nuvem", "Conceito", "AN", "#0078d4", "#fff", "Aplicações rodando na nuvem.", "Certificações Microsoft AI-900 e SC-900."),

  ext("Redes e infraestrutura", "Linux e Bash", "Linux Foundation", "$_", "#333", "#fcc624", "O sistema dos servidores.", "Administro minhas VPS e as rotinas de backup."),
  ext("Redes e infraestrutura", "VPS", "Servidor", "VPS", "#333", "#fff", "Servidor virtual privado.", "Mantenho minha própria infraestrutura."),
  ext("Redes e infraestrutura", "Infraestrutura", "Servidor", "In", "#333", "#fff", "Servidores e ambiente de execução.", "Do Grupo EMS e do SENAI à minha própria infraestrutura na Freecook."),
  ext("Redes e infraestrutura", "Redes", "Computação", "Net", "#333", "#fff", "Comunicação entre sistemas.", "Base para infraestrutura e APIs."),
  ext("Redes e infraestrutura", "Arquitetura de rede", "Redes", "AR", "#2e7d32", "#fff", "Como as redes são desenhadas.", "Estudo no SENAI e prática no Grupo EMS."),
  ext("Redes e infraestrutura", "Administração de redes", "Redes", "AD", "#2e7d32", "#fff", "Operação e manutenção de redes.", "Experiência no Grupo EMS."),

  ext("Integrações", "Integração de sistemas", "Arquitetura", "Int", "#0a5c91", "#fff", "Sistemas conversando entre si.", "ERP, e-commerce, CRM e logística integrados, sem ninguém copiando dado de um lugar para o outro."),
  ext("Integrações", "ERPs", "Bling, OMIE, ERPFLEX e TOTVS", "ERP", "#0a5c91", "#fff", "Sistemas de gestão.", "Já integrei Bling, OMIE, ERPFLEX e Datasul/TOTVS, inclusive migrando do ERPFLEX para o OMIE."),
  ext("Integrações", "RD Station", "RD Station", "RD", "#19c4b4", "#fff", "CRM e marketing.", "Fluxos automáticos entre CRM e ERP com n8n."),
  ext("Integrações", "WooCommerce", "Automattic", "Wc", "#7f54b3", "#fff", "E-commerce no WordPress.", "Manutenção do e-commerce legado durante a migração."),
  ext("Integrações", "Frenet", "Frenet", "Fr", "#ff6b00", "#fff", "Cotação de frete.", "Integração de logística em e-commerce."),
  ext("Integrações", "PayPal", "PayPal", "PP", "#003087", "#fff", "Pagamentos online.", "Integração de pagamento em e-commerce."),
  ext("Integrações", "Mercado Livre", "Mercado Livre", "ML", "#ffe600", "#2d3277", "Marketplace e API de vendas.", "Integração com o marketplace."),
  ext("Integrações", "BB Developer", "Banco do Brasil", "BB", "#fcfc30", "#003882", "APIs do Banco do Brasil.", "Integração com serviços bancários."),

  ext("Automação e IA", "n8n", "n8n GmbH", "n8n", "#ea4b71", "#fff", "Automação de workflows.", "Na Freecook ligo ERP, CRM e sistemas internos com n8n."),
  ext("Automação e IA", "Playwright", "Microsoft", "Pw", "#2d4552", "#45ba4b", "Automação de navegador.", "Web scraping e automação de portais."),
  ext("Automação e IA", "Puppeteer", "Google", "Pp", "#40b5a4", "#fff", "Chrome controlado por código.", "Coleta de dados em portais."),
  ext("Automação e IA", "Selenium", "Software Freedom Conservancy", "Se", "#43b02a", "#fff", "Automação de navegador.", "Automação de tarefa repetitiva em sistema web."),
  ext("Automação e IA", "BeautifulSoup", "Leonard Richardson", "BS", "#3776ab", "#ffd43b", "Leitura de HTML em Python.", "Web scraping de dados públicos."),
  ext("Automação e IA", "Apify", "Apify", "Ap", "#0a2540", "#97d700", "Plataforma de scraping e automação.", "Coleta de dados da web."),
  ext("Automação e IA", "LLMs", "Conceito", "LLM", "#412991", "#fff", "Modelos de linguagem.", "Análise de texto e sentimento."),
  ext("Automação e IA", "Google Gemini", "Google", "Gm", "#1a73e8", "#fff", "IA generativa do Google.", "Análise de sentimento no CUBE e alguns projetos meus no GitHub."),
  ext("Automação e IA", "Inteligência artificial", "Conceito", "IA", "#7e57c2", "#fff", "Modelos que aprendem com dados.", "Cyberbot e o certificado de IA Generativa aplicada à programação."),
  ext("Automação e IA", "PLN", "Conceito", "PLN", "#7e57c2", "#fff", "Processamento de linguagem natural.", "Chatbot do Cyberbot e análise de sentimento."),

  ext("Dados e BI", "Power BI", "Microsoft", "BI", "#f2c811", "#000", "BI da Microsoft.", "Relatórios e indicadores."),
  ext("Dados e BI", "Azure Databricks", "Microsoft", "Db", "#ff3621", "#fff", "Plataforma de dados na nuvem.", "Processamento de dados no Azure."),
  ext("Dados e BI", "Streamlit", "Snowflake", "St", "#ff4b4b", "#fff", "Apps de dados em Python.", "Interface do Cyberbot e aplicações internas no Grupo EMS."),
  ext("Dados e BI", "Jupyter", "Project Jupyter", "Jp", "#f37626", "#fff", "Notebooks interativos.", "Programação em Python e análise de dados."),
  ext("Dados e BI", "Manipulação de dados", "Conceito", "MD", "#150458", "#e70488", "Limpar, transformar e analisar dados.", "Python Essentials 1 e os cursos de Python para Data Science."),

  ext("Ferramentas", "Git", "Git", "Git", "#f05033", "#fff", "Controle de versão.", "Commit pequeno e mensagem que explica o porquê."),
  ext("Ferramentas", "GitHub", "GitHub", "GH", "#181717", "#fff", "Repositórios e colaboração.", "Fluxo de pull request e CI. É onde ficam meus repositórios públicos."),
  ext("Ferramentas", "Figma", "Figma", "Fg", "#1e1e1e", "#a259ff", "Design de interfaces.", "Fiz formação de UX e UI pelo SENAI e pela DIO."),
  ext("Ferramentas", "Postman", "Postman", "Pm", "#ff6c37", "#fff", "Teste de APIs.", "Coleção para cada API que eu construo."),
  ext("Ferramentas", "XAMPP", "Apache Friends", "Xp", "#fb7a24", "#fff", "Ambiente local PHP e MySQL.", "Desenvolvimento local em PHP."),
  ext("Ferramentas", "WordPress", "WordPress Foundation", "WP", "#21759b", "#fff", "CMS.", "Tema próprio em PHP, como o da SGI, e a migração para stack própria na Freecook."),
  ext("Ferramentas", "Arduino", "Arduino", "Ar", "#00979d", "#fff", "Prototipagem com microcontroladores.", "Meu primeiro contato foi na ETEC."),
  ext("Ferramentas", "Internet das Coisas", "Conceito", "IoT", "#00979d", "#fff", "Dispositivos conectados.", "Certificado Soluções Integradas com IoT."),

  ext("Fundamentos", "Programação (computação)", "Computação", "Pg", "#333", "#fff", "Escrever código que resolve problemas.", "Grupo EMS, Estácio e os fundamentos do Python."),
  ext("Fundamentos", "Linguagens de programação", "Computação", "LP", "#333", "#ffd43b", "Várias linguagens, cada uma para o que serve.", "Estudadas na Estácio e usadas no trabalho."),
  ext("Fundamentos", "Sistemas operacionais", "Computação", "SO", "#333", "#fff", "Como o sistema por baixo funciona.", "Estudado na Estácio, com Linux no dia a dia."),
  ext("Fundamentos", "Algoritmos", "Computação", "Alg", "#333", "#fff", "Lógica para resolver problemas.", "Base de todo software, estudado na Estácio."),
  ext("Fundamentos", "Estrutura de dados", "Computação", "ED", "#333", "#fff", "Organização eficiente de dados.", "Base para escolher a solução certa."),
  ext("Fundamentos", "Raciocínio lógico", "Computação", "RL", "#2e7d32", "#fff", "Quebrar problemas em passos.", "Fundamentos do Python, Grupo EMS e Estácio."),

  ext("Design", "UI/UX responsivo", "Design", "UX", "#1e1e1e", "#a259ff", "Interfaces que se adaptam à tela.", "Telas pensadas para celular e desktop."),
  ext("Design", "Design de experiência do usuário (UX)", "Design", "UX", "#1e1e1e", "#a259ff", "Pensar a experiência de quem usa.", "Formação UX Designer e curso de Design UX e UI."),
  ext("Design", "UI", "Design", "UI", "#1e1e1e", "#a259ff", "Interface visual.", "Curso de Design UX e UI."),

  ext("Práticas", "Scrum", "Scrum.org", "Sc", "#009fda", "#fff", "Metodologia ágil.", "Sprints e entregas incrementais."),
  ext("Práticas", "Kanban", "Prática", "Kb", "#0079bf", "#fff", "Fluxo visual de tarefas.", "Acompanhamento do trabalho em quadro."),
  ext("Práticas", "Arquitetura MVC", "Padrão", "MVC", "#1a1a1a", "#ffca28", "Model, View e Controller.", "Estudado na Estácio e usado em temas e APIs."),
  ext("Práticas", "Design de software", "Engenharia", "DS", "#333", "#fff", "Arquitetura e padrões de projeto.", "Estudo na faculdade de Engenharia de Software."),
  ext("Práticas", "Gestão de projetos", "Gestão", "GP", "#333", "#fff", "Planejamento e acompanhamento.", "Visto no SENAI e aplicado nos projetos de clientes."),
  ext("Práticas", "Liderança", "Gestão", "Ld", "#333", "#fff", "Conduzir pessoas e times.", "Desenvolvida no programa do Mackenzie."),

  ext("Áreas de atuação", "Engenharia de Software", "Estácio", "ES", "#1565c0", "#fff", "Construir sistemas robustos.", "Meu bacharelado, na Estácio."),
  ext("Áreas de atuação", "Desenvolvedor de Software", "Carreira", "Dev", "#1565c0", "#fff", "Transformar problema em software.", "Da formação na Estácio à prática nas empresas por onde passei."),
  ext("Áreas de atuação", "Desenvolvimento full stack", "Carreira", "FS", "#1565c0", "#fff", "Do banco de dados à tela.", "Na DBS System e na Freecook, da API à interface."),
  ext("Áreas de atuação", "Desenvolvimento de back-end", "Carreira", "BE", "#2e7d32", "#fff", "APIs, regras de negócio e dados.", "A área em que mais atuo, da Estácio ao MundoPet e à CroSoften."),
  ext("Áreas de atuação", "Desenvolvimento de front-end", "Carreira", "FE", "#0277bd", "#fff", "Interfaces para quem usa.", "Estudado na Estácio e aplicado em React, Next.js e Angular."),
  ext("Áreas de atuação", "Desenvolvimento web", "Carreira", "Web", "#0277bd", "#fff", "Sistemas e sites na web.", "Comecei na ETEC e sigo desde então."),

  ext("Idiomas", "Inglês", "Mackenzie", "EN", "#1565c0", "#fff", "Nível avançado.", "Programa Cidadão Pró-Mundo, no Mackenzie, por parceria da Microsoft com o SENAI."),
  ext("Idiomas", "Comunicação oral em inglês", "Mackenzie", "Fala", "#1565c0", "#fff", "Conversação.", "Treinada no Mackenzie, em situações reais do dia a dia."),
  ext("Idiomas", "Compreensão auditiva (Listening)", "Mackenzie", "Ou", "#1565c0", "#fff", "Escuta ativa.", "Treinada no Mackenzie."),
  ext("Idiomas", "Escrita e leitura em inglês", "Mackenzie", "RW", "#1565c0", "#fff", "Ler e escrever.", "Treinada no Mackenzie."),
];

export const TERMINAL: Record<string, string> = {
  sobre: `Yhago Felipe Rocha Teles, engenheiro de software Full Stack
Hortolândia, São Paulo, Brasil

Transformo operação manual e sistema fragmentado em plataforma
própria e integrada. Back-end é onde eu mais trabalho.

Para ver mais, digite open sobre-mim.md`,
  experiencia: `Freecook Brasil          Full Stack       mar. de 2026 até hoje
CroSoften Tecnologia     Back-end         jan. de 2026 a ago. de 2026
DBS System Consultoria   Full Stack       set. de 2025 a dez. de 2025
Grupo EMS                Aprendiz em TI   jan. de 2025 a set. de 2025

Para ver mais, digite open experiencia.md`,
  projetos: `CoJurOS        comunicação jurídica, em desenvolvimento
SafetyKeeper   gestão de SST multitenant (NestJS, Next.js, PostgreSQL)
CUBE           análise política com IA (React, Node.js, PostgreSQL, Gemini)
Advocacia      landing page com Lighthouse acima de 95 (React, Vite)
SGI            site em WordPress com tema próprio (PHP, MySQL)
Cyberbot       assistente de cibersegurança (Python, Streamlit)
MundoPet       marketplace pet, meu TCC (Node.js, React, MongoDB)

Para ver mais, digite open projetos.md`,
  servicos: `Sistemas sob medida, integrações e APIs, dashboards com IA,
sites e landing pages, saída de sistema legado e automação.

Atendo muitos clientes, em vários nichos. Entre eles CUBE Inteligência,
JCFireWall, com o SafetyKeeper, CoJurOS, que vem aí, e vários outros.

Para ver mais, digite open servicos.md
Para pedir um orçamento, digite orcamento`,
  repos: `Repositórios públicos em https://github.com/yyhago

Para ver mais, digite open repositorios.md`,
  habilidades: `principais   TypeScript, Node.js, NestJS, PostgreSQL,
             Integração de sistemas
linguagens   TypeScript, JavaScript, Python, PHP, SQL
back-end     Node.js, NestJS, Prisma, APIs REST, Swagger, Redis, BullMQ,
             FastAPI, Flask
front-end    React, Next.js, Tailwind CSS, React Native, Angular,
             Bootstrap
bancos       PostgreSQL, MySQL, MongoDB, SQL Server, Oracle, SQLite,
             Supabase, Firebase, NoSQL, phpMyAdmin
segurança    JWT, OAuth2, RBAC
devops       Docker, Docker Compose, Nginx, Linux, Bash, VPS, CI/CD, AWS,
             Azure, Google Cloud
integrações  OMIE, ERPFLEX, Datasul/TOTVS, Bling, RD Station, WooCommerce,
             Frenet, PayPal, Mercado Livre, BB Developer
automação    n8n, Playwright, Puppeteer, Selenium, BeautifulSoup, Apify,
             LLMs, Google Gemini
dados e BI   Power BI, Azure Databricks
ferramentas  Git, GitHub, Figma, Postman, XAMPP, Arduino, IoT
práticas     Scrum, Kanban, UI/UX responsivo, Estrutura de dados,
             Design de software, Redes

Para ver mais, digite open habilidades.md`,
  formacao: `Engenharia de Software        Estácio     2025 a 2028
Inglês, Programa CPM          Mackenzie   2025 a 2029
Técnico em Desenv. Sistemas   SENAI       2025
Técnico em Desenv. Sistemas   ETEC        2022 a 2024

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
