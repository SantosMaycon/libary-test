import { IBook } from "../../src/Interfaces/IBook";
import BookService from "../../src/Services/BookService";

describe('BookService', () => {
  describe('getBookByTitle', () => {
    it('should return a book', async () => {
      const bookList: IBook[] = [
        {
          title: 'The Hobbit',
          authors: [
            {
              name: 'J. R. R. Tolkien',
            },
          ],
          edition: '1st',
          publisher: 'George Allen & Unwin',
          year: 1937,
          pages: 310,
          quantity: 2,
          available: 2,
        }
      ];
    
      const bookRepository = jest.fn().mockReturnValue({
        getBookByTitle: jest.fn().mockReturnValue(bookList),
      });


        const service = new BookService(new bookRepository());
        const book = await service.getBookByTitle('The Hobbit');
        expect(book).toEqual(bookList);
    });
    it('should throw an error if book not found', async () => {
      const bookRepository = jest.fn().mockReturnValue({
        getBookByTitle: jest.fn().mockReturnValue(null),
      });

      const service = new BookService(new bookRepository());
      await expect(service.getBookByTitle('The Hobbit 2')).rejects.toThrow('Book not found.');
    });
  });
});