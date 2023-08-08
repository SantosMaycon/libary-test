import IGetAvailableBooksController from "../Interfaces/Controllers/IGetAvailableBooksController";
import IGetAvailableBooks from "../Interfaces/Services/IGetAvailableBooks";



export default class GetAvailableBooks implements IGetAvailableBooksController {
  private service: IGetAvailableBooks

  constructor(service: IGetAvailableBooks) {
    this.service = service
  }

  async handler(request: Request, response: Response) {
    const books = await this.service.perform()
    return response.json()
  }
}