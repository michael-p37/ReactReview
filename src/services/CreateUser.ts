import { tokenKey } from "../config";
import type { CreateUserProp, CreateUserResponse, User} from "../Interface";
import apiFetch from "./ApiFetch";

export function createUser(userData: CreateUserProp) {
  return apiFetch<CreateUserResponse>("/signup", { body: userData })
  .then(u => {
    const {token, user: apiUser} = u;
    sessionStorage.setItem(tokenKey, token);
      const adaptedUser: User = {
        id: apiUser.id,
        email: apiUser.email,
        first_name: apiUser.first_name,
        last_name: apiUser.last_name,
      };

    return adaptedUser;
  })
}
export function getUser() {
  return apiFetch<User>("/profile")
  .then(u => {;
    return u;
  })
}