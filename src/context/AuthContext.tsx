import { createContext, useContext, useEffect, useState } from "react";
import { createUser, getUser } from "../services";
import * as auth from "../services/Auth";
import type { CreateUserProp, Credentials, LoginResponse, User } from "../Interface";
import { tokenKey } from "../config";

const userInitials: LoginResponse = {
  token: '',
  user: {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
  }
}

const AuthContext = createContext<{
    user: LoginResponse | User | null; 
    login: (credentials: Credentials) => void; 
    signup: (userData: CreateUserProp) => void; 
    logout: () => void;
}>({
    user: userInitials,
    login: () => {},
    signup: () => {},
    logout: () => {}
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<LoginResponse | User | null>(userInitials);

  useEffect(() => {
    getUser().then(setUser).catch(console.log);
  }, []);

  function login(credentials: Credentials) {
    auth.Login(credentials).then(setUser).catch(console.log);
  }

  function signup(userData: CreateUserProp) {
    createUser(userData).then(setUser).catch(console.log);
  }

  function logout() {
    auth.Logout().then(() => sessionStorage.removeItem(tokenKey));
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{user, login, signup, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}
export { AuthProvider, useAuth };
