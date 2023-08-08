import ILoan from "../Entities/ILoan";

export default interface IScheduleLoan {
  perform(data: ILoan): Promise<ILoan | null>;
}