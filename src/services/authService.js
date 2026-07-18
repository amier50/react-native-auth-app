import {
  getUsers,
  saveUsers,
  saveCurrentUser,
  clearCurrentUser,
} from "../storage/authStorage";

export const signup = async (name, email, password) => {
  try {
    const users = await getUsers();

    const emailExists = users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (emailExists) {
      return {
        success: false,
        message: "Email already exists.",
      };
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
    };

    users.push(newUser);

    await saveUsers(users);
    await saveCurrentUser(newUser);

    return {
      success: true,
      user: newUser,
    };
  } catch (error) {
    return {
      success: false,
      message: "Unable to create account.",
    };
  }
};

export const login = async (email, password) => {
  try {
    const users = await getUsers();

    const user = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password
    );

    if (!user) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    await saveCurrentUser(user);

    return {
      success: true,
      user,
    };
  } catch (error) {
    return {
      success: false,
      message: "Unable to login.",
    };
  }
};

export const logout = async () => {
  await clearCurrentUser();

  return {
    success: true,
  };
};