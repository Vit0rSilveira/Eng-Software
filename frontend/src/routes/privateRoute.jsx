import { Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useStore } from "../zustand/store";

const PrivateRoute = ({ Component }) => {
 
const [isAuthenticated, setIsAuthenticated] = useState(false);

 // Your authentication logic goes here...
  const usuario = useStore((state) => state.usuario)

  console.log("Usuario", usuario)


  if (usuario !== undefined){
    console.log("Caiu no if")
    return <Component />
  } 
  console.log("Nao caiu no if")
    return <Navigate to="/login" />
    
 
  // return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;