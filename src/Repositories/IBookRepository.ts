import { IBook } from "../Interfaces/IBook";

export default interface IBookRepository {
  getBookByTitle(title: string): Promise<IBook[] | null>;
}
