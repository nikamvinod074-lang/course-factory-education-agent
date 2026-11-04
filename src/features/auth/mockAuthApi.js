let currentUser = null;
let registeredUser = null;
let storedPassword = null;

export const mockAuthApi = {
  async register({ name, email, password }) {
    if (registeredUser?.email === email) {
      throw new Error("Email is already registered.");
    }

    registeredUser = {
      id: "student-1",
      name,
      email,
      role: "student",
    };

    storedPassword = password;
    currentUser = registeredUser;

    return { user: currentUser };
  },

  async login({ email, password }) {
    if (
      !registeredUser ||
      registeredUser.email !== email ||
      storedPassword !== password
    ) {
      throw new Error("Invalid email or password.");
    }

    currentUser = registeredUser;
    return { user: currentUser };
  },

  async logout() {
    currentUser = null;
    return { success: true };
  },

  async getCurrentUser() {
    return { user: currentUser };
  },

  async changePassword({ currentPassword, newPassword }) {
    if (storedPassword !== currentPassword) {
      throw new Error("Current password is incorrect.");
    }

    storedPassword = newPassword;
    return { success: true };
  },
};