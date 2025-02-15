import React, { useState, useContext } from 'react';
import { TextField, Button } from '@mui/material';
import { AuthContext } from '../../App';
import { useNavigate } from 'react-router-dom';


const Login = ({ setShowLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      // Simulate API call
      const response = await new Promise((resolve) => 
        setTimeout(() => resolve({
          data: {
            user: {
              name: email.split('@')[0], // Use email prefix as name
              email: email
            }
          }
        }), 500)
      );
      
      login(response.data.user);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    }
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
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        type="submit"
        disabled={!email || !password}
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
