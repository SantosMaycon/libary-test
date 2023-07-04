import IBookRepository from "../Repositories/IBookRepository";

export default class BookService {
  private bookRepository: IBookRepository;

  constructor(bookRepository: IBookRepository) {
    this.bookRepository = bookRepository;
  }

  async getBookByTitle(title: string) {
    const book = await this.bookRepository.getBookByTitle(title);

    if (!book) throw new Error("Book not found.");

    return book;
  }
}