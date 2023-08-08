import IBook from "../Entities/IBook";

export default interface IGetAvailableBooks {
  perform(): Promise<IBook[]>;
}