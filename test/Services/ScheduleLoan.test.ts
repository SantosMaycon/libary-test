import IBook from "../../src/Interfaces/Entities/IBook";
import ILoan from "../../src/Interfaces/Entities/ILoan";
import BookRepositoryInMemory from "../../src/Repositories/in-memory/BookRepositoryInMemory";
import LoanRepositoryInMemory from "../../src/Repositories/in-memory/LoanRepositoryInMemory";
import ScheduleLoan from "../../src/Services/ScheduleLoan";

describe('ScheduleLoan', () => {
  const loanObj: ILoan = {
    id: '1',
    bookId: '1',
    userId: '1',
    loanDate: new Date(),
    returnDate: new Date(),
  }

  const bookObj: IBook = {
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
    available: 1,
  }

  let loanRepositoryWithLoan: LoanRepositoryInMemory;
  let bookRepositoryWithBook: BookRepositoryInMemory;

  beforeEach(() => {
    loanRepositoryWithLoan = new LoanRepositoryInMemory();
    loanRepositoryWithLoan.create(loanObj);
    loanRepositoryWithLoan.create({ ...loanObj, id: '2', bookId: '2', userId: '2' });

    bookRepositoryWithBook = new BookRepositoryInMemory();
    bookRepositoryWithBook.create(bookObj);
  });

  describe('perform', () => {
    it('should schedule a loan', async () => {
      const loanRepository = new LoanRepositoryInMemory();
      const bookRepository = new BookRepositoryInMemory();
      bookRepository.create(bookObj);

      const service = new ScheduleLoan(loanRepository, bookRepository);
      const loan = await service.perform(loanObj);
      expect(loan).toBeTruthy();
    });

    it('should return null if book id do not find', async () => {
      const service = new ScheduleLoan(loanRepositoryWithLoan, bookRepositoryWithBook);
      const loan = await service.perform({ ...loanObj, bookId: '99' });
      expect(loan).toBeNull();
    });


    it('should return null if book is not available', async () => {

      const service = new ScheduleLoan(loanRepositoryWithLoan, bookRepositoryWithBook);
      const loan = await service.perform({ ...loanObj, bookId: '1' });
      expect(loan).toBeNull();
    });

    it('should return null if user already has the book', async () => {
      const service = new ScheduleLoan(loanRepositoryWithLoan, bookRepositoryWithBook);
      const loan = await service.perform(loanObj);
      expect(loan).toBeNull();
    });

    it('should return null if user has a late return date', async () => {
      const loanRepository = new LoanRepositoryInMemory();
      loanRepository.create({ ...loanObj, id: '3', bookId: '99', userId: '1', returnDate: new Date('2021-01-01') });

      const service = new ScheduleLoan(loanRepository, bookRepositoryWithBook);
      const loan = await service.perform(loanObj);
      expect(loan).toBeNull();
    });

    it('should return null if scheduled book availability is less than 1', async () => {
      const bookRepository = new BookRepositoryInMemory();
      bookRepository.create({ ...bookObj, id: '2', available: 0 });

      const service = new ScheduleLoan(loanRepositoryWithLoan, bookRepository);
      const loan = await service.perform({ ...loanObj, bookId: '2'});
      expect(loan).toBeNull();
    });
  });
});