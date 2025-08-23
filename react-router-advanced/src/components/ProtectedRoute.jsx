import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = false; // Simulate authentication status

const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;