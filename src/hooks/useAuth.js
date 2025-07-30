import { useState } from 'react';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (!loginForm.email || !loginForm.password) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginForm({ email: '', password: '' });
  };

  return {
    isLoggedIn,
    loginForm,
    setLoginForm,
    isLoading,
    handleLogin,
    handleLogout
  };
};