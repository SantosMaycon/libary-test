import ILoan from "../Entities/ILoan";

export default interface IGetListOfScheduledBooksByUser {
  perform(id: string): Promise<ILoan[]>;
}