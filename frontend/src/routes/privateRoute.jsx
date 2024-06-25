import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';

const PrivateRoute = ({ Component }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const auth = Cookies.get('auth');
        setIsAuthenticated(!!auth);
    }, []);

    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;