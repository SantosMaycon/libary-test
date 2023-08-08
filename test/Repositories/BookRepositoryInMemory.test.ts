import IBook from "../../src/Interfaces/Entities/IBook";
import BookRepositoryInMemory from "../../src/Repositories/in-memory/BookRepositoryInMemory";

describe('BookRepositoryInMemory', () => {
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
    quantity: 1,
    available: 1,
  }

  let repositoryWithBook: BookRepositoryInMemory;

  beforeEach(() => {
    repositoryWithBook = new BookRepositoryInMemory();
    repositoryWithBook.create(obj);
  });

  describe('createBook', () => {    
    it('should create a book', async () => {
      const repository = new BookRepositoryInMemory();
      const book = await repository.create(obj);
      expect(book).toEqual(obj);
    });

    it('should return null if book already exists', async () => {
      await repositoryWithBook.create(obj);
      const book = await repositoryWithBook.create(obj);
      expect(book).toBeNull();
    });
  });

  describe('getBooks', () => {
    it('should return a list of books', async () => {
      const bookList = await repositoryWithBook.findAll();
      expect(bookList).toEqual([obj]);
    });
  
    it('should return an empty booklist', async () => {
      const repository = new BookRepositoryInMemory();
      const bookList = await repository.findAll();
      expect(bookList).toEqual([]);
    });
  });

  describe('getBookById', () => {
    it('should return a book by id', async () => {
      const book = await repositoryWithBook.findById('1');
      expect(book).toEqual(obj);
    });
  
    it('should return null if book not found', async () => {
      const book = await repositoryWithBook.findById('2');
      expect(book).toBeNull();
    });
  });

  
  describe('getBookByTitle', () => {
    it('should return a book by title', async () => {
      const book = await repositoryWithBook.findBy('title','The Hobbit');
      expect(book).toEqual([obj]);
    });
  
    it('should return null if book not found in book by title', async () => {
      const book = await repositoryWithBook.findBy('title','The Hobbit 2');
      expect(book).toEqual([]);
    });
  });

  describe('updateBook', () => {
    it('should update a book', async () => {
      const book = await repositoryWithBook.update('1', { title: 'The Hobbit 2' });
      expect(book).toEqual({ ...obj, title: 'The Hobbit 2' });
    });
  
    it('should return null if book not found in update book', async () => {
      const book = await repositoryWithBook.update('2', { title: 'The Hobbit 2' });
      expect(book).toBeNull();
    });
  });

  describe('deleteBook', () => {
    it('should delete a book', async () => {
      const result = await repositoryWithBook.delete('1');
      expect(result).toBe(result);
    });
  
    it('should return false if book not found in delete book', async () => {
      const result = await repositoryWithBook.delete('2');
      expect(result).toBe(null);
    });
  });
});
