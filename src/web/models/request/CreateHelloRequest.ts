import {Hello} from "../../../app/entities/hello";

export default class CreateHelloRequest {
    public message: string;
    public author?: string;

    constructor({message, author}: {message: string; author?: string}) {
        this.message = message;
        this.author = author;
    }

    public validate() {
        let errors = null;
        if (!this.message) {
            errors = {
                message: "Message must exist."
            };
        }
        return errors;
    }

    public toModel() {
        const model = new Hello();
        model.message = this.message;
        model.author = this.author;

        return model;
    }
}
