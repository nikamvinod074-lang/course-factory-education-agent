
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { authApi } from "./authApi";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    authApi
      .getCurrentUser()
      .then((result) => {
        if (active) {
          setUser(result.user);
        }
      })
      .catch(() => {
        if (active) {
          setUser(null);
        }
      })
      .finally(() => {
        if (active) {
          setIsLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  async function register(data) {
    const result = await authApi.register(data);
    setUser(result.user);
    return result;
  }

  async function login(data) {
    const result = await authApi.login(data);
    setUser(result.user);
    return result;
  }

  async function logout() {
    await authApi.logout();
    setUser(null);
  }

  const value = {
    user,
    isLoading,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}
