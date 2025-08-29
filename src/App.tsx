import { useEffect, useState } from "react";
import type { User } from "./Interface";
import { getUser } from "./services";
import AuthenticatedApp from "./Authentication/AuthenticatedApp";
import UnauthenticatedApp from "./Authentication/UnathenticatedApp";
// import { tokenKey } from "./config";

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUser()
      .then((u) => setUser(u))
      .catch((error) => console.log(error));
  }, []);
  
 return user ? (
    <AuthenticatedApp />
  ) : (
    <UnauthenticatedApp />
  );
}

export default App;
