import { tokenKey } from "../config";
import type {  Credentials, LoginResponse } from "../Interface";
import apiFetch from "./ApiFetch";
export function Login(credentials: Credentials) {
return apiFetch<LoginResponse>("/login", {body: credentials})
.then(u => {
    console.log("Respuesta del login:", u); // 👈 aquí vemos la respuesta real
    sessionStorage.setItem(tokenKey, u.token);
    return u;
})
}
// return apiFetch<LoginResponse>("/login", {
// method: "POST",
// headers: {
// "Content-Type": "application/json"
// },
// body: JSON.stringify(credentials),
// }).then(u => {
// sessionStorage.setItem(tokenKey, u.token);
// return u;
// });
