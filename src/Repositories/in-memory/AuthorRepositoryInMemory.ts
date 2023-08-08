import IAuthor from "../../Interfaces/Entities/IAuthor";
import IAuthorRepository from "../../Interfaces/Repositories/IAuthor";

export default class AuthorRepositoryInMemory implements IAuthorRepository {
  private authors: IAuthor[] = [];

  async findAll(): Promise<IAuthor[]> {
    return this.authors;
  }

  async findById(id: string): Promise<IAuthor | null> {
    const author = this.authors.find(author => author.id === id);
    return author || null;
  }

  async findBy(field: keyof IAuthor, value: any): Promise<IAuthor[]> {
    const authors = this.authors.filter(author => author[field] === value);
    return authors;
  }

  async create(data: IAuthor): Promise<IAuthor | null> {
    if (this.authors.find(author => author.id === data.id)) {
      return null;
    }

    this.authors.push(data);
    return data;
  }

  async update(id: string, data: Partial<IAuthor>): Promise<IAuthor | null> {
    const author = await this.findById(id);
    if (!author) return null;
    Object.assign(author, data);
    return author;
  }

  async delete(id: string): Promise<IAuthor | null> {
    const author = await this.findById(id);
    if (!author) return null;
    this.authors = this.authors.filter(author => author.id !== id);
    return author;
  }
}