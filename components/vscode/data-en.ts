import type { Locale } from "../i18n";
import { extensions, TERMINAL, type Ext } from "./data";

export const EN_DOCS: Record<string, string> = {
  "docs/sobre-mim.md": `![Yhago Felipe](/yhago.jpg)

* :account: Yhago Felipe Rocha Teles
* :terminal-bash: Full Stack Developer, back-end focused
* :location: Hortolândia, São Paulo, Brazil
* :mortar-board: Software Engineering, Estácio
* :globe: Native Portuguese, intermediate English
* :briefcase: Working with many clients, across many industries
* :file-pdf: {{cv-link}}

> Hey, welcome! This is where I keep a bit of everything I've built, the systems I've shipped, the clients I work with and the tech I use every day. If your company needs a system, an integration or a website, feel free to look around and get in touch. {{cv-frase}}

## :compass: Where to start

* [experience.md](experience.md), where I've worked and the systems that are live
* [projects.md](projects.md), projects with screenshots, links and how I solved each problem
* [skills.md](skills.md), the tech I use every day
* [education.md](education.md) and [certificates.md](certificates.md), studies and courses
* [services.md](services.md), how I can help your company
* [resume.md](resume.md), my resume in PDF, in Portuguese and in English
* [contact.md](contact.md), where to find me

The **Guide** button on the blue bar at the bottom shows you where everything is.

## :person: About me

I'm Yhago Felipe, a Full Stack developer, and the back-end is where I feel at home. I have two technical degrees in Systems Development, from **SENAI** and **ETEC**, and I'm finishing my bachelor's in **Software Engineering** at Estácio.

My story with programming really started at **ETEC Hortolândia**, where I took the technical course alongside high school and built **MundoPet**, a pet marketplace, as my final project. In 2025 I joined the **Cybersecurity team at Grupo EMS** as an apprentice and built **Python** automations that cut the team's manual work by **40%**. That's where an idea I bring to every project was born, *automate before you scale*.

Then came consulting. At **DBS System** I modernized systems for an industrial operation and rebuilt the integrations with the Datasul ERP (TOTVS). At **CroSoften** I worked on more than **20 projects** at the same time, always with APIs in **Node.js and NestJS**, Clean Architecture and requirements gathered straight from the client, across agribusiness, healthcare, financial management and logistics.

Today I architect and maintain a platform that runs a company end to end, from the e-commerce order to shipping with the invoice, built with **Next.js, NestJS and TypeScript**, and it replaced a legacy WordPress setup without stopping the operation. I also take care of the ERP integrations, the **n8n** automations and the infrastructure on VPS, Docker and Nginx.

On the side, I work with many clients on a project basis, across all kinds of industries, from businesses that are just starting out to big companies like **CUBE Inteligência**, **JCFireWall**, with SafetyKeeper, and **CoJurOS**, which is coming soon. Those are just a few names, the list is much longer and keeps growing. If you want to know how I can help your company, take a look at [services.md](services.md).

Outside of code, I study English at **Mackenzie** on a scholarship from the Cidadão Pró-Mundo program, a partnership between Microsoft and SENAI that selected only 20 students in the region, and I hold the **Microsoft Azure AZ-900, AI-900 and SC-900** certifications.

## :tools: What I do

### :server-process: APIs and back-end

I design and build RESTful APIs in **Node.js** and **NestJS**, organized with **Clean Architecture** so the business rules don't depend on the framework. I handle authentication with JWT and refresh tokens, role based access (RBAC), multitenancy, queues with Redis and BullMQ and complete Swagger docs, so whoever consumes the API never has to ask me anything.

### :layers: Complete platforms

I take a project from the database all the way to the screen, with data modeling in PostgreSQL or MySQL, the API and a front-end in **Next.js**, **React** or **Angular**, with TypeScript end to end. That's how I built from scratch an online store, an admin dashboard and a sales portal that now run as a single system.

### :plug: Systems integration

I connect the systems a company already uses, like the **Bling, OMIE, ERPFLEX and Datasul/TOTVS** ERPs, CRM (RD Station), payment gateways and shipping (Frenet). I've migrated an ERP with stock, orders and customers running in the middle of the process.

### :robot: Process automation

I take repetitive work off people's hands with **n8n**, **Python** and web scraping (Playwright, Puppeteer and Selenium). Automating processes is how I started, and it's still one of the parts I enjoy the most.

### :history: Legacy modernization

I replace old systems with a custom stack without stopping the operation. I study the legacy system, find the bottlenecks with the people who use it every day and migrate piece by piece, keeping the old system running until the new one takes over.

### :cloud: Infrastructure

I deploy and keep everything running, with VPS, **Docker** and **Nginx**, SSL, automated backups, CI/CD with GitHub Actions, files on Amazon S3 and services on Azure.

## :rocket: Some numbers

* **More than 20 client projects** delivered with APIs in Node.js and NestJS
* **40% less time** spent on manual work thanks to the Python automations
* **4 ERPs integrated**, Bling, OMIE, ERPFLEX and Datasul/TOTVS
* **23 certificates**, including Microsoft Azure AZ-900, AI-900 and SC-900
* {{github}}

{{depoimentos}}

## :checklist: How I work

* I like to understand the problem before opening the editor. I gather requirements straight from the people who will use the system and only then design the architecture.
* Business rules don't belong to the framework. I keep controllers thin and logic isolated, so it can be tested and moved around without rewriting the core.
* Bad data has to die at the door, with Zod validation, not three layers later.
* The schema is the most expensive decision in a project, so I model the database carefully and version everything in migrations.
* What I deliver comes documented, with a reproducible Docker deploy.

## :comment-discussion: Let's talk?

If you want to talk about architecture, automation or a project, reach me on [LinkedIn](https://www.linkedin.com/in/yhagofelipe), [GitHub](https://github.com/yyhago) or by [email](mailto:yhago.felipe.teles@gmail.com). For a quote, the fastest way is the [quote form](services.md#orcamento).
`,

  "docs/experiencia.md": `# :briefcase: Experience

I started as an apprentice in 2025 and since then I've worked in consulting, at a software house serving dozens of clients at the same time, and today I take care of all the technology of a company. Here's what I did at each place, with some of the systems that are live. {{cv-frase}}

## Freecook Brasil

**Full Stack Software Developer**, full time
*Mar 2026 to present, Campinas, SP, on site*

I'm responsible for the architecture and technical evolution of the company's whole IT ecosystem, with a focus on performance, scalability and process automation.

* Designed and built from scratch the platform that runs the operation end to end, from the e-commerce order to the stock update, bringing the online store, admin dashboard, sales portal and company website together in a single system.
* Led the move away from legacy **WordPress** to a custom stack in **Next.js, NestJS and TypeScript**, defining code standards, API structure and a migration strategy that never stopped the operation.
* **PHP and MySQL** back-end on the legacy e-commerce during the transition, with custom modules and integrations.
* **n8n** automations orchestrating the ERP, CRM (RD Station) and internal systems.
* Migrated the integration from the legacy ERP (**ERPFLEX**) to the current one (**OMIE**), keeping stock, orders and customers consistent.
* Files on **Amazon S3** with presigned URLs and our own infrastructure (**VPS, Docker, Nginx and SSL**) with automated backups.
* Integrations with payment gateways, REST APIs and shipping (Frenet).

\`Next.js\` \`NestJS\` \`TypeScript\` \`Node.js\` \`PHP\` \`MySQL\` \`n8n\` \`Amazon S3\` \`Docker\` \`Nginx\`

Some of the systems that are live.

* [:link-external: Official store](https://lojaoficial.freecook.com.br/)
* [:link-external: Sales portal](https://comercial.freecook.com.br/)
* [:link-external: Professional kitchen equipment](https://equipamentos-para-cozinha-profissional.freecook.com.br/)

{{prints:freecookloja|Freecook official store}}
{{prints:freecookcomercial|Freecook sales portal}}
{{prints:freecookequipamentos|Professional kitchen equipment}}

## CroSoften Tecnologia

**Back-end Software Developer**, contractor
*Jan 2026 to Aug 2026, São Paulo, SP, remote*

Building and maintaining RESTful APIs in a corporate environment, serving **more than 20 projects** for different clients at the same time.

* APIs with **Node.js, NestJS and TypeScript**, applying **Clean Architecture** to keep long term projects easy to evolve.
* Complex business rules, authentication, authorization and integration with several external APIs.
* Complete **Swagger** documentation, consumed at the same time by iOS apps and Angular front-ends.
* Requirements gathered straight from the client, turning business needs into architecture.
* Several demands in parallel, with continuous delivery, using Scrum and Kanban.
* Projects in agribusiness (Vitrine do Campo), healthcare (Cardio Shop), financial management (SAFE/ERICA) and logistics (Ships Manager), among others.

\`Node.js\` \`NestJS\` \`TypeScript\` \`Clean Architecture\` \`Swagger\` \`Angular\`

Some of the projects I worked on.

* [:link-external: 2Clicks](https://2clicks.app/), to find what you need in your city in a few clicks
* [:link-external: Minha Revenda](https://minharevenda.com.br/), management for cosmetics resellers
* [:link-external: Cupom Clube](https://cupomclube.com.br/)
* [:link-external: LeSalvi](https://lesalvi.com/)
* [:link-external: Vermont](https://vermont.com.br/), omnichannel contact center
* [:link-external: Vitrine do Campo](https://vitrinedocampo.com.br/), agronomic consulting and rural credit
* Also Academia Alma, AJ Crypto, Alvino, Cardio Shop, City, Conexes, Corremaq, Erasmo, Fluitz, Pendragon, Copeme, Regia Maria, SAFE/ERICA, Sapyem, Ships Manager, Tito and Wincoin.

{{prints:2clicks|2Clicks}}
{{prints:minharevenda|Minha Revenda}}
{{prints:cupomclube|Cupom Clube}}
{{prints:lesalvi|LeSalvi}}
{{prints:vitrinedocampo|Vitrine do Campo}}

## DBS System Consultoria

**Full Stack Software Developer**, contractor
*Sep 2025 to Dec 2025, Campinas, SP, remote*

Modernizing legacy systems in an industrial environment, replacing manual flows with automated API integrations.

* Rebuilt the integrations with the **Datasul (TOTVS)** ERP, replacing manual data exchange with direct API calls and reducing the risk of inconsistencies.
* RESTful APIs in **PHP and Node.js**, with **MySQL and PostgreSQL**.
* Rebuilt the legacy screens with **Next.js and TypeScript**, without stopping production.
* Gathered requirements with the business team to find the bottlenecks and propose the new architecture.
* Fixed scope project delivered in 4 months, with full autonomy over the technical decisions.

\`PHP\` \`Node.js\` \`Next.js\` \`TypeScript\` \`MySQL\` \`PostgreSQL\`

Some of the clients I built for.

* [:link-external: NG Metalúrgica](https://www.ngmetalurgica.com.br/)
* [:link-external: Pronutrition](https://pronutrition.com.br/)

{{prints:ngmetalurgica|NG Metalúrgica}}
{{prints:pronutrition|Pronutrition}}

## Grupo EMS

**IT Apprentice, Cybersecurity**, full time
*Jan 2025 to Sep 2025, Hortolândia, SP, on site*

My first job at a company, on the Cybersecurity team, focused on automating internal processes and protecting data.

* Internal applications in **Python** (Streamlit, FastAPI and Flask) for the security team's needs.
* Automations that cut the team's manual work time by **40%**. It was my first real contact with the idea of automating before scaling.
* **CI/CD** pipelines to run and monitor the automations.
* Integration with Supabase, Firebase, PostgreSQL and MySQL to connect the data flow between systems.

\`Python\` \`Streamlit\` \`FastAPI\` \`Flask\` \`Supabase\` \`Firebase\` \`PostgreSQL\` \`MySQL\`
`,

  "docs/projetos.md": `# :project: Projects

Here's a selection of the projects I've delivered, from political intelligence to workplace safety, law and legal communication, each with the problem that needed solving and how I solved it. It's just a part of it, I work with many other clients who don't show up here. Client projects live in private repositories, by contract, so when I can't show the code I show the screens. Click any image to see it larger.

## CoJurOS, legal communication

*Full Stack, in development*

A new project I'm building right now, CoJurOS, focused on legal communication. I'll share more here soon, with screens and details.

{{prints:cojuros|CoJurOS, system screens}}

## SafetyKeeper, workplace safety management

*Full Stack, client JCFireWall, May 2026 to Jun 2026*

\`NestJS\` \`TypeScript\` \`Next.js\` \`PostgreSQL\` \`Docker\` \`Nginx\`

**The client's problem.** JCFireWall served several corporate clients and tracked the workplace safety compliance of all of them in spreadsheets, with no reliable separation between companies, no history of who changed what and no visibility into deadlines.

**Solution.**

* Modular back-end in **NestJS**, splitting clients, users, compliance and documents into independent, testable modules.
* **Multitenancy** with data isolation per company and **RBAC** per role, so each client only sees what belongs to them.
* **PostgreSQL** with indexes designed for the compliance queries and the audit trail.
* **Next.js** front-end for documents, deadlines and compliance status, with different screens for each role.
* Deployed on a VPS with Docker, Nginx, SSL and automated backups.

The system is internal and sits behind a login. [:link-external: JCFireWall website](https://jcfirewall.com.br)

{{prints:safetykeeper|SafetyKeeper, system screens}}
{{prints:clientejcfirewall|JCFireWall website, SafetyKeeper client}}

## CUBE, political analysis

*Full Stack, client CUBE Inteligência, Jul 2025 to Nov 2025*

\`React\` \`TypeScript\` \`Vite\` \`Node.js\` \`Express\` \`Prisma\` \`PostgreSQL\` \`Gemini AI\`

**The client's problem.** CUBE needed to follow in real time what was being published about political topics and figures, measure the tone of those mentions and show everything in dashboards that could handle peak traffic during elections, with different permissions for the internal team and for clients.

**Solution.**

* Front-end in **React 18 with Vite** and back-end in **Node.js and Express**, separated, with versioned deploys for quick rollback.
* **React Query** for caching and revalidation, and real time dashboards with Chart.js and Recharts.
* **Prisma** with PostgreSQL, versioned migrations and strategic indexes.
* **JWT** authentication with refresh token rotation and **RBAC** per route.
* Public data collection with **Apify** and sentiment analysis with the **Google Gemini** API.
* RSS aggregator with node-cron and deploy on a VPS with Nginx and **PM2** in cluster mode.

The platform is private, by contract. [:link-external: CUBE website](https://cubeinteligencia.com.br)

{{prints:cube|CUBE, platform screens}}
{{prints:clientecube|CUBE Inteligência website, platform client}}

## Landing page, Raquel Ribeiro Advocacia

*Front-end, client Raquel Ribeiro Advocacia, Sep 2025 to Oct 2025*

\`React\` \`TypeScript\` \`Vite\` \`Tailwind CSS\` \`Vercel\`

**The client's problem.** The law firm wanted to show up on Google for people looking for a labor lawyer in the region, with a page that loads fast on mobile and turns visits into contacts through WhatsApp and the form.

**Solution.**

* React 18, TypeScript and Vite, with Tailwind and a mobile first layout tested on real devices.
* Technical SEO with React Helmet, semantic HTML and schema.org structured data.
* Lazy loading and WebP images, reaching **Lighthouse above 95** in every category and **LCP under 2.5 s**.
* **WCAG 2.1 level A** accessibility and deploy on Vercel with a preview for every pull request.

[:link-external: See the landing page live](https://raquel-ribeiro-advocacia-psi.vercel.app/)

{{prints:advocacia|Raquel Ribeiro Advocacia landing page}}

## SGI Treinamentos e Assessoria website

*Full Stack, consulting, client SGI Treinamentos e Assessoria, Aug 2025 to Sep 2025*

\`PHP\` \`WordPress\` \`MySQL\` \`Sass\`

**The client's problem.** SGI needed a website live quickly, that the team could update on their own, with a reliable contact form.

**Solution.**

* WordPress with a custom theme in **PHP 8**, organized in an MVC inspired structure.
* AJAX forms with nonce and sanitization, preventing CSRF and XSS.
* Custom database tables for structured data, keeping queries fast.
* Automated deploy via Git on Hostinger, with rollback.

[:link-external: sgitreinamentosassessoria.com](https://sgitreinamentosassessoria.com/)

{{prints:sgi|SGI Treinamentos e Assessoria website}}

## Cyberbot, cybersecurity assistant

*Course project, team of four, Jun 2025*

\`Python\` \`Streamlit\` \`Git\`

A course project we built as a team of four developers to raise awareness about digital security, with a chatbot for questions, a password generator and checker and a phishing simulator. Built in Python with natural language processing and a Streamlit interface.

{{prints:cyberbot|Cyberbot, prototype screens}}

## MundoPet, my final project

*Full Stack, academic project, ETEC Hortolândia, 2024*

\`Node.js\` \`Express\` \`React\` \`Redux\` \`MongoDB\` \`Bootstrap\`

A marketplace for the pet market, with a back-end in Node.js and Express, MongoDB and a front-end in React with Redux. It shows the nearest pet shops on a map and has a cart, sign up and payment.

[:github: See the code on GitHub](https://github.com/yyhago/pet-marketplace-etec)

{{prints:mundopet|MundoPet}}
`,

  "docs/servicos.md": `# :rocket: Services

Today I work with many clients at the same time, from big companies to businesses that are just starting out, across all kinds of industries. If your company needs a system, an integration or a website that brings results, this is where I can help.

[:comment-discussion: Get a quote](#orcamento)

## :organization: Who already trusts my work

The client list is much longer than what fits here, and many projects are under NDA, so I'm only sharing a few names.

* **CUBE Inteligência**, political intelligence, with a monitoring and AI sentiment analysis platform
* **JCFireWall**, workplace safety, with SafetyKeeper, a safety compliance system for several corporate clients
* **CoJurOS**, legal communication, a new project coming soon
* **NG Metalúrgica** and **Pronutrition**, industry and nutrition, with integrations and modernized systems
* **Raquel Ribeiro Advocacia** and **SGI Treinamentos**, law and workplace safety, with fast, easy to maintain websites
* **Vitrine do Campo**, **2Clicks**, **Minha Revenda**, **Cupom Clube** and more than 20 projects in agribusiness, healthcare, finance, retail and logistics
* And many other clients, in commerce, services, industry and startups, that I work with per project or with ongoing maintenance

{{depoimentos}}

## :tools: What I can do for you

### :layers: Custom systems

Admin dashboards, management systems, portals for clients or partners, with login, role based permissions and data separated per company. That's what I did with SafetyKeeper, which took safety management out of spreadsheets.

### :plug: Integrations and APIs

Your ERP, your e-commerce, your CRM and your shipping talking to each other on their own, with nobody copying data from one place to another. I've integrated Bling, OMIE, ERPFLEX, Datasul/TOTVS, RD Station, payment gateways and Frenet.

### :graph: Data, dashboards and AI

Dashboards that show what matters in real time, public data collection and text analysis with AI. That was the core of the CUBE platform, built to handle peak traffic during elections.

### :browser: Websites and landing pages

A company website or a lead capture page that's fast on mobile, ranks well on Google and is easy to update. The Raquel Ribeiro landing page scored above 95 on Lighthouse in every category.

### :history: E-commerce and legacy replacement

I replace the old system with a custom platform without stopping the operation, migrating piece by piece. I've done it with an entire operation, from the e-commerce order to the invoice.

### :robot: Process automation

Repetitive tasks that eat hours of your team's time become automatic processes with n8n, Python and data collection bots. My first automations cut manual work time by 40%.

## :checklist: How it works

1. **A conversation**, so I understand the problem, the business and who will use the system
2. **A proposal**, with clear scope, timeline and price, no surprises along the way
3. **Delivery in stages**, so you can follow and validate the progress
4. **Launch and support**, with the system live, documented and backed up

## :comment-discussion: Let's get your idea off the ground?

Tell me what you need right below. The message goes straight to my inbox and I'll get back to you as soon as I can. If you want to know more about my background first, take a look at my [resume](resume.md) and [projects](projects.md).

[[orcamento]]
`,

  "docs/habilidades.md": `# :tools: Skills

The tools I use every day, grouped by area. In the **Extensions** tab, right here on the side, each technology has a page about where and how I used it.

## :code: Languages

**TypeScript** is the one I use the most, on the front and the back. **Python** is for automation and data, and **PHP** for e-commerce, WordPress and legacy systems.

\`TypeScript\` \`JavaScript\` \`Python\` \`PHP\` \`SQL\`

## :browser: Front-end

**Next.js** and **React** every day, **Angular** on corporate projects and **React Native** when the product needs an app. For styling, almost always Tailwind.

\`React\` \`Next.js\` \`React Native\` \`Angular\` \`Redux\` \`Vite\` \`Tailwind CSS\` \`Bootstrap\` \`HTML5\` \`CSS3\` \`Sass\`

## :server-process: Back-end

My base is **NestJS** with Prisma or TypeORM, queues with Redis and BullMQ, validation with Zod and docs in Swagger. In Python, I use **FastAPI** and **Flask**.

\`Node.js\` \`NestJS\` \`Express\` \`FastAPI\` \`Flask\` \`Prisma\` \`TypeORM\` \`SQLAlchemy\` \`REST APIs\` \`Redis\` \`BullMQ\` \`Swagger\` \`Zod\`

## :shield: Security

Since I started in Cybersecurity, authentication, permissions and care with sensitive data are part of the design from the start, not the end.

\`JWT\` \`OAuth2\` \`RBAC\` \`Multitenancy\` \`bcrypt\`

## :database: Databases

**PostgreSQL** is my default, **MySQL** shows up a lot in legacy systems and **MongoDB** when the model calls for documents.

\`PostgreSQL\` \`MySQL\` \`SQL Server\` \`MongoDB\` \`SQLite\` \`Supabase\` \`Firebase\`

## :cloud: DevOps and Cloud

I run my own infrastructure, with VPS, **Docker**, **Nginx** with SSL, automated backups and CI/CD with GitHub Actions. In the cloud, Amazon S3 and Azure.

\`Docker\` \`Docker Compose\` \`VPS\` \`Nginx\` \`Linux\` \`Bash\` \`GitHub Actions\` \`AWS\` \`Azure\` \`Vercel\` \`PM2\`

## :robot: Automation and AI

**n8n** to orchestrate systems, scraping to collect public data and LLMs like **Gemini** for text and sentiment analysis.

\`n8n\` \`Playwright\` \`Puppeteer\` \`Selenium\` \`BeautifulSoup\` \`Apify\` \`Google Gemini\` \`LLMs\`

## :plug: Integrations

The systems that keep a company's operation running, like ERP, CRM, payments and shipping.

\`Bling\` \`OMIE\` \`ERPFLEX\` \`Datasul/TOTVS\` \`RD Station\` \`WooCommerce\` \`Frenet\`

## :graph: Data and BI

To turn data into reports and decisions, I use **Power BI**, **Pandas** and Jupyter notebooks.

\`Power BI\` \`Pandas\` \`Jupyter\` \`Streamlit\` \`Azure Databricks\`

## :wrench: Tools and practices

Git on everything, Figma to design before coding, Postman to test APIs and Clean Architecture as the base for organizing code.

\`Git\` \`GitHub\` \`Figma\` \`Postman\` \`WordPress\` \`XAMPP\` \`Arduino\` \`IoT\` \`Clean Architecture\` \`TDD\` \`MVC\` \`Scrum\` \`Kanban\` \`Responsive UI/UX\`
`,

  "docs/formacao.md": `# :mortar-board: Education

I've been studying nonstop since 2022, with a technical course alongside high school, another one at SENAI, college and English, almost all of it while working.

## Bachelor's in Software Engineering

*Centro Universitário Estácio de Sá, remote, 2025 to 2028*

Software architecture, design patterns, requirements engineering and agile methods, with an emphasis on security, performance and usability. A lot of what I learned in the course I applied at CUBE, a platform with a scalable architecture, RBAC and real time natural language processing.

## Technical Degree in Systems Development

*SENAI Dr. Celso Charuri, Sumaré, SP, Jan to Sep 2025*

Systems analysis, data modeling, logic, architecture, object oriented and functional programming, agile methods and DevOps practices with CI/CD. I took it through EMS, as part of the apprenticeship program.

## Technical Degree in Systems Development with High School

*ETEC Hortolândia, 2022 to 2024*

This is where I really started, studying computational thinking, data modeling, object orientation, web development with RESTful APIs and SPAs, UML and agile methods. My final project was **MundoPet**, a pet marketplace with Node.js, Express, React, Redux and MongoDB.

## English, Cidadão Pró-Mundo Program

*Universidade Presbiteriana Mackenzie, Campinas, SP, 2025 to 2029*

I passed a selection process by **Microsoft and SENAI Sumaré** that gave scholarships to only **20 students** in the region. I'm studying English at Mackenzie from A2 to fluency, focused on speaking, listening, reading and writing for real situations.

## :globe: Languages

* **Portuguese**, native
* **English**, intermediate, working towards fluency
`,

  "docs/certificados.md": `# :verified-filled: Certificates

23 in total, from Microsoft Azure to Python, data, UX and AI. I like to complement what I see at work with courses, and you can check all of them on my [LinkedIn](https://www.linkedin.com/in/yhagofelipe).

## :azure: Microsoft Azure

1. **AZ-900, Cloud Services Deployment**, SENAI São Paulo, Mar 2025
2. **AI-900, Artificial Intelligence Services in the Cloud**, SENAI São Paulo, Jun 2025
3. **SC-900, Cloud Security Fundamentals**, SENAI São Paulo, Jun 2025

## :code: Development

1. **Full Stack Web with Node, JavaScript and TypeScript 2026**, Udemy, Aug 2026
2. **Node.js Fundamentals Track**, DIO, Dec 2024
3. **JavaScript Developer Track**, DIO, Sep 2024
4. **PHP Experience Track**, DIO, Feb 2024
5. **Programming Logic Track**, DIO, Feb 2024

## :symbol-method: Python and Data Science

1. **Python for Data Analysis and Data Science, intermediate**, Data Science Academy, Jul 2025
2. **Python for Data Analysis and Data Science, basic**, Data Science Academy, Jul 2025
3. **Python for Data Analysis and Data Science, introductory**, Data Science Academy, Jul 2025
4. **Python Programming**, SENAI São Paulo, Jun 2025
5. **Python Fundamentals**, SENAI São Paulo, Mar 2025
6. **Python Essentials 1**, Cisco, Mar 2025

## :cloud: Cloud and DevOps

1. **Microsoft AI for Tech, Azure Databricks**, DIO, Apr 2025
2. **Linux Fundamentals Track**, DIO, Feb 2024

## :database: Databases and BI

1. **Databases for Data Science**, SENAI São Paulo, Jun 2025
2. **Microsoft Power BI**, SENAI São Paulo, Jan 2025
3. **Oracle APEX Foundations**, Oracle, Mar 2025

## :paintcan: UX and UI

1. **UX and UI Design**, SENAI São Paulo, Apr 2025
2. **UX Designer Track**, DIO, Jul 2024

## :sparkle: AI and innovation

1. **Generative AI Applied to Programming, ChatGPT**, SENAI São Paulo, Jun 2025
2. **Integrated IoT Solutions**, SENAI São Paulo, Jun 2025
`,

  "docs/repositorios.md": `# :github: Repositories

My public repositories are at [github.com/yyhago](https://github.com/yyhago). When GitHub responds, this list is built on the spot with the data from there.
`,

  "docs/contato.md": `# :mail: Contact

Whether it's to talk about architecture, a project or just to say hi, feel free to reach out. The fastest way is LinkedIn or email.

* :mail: [yhago.felipe.teles@gmail.com](mailto:yhago.felipe.teles@gmail.com)
* :linkedin: [linkedin.com/in/yhagofelipe](https://www.linkedin.com/in/yhagofelipe)
* :github: [github.com/yyhago](https://github.com/yyhago)
* :instagram: [instagram.com/yyhago_](https://www.instagram.com/yyhago_)
* :location: Hortolândia, São Paulo, Brazil

## :comment-discussion: Send a message

Fill this in and the message goes straight to my inbox, no email app needed.

[[orcamento]]
`,

  "package.json": `{
  "name": "portfolio-yhago",
  "version": "1.0.0",
  "description": "Portfolio of Yhago Felipe, Full Stack developer",
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

  "README.md": `# :info: portfolio-yhago

Hi, I'm Yhago! Here you'll see what I do, the projects I've delivered and how to reach me. Instead of the usual landing page, I built a Windows XP with a working VS Code inside, which is where I spend most of my day.

## How to navigate

1. The texts live in the **docs** folder, here in the Explorer.
2. The .md files open formatted. The button in the corner of the editor shows the source.
3. **Ctrl + P** searches files and **Ctrl + Shift + P** opens the command palette.
4. **Ctrl + J** opens the terminal. Type **help** there to see the commands.
5. The **Extensions** tab lists the tech I use.
6. In **services.md** I explain how I can help your company, with a form to ask for a quote, and **resume.md** has my resume.
7. To read in Portuguese, click **EN** on the taskbar or on the blue bar down here.

## Structure

1. \`docs/\`, the portfolio texts
2. \`src/models/\`, the data types
3. \`src/services/\`, the GitHub integration
4. \`src/controllers/\` and \`src/routes/\`, the Express API
5. \`src/views/\`, the profile component
`,
};

