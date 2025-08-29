import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
// import { Global } from '@emotion/react'
// import {global, reset} from './styles'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Global styles={reset}/>
    <Global styles={global}/> */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
