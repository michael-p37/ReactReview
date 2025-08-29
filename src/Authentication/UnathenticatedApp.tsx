// UnathenticatedApp.jsx
import styled from '@emotion/styled';
import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const CustomLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    
  }
`;
function UnauthenticatedApp() {
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowLogin(!showLogin);
  };
  return (
    <div>
      <h1>Welcome to Poke Collection</h1>
      {showLogin ? (
        <LoginForm />
      ) : (
        <SignupForm />
      )}
      <CustomLink onClick={handleClick}>
        {showLogin ? "Create Account" : "Log In"}
      </CustomLink>
    </div>
  )
}

export default UnauthenticatedApp;