import CreateHelloRequest from "../../web/models/request/CreateHelloRequest";
import {Hello} from "../entities/hello";

export default interface IHelloRepository {
    getHellos(): Promise<Hello[]>;
    createHello(hello: Hello): Promise<Hello>;
}
