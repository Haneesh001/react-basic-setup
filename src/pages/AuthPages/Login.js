import React from 'react';
import LoginForm from '../../components/auth/LoginForm';

const Login = () => {
  const handleLogin = (credentials) => {
    // Add authentication logic here (e.g., API call, user authentication)
    console.log('Logging in with:', credentials);
    // Redirect or perform necessary actions after successful login
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;
