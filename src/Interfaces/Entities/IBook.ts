import IAuthor from "./IAuthor";
import IPublisher from "./ILoan";

export default interface IBook {
  id: string; // Identificador único do livro.
  title: string; // Título do livro.
  authors: IAuthor[]; // Autores do livro.
  edition: string; // Edição do livro.
  publisher: string; // Editora do livro.
  year: number; // Ano de publicação do livro.
  pages: number; // Número de páginas do livro.
  quantity: number; // Quantidade total de exemplares do livro.
  available: number; // Quantidade disponível de exemplares do livro.
}
