import ILoan from "../Interfaces/Entities/ILoan";
import ILoanRepository from "../Interfaces/Repositories/ILoanRepository";
import IGetListOfScheduledBooksByUser from "../Interfaces/Services/IGetListOfScheduledBooksByUser";

export default class GetListOfScheduledBooksByUser implements IGetListOfScheduledBooksByUser {
  constructor(private readonly loanRepository: ILoanRepository) {
  }
  async perform(id: string): Promise<ILoan[]> {
    const loans =  await this.loanRepository.findBy('userId', id)

    // Pegar todos os livros que a data de devolução é maior que a data atual
    const loansWithReturnDateGreaterThanToday = loans.filter(loan => loan.returnDate > new Date());

    return loansWithReturnDateGreaterThanToday;
  }
}