import { createContext } from "react";
import type { CreateUserProp, Credentials, LoginResponse, User } from "../Interface";
import { userInitials } from "./initiales";

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

export { AuthContext };
