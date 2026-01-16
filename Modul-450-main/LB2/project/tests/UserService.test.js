const UserService = require("../src/user/UserService");

describe("UserService", () => {
  let userRepositoryMock;
  let userService;

  beforeEach(() => {
    userRepositoryMock = {
      findByEmail: jest.fn(),
      save: jest.fn()
    };

    userService = new UserService(userRepositoryMock);
  });

  test("throws error when username is empty", () => {
    expect(() => {
      userService.createUser({ username: "", email: "test@test.com" });
    }).toThrow("Username must not be empty");

    expect(userRepositoryMock.save).not.toHaveBeenCalled();
  });

  test("throws error when email is invalid", () => {
    expect(() => {
      userService.createUser({ username: "Max", email: "invalid" });
    }).toThrow("Email is invalid");

    expect(userRepositoryMock.save).not.toHaveBeenCalled();
  });

  test("creates user when data is valid", () => {
    userRepositoryMock.findByEmail.mockReturnValue(null);

    const result = userService.createUser({
      username: "Max",
      email: "max@test.com"
    });

    expect(userRepositoryMock.save).toHaveBeenCalledTimes(1);
    expect(result).toEqual({ success: true });
  });

  test("throws error when user already exists", () => {
    userRepositoryMock.findByEmail.mockReturnValue({});

    expect(() => {
      userService.createUser({
        username: "Max",
        email: "max@test.com"
      });
    }).toThrow("User already exists");

    expect(userRepositoryMock.save).not.toHaveBeenCalled();
  });
});
