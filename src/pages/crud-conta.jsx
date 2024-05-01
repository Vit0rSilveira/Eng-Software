//pagina de CRUD da conta
//Criado por Kaito Hayashi

import '../styles/pages/crud-conta.css';
import Header from '../components/header';
import Footer from '../components/footer';

function CRUD_Conta(){
    return(
        <>
            <Header />

            <div id = 'crud-conta'>
                <div id="big-box" class="row">
                    {/* header */}
                    <div id="header">
                        {/* logo */}
                        <img src="public\images\logo.jpg" id="imagem-logo" alt="logo"></img>  
                        {/* Texto */}
                        <p id="texto-logo" class="align-self-center">Grupo Pão Fraterno André Luiz</p>
                    </div>

                    {/* Titulo */}
                    <div id="titulo">Change Account Information</div>
                   
                    {/* Caixa */}
                    <div class="row caixa">
                        {/* Email */}
                        <div class="text">Old Email Adress</div>
                        <div><input type="text" class="input-box"/></div>
                        <div class="text">New Email Adress</div>
                        <div><input type="text" class="input-box"/></div>
                        {/* Password */}
                        <div class="text">Old Password</div>
                        <div><input type="password" class="input-box"/></div>
                        <div class="text">New Password</div>
                        <div><input type="password" class="input-box"/></div>
                        {/* Login */}
                        <button class="confirm-button">Confirm</button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default CRUD_Conta;