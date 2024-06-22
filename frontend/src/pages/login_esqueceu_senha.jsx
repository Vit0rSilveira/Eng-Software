import { useState } from 'react';
import '../styles/pages/login.css'
import '../styles/pages/login_esqueceu_senha.css'
import { envia_email } from '../utils/utils';
import { Navigate } from 'react-router-dom';
import {getUsuario} from '../services/usuarioService';

function LoginEsqueceuSenha(){
    const [email, setEmail] =  useState()

    //envia email com texto de auxilio
    //Tutorial: https://www.youtube.com/watch?v=Lz8yx-zn-O4

     async function pegarEmail () {
        const userEmail = await getUsuario()

        setEmail(userEmail.email)
    }

    const handleForgotPassword = async () => {
        const email = await pegarEmail()
        
        const conteudo = {
            assunto: 'Recuperação de senha',
            mensagem: 'Clique no link para redefinir sua senha: [link]'
        };

        envia_email(email, conteudo)
            .then((response) => {
                alert('Email de recuperação de senha enviado com sucesso!');
                Navigate("/login-email-enviado")
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
                <div  id = "textoLoginConf">
                    <p>Deseja enviar o email com o </p>
                    <p>texto auxilio da senha?</p>
                    
                </div>
                <div>
                    <button onClick={() => handleForgotPassword()} className="defaultButton" id="botaoLoginConf">
                        Enviar
                    </button>
                    <button onClick={() => (window.location.href = "/login")} className="defaultButton" id="botaoLoginConf">
                        Voltar
                    </button>
                </div>
            </div>

        </>
    )
}

export default LoginEsqueceuSenha;