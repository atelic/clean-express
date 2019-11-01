import { Hello } from "../../src/app/entities/hello";

export const clearHellos = async (done: Function) => {
  await Hello.query().delete();
  done();
};
