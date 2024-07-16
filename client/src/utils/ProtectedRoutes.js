import { Outlet, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProtectedRoutes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Use `null` to indicate loading state

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.post('http://localhost:8080/token-auth', {}, {
                    withCredentials: true,
                    headers: { 'Content-Type': 'application/json' },
                });
                console.log("Got response", response);

                if (response.status === 200) {
                    setIsAuthenticated(true); // Set authenticated state
                } else {
                    setIsAuthenticated(false); // Handle non-200 status codes
                }
            } catch (error) {
                console.log("Protected Routes Error: ", error);
                setIsAuthenticated(false); // Set unauthenticated state on error
            }
        };

        checkAuth(); // Call the authentication check function
    }, []); // Dependency array is empty to run once on mount

    // Handle loading state while checking authentication
    if (isAuthenticated === null) {
        return <div>Loading...</div>; // Or a spinner
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
