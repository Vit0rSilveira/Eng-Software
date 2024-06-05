import '../styles/pages/login.css';
import React, { useState, useEffect } from "react";
import {getUsuario} from "../services/usuarioService";
import bcrypt from 'bcryptjs'

function Login(){

    //usados na verificacao de erros
    const [primeiro, setPrimeiro] = useState(true);
    const [verificar, setVerificar] = useState(false);

    //valor dos inputs
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    //erros
    const [invalido, setInvalido] = useState(false);
    const [senhaVazia, setSenhaVazia] = useState(false);
    const [emailVazio, setEmailVazio] = useState(false);



    //reseta os mensagens de erro
    const resetarErro = () => {
        setInvalido(false);
        setSenhaVazia(false);
        setEmailVazio(false);
    }
    
    //ativado com o botao confirmar
    //validada os itens do login
    async function validarLogin() {
        //pega usuario do banco
        let usuarios = await getUsuario()
        if(usuarios.length != 1) 
        {
            console.log("Tem mais de 1 usuario!")
            return
        }
        let usuario = usuarios[0]

        //reseta os variaveis de erro
        resetarErro()
        
        
        //verificacao de erros
        
        //compara senha
        const senhaCorreta = bcrypt.compareSync(senha, usuario.senha)
        
        if(email === "")
            setEmailVazio(true)
        if(senha === "")
            setSenhaVazia(true)
        else if((email != usuario.login || !senhaCorreta) && email != "" && senha != "")
            setInvalido(true)
        
        //atualiza verificar para entrar no useEffect 
        setVerificar(!verificar)
    }

    //se nao tiver erro, vai para aba de administrador
    //foi colocado no useEffect, porque nao da para atualizar um state e ver o state atualizado na mesma funcao
    useEffect(()=>{
        if(primeiro) setPrimeiro(false)
        else if(!invalido && !senhaVazia && !emailVazio)
        {
            window.location.href = "/cadastro"
        }
    }, [verificar])


    return(
        <>

            <div id = 'loginPage'>
                {/* header */}
                <div id="loginHeader">
                    {/* logo */}
                    <img src="public\images\logo2.jpg" id="imagemLogoLogin" alt="logo"></img>  
                    {/* Texto */}
                    <p id="textoLogoLogin" class="titulo">Pão Fraterno André Luiz</p>
                </div>

                {/* Titulo */}
                <div id = "loginTextBox">
                    <div id= "loginTitleBox" class = "textoBranco">Login Administrador</div>
                    {(invalido && <div class = "textoErroLogin textoErro">Email ou senha invalida</div>)}
                    {/* Nome */}
                    <div class="TextoEInputLogin">
                        <div class = "loginTexto textoBranco">Email:</div>
                        <input onChange={(event) => setEmail(event.target.value)} class = "loginInput defaultInput" type="text"/>
                    </div>
                    {(emailVazio && <div class = "textoErroLogin textoErro">Preencha o email</div>)}
                    
                    {/* Email */}
                    <div class="TextoEInputLogin">
                        <div class = "loginTexto textoBranco">Senha:</div>
                        <input onChange={(event) => setSenha(event.target.value)}  class = "loginInput defaultInput" type="password" />
                    </div>
                    {(senhaVazia && <div class = "textoErroLogin textoErro">Preencha a senha</div>)}
                    {/* cadastro Button */}
                    <div id = "buttonPlaceLogin">
                        <button onClick={validarLogin} id="loginButton" class="defaultButton">Login</button>
                    </div>
                    {/* esqueceu a senha */}
                    <div id ="textoEsqSenha" class = "textoBranco mt-5 mx-3">
                         Esqueceu a senha?
                        <a  id ="linkEsqSenha"  class='textoLink mx-1' href="/login-esqueceu-senha">Clique aqui</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;