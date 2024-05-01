import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from '../pages/home.jsx'
import Cadastro from '../pages/cadastro';
import Voluntariado from '../pages/voluntariado';
import Login from '../pages/login';



function Destiny () {
    return (
        <Routes>
            <Route exact path = "/" element = { <Home/> } />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path='/voluntariado' element={<Voluntariado/>}/>
            <Route path='/login' element={<Login/>}/>
            {/* <Route path='/crud-conta' element={<CRUD_Conta/>}/> */}
        </Routes>
    )
}

export default Destiny;