const CATS: Record<string, string> = {
  Linguagens: "Languages",
  "Bancos de dados": "Databases",
  "DevOps e Cloud": "DevOps and Cloud",
  "Automação e IA": "Automation and AI",
  Integrações: "Integrations",
  "Dados e BI": "Data and BI",
  Ferramentas: "Tools",
};

const EXT_EN: Record<string, { desc: string; about: string; name?: string; publisher?: string }> = {
  typescript: { desc: "JavaScript with static types.", about: "It's the language I use the most, on the front and the back. Well defined types and Zod validating data at the door prevent a lot of bugs." },
  javascript: { desc: "The language of the web.", about: "It's where I started on the web, back at ETEC." },
  python: { desc: "Automation, data and APIs.", about: "My first job was with Python, on the Grupo EMS Cybersecurity automations that cut 40% of the manual work." },
  php: { desc: "The language behind a big part of the web.", about: "I use it a lot on legacy e-commerce, WordPress themes and ERP integrations." },
  sql: { desc: "The language of relational databases.", about: "Modeling, indexes and queries designed for performance and auditing." },
  react: { desc: "Component based interfaces.", about: "Dashboards and admin panels, like the ones at CUBE." },
  nextjs: { desc: "The React framework for the web.", about: "The base of the platform I built at Freecook and of the screens I modernized at DBS. This portfolio is Next.js too." },
  reactnative: { desc: "Native apps with React.", about: "iOS and Android apps consuming the same APIs as the web." },
  angular: { desc: "Google's web framework.", about: "Corporate front-ends that consumed the APIs I documented in Swagger at CroSoften." },
  redux: { desc: "State management.", about: "I used it on MundoPet, my final project." },
  vite: { desc: "Fast builds for the front-end.", about: "At CUBE and on the law firm landing page." },
  tailwindcss: { desc: "Utility first CSS.", about: "It's what I use on most projects to style things quickly." },
  bootstrap: { desc: "Ready made responsive components.", about: "I used it on MundoPet." },
  html5css3esass: { name: "HTML5, CSS3 and Sass", desc: "Markup and styling.", about: "Semantic HTML with SEO and accessibility in mind, and Sass on WordPress themes." },
  nodejs: { desc: "JavaScript on the server.", about: "Where I spend most of my time, between APIs, queues, scheduled jobs and integrations." },
  nestjs: { desc: "A framework for scalable back-ends.", about: "It's what I use the most on the back-end. At CroSoften it was more than 20 projects with Nest and Clean Architecture." },
  express: { desc: "Minimalist web framework.", about: "The back-end of CUBE and MundoPet." },
  fastapi: { desc: "Fast APIs in Python.", about: "Internal APIs at EMS and the BookAPI on my GitHub." },
  flask: { desc: "Python microframework.", about: "Internal applications at EMS." },
  prisma: { desc: "ORM with end to end types.", about: "Versioned migrations at CUBE." },
  typeorm: { desc: "ORM for TypeScript.", about: "Persistence on the NestJS APIs." },
  redisebullmq: { name: "Redis and BullMQ", desc: "Cache and queues.", about: "Queues to take heavy work out of the request." },
  swagger: { desc: "API documentation.", about: "My APIs ship documented. At CroSoften the iOS and Angular teams consumed everything through Swagger." },
  jwtoauth2erbac: { name: "JWT, OAuth2 and RBAC", desc: "Authentication and permissions.", about: "Refresh token rotation and permissions per route and per role." },
  postgresql: { desc: "Open source relational database.", about: "My default database today." },
  mysql: { desc: "Relational database popular on the web.", about: "Legacy e-commerce and APIs in PHP and Node." },
  sqlserver: { desc: "Microsoft's relational database.", about: "Corporate environments." },
  mongodb: { desc: "Document database.", about: "I used it on MundoPet." },
  sqlite: { desc: "Light, embedded database.", about: "Prototypes and tests." },
  supabase: { desc: "Postgres with a ready made back-end.", about: "Data integration at EMS." },
  firebase: { desc: "Google's app platform.", about: "Data integration at EMS." },
  docker: { desc: "Containers.", about: "Everything I deploy on a VPS runs on Docker." },
  nginx: { desc: "Web server and reverse proxy.", about: "In front of the production APIs, with SSL." },
  linuxebash: { name: "Linux and Bash", desc: "The servers' operating system.", about: "I manage my own VPS and the backup routines." },
  githubactions: { desc: "CI/CD on GitHub.", about: "Build, test and deploy pipelines." },
  aws: { desc: "Amazon's cloud.", about: "Amazon S3 with presigned URLs at Freecook." },
  microsoftazure: { desc: "Microsoft's cloud.", about: "I hold the AZ-900, AI-900 and SC-900 certifications." },
  vercel: { desc: "Front-end deploys.", about: "Deploys with a preview for every pull request." },
  n8n: { desc: "Workflow automation.", about: "At Freecook I connect the ERP, CRM and internal systems with n8n." },
  playwright: { desc: "Browser automation.", about: "Web scraping and portal automation." },
  puppeteer: { desc: "Chrome controlled by code.", about: "Data collection from portals." },
  selenium: { desc: "Browser automation.", about: "Automating repetitive tasks in web systems." },
  googlegemini: { desc: "Google's generative AI.", about: "Sentiment analysis at CUBE and a few of my own projects on GitHub." },
  erps: { publisher: "Bling, OMIE, ERPFLEX and TOTVS", desc: "Business management systems.", about: "I've integrated Bling, OMIE, ERPFLEX and Datasul/TOTVS, including a migration from ERPFLEX to OMIE." },
  rdstation: { desc: "CRM and marketing.", about: "Automatic flows between CRM and ERP with n8n." },
  woocommerce: { desc: "E-commerce on WordPress.", about: "Maintaining the legacy e-commerce during the migration." },
  powerbi: { desc: "Microsoft's BI.", about: "Reports and KPIs." },
  streamlit: { desc: "Data apps in Python.", about: "Internal applications at EMS and the AI projects on my GitHub." },
  gitegithub: { name: "Git and GitHub", desc: "Version control.", about: "Small commits and messages that explain why." },
  figma: { desc: "Interface design.", about: "I took UX and UI courses at SENAI and DIO." },
  postman: { desc: "API testing.", about: "A collection for every API I build." },
  wordpress: { desc: "CMS.", about: "Custom PHP themes, like SGI's, and migrations to a custom stack, like at Freecook." },
};

