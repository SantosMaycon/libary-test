import { v4 as uuid } from 'uuid';

export default class Entity {
  private id: string;

  constructor() {
    this.id = uuid();
  }

  public getId(): string {
    return this.id;
  }
}