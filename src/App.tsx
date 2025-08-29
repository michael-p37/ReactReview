import { useEffect, useState } from "react";
import type { CreateUserProp, Credentials, User } from "./Interface";
import { createUser, getUser, Login } from "./services";
import AuthenticatedApp from "./Authentication/AuthenticatedApp";
import UnauthenticatedApp from "./Authentication/UnathenticatedApp";

function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    getUser()
      .then((u) => setUser(u))
      .catch((error) => console.log(error));
  }, []);
  
  function handleLogin(credentials: Credentials) {
   Login(credentials)
      .then((u) => {
        sessionStorage.setItem("token", u.token)
        setUser(u.user);
      })
      
      .catch((error) => console.log(error));
  }
  function handleSignup(userData: CreateUserProp) {
    createUser(userData)
      .then((u) => {
        console.log("Usuario creado:", u);
        setUser(u)
      })
      .catch((error) => {
        console.log(error.message) 
      });
      
  }

 return user ? (
    <AuthenticatedApp />
  ) : (
    <UnauthenticatedApp onLogin={ handleLogin } onSignup={ handleSignup } />
  );
}

export default App;
