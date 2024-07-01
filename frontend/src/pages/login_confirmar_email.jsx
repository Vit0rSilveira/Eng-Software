import '../styles/pages/login.css'
import '../styles/pages/login_esqueceu_senha.css'

// tela para confirmar o envio de email de `esqueci senha` 
function LoginConfirmarEmail(){

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
                {/* Texto */}
                <div id = "textoLoginConf">
                    O texto auxilio foi enviado por email!
                </div>
                {/* Botao */}
                <button onClick={() => (window.location.href = "/login")} className="defaultButton" id="botaoLoginConf">
                    Voltar para o site
                </button>
            </div>
        </>
    )
}

export default LoginConfirmarEmail;