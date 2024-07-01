import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from '../pages/home.jsx'
import Voluntariado from '../pages/voluntariado.jsx';
import VoluntarioConfirmado from '../pages/voluntario-confirmado.jsx';
import Login from '../pages/login.jsx';
import LoginEsqueceuSenha from '../pages/login_esqueceu_senha.jsx';
import LoginConfirmarEmail from '../pages/login_confirmar_email.jsx';
import CRUD_Conta from '../pages/crud-conta.jsx';
import CrudContaSucesso from '../pages/crud_conta_sucesso.jsx';
import Info from '../pages/info.jsx';
import Patrocinadores from "../pages/patrocinadores.jsx";
import Acoes from "../pages/acoes.jsx";
import Doacao from "../pages/doacao.jsx"
import Edit_Info from "../pages/editar_informacoes.jsx"
import VerificarCadastros from '../pages/verificar_cadastros.jsx'



function Destiny () {
    return (
        <Routes>
            <Route exact path = "/" element = { <Home/> } />
            <Route path='/voluntariado' element={<Voluntariado/>}/>
            <Route path='/voluntario-confirmado' element={<VoluntarioConfirmado/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/login-esqueceu-senha' element={<LoginEsqueceuSenha/>}/>
            <Route path='/login-email-enviado' element={<LoginConfirmarEmail/>}/>
            <Route path='/info' element={<Info/>}/>
            <Route path="/patrocinadores" element={<Patrocinadores />} />
            <Route path="/acoes" element={<Acoes />} />
            <Route path="/doacao" element={<Doacao />} />
            <Route path='/crud-conta' element={<CRUD_Conta/>}/>
            <Route path='/crud_conta_sucesso' element={<CrudContaSucesso/>}/>
            <Route path="/edit-info" element={<Edit_Info/>} />
            <Route path="/verificar-cadastros" element={<VerificarCadastros/>}/>
        </Routes>
    )
}

export default Destiny;