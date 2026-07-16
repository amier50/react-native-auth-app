import React, {
  createContext,
  useEffect,
  useState,
} from "react";
import {
  login as loginService,
  signup as signupService,
  logout as logoutService,
} from "../services/authService";
import {
  getCurrentUser,
} from "../storage/authStorage";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const currentUser = await getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
    setLoading(false);
  };

  const signup = async (name, email, password) => {
    const result = await signupService(name, email, password);
    return result;
  };

  const login = async (email, password) => {
    const result = await loginService(email, password);
    if (result.success) {
      setUser(result.user);
    }
    return result;
  };

  const logout = async () => {
    await logoutService();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}