import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
const LoginForm = ({ onLogin }) => {
    const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here if needed

    // Call the onLogin prop with the entered credentials
    onLogin({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
      {t('login.username')}: 
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
      {t('login.password')}: 
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">{t('login.button')}</button>
    </form>
  );
};

export default LoginForm;
