import ILoan from "../../src/Interfaces/Entities/ILoan";
import ILoanRepository from "../../src/Interfaces/Repositories/ILoanRepository";
import LoanRepositoryInMemory from "../../src/Repositories/in-memory/LoanRepositoryInMemory";
import GetListOfScheduledBooksByUser from "../../src/Services/GetListOfScheduledBooksByUser";

describe('GetListOfScheduledBooksByUser', () => {

  // Com data de retorno maior que a data atual
  const laonList: ILoan[] = [
    {
      id: '1',
      userId: '1',
      bookId: '1',
      loanDate: new Date(),
      returnDate: new Date('2030-10-10'),
    },
    {
      id: '2',
      userId: '1',
      bookId: '2',
      loanDate: new Date(),
      returnDate: new Date('2030-10-10'),
    },
    {
      id: '3',
      userId: '1',
      bookId: '3',
      loanDate: new Date(),
      returnDate: new Date('2030-10-10'),
    },
  ];
  

  let repositoryWithLoan: ILoanRepository;

  beforeEach(() => {
    repositoryWithLoan = new LoanRepositoryInMemory();
  });


  describe('perform', () => {
    it('should return a list of books', async () => {
      const service = new GetListOfScheduledBooksByUser(repositoryWithLoan);
      const bookList = await service.perform('1');
      
      expect(bookList).toBeTruthy();
    });
    
    it('should return an empty booklist', async () => {
      const service = new GetListOfScheduledBooksByUser(repositoryWithLoan);
      const bookList = await service.perform('4');
      expect(bookList).toEqual([]);
    });
  });
});