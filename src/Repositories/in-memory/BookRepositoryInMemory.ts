import IBook from "../../Interfaces/Entities/IBook";
import IBookRepository from "../../Interfaces/Repositories/IBookRepository";

export default class BookRepositoryInMemory implements IBookRepository {
  private books: IBook[] = [];

  async findAll(): Promise<IBook[]> {
    return this.books;
  }

  async findById(id: string): Promise<IBook | null> {
    const book = this.books.find(book => book.id === id);
    return book || null;
  }

  async findBy(field: keyof IBook, value: any): Promise<IBook[]> {
    const books = this.books.filter(book => book[field] === value);
    return books;
  }

  async create(data: IBook): Promise<IBook | null> {
    if (this.books.find(book => book.id === data.id)) {
      return null;
    }

    this.books.push(data);
    return data;
  }

  async update(id: string, data: Partial<IBook>): Promise<IBook | null> {
    const book = await this.findById(id);
    if (!book) return null;
    Object.assign(book, data);
    return book;
  }

  async delete(id: string): Promise<IBook | null> {
    const book = await this.findById(id);
    if (!book) return null;
    this.books = this.books.filter(book => book.id !== id);
    return book;
  }
}
