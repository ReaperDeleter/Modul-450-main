class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  createUser(user) {
    this.validateUsername(user.username);
    this.validateEmail(user.email);

    const existingUser = this.userRepository.findByEmail(user.email);
    if (existingUser) {
      throw new Error("User already exists");
    }

    this.userRepository.save(user);
    return { success: true };
  }

  validateUsername(username) {
    if (!username || username.trim() === "") {
      throw new Error("Username must not be empty");
    }
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Email is invalid");
    }
  }
}

module.exports = UserService;
