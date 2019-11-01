import { IHelloRepository } from "../../app/interfaces/IHelloRepository"
import { IHelloService } from "../../app/interfaces/IHelloService"
import { HelloService } from "../../app/services/HelloService"
import { HelloRepository } from "../../infra/repositories/HelloRepository"

const helloRepo: IHelloRepository = new HelloRepository()

export const helloService: IHelloService = new HelloService(helloRepo)
