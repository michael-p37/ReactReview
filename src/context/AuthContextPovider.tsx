import { useEffect, useState } from "react";
import * as auth from "../services/Auth";
import type { CreateUserProp, Credentials, LoginResponse, User } from "../Interface";
import { createUser, getUser } from "../services";
import { tokenKey } from "../config";
import { AuthContext } from "./AuthContext";
import { userInitials } from "./initiales";

export function AuthProvider({ children }: { children: React.ReactNode }) {
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
