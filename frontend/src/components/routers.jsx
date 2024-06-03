import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from '../pages/home.jsx'
import Cadastro from '../pages/cadastro';
import Voluntariado from '../pages/voluntariado';
import VoluntarioConfirmado from '../pages/voluntario-confirmado';
import Login from '../pages/login';
import LoginEsqueceuSenha from '../pages/login_esqueceu_senha.jsx';
import LoginConfirmarEmail from '../pages/login_confirmar_email.jsx';
import CRUD_Conta from '../pages/crud-conta';
import CrudContaSucesso from '../pages/crud_conta_sucesso';
import Info from '../pages/info';
import Patrocinadores from "../pages/patrocinadores";
import Acoes from "../pages/acoes";
import Doacao from "../pages/doacao"
import Edit_Info from "../pages/editar_informacoes.jsx"



function Destiny () {
    return (
        <Routes>
            <Route exact path = "/" element = { <Home/> } />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path='/voluntariado' element={<Voluntariado/>}/>
            <Route path='/voluntario-confirmado' element={<VoluntarioConfirmado/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/login-esqueceu-senha' element={<LoginEsqueceuSenha/>}/>
            <Route path='/login-email-enviado' element={<LoginConfirmarEmail/>}/>
            <Route path='/crud-conta' element={<CRUD_Conta/>}/>
            <Route path='/crud_conta_sucesso' element={<CrudContaSucesso/>}/>
            <Route path='/info' element={<Info/>}/>
            <Route path="/patrocinadores" element={<Patrocinadores />} />
            <Route path="/acoes" element={<Acoes />} />
            <Route path="/doacao" element={<Doacao />} />
            <Route path="/edit-info" element={<Edit_Info/>} />
        </Routes>
    )
}

export default Destiny;