const UserService = require("../src/user/UserService");

describe("UserService – Unit Tests", () => {
  let userRepositoryMock;
  let userService;

  beforeEach(() => {
    userRepositoryMock = {
      findByEmail: jest.fn(),
      save: jest.fn()
    };

    userService = new UserService(userRepositoryMock);
  });

  describe("validateUsername()", () => {
    test("throws error when username is empty", () => {
      expect(() => {
        userService.validateUsername("");
      }).toThrow("Username must not be empty");
    });

    test("does not throw when username is valid", () => {
      expect(() => {
        userService.validateUsername("Max");
      }).not.toThrow();
    });
  });

  describe("validateEmail()", () => {
    test("throws error when email is invalid", () => {
      expect(() => {
        userService.validateEmail("invalid");
      }).toThrow("Email is invalid");
    });

    test("does not throw when email is valid", () => {
      expect(() => {
        userService.validateEmail("max@test.com");
      }).not.toThrow();
    });
  });

  describe("createUser()", () => {
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
});
