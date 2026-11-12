export type Depoimento = {
  nome: string;
  nomeEn?: string;
  cargo: string;
  cargoEn?: string;
  empresa: string;
  texto: string;
  textoEn?: string;
};

export const DEPOIMENTOS: Depoimento[] = [];

export const PUBLICADOS = DEPOIMENTOS.filter((d) => d.nome.trim());
