import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Nav from './components/Nav';

// Define the type of props
type AppProps = {
  // Add any specific properties your component expects
};

const App: React.FC<AppProps> = (props) => {
  // Example: Define login and signup functions
  const handleLogin = (name: string) => {
    // Your login logic here
    console.log(`Logging in as ${name}`);
  };

  const handleSignup = (name: string) => {
    // Your signup logic here
    console.log(`Signing up as ${name}`);
  };

  return (
    <Router>
      <Nav onLogin={handleLogin} onSignup={handleSignup} />
      <Routes>
        <Route path="/" element={<Home {...props} />} />
        {/* <Route path="/auth/:form" element={<Auth {...props} />} /> */}
        <Route path="/dashboard" element={<Dashboard {...props} />} />
      </Routes>
    </Router>
  );
};

export default App;



