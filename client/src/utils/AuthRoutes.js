import { Outlet, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuthRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // null to distinguish between loading and state

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const resp = await axios.post('http://localhost:8080/token-auth', {}, {
                    withCredentials: true,
                }); // API call to check token
                console.log("PublicRoutes Response:", resp);
                setIsAuthenticated(true); // User is authenticated
            } catch (error) {
                console.log("Error in PublicRoutes:", error);
                setIsAuthenticated(false); // User is not authenticated
            }
        };
        checkAuth();
    }, []);

    if (isAuthenticated === null) {
        return <div>Loading...</div>; // or a spinner
    }

    return !isAuthenticated ? <Outlet /> : <Navigate to="/mediaKits" />;
};

export default AuthRoute;
