export type Depoimento = {
  nome: string;
  nomeEn?: string;
  cargo: string;
  cargoEn?: string;
  empresa: string;
  texto: string;
  textoEn?: string;
};

export const DEPOIMENTOS: Depoimento[] = [
  {
    nome: "Equipe de tecnologia",
    nomeEn: "Technology team",
    cargo: "",
    empresa: "CUBE Inteligência",
    texto:
      "O Yhago entendeu rápido o que a gente precisava acompanhar e transformou isso numa plataforma que a equipe usa todo dia. Os painéis aguentaram o pico do período eleitoral sem cair, e a análise de sentimento com IA virou parte do relatório que entregamos aos nossos clientes.",
    textoEn:
      "Yhago quickly understood what we needed to track and turned it into a platform our team uses every day. The dashboards handled the election peak without going down, and the AI sentiment analysis became part of the reports we deliver to our clients.",
  },
  {
    nome: "Equipe de gestão",
    nomeEn: "Management team",
    cargo: "",
    empresa: "JCFireWall",
    texto:
      "A gente controlava a SST de vários clientes em planilha e vivia com medo de perder um vencimento. Com o SafetyKeeper cada empresa tem o seu espaço, sabemos quem alterou o quê e os prazos aparecem antes de virar problema. Entrega organizada e no prazo.",
    textoEn:
      "We used to track safety compliance for several clients in spreadsheets and were always afraid of missing a deadline. With SafetyKeeper each company has its own space, we know who changed what and deadlines show up before they become a problem. Organized delivery, on time.",
  },
  {
    nome: "Raquel Ribeiro",
    cargo: "Advogada",
    cargoEn: "Lawyer",
    empresa: "Raquel Ribeiro Advocacia",
    texto:
      "Eu queria uma página que trouxesse cliente de verdade, e não só um site bonito. Ficou rápida no celular, aparece bem no Google e os contatos começaram a chegar pelo WhatsApp. O Yhago explicou cada etapa sem complicar.",
    textoEn:
      "I wanted a page that brought in real clients, not just a pretty website. It's fast on mobile, shows up well on Google and the contacts started coming in through WhatsApp. Yhago explained every step without making it complicated.",
  },
  {
    nome: "Equipe de gestão",
    nomeEn: "Management team",
    cargo: "",
    empresa: "SGI Treinamentos e Assessoria",
    texto:
      "Precisávamos do site no ar rápido e de um jeito que a nossa equipe conseguisse atualizar sozinha. Foi exatamente o que recebemos, com um formulário de contato que funciona e um painel simples de mexer.",
    textoEn:
      "We needed the website live quickly and in a way our team could update on its own. That's exactly what we got, with a contact form that works and an admin that's simple to use.",
  },
  {
    nome: "Equipe de TI",
    nomeEn: "IT team",
    cargo: "",
    empresa: "NG Metalúrgica",
    texto:
      "O Yhago entrou no projeto e logo estava entregando telas e funções integradas ao Datasul. As telas novas ficaram muito mais fáceis para quem usa no dia a dia, e tudo foi feito sem parar a produção.",
    textoEn:
      "Yhago joined the project and was soon delivering screens and functions integrated with Datasul. The new screens became much easier for the people who use them every day, and everything was done without stopping production.",
  },
];

export const PUBLICADOS = DEPOIMENTOS.filter((d) => d.nome.trim());
