import { Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useStore } from "../zustand/store";

const PrivateRoute = ({ Component }) => {
 
const [isAuthenticated, setIsAuthenticated] = useState(false);

  const usuario = useStore((state) => state.usuario)

  console.log("Usuario", usuario)
    
  return <Component />
  //return usuario ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;