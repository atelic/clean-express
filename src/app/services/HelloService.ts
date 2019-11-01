import { CreateHelloRequest } from "../../web/models/request/CreateHelloRequest"
import { Hello } from "../entities/hello"
import { IHelloRepository } from "../interfaces/IHelloRepository"
import { IHelloService } from "../interfaces/IHelloService"

export class HelloService implements IHelloService {
  private helloRepo: IHelloRepository

  constructor(helloRepository: IHelloRepository) {
    this.helloRepo = helloRepository
  }

  public async getHellos() {
    return await this.helloRepo.getHellos()
  }

  public async createHello(hello: Hello) {
    return await this.helloRepo.createHello(hello)
  }
}
