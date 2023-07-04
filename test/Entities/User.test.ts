import { validate } from 'uuid';
import User from '../../src/Entities/User';

describe("User", () => {
  const login = "test";
  const password = "password";

  it("should create a new user", () => {
    const user = new User(login, password);
    expect(user.getLogin()).toBe(login);
    expect(user.getPassword()).not.toBe(password);
  });

  it("should check password", () => {
    const user = new User(login, password);
    expect(user.checkPassword(password)).toBeTruthy();
  });

  it("should have an id in uuid format", () => {
    const id = new User(login, password).getId();
    expect(validate(id)).toBeTruthy();
  });

  it("should have a different id", () => {
    const id1 = new User(login, password).getId();
    const id2 = new User(login, password).getId();
    expect(id1).not.toBe(id2);
  });
});
