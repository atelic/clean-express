import { CreateHelloRequest } from "../../web/models/request/CreateHelloRequest"
import { Hello } from "../entities/hello"

export interface IHelloService {
  getHellos(): Promise<Hello[]>
  createHello(hello: Hello): Promise<Hello>
}
