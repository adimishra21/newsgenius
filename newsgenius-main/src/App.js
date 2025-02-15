import React, { useState, useMemo, createContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Button, CssBaseline, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginSignup from "./Components/Authentication/LoginSignup";
import HomePage from "./Components/HomePage/HomePage";
import Profile from './Components/Profile/Profile';
import Explore from './Components/Explore/Explore';
import "./App.css";

export const AuthContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (userData) => {
    setUser(userData);
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    navigate('/auth');
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const muiTheme = useMemo(() => createTheme({
    palette: {
      mode: theme === 'light' ? 'light' : 'dark',
    },
  }), [theme]);

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Provider store={store}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
      <div className="App">
        <div style={{ position: 'absolute', top: 16, right: 16 }}>
          {user ? (
            <Button 
              variant="contained" 
              onClick={logout}
            >
              Logout
            </Button>
          ) : (
            <Button 
              variant="contained" 
              onClick={() => navigate('/auth')}
            >
              Login/Signup
            </Button>
          )}
        </div>
        
        <Box component="main">
          <AuthContext.Provider value={{ user, login }}>
            <Routes>
              <Route path="/" element={<HomePage theme={theme} toggleTheme={toggleTheme} />} />
              <Route path="/auth" element={<LoginSignup />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/explore" element={<Explore theme={theme} toggleTheme={toggleTheme} />} />
            {/* Add other routes here */}
          </Routes>
          </AuthContext.Provider>
        </Box>
          </div>
        </ThemeProvider>
      </Provider>
    </GoogleOAuthProvider>
  );
}


export default App;
