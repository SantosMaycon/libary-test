import ILoan from "../../Interfaces/Entities/ILoan";
import ILoanRepository from "../../Interfaces/Repositories/ILoanRepository";

export default class LoanRepositoryInMemory implements ILoanRepository {
  private loans: ILoan[] = [];

  async create(loan: ILoan): Promise<ILoan | null> {
    if(this.loans.find(loan => loan.bookId === loan.bookId && loan.userId === loan.userId)) {
      return null;
    }

    this.loans.push(loan);
    return loan;
  }

  async findAll(): Promise<ILoan[]> {
    return this.loans;
  }

  async findById(id: string): Promise<ILoan | null> {
    const loan = this.loans.find(loan => loan.id === id);
    return loan || null;
  }

  async findBy(field: keyof ILoan, value: any): Promise<ILoan[]> {
    const loans = this.loans.filter(loan => loan[field] === value);
    return loans;
  }

  async update(id: string, data: Partial<ILoan>): Promise<ILoan | null> {
    const loan = await this.findById(id);
    if (!loan) return null;
    Object.assign(loan, data);
    return loan;
  }

  async delete(id: string): Promise<ILoan | null> {
    const loan = await this.findById(id);
    if (!loan) return null;
    this.loans = this.loans.filter(loan => loan.id !== id);
    return loan;
  }
}