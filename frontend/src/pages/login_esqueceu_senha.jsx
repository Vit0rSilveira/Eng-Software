import { useState } from 'react';
import '../styles/pages/login.css'
import '../styles/pages/login_esqueceu_senha.css'
import { envia_email } from '../utils/utils';
import {getUsuario} from '../services/usuarioService';

function LoginEsqueceuSenha(){

    //envia email com texto auxilio
    const handleForgotPassword = async () => {
        const userEmail = await getUsuario()
        console.log(userEmail.login)
        const conteudo = {
            assunto: 'Recuperação de senha',
            mensagem: 'Este é o seu texto auxiliar: ' + userEmail.texto_auxiliar
        };

        envia_email(userEmail.login, conteudo)
            .then((response) => {
                window.location.href = "/login-email-enviado"
            })
            .catch((error) => {
                alert('Erro ao enviar email de recuperação de senha: ' + error.text);
        });
    };
        
        
    return(
        <>
             {/* header*/}
             <div id = 'loginPage' className='mt-7 mb-1'>
                <div id="loginHeader">
                    {/* logo */}
                    <img src="public\images\logo2.jpg" id="imagemLogoLogin" alt="logo"></img>  
                    {/* Texto */}
                    <p id="textoLogoLogin" class="titulo">Pão Fraterno André Luiz</p>
                </div>
             </div>
            
            <div class = "titulo"  id = "contLoginConf">

                {/* Textos */}
                <div  id = "textoLoginConf">
                    Deseja enviar o email com o <br/> 
                    texto auxilio da senha?
                </div>

                {/* Botoes */}
                <div>
                    {/* Enviar email */}
                    <button onClick={() => handleForgotPassword()} className="defaultButton" id="botaoLoginConf">
                        Enviar
                    </button>
                    {/* Voltar para login */}
                    <button onClick={() => (window.location.href = "/login")} className="defaultButton" id="botaoLoginConf">
                        Voltar
                    </button>
                </div>
            </div>

        </>
    )
}

export default LoginEsqueceuSenha;