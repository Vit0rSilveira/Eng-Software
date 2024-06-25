import { Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useStore } from "../zustand/store";

const PrivateRoute = ({ Component }) => {
  const usuario = useStore((state) => state.usuario);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!usuario);
  }, [usuario]);

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;