const EXT_LIST: Record<Locale, Ext[]> = {
  pt: extensions,
  en: extensions.map((e) => ({ ...e, cat: CATS[e.cat] ?? e.cat, ...EXT_EN[e.id] })),
};

export const extensionsFor = (locale: Locale) => EXT_LIST[locale];

const TERMINAL_EN: Record<string, string> = {
  sobre: `Yhago Felipe Rocha Teles, Full Stack developer
Hortolândia, São Paulo, Brazil

I turn manual work and scattered systems into a custom,
integrated platform. The back-end is where I work the most.

To see more, type open about-me.md`,
  experiencia: `Freecook Brasil          Full Stack       Mar 2026 to present
CroSoften Tecnologia     Back-end         Jan 2026 to Aug 2026
DBS System Consultoria   Full Stack       Sep 2025 to Dec 2025
Grupo EMS                IT Apprentice    Jan 2025 to Sep 2025

To see more, type open experience.md`,
  projetos: `SafetyKeeper   multitenant safety management (NestJS, Next.js)
CUBE           political analysis with AI (React, Node.js, Gemini)
Law firm       landing page with Lighthouse above 95
SGI            WordPress website with a custom theme
Cyberbot       cybersecurity assistant (Python)
MundoPet       pet marketplace, my final project

To see more, type open projects.md`,
  servicos: `Custom systems, integrations and APIs, AI dashboards,
websites and landing pages, legacy replacement and automation.

I work with many clients, across many industries. Among them CUBE
Inteligência, JCFireWall, with SafetyKeeper, CoJurOS, coming soon,
and many others.

To see more, type open services.md
To ask for a quote, type quote`,
  repos: `Public repositories at https://github.com/yyhago

To see more, type open repositories.md`,
  habilidades: `languages    TypeScript, JavaScript, Python, PHP, SQL
front-end    React, Next.js, React Native, Angular, Tailwind CSS
back-end     Node.js, NestJS, Express, FastAPI, Flask, Prisma, Redis
databases    PostgreSQL, MySQL, SQL Server, MongoDB, Supabase
devops       Docker, Nginx, Linux, GitHub Actions, AWS, Azure
automation   n8n, Playwright, Puppeteer, Selenium, LLMs

To see more, type open skills.md`,
  formacao: `Software Engineering          Estácio     2025 to 2028
Tech. Degree, Systems Dev.    SENAI       2025
Tech. Degree, Systems Dev.    ETEC        2022 to 2024
English, CPM Program          Mackenzie   2025 to 2029

To see more, type open education.md`,
  certificados: `23 certificates, including Microsoft AZ-900, AI-900 and SC-900.

To see more, type open certificates.md`,
  contato: TERMINAL.contato,
};

export const terminalFor = (locale: Locale) => (locale === "en" ? TERMINAL_EN : TERMINAL);
