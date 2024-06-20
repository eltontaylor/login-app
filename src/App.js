// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';
import Home from './Home';
import Profile from './Profile';
import Success from './Success';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/success" element={<Success />} />
        </Routes>
        <LoginButton />
        <LogoutButton />
      </Auth0ProviderWithHistory>
    </Router>
  );
};

export default App;
