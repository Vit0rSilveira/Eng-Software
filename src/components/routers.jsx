import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from '../pages/home.jsx'
import Cadastro from '../pages/cadastro';
import Voluntariado from '../pages/voluntariado';
import Login from '../pages/login';
import CRUD_Conta from '../pages/crud-conta';
import Info from '../pages/info';



function Destiny () {
    return (
        <Routes>
            <Route exact path = "/" element = { <Home/> } />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path='/voluntariado' element={<Voluntariado/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/crud-conta' element={<CRUD_Conta/>}/>
            <Route path='/info' element={<Info/>}/>
        </Routes>
    )
}

export default Destiny;