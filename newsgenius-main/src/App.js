import React, { useState, useMemo } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Button, CssBaseline, Box } from '@mui/material';
import LoginSignup from "./Components/Authentication/LoginSignup";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Profile from './Components/Profile/Profile';
import Explore from './Components/Explore/Explore';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const muiTheme = useMemo(() => createTheme({
    palette: {
      mode: theme === 'light' ? 'light' : 'dark',
    },
  }), [theme]);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className="App">
        <div style={{ position: 'absolute', top: 16, right: 16 }}>
          <Button 
            variant="contained" 
            onClick={() => navigate('/auth')}
          >
            Login/Signup
          </Button>
        </div>
        
        <Box component="main">
          <Routes>
            <Route path="/" element={<HomePage theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="/auth" element={<LoginSignup />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/explore" element={<Explore theme={theme} toggleTheme={toggleTheme} />} />
            {/* Add other routes here */}
          </Routes>
        </Box>
      </div>
    </ThemeProvider>
  );
}


export default App;
