// UnathenticatedApp.jsx
import styled from '@emotion/styled';
import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import type { UnauthenticatedAppProps } from '../Interface';

const CustomLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  &:hover {

  }
`;
function UnauthenticatedApp({onLogin, onSignup}: UnauthenticatedAppProps) {
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowLogin(!showLogin);
  };
  return (
    <div>
      <h1>Welcome to Poke Collection</h1>
      {showLogin ? (
        <LoginForm onLogin={onLogin} />
      ) : (
        <SignupForm onSignup={onSignup} />
      )}
      <CustomLink onClick={handleClick}>
        {showLogin ? "Create Account" : "Log In"}
      </CustomLink>
    </div>
  )
}

export default UnauthenticatedApp;