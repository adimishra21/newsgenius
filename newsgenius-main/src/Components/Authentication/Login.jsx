import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Login = ({ setShowLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        type="submit"
      >
        Login
      </Button>
      <Button
        fullWidth
        variant="text"
        onClick={() => setShowLogin(false)}
      >
        Don't have an account? Sign up
      </Button>
    </form>
  );
};

export default Login;
