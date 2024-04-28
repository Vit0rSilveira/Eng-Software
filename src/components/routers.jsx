import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from '../pages/home.jsx'



function Destiny () {
    return (
        <Routes>
            <Route exat path = "/" element = { <Home/> } />
        </Routes>
    )
}

export default Destiny;