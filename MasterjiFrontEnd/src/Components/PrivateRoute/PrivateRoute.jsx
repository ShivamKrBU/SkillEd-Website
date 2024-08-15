import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    const token = localStorage.getItem('token'); // Retrieve the token from local storage
    const isAuthenticated = !!token; // Check if the token exists

    return isAuthenticated ? <Outlet /> : <Navigate to="/signIn" />;
};

export default PrivateRoute;
