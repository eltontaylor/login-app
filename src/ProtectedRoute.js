// src/ProtectedRoute.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation, Navigate } from 'react-router-dom';
import Loading from './Loading';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const location = useLocation();

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
