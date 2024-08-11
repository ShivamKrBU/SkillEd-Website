import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
    const { isAuthenticated } = useSelector((state) => state.user);
    return isAuthenticated ? <Outlet /> : <Navigate to="/signIn" />;
};

export default PrivateRoute;