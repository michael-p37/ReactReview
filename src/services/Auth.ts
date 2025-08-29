import { tokenKey } from "../config";
import type { Credentials, LoginResponse } from "../Interface";
import apiFetch from "./ApiFetch";

export function Login(credentials: Credentials) {
  return apiFetch<LoginResponse>("/login", { body: credentials }).then((u) => {
    sessionStorage.setItem(tokenKey, u.token);
    return u;
  });
}

export function Logout() {
    return apiFetch("/logout", { method: "DELETE"})
}
