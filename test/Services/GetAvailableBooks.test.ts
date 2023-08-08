import IBook from "../../src/Interfaces/Entities/IBook";
import BookRepositoryInMemory from "../../src/Repositories/in-memory/BookRepositoryInMemory";
import GetAvailableBooks from "../../src/Services/GetAvailableBooks";

describe('GetAvailableBooks', () => {
  const obj: IBook = {
    id: '1',
    title: 'The Hobbit',
    authors: [
      {
        id: '1',
        name: 'J. R. R. Tolkien',
      },
    ],
    edition: '1',
    publisher: 'HarperCollins',
    year: 2012,
    pages: 400,
    quantity: 3,
    available:0,
  }

  let repositoryWithBook: BookRepositoryInMemory;

  beforeEach(() => {
    repositoryWithBook = new BookRepositoryInMemory();
    repositoryWithBook.create(obj);
  });
  
  
  describe('perform', () => {
    it('should return a list of books', async () => {
      const obj2 = {...obj, id: '2', available: 1};
      repositoryWithBook.create(obj2);
      const service = new GetAvailableBooks(repositoryWithBook);
      const bookList = await service.perform();
      
      expect(bookList).toEqual([obj2]);
    });
    
    it('should return an empty booklist', async () => {
      const service = new GetAvailableBooks(repositoryWithBook);
      const bookList = await service.perform();
      expect(bookList).toEqual([]);
    });
  });
});