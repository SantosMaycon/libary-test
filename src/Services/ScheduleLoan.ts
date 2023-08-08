import ILoan from "../Interfaces/Entities/ILoan";
import IScheduleLoans from "../Interfaces/Services/IScheduleLoan";
import IBookRepository from "../Interfaces/Repositories/IBookRepository";
import ILoanRepository from "../Interfaces/Repositories/ILoanRepository";

export default class ScheduleLoan implements IScheduleLoans {
  constructor(private readonly loanRepository: ILoanRepository, private readonly bookRepository: IBookRepository) {
  }

  async perform(data: ILoan): Promise<ILoan | null> {
    // Verificar se o livro está disponível
    const book = await this.bookRepository.findById(data.bookId);

    if (!book) {
      return null;
    }

    if (book.available < 1) {
      return null;
    }

    // Verificar se o user esta fazendo empréstimo do mesmo livro
    const userLoans = await this.loanRepository.findBy('userId', data.userId);
    const userLoansWithSameBook = userLoans.filter(loan => loan.bookId === data.bookId);

    if (userLoansWithSameBook.length > 0) {
      return null;
    }

    // Verificar se o usuario tem algum empréstimo atrasado
    const userLoansWithLateReturnDate = userLoans.filter(loan => loan.returnDate < new Date());

    if (userLoansWithLateReturnDate.length > 0) {
      return null;
    }

    const loan = await this.loanRepository.create(data);

    // Diminuir a quantidade de livros disponíveis no banco de dados
      await this.bookRepository.update(data.bookId,{ available: book.available - 1 });

    return loan;
  }
}