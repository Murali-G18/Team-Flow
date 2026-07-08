import {
  createContext,
  useContext,
  useState,
} from "react";

interface AuthContextType {
  user: string | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext =
  createContext<AuthContextType>(null!);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [user, setUser] = useState(
    localStorage.getItem("user")
  );

  const login = (
    email: string,
    password: string
  ) => {

    if (
      email === "admin@teamflow.com" &&
      password === "admin123"
    ) {
      localStorage.setItem("user", email);
      setUser(email);
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () =>
  useContext(AuthContext);