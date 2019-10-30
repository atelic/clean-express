import {Hello} from "../../app/entities/hello";
import IHelloRepository from "../../app/interfaces/IHelloRepository";

export default class HelloRepository implements IHelloRepository {
    public async getHellos() {
        return Hello.query();
    }

    public async createHello(hello: Hello) {
        return Hello
            .query()
            .insert(hello);
    }
}
