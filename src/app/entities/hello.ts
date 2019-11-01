import { Model } from "objection";

export class Hello extends Model {
  public readonly id!: number;
  public message: string;
  public author: string;

  static get tableName() {
    return "hello";
  }
}
