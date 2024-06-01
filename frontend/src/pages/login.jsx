//pagina de login do administrador
//Criado por Kaito Hayashi

import '../styles/pages/login.css';

function Login(){
    return(
        <>

            <div id = 'login'>
                <div id="big-box" class="row">
                    {/* header */}
                    <div id="header">
                        {/* logo */}
                        <img src="public\images\logo.jpg" id="imagem-logo" alt="logo"></img>  
                        {/* Texto */}
                        <p id="texto-logo" class="align-self-center">Grupo Pão Fraterno André Luiz</p>
                    </div>

                    {/* Titulo */}
                    <div id="titulo">Login Administrador</div>
                   
                    {/* Caixa */}
                    <div class="row caixa">
                        {/* Email */}
                        <div class="text">Email</div>
                        <div><input type="text" class="input-box"/></div>
                        {/* Password */}
                        <div class="text">Senha</div>
                        <div><input type="password" class="input-box"/></div>
                        {/* Login */}
                        <button class="login-button">Login</button>
                        {/* Forgot password */}
                        <div class="forgot-password-text">Esqueceu a senha? <a href="">Clique aqui</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;