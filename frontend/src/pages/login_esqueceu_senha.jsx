import '../styles/pages/login.css'
import '../styles/pages/login_esqueceu_senha.css'
import { envia_email } from '../utils/utils';

function LoginEsqueceuSenha(){

     const handleForgotPassword = () => {
        const conteudo = {
            assunto: 'Recuperação de senha',
            mensagem: 'Clique no link para redefinir sua senha: [link]'
        };

        envia_email(email, conteudo)
            .then((response) => {
                alert('Email de recuperação de senha enviado com sucesso!');
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
                    Deseja enviar o email com o 
                    <br/>
                    texto auxilio da senha?
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