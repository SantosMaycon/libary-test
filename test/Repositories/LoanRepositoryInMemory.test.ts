import ILoan from "../../src/Interfaces/Entities/ILoan";
import LoanRepositoryInMemory from "../../src/Repositories/in-memory/LoanRepositoryInMemory";

describe('LoanRepositoryInMemory', () => {
  const obj: ILoan = {
    id: '1',
    bookId: '1',
    userId: '1',
    loanDate: new Date(),
    returnDate: new Date(),
  }

  let repositoryWithLoan: LoanRepositoryInMemory;

  beforeEach(() => {
    repositoryWithLoan = new LoanRepositoryInMemory();
    repositoryWithLoan.create(obj);
  });

  describe('createLoan', () => {
    it('should create a loan', async () => {
      const repository = new LoanRepositoryInMemory();
      const loan = await repository.create(obj);
      expect(loan).toEqual(obj);
    });

    it('should return null if loan already exists', async () => {
      await repositoryWithLoan.create(obj);
      const loan = await repositoryWithLoan.create(obj);
      expect(loan).toBeNull();
    });
  });

  describe('findLoans', () => {
    it('should return a list of loans', async () => {
      const loanList = await repositoryWithLoan.findAll();
      expect(loanList).toEqual([obj]);
    });
  
    it('should return an empty loanlist', async () => {
      const repository = new LoanRepositoryInMemory();
      const loanList = await repository.findAll();
      expect(loanList).toEqual([]);
    });
  });

  describe('findLoanById', () => {
    it('should return a loan by id', async () => {
      const loan = await repositoryWithLoan.findById('1');
      expect(loan).toEqual(obj);
    });

    it('should return null if loan does not exist', async () => {
      const loan = await repositoryWithLoan.findById('2');
      expect(loan).toBeNull();
    });
  });

  describe('findLoanByBookId', () => {
    it('should return a loan by book id', async () => {
      const loan = await repositoryWithLoan.findBy('bookId', '1');
      expect(loan).toEqual([obj]);
    });

    it('should return an empty loanlist if loan does not exist', async () => {
      const loan = await repositoryWithLoan.findBy('bookId', '2');
      expect(loan).toEqual([]);
    });
  });

  describe('findLoanByUserId', () => {
    it('should return a loan by user id', async () => {
      const loan = await repositoryWithLoan.findBy('userId', '1');
      expect(loan).toEqual([obj]);
    });

    it('should return an empty loanlist if loan does not exist', async () => {
      const loan = await repositoryWithLoan.findBy('userId', '2');
      expect(loan).toEqual([]);
    });
  });

  describe('updateLoan', () => {
    it('should update a loan', async () => {
      const loan = await repositoryWithLoan.update('1', obj);
      expect(loan).toEqual(obj);
    });

    it('should return null if loan does not exist', async () => {
      const loan = await repositoryWithLoan.update('2', obj);
      expect(loan).toBeNull();
    });
  });

  describe('deleteLoan', () => {
    it('should delete a loan', async () => {
      const loan = await repositoryWithLoan.delete('1');
      expect(loan).toEqual(obj);
    });

    it('should return null if loan does not exist', async () => {
      const loan = await repositoryWithLoan.delete('2');
      expect(loan).toBeNull();
    });
  });
});
