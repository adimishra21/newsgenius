import React, { useState, useContext } from 'react';
import { TextField, Button } from '@mui/material';
import { AuthContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { googleSignupStart } from '../../redux/slices/authSlice';
import { GoogleLogin } from '@react-oauth/google';



const Signup = ({ setShowLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

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
      
      setShowLogin(true);

    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };


  const dispatch = useDispatch();

  const handleGoogleSuccess = (credentialResponse) => {
    dispatch(googleSignupStart(credentialResponse));
  };

  const handleGoogleError = () => {
    console.log('Google Signup failed');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError}
        text="signup_with"
        shape="rectangular"
        size="large"
        width="100%"
      />
      <div className="flex items-center justify-center my-4">
        <div className="border-t border-gray-300 flex-grow"></div>
        <span className="mx-4 text-gray-500">OR</span>
        <div className="border-t border-gray-300 flex-grow"></div>
      </div>

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
      <TextField
        fullWidth
        label="Confirm Password"
        type="password"
        variant="outlined"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        type="submit"
        disabled={!email || !password || !confirmPassword}
      >
        Sign Up
      </Button>

      <Button
        fullWidth
        variant="text"
        onClick={() => setShowLogin(true)}
      >
        Already have an account? Login
      </Button>
    </form>
  );
};

export default Signup;
