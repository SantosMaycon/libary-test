import IBook from "../Interfaces/Entities/IBook";
import IBookRepository from "../Interfaces/Repositories/IBookRepository";
import IGetAvailableBooks from "../Interfaces/Services/IGetAvailableBooks";

export default class GetAvailableBooks implements IGetAvailableBooks {
  constructor(private readonly bookRepository: IBookRepository) {
  }

  async perform(): Promise<IBook[]> {
    const books = await this.bookRepository.findAll();

    return books.filter(book => book.available > 0);
  }
}