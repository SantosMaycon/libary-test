import IBook from "../Entities/IBook";
import IRepository from "./IRepository";

export default interface IBookRepository extends IRepository<IBook> {
}
