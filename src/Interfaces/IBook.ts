import IAuthor from "./IAuthor";

export interface IBook {
  title: string; // Título do livro.
  authors: IAuthor[]; // Autores do livro.
  edition: string; // Edição do livro.
  publisher: string; // Editora do livro.
  year: number; // Ano de publicação do livro.
  pages: number; // Número de páginas do livro.
  quantity: number; // Quantidade total de exemplares do livro.
  available: number; // Quantidade disponível de exemplares do livro.
}
