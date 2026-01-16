const UserService = require("./user/UserService");

const userRepository = {
  findByEmail: (email) => null,
  save: (user) => {
    console.log("User gespeichert:", user);
  }
};

const userService = new UserService(userRepository);

try {
  const result = userService.createUser({
    username: "Louis",
    email: "louis@test.com"
  });

  console.log("Ergebnis:", result);
} catch (error) {
  console.error("Fehler:", error.message);
}
