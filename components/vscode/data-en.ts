import type { Locale } from "../i18n";
import { extensions, TERMINAL, type Ext } from "./data";

export const EN_DOCS: Record<string, string> = {
  "docs/sobre-mim.md": `![Yhago Felipe](/yhago.jpg)

* :account: Yhago Felipe Rocha Teles
* :terminal-bash: Full Stack Developer, back-end focus
* :code: TypeScript, Node.js, NestJS, Next.js and PostgreSQL
* :location: Hortolândia, São Paulo, Brazil
* :mortar-board: Software Engineering at Estácio, in progress
* :globe: Native Portuguese, advanced English
* :file-pdf: {{cv-link}}

> Hey, welcome! This is where I keep a bit of everything I've built, the systems I've shipped, the clients I've worked with and the tech I use every day. If your company needs a system, an integration or a website, feel free to look around and get in touch. {{cv-frase}}

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

I'm a Full Stack Developer, with most of my experience in the back-end. My job is to take manual processes and systems that don't talk to each other and turn all of it into software that the company or the client can use and grow with.

I started my career on the Cybersecurity team of a pharmaceutical company, building **Python** automations that cut the time spent on manual operations by **40%**. That's where a rule I still follow came from: before scaling a process, automate what is still manual.

Since then, I've built the back-end of **more than 23 projects**, with well structured REST APIs, business rules designed end to end, authentication and role based access control. I've built from scratch systems that manage a company's entire operation, from the purchase on the e-commerce to the invoice issued in the ERP, and I've led ERP and database migrations without interrupting the operation.

I have experience integrating ERPs such as **OMIE, ERPFLEX, Datasul/TOTVS and Bling**, with **n8n** automations, and I run my own infrastructure: Linux VPS servers with **Docker**, **Nginx** as a reverse proxy, SSL, Cloudflare, AWS S3 storage, automated backups and CI/CD pipelines.

I like sharing what I know and, even more, being around people who like sharing knowledge and explaining how they do things. I work from gathering requirements, together with the company or the client, to the final delivery, with systems published on the web and also accessible on mobile. Most projects were built using Scrum, Kanban or daily and weekly routines for alignment.

My education includes two technical degrees in Systems Development, from SENAI and ETEC, and I'm currently pursuing a Bachelor's in Software Engineering. I'm a full scholarship student in an English program at Mackenzie, where I was accepted through a partnership with Microsoft and SENAI. I also have several courses and certificates in development, Data Science, Cloud, DevOps, databases, BI, UI/UX, AI and Microsoft Azure.

## :tools: What I do

### :server-process: APIs and back-end

I design and build RESTful APIs in **Node.js** and **NestJS**, organized with **Clean Architecture** so the business rules don't depend on the framework. I handle authentication with JWT and refresh tokens, role based access (RBAC), multitenancy, queues with Redis and BullMQ, Zod validation and complete Swagger docs, so whoever consumes the API never has to ask me anything.

### :layers: Complete platforms

I take a project from the database all the way to the screen, with data modeling in PostgreSQL or MySQL, the API and a front-end in **Next.js**, **React** or **Angular**, with TypeScript end to end. That's how I built from scratch an online store, an admin dashboard and a sales portal that now run as a single system, and the new e-commerce is **90% faster** than the old store.

### :plug: Systems integration

I connect the systems a company already uses, like the **Bling, OMIE, ERPFLEX and Datasul/TOTVS** ERPs, CRM (RD Station), payment gateways and shipping (Frenet). I've migrated an ERP with stock, orders and customers running in the middle of the process.

### :robot: Process automation

I take repetitive work off people's hands with **n8n**, **Python** and data collection with **Apify**. Automating processes is how I started, and it's still one of the parts I enjoy the most.

### :history: Legacy modernization

I replace old systems with an in-house stack, in **Next.js, NestJS and TypeScript**, without stopping the operation. I study the legacy system, find the bottlenecks with the people who use it every day and migrate piece by piece, keeping the old system running until the new one takes over.

### :cloud: Infrastructure

I deploy and keep everything running, with Linux VPS, **Docker** and **Nginx**, SSL, Cloudflare, automated backups, CI/CD and files on Amazon S3.

## :rocket: Some numbers

* **More than 23 projects** with back-ends in Node.js and NestJS
* **90% faster**, Freecook's new e-commerce compared to the old store
* **40% less time** spent on manual work thanks to the Python automations
* **4 ERPs integrated**, Bling, OMIE, ERPFLEX and Datasul/TOTVS
* **23 courses and certificates**, including the Microsoft Azure AZ-900, AI-900 and SC-900 prep courses
* {{github}}

## :checklist: How I work

* I like to understand the problem before opening the editor. I gather requirements straight from the people who will use the system and only then design the architecture.
* Business rules don't belong to the framework. I keep controllers thin and logic isolated, so it can be moved around without rewriting the core.
* Bad data has to die at the door, with Zod validation, not three layers later.
* The schema is the most expensive decision in a project, so I model the database carefully and version everything in migrations.
* What I deliver comes documented, with a reproducible Docker deploy.

## :comment-discussion: Let's talk?

If you want to talk about architecture, automation or a project, reach me on [LinkedIn](https://www.linkedin.com/in/yhagofelipe), [GitHub](https://github.com/yyhago) or by [email](mailto:yhago.felipe.teles@gmail.com). For a quote, the fastest way is the [quote form](services.md#orcamento).
`,

  "docs/experiencia.md": `# :briefcase: Experience

I started as an apprentice in 2025 and since then I've worked at a consulting firm serving industrial clients, at a software house where I built the back-end of 23 client projects, and today I take care of all the technology of a company. Here's what I did at each place, with some of the systems that are live. {{cv-frase}}

## Freecook Brasil

**Full Stack Software Developer**, full time
*Mar 2026 to present, Campinas, SP, on site*

Responsible for the architecture and technical evolution of the company's whole IT ecosystem, with a focus on performance, scalability and process automation.

* I architected and built from scratch the digital platform that supports the operation end to end, from the e-commerce order to the stock update, with the online store, admin dashboard, sales portal and company website in a single system.
* I led the move from legacy **WordPress** to an in-house stack in **Next.js, NestJS and TypeScript**, defining code standards, API structure and the migration strategy without interrupting the operation. The new e-commerce is **90% faster** than the previous store.
* Back-end development in **PHP/MySQL** for the legacy e-commerce during the transition, with custom modules and integrations.
* Architecture of **n8n** automations, orchestrating flows between the ERP, CRM and internal systems.
* Migration of the legacy ERP integration (**ERPFLEX**) to the current ERP (**OMIE**), ensuring consistency of stock, orders and customers.
* Queues and asynchronous processing with **Redis and BullMQ** for the platform's background jobs.
* File storage on **Amazon S3** with presigned URLs and management of our own infrastructure (**VPS, Docker, Nginx, SSL**) with automated backups.
* Integration with payment gateways, REST APIs and logistics systems (**Frenet**).

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

Contractor, part time. Development and maintenance of scalable RESTful APIs in a corporate environment, serving more than 20 different client projects at the same time.

* Architecture and development of APIs with **Node.js, NestJS and TypeScript**, applying **Clean Architecture** to ensure maintainability and scalability in long term projects.
* Implementation of complex business rules, authentication/authorization and integration with multiple external APIs.
* Complete technical documentation via **Swagger**, enabling simultaneous consumption by mobile (iOS) and front-end (**Angular**) applications.
* Working directly with clients to gather requirements and define the technical scope, turning business needs into system architecture.
* Managing multiple concurrent demands with a focus on continuous delivery and code quality, within agile methodologies (Scrum/Kanban).

Projects delivered across varied domains: agribusiness (Vitrine do Campo), healthcare (Cardio Shop), financial management (SAFE/ERICA), logistics (Ships Manager), among others.

The 23 projects I worked on.

* [:link-external: 2Clicks](https://2clicks.app/), to find what you need in your city in a few clicks
* [:link-external: Minha Revenda](https://minharevenda.com.br/), management for cosmetics resellers
* [:link-external: Cupom Clube](https://cupomclube.com.br/)
* [:link-external: LeSalvi](https://lesalvi.com/)
* [:link-external: Vermont](https://vermont.com.br/), omnichannel contact center
* [:link-external: Vitrine do Campo](https://vitrinedocampo.com.br/), agronomic consulting and rural credit
* And also Academia Alma, AJ Crypto, Alvino, Cardio Shop, City, Conexes, Corremaq, Erasmo, Fluitz, Pendragon, Copeme, Regia Maria, SAFE/ERICA, Sapyem, Ships Manager, Tito and Wincoin.

{{prints:2clicks|2Clicks}}
{{prints:minharevenda|Minha Revenda}}
{{prints:cupomclube|Cupom Clube}}
{{prints:lesalvi|LeSalvi}}
{{prints:vitrinedocampo|Vitrine do Campo}}

## DBS System Consultoria

**Full Stack Software Developer**, contractor
*Sep 2025 to Dec 2025, Campinas, SP, remote*

Modernization of legacy corporate applications for an industrial environment, focused on system integration and replacing manual flows with automated APIs.

* Rebuilding integrations with the **Datasul (TOTVS)** ERP, replacing manual data exchanges with direct API consumption, reducing the risk of inconsistency between systems.
* Development of RESTful APIs in **PHP and Node.js**, with persistence in **MySQL and PostgreSQL**, to support the new integrations.
* Rebuilding legacy interfaces with **Next.js and TypeScript**, modernizing the experience without interrupting production.
* Technical requirements gathering with the business team, identifying bottlenecks in the legacy application and proposing a replacement architecture.
* Delivery of a fixed scope project in 4 months, with full autonomy over technical decisions and schedule.

Some of the clients I built for.

* [:link-external: NG Metalúrgica](https://www.ngmetalurgica.com.br/)
* [:link-external: Pronutrition](https://pronutrition.com.br/)

{{prints:ngmetalurgica|NG Metalúrgica}}
{{prints:pronutrition|Pronutrition}}

## Grupo EMS

**IT Apprentice, Cybersecurity**, full time
*Jan 2025 to Sep 2025, Hortolândia, SP, on site*

First corporate experience, working on the Cybersecurity team focused on internal process automation and data protection.

* Development of internal applications in **Python** (**Streamlit, FastAPI, Flask**) to support specific demands of the security area.
* Creation of automations that cut the team's manual operations time by **40%**, my first real contact with the idea of *automating before scaling*, which I carry to this day.
* Setup of simple pipelines (**CI/CD**) for continuous execution and monitoring of the automations.
* Integration with multiple databases (**Supabase, Firebase, PostgreSQL, MySQL**) to consolidate data flow between systems.
* Support in information security practices, focused on proper handling of sensitive data.
`,

  "docs/projetos.md": `# :project: Projects

Here's a selection of the projects I've delivered, from political intelligence to workplace safety and law, each with the problem that needed solving and how I solved it. Client projects live in private repositories, by contract, so when I can't show the code I show the screens. Click any image to see it larger. My personal and study projects are in [repositories.md](repositories.md), straight from GitHub.

## CoJurOS, legal communication

*Full Stack, in development*

A system focused on legal communication that I'm building right now. Once it's live, I'll share the problem, the solution and the stack here.

{{prints:cojuros|CoJurOS, system screens}}

## SafetyKeeper, workplace safety management

*Full Stack, freelance, client JCFireWall*

\`NestJS\` \`TypeScript\` \`Node.js\` \`Next.js\` \`PostgreSQL\` \`REST APIs\` \`Swagger\` \`Multitenancy\` \`RBAC\` \`Docker\` \`Nginx\` \`VPS\`

**The client's problem.** JCFireWall serves several corporate clients and tracked the workplace safety and health compliance of all of them in spreadsheets, with no reliable separation between companies, no history of who changed what and no visibility into deadlines. They needed a platform where each client only sees its own data, with an audit trail for inspections.

**Solution.**

* Modular back-end in **NestJS and TypeScript**, running on **Node.js**, splitting clients, users, compliance and safety documents into independent modules.
* REST API documented in **Swagger**, with versioning and standardized responses, so the front-end consumes it without surprises.
* **Multitenancy** with data isolation per company and **RBAC** per role, so each client only sees what belongs to them.
* **PostgreSQL** with relational modeling and indexes designed for the compliance queries and the audit history.
* Data validation and centralized error handling, avoiding inconsistencies in critical safety information.
* **Next.js** front-end for documents, deadlines and compliance status per client, with different screens for each role.
* Deployed on a VPS with Docker, Nginx, SSL and automated backups.

**Result.** The spreadsheets were replaced by a single system, with data isolated per client, a full change history and a base ready for new clients without reworking the architecture.

The system is internal and sits behind a login. [:link-external: JCFireWall website](https://jcfirewall.com.br)

{{prints:safetykeeper|SafetyKeeper, system screens}}
{{prints:clientejcfirewall|JCFireWall website, SafetyKeeper client}}

## CUBE, political analysis

*Full Stack, freelance, client CUBE Inteligência*

\`React\` \`TypeScript\` \`Vite\` \`Tailwind CSS\` \`Node.js\` \`Express\` \`Prisma\` \`PostgreSQL\` \`REST APIs\` \`JWT\` \`RBAC\` \`Zod\` \`Apify\` \`Gemini AI\` \`Nginx\` \`VPS\` \`PM2\`

**The client's problem.** CUBE needed to follow in real time what was being published about political topics and figures, measure the tone of those mentions and show everything in dashboards that could handle peak traffic during elections, with different permissions for the internal team and for clients.

**Solution.** I kept a clean split between the front-end, a SPA, and the back-end, a stateless REST API, with isolated environments per layer and versioned deploys for quick rollback.

* Front-end in **React 18 with TypeScript and Vite**, with code splitting, Tailwind and custom components, no heavy UI library.
* **React Query** for caching, automatic revalidation and async state, and real time dashboards with Chart.js and Recharts.
* Back-end in **Node.js and Express**, layered into controllers, services and repositories.
* **Prisma** with PostgreSQL, versioned migrations and strategic indexes.
* **JWT** authentication with refresh token rotation, bcrypt for passwords and **RBAC** with per route middleware.
* Public data collection with **Apify** and sentiment analysis with the **Google Gemini** API, with prompts tuned to the political context.
* RSS aggregator with node-cron to keep everything updated in the background, and validation with Zod.
* Deployed on a dedicated VPS, with Nginx and firewall managed through HestiaCP and Node in cluster mode with **PM2**, using every core on the server.

**Result.** A platform that monitors political mentions in real time, classifies sentiment with AI and delivers dashboards ready for election peaks, with separate access for the team and clients.

The platform is private, by contract. [:link-external: CUBE website](https://cubeinteligencia.com.br)

{{prints:cube|CUBE, platform screens}}
{{prints:clientecube|CUBE Inteligência website, platform client}}

## Landing page, Raquel Ribeiro Advocacia

*Front-end, freelance, client Raquel Ribeiro Advocacia*

\`React\` \`TypeScript\` \`Vite\` \`Tailwind CSS\` \`HTML5\` \`Vercel\`

**The client's problem.** The law firm wanted to show up on Google for people looking for a labor lawyer in the region, with a page that loads fast on mobile and turns visits into real contacts through WhatsApp and the form.

**Solution.** I turned that into performance, SEO and accessibility requirements.

* React 18, TypeScript and Vite, with Tailwind and a mobile first layout tested on real devices.
* Technical SEO with React Helmet, semantic HTML and schema.org structured data for law firms.
* Lazy loaded components and WebP images with fallback.
* **WCAG 2.1 level A** accessibility, with proper contrast, keyboard navigation, ARIA labels and visible focus.
* Deploy on Vercel with CI/CD via Git and a preview for every pull request.

**Result.** **Lighthouse above 95** in every category and **LCP under 2.5 s**.

[:link-external: See the landing page live](https://raquel-ribeiro-advocacia-psi.vercel.app/)

{{prints:advocacia|Raquel Ribeiro Advocacia landing page}}

## SGI Treinamentos & Assessoria website

*Full Stack, freelance, client SGI Treinamentos & Assessoria*

\`PHP\` \`WordPress\` \`MySQL\` \`Sass\` \`Git\`

**The client's problem.** SGI needed a company website live on a short deadline, that the team could update without depending on a developer, with a reliable contact form and room to grow as they launched new services.

**Solution.**

* WordPress with a custom theme in **PHP 8**, taking advantage of the team already knowing the admin while keeping full control of the code.
* Theme organized with an MVC inspired separation of concerns, so maintenance stays simple.
* SCSS with Grid and Flexbox for the responsive layout and components.
* AJAX forms, in **JavaScript and PHP**, with nonce and sanitization, preventing CSRF and XSS.
* Custom **MySQL** tables for structured data, keeping wp_postmeta clean and queries fast.
* Automated deploy via Git on Hostinger, with versioning and rollback.

**Result.** Website delivered on time, with the SGI team updating the content on its own and protected forms.

[:link-external: sgitreinamentosassessoria.com](https://sgitreinamentosassessoria.com/)

{{prints:sgi|SGI Treinamentos & Assessoria website}}

## Cyberbot, cybersecurity assistant

*Team prototype, four developers, Grupo EMS*

\`Python\` \`NLP\` \`Streamlit\` \`Git\` \`GitHub\`

A prototype we built as a team of four developers to raise awareness about digital security, with a simple tool for non technical users.

* Three modules: a chatbot for digital security questions and good practices, a strong password generator and checker and an educational phishing simulator.
* Built in Python with natural language processing, in a modular architecture ready to plug in security APIs later.
* Streamlit interface, designed so non technical users find everything fast.
* Versioned on Git and GitHub, with agile task management.

[:github: See the code on GitHub](https://github.com/rafafrd/Cyberbot)

{{prints:cyberbot|Cyberbot, prototype screens}}

## MundoPet, my final project

*Full Stack, final project of the Systems Development technical degree, ETEC Hortolândia*

\`Node.js\` \`Express\` \`MongoDB\` \`React\` \`Redux\` \`Bootstrap\` \`PayPal\` \`AWS\`

The final project of my Systems Development technical degree, a complete marketplace for the pet market that brings several pet shops together on one platform.

* Back-end in **Node.js and Express**, with MongoDB and Mongoose, and the database hosted on AWS.
* Front-end in **React with Redux** for state and Formik for forms.
* Nearest pet shops on a map, cart, sign up and payment through **PayPal**.
* Shared business model, where part of each sale goes to the platform.

[:github: See the code on GitHub](https://github.com/yyhago/pet-marketplace-etec)

{{prints:mundopet|MundoPet}}
`,

  "docs/servicos.md": `# :rocket: Services

I work with companies per project or with ongoing maintenance, from businesses just starting out to operations with an ERP, e-commerce and several systems running together. If your company needs a system, an integration or a website that brings results, this is where I can help.

[:comment-discussion: Get a quote](#orcamento)

## :organization: Who already trusts my work

Many projects are under NDA, so I'm sharing the names I can show.

* **CUBE Inteligência**, political intelligence, with a monitoring and AI sentiment analysis platform
* **JCFireWall**, workplace safety, with SafetyKeeper, a safety compliance system for several corporate clients
* **NG Metalúrgica** and **Pronutrition**, industry and nutrition, with TOTVS Datasul integrations and Next.js screens
* **Raquel Ribeiro Advocacia** and **SGI Treinamentos & Assessoria**, law and workplace safety, with fast, easy to maintain websites, in React and WordPress
* **Vitrine do Campo**, **2Clicks**, **Minha Revenda**, **Cupom Clube** and others among the 23 projects in agribusiness, healthcare, finance, retail and logistics where I built the back-end

## :tools: What I can do for you

### :layers: Custom systems

Admin dashboards, management systems, portals for clients or partners, with login, role based permissions and data separated per company. That's what I did with SafetyKeeper, in **NestJS, Next.js and PostgreSQL**, which took safety management out of spreadsheets.

### :plug: Integrations and APIs

Your ERP, your e-commerce, your CRM and your shipping talking to each other on their own, with nobody copying data from one place to another. I've integrated Bling, OMIE, ERPFLEX, Datasul/TOTVS, RD Station, payment gateways and Frenet.

### :graph: Data, dashboards and AI

Dashboards that show what matters in real time, public data collection and text analysis with AI. That was the core of the CUBE platform, built in **React, Node.js and PostgreSQL**, with **Google Gemini** for text analysis, to handle peak traffic during elections.

### :browser: Websites and landing pages

A company website or a lead capture page that's fast on mobile, ranks well on Google and is easy to update. The Raquel Ribeiro landing page, built in **React, TypeScript and Vite**, scored above 95 on Lighthouse in every category.

### :history: E-commerce and legacy replacement

I replace the old system with a custom platform without stopping the operation, migrating piece by piece. I've done it with an entire operation, from the e-commerce order to the invoice, in **Next.js, NestJS and TypeScript**, and the new e-commerce is 90% faster than the old one.

### :robot: Process automation

Repetitive tasks that eat hours of your team's time become automatic processes with n8n, Python and data collection. My first automations cut manual work time by 40%.

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

This page is under construction. My skills are at the gym, working out to come back stronger, and they only get listed here once I really master them. If the coffee helps, I will be back soon with everything organized.

Want to see everything I have already worked with? Just open the [Extensions](extensoes) tab, right here on the side. Each technology has a page about where and how I used it.
`,

  "docs/formacao.md": `# :mortar-board: Education

I've been studying nonstop since 2022, with a technical course alongside high school, another one at SENAI, college and English, almost all of it while working.

## Bachelor's in Software Engineering

*Centro Universitário Estácio de Sá, online, Jan 2025 to Dec 2028, in progress*

A program focused on building robust and scalable systems. I'm going deeper into software architecture, design patterns, requirements engineering and agile methods like Scrum and Kanban, covering analysis, modeling, implementation and maintenance of systems, with an emphasis on security, performance and usability.

A lot of what I learned in the course I applied in practice at CUBE, a full stack political analysis platform with a scalable architecture, RBAC and real time natural language processing.

## English, Cidadão Pró-Mundo Program

*Universidade Presbiteriana Mackenzie, Campinas, SP, Jul 2025 to Dec 2030, in progress*

I passed a selection process by **Microsoft and SENAI Sumaré** that gave scholarships to only **20 students** in the region. I'm studying English at Mackenzie, from A2 to fluency, focused on speaking, active listening, reading and writing, using digital tools in a multicultural environment for real everyday situations.

## Technical Degree in Systems Development

*SENAI Dr. Celso Charuri, Sumaré, SP, Jan 2025 to Sep 2025, completed*

A technical degree focused on applied software engineering, which I took through EMS as part of the apprenticeship program. I built skills in systems analysis, data modeling, advanced computational logic, systems architecture and object oriented and functional programming, with agile methods, DevOps practices with CI/CD and hands on projects designed to scale.

## Technical Degree in Systems Development with High School

*ETEC Hortolândia, Jan 2022 to Dec 2024, completed*

This is where I really started. I studied computational thinking, data modeling, systems architecture and object orientation, and worked with full stack web development, with responsive applications, RESTful APIs and SPAs, plus agile methods and UML. It was also my first contact with C, C++ and Arduino.

My final project was **MundoPet**, a complete pet marketplace with Node.js, Express, React, Redux and MongoDB. The details are in [projects.md](projects.md).

## :globe: Languages

* **Portuguese**, native
* **English**, advanced level
`,

  "docs/certificados.md": `# :verified-filled: Certificates

23 courses and certificates in total, from Microsoft Azure to Python, data, UX and AI. I like to complement what I see at work with courses, and you can check all of them on my [LinkedIn](https://www.linkedin.com/in/yhagofelipe).

## :azure: Microsoft Azure, prep courses

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
  "description": "Portfolio of Yhago Felipe, Full Stack Developer with a back-end focus",
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
  Segurança: "Security",
  "DevOps e infraestrutura": "DevOps and infrastructure",
  Integrações: "Integrations",
  "Automação e IA": "Automation and AI",
  Práticas: "Practices",
  Ferramentas: "Tools",
  Idiomas: "Languages (spoken)",
};

const EXT_EN: Record<string, { desc: string; about: string; name?: string; publisher?: string }> = {
  typescript: { desc: "JavaScript with static types.", about: "The language I use the most, on the front and the back. At Freecook, CroSoften and DBS everything was written in TypeScript, with Zod validating data at the edge." },
  javascript: { desc: "The language of the web.", about: "Where I started on the web, back at ETEC, and the base of everything I do in TypeScript." },
  python: { desc: "Automation, data and APIs.", about: "My first job was in Python, on the Cybersecurity automations at Grupo EMS that cut 40% of the time spent on manual operations." },
  php: { desc: "The language behind a big part of the web.", about: "Freecook's legacy e-commerce during the migration, APIs at DBS and SGI's custom WordPress theme." },
  sql: { desc: "The language of relational databases.", about: "Modeling, indexes and queries designed for performance and auditing, as in SafetyKeeper." },
  html5: { desc: "Markup for the web.", about: "Semantic HTML, with SEO and accessibility in mind, as on the Raquel Ribeiro landing page." },
  css: { desc: "Styling and layout.", about: "Responsive layouts on every web project, with Tailwind and SCSS." },
  nodejs: { desc: "JavaScript on the server.", about: "Where I spend most of my time, between APIs, queues, scheduled jobs and integrations. The base of all my TypeScript back-ends." },
  nestjs: { desc: "Framework for scalable back-ends.", about: "What I use the most on the back-end: Freecook's platform, SafetyKeeper and the 23 CroSoften projects with Clean Architecture." },
  expressjs: { desc: "Minimalist web framework.", about: "The back-end of the CUBE platform and of MundoPet, my final project." },
  apisrest: { name: "REST APIs", desc: "API standard over HTTP.", about: "Versioned endpoints, standardized responses and Swagger docs on every project." },
  prisma: { desc: "ORM with end to end types.", about: "Versioned migrations and indexed queries on the CUBE platform." },
  typeorm: { desc: "ORM for TypeScript.", about: "Data modeling and access in NestJS projects." },
  zod: { desc: "Validation with types.", about: "Bad data dies at the edge. Every request validated on CUBE." },
  swagger: { desc: "API documentation.", about: "My APIs ship documented. At CroSoften the iOS and Angular teams consumed everything through Swagger." },
  redisebullmq: { name: "Redis and BullMQ", desc: "Cache and queues.", about: "Queues and asynchronous processing at Freecook, moving heavy work out of the request." },
  fastapi: { desc: "Fast APIs in Python.", about: "Internal APIs for the Cybersecurity team at Grupo EMS." },
  flask: { desc: "Python microframework.", about: "Internal applications at Grupo EMS." },
  nextjs: { desc: "The React framework for the web.", about: "The base of the platform I built at Freecook, of SafetyKeeper and of the screens I modernized at DBS. This portfolio is Next.js too." },
  react: { desc: "Component based interfaces.", about: "CUBE's dashboards, the Raquel Ribeiro landing page and MundoPet." },
  angular: { desc: "Google's web framework.", about: "The front-ends of the CroSoften projects, which consumed the APIs I documented in Swagger." },
  redux: { desc: "State management.", about: "I used it on MundoPet, my final project." },
  vite: { desc: "Fast front-end builds.", about: "The CUBE front-end and the Raquel Ribeiro landing page, with code splitting." },
  tailwindcss: { desc: "Utility first CSS.", about: "What I use on most projects to style quickly." },
  postgresql: { desc: "Open source relational database.", about: "My default database today: SafetyKeeper, CUBE and the DBS APIs." },
  mysql: { desc: "Popular relational database on the web.", about: "Freecook's legacy e-commerce, the DBS APIs and SGI's website." },
  mongodb: { desc: "Document database.", about: "I used it on MundoPet, my final project." },
  supabase: { desc: "Postgres with a ready back-end.", about: "Data integration at Grupo EMS." },
  firebase: { desc: "Google's app platform.", about: "Data integration at Grupo EMS." },
  jwterbac: { name: "JWT and RBAC", desc: "Authentication and permissions.", about: "Refresh token rotation, bcrypt passwords and permissions per route and per role, as on CUBE." },
  multitenancy: { desc: "Many clients, isolated data.", about: "On SafetyKeeper each company sees only its own data." },
  cibersegurana: { name: "Cybersecurity", desc: "Protecting systems and data.", about: "I started on the Cybersecurity team at Grupo EMS and carry that care into system design." },
  linuxebash: { name: "Linux and Bash", desc: "The servers' operating system.", about: "I run my own VPS and the backup routines." },
  docker: { desc: "Containers.", about: "Everything I deploy on a VPS runs in Docker." },
  dockercompose: { desc: "Several containers in one file.", about: "Brings up the API, database and queue together." },
  nginx: { desc: "Web server and reverse proxy.", about: "In front of the production APIs, with SSL." },
  vps: { desc: "Virtual private server.", about: "I run my own infrastructure, from Freecook to client projects." },
  cloudflare: { desc: "DNS, proxy and protection.", about: "Domains and protection for Freecook's systems." },
  pm2: { desc: "Node process manager.", about: "Node in cluster mode on the CUBE platform, using every core on the server." },
  amazons3: { desc: "Cloud file storage.", about: "Files with presigned URLs at Freecook." },
  cicd: { desc: "Continuous integration and delivery.", about: "Automated builds and deploys at Freecook and the automation pipelines at Grupo EMS." },
  vercel: { desc: "Front-end deployment.", about: "The Raquel Ribeiro landing page, with a preview on every pull request. This portfolio is on Vercel too." },
  integraodesistemas: { name: "System integration", desc: "Systems talking to each other.", about: "ERP, e-commerce, CRM and logistics integrated, with nobody copying data from one place to another." },
  erps: { desc: "Management systems.", about: "I've integrated Bling, OMIE, ERPFLEX and Datasul/TOTVS, including the migration from ERPFLEX to OMIE without stopping sales." },
  rdstation: { desc: "CRM and marketing.", about: "Automated flows between CRM and ERP with n8n, at Freecook." },
  woocommerce: { desc: "E-commerce on WordPress.", about: "Maintaining Freecook's legacy e-commerce during the migration." },
  frenet: { desc: "Shipping quotes.", about: "Logistics integration on Freecook's e-commerce." },
  paypal: { desc: "Online payments.", about: "Payments on MundoPet, my final project." },
  n8n: { desc: "Workflow automation.", about: "At Freecook I connect the ERP, CRM and internal systems with n8n." },
  apify: { desc: "Data collection platform.", about: "Public data collection on the CUBE platform." },
  googlegemini: { desc: "Google's generative AI.", about: "Sentiment analysis on CUBE and some of my own projects on GitHub." },
  streamlit: { desc: "Data apps in Python.", about: "Internal applications at Grupo EMS and the Cyberbot interface." },
  cleanarchitecture: { desc: "Business rules independent of the framework.", about: "Applied on the 23 CroSoften projects." },
  arquiteturamvc: { name: "MVC architecture", desc: "Model, View and Controller.", about: "SGI's theme and layered APIs." },
  scrum: { desc: "Agile methodology.", about: "Sprints and incremental delivery at CroSoften." },
  kanban: { desc: "Visual task flow.", about: "Tracking parallel demands at CroSoften." },
  git: { desc: "Version control.", about: "Small commits and messages that explain why." },
  github: { desc: "Repositories and collaboration.", about: "Pull request flow. It's where my public repositories live." },
  postman: { desc: "API testing.", about: "A collection for every API I build." },
  figma: { desc: "Interface design.", about: "At CroSoften I built screens from the design team's prototypes." },
  wordpress: { desc: "CMS.", about: "Custom PHP themes, like SGI's, and the migration to an in-house stack at Freecook." },
  ingls: { name: "English", desc: "Advanced level.", about: "Full scholarship in the Cidadão Pró-Mundo Program at Mackenzie, through a Microsoft and SENAI partnership." },
};

const EXT_LIST: Record<Locale, Ext[]> = {
  pt: extensions,
  en: extensions.map((e) => ({ ...e, cat: CATS[e.cat] ?? e.cat, ...EXT_EN[e.id] })),
};

export const extensionsFor = (locale: Locale) => EXT_LIST[locale];

const TERMINAL_EN: Record<string, string> = {
  sobre: `Yhago Felipe Rocha Teles, Full Stack Developer, back-end focus
Hortolândia, São Paulo, Brazil

I turn manual work and scattered systems into a custom,
integrated platform. The back-end is where I work the most,
with TypeScript, Node.js, NestJS, Next.js and PostgreSQL.

To see more, type open about-me.md`,
  experiencia: `Freecook Brasil          Full Stack       Mar 2026 to present
CroSoften Tecnologia     Back-end         Jan 2026 to Aug 2026
DBS System Consultoria   Full Stack       Sep 2025 to Dec 2025
Grupo EMS                IT Apprentice    Jan 2025 to Sep 2025

To see more, type open experience.md`,
  projetos: `CoJurOS        legal communication, in development
SafetyKeeper   multitenant safety management (NestJS, Next.js, PostgreSQL)
CUBE           political analysis with AI (React, Node.js, PostgreSQL, Gemini)
Law firm       landing page with Lighthouse above 95 (React, Vite)
SGI            WordPress website with a custom theme (PHP, MySQL)
Cyberbot       cybersecurity assistant, team project (Python, Streamlit)
MundoPet       pet marketplace, my final project (Node.js, React, MongoDB)

To see more, type open projects.md`,
  servicos: `Custom systems, integrations and APIs, AI dashboards,
websites and landing pages, legacy replacement and automation.

Clients include CUBE Inteligência, JCFireWall, with SafetyKeeper,
NG Metalúrgica, Pronutrition and Raquel Ribeiro Advocacia.

To see more, type open services.md
To ask for a quote, type quote`,
  repos: `Public repositories at https://github.com/yyhago

To see more, type open repositories.md`,
  habilidades: `core         TypeScript, Node.js, NestJS, Next.js, PostgreSQL
languages    TypeScript, JavaScript, Python, PHP, SQL
back-end     Node.js, NestJS, Express, REST APIs, Prisma, TypeORM, Zod,
             Swagger, Redis, BullMQ, FastAPI, Flask
front-end    Next.js, React, Angular, Redux, Vite, Tailwind CSS
databases    PostgreSQL, MySQL, MongoDB, Supabase, Firebase
security     JWT, RBAC, multitenancy, bcrypt
infra        Linux, Docker, Docker Compose, Nginx, VPS, Cloudflare, PM2,
             AWS S3, CI/CD, Vercel
integrations OMIE, ERPFLEX, Datasul/TOTVS, Bling, RD Station, WooCommerce,
             Frenet, payments
automation   n8n, Apify, Google Gemini, Streamlit
practices    Clean Architecture, MVC, Scrum, Kanban
tools        Git, GitHub, Postman, Figma, WordPress

To see more, open the Extensions tab`,
  formacao: `Software Engineering          Estácio     2025 to 2028
English, CPM Program          Mackenzie   2025 to 2030
Tech. Degree, Systems Dev.    SENAI       2025
Tech. Degree, Systems Dev.    ETEC        2022 to 2024

To see more, type open education.md`,
  certificados: `23 courses and certificates, including the Microsoft
AZ-900, AI-900 and SC-900 prep courses.

To see more, type open certificates.md`,
  contato: TERMINAL.contato,
};

export const terminalFor = (locale: Locale) => (locale === "en" ? TERMINAL_EN : TERMINAL);
