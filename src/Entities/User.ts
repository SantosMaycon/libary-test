import bcrypt from "bcrypt";
import Entity from "./Entity";


export default class User extends Entity {
  private login: string;
  private password: string;

  constructor(login: string, password: string) {
    super();
    this.login = login;
    this.password = this.encriptPassword(password);
  }

  public getLogin(): string {
    return this.login;
  }

  public getPassword(): string {
    return this.password;
  }

  private encriptPassword(password: string): string {
    return bcrypt.hashSync(password, 10);
  }

  public checkPassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }
}
