import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Authentication from "./Components/Authentication/Authentication";
import PostCard from './Components/HomeSection/PostCard';

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };


  return (
    <div className={`app ${theme}`}>
      <Routes>
        <Route
          path="/*"
          element={
            true ? (
              <HomePage theme={theme} toggleTheme={toggleTheme} />
            ) : (
              <Authentication />
            )
          }
        />
      </Routes>

      {/* PostCard Component */}
      <div className="lg:hidden">
        <PostCard />
      </div>

      {/* Explorer Button and Components */}
      <div className="top-left-container">
       
      </div>
    </div>

    
  );
}

export default App;