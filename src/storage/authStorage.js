import AsyncStorage from "@react-native-async-storage/async-storage";

const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";

export const getUsers = async () => {
  const users = await AsyncStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

export const saveUsers = async (users) => {
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const getCurrentUser = async () => {
  const user = await AsyncStorage.getItem(CURRENT_USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const saveCurrentUser = async (user) => {
  await AsyncStorage.setItem(
    CURRENT_USER_KEY,
    JSON.stringify(user)
  );
};

export const clearCurrentUser = async () => {
  await AsyncStorage.removeItem(CURRENT_USER_KEY);
};