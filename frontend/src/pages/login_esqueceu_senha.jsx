import '../styles/pages/login.css'
import '../styles/pages/login_esqueceu_senha.css'
import emailjs from '@emailjs/browser'

function LoginEsqueceuSenha(){

    //envia email com texto de auxilio
    //Tutorial: https://www.youtube.com/watch?v=Lz8yx-zn-O4
    const sendEmail = () =>{
        
        // envia email com texto de auxilio
        // var emailParams = {
        //     toEmail: 'exemplo@gmail.com',
        //     fromEmail: 'exemplo@gmail.com',
        //     textoAuxilio: 'TextoTeste'
        //   };
        // var service_ID = coloque o service ID aqui
        // var template_ID = coloque o template ID aqui
        // var public_key = coloque o public_key aqui
        // emailjs.send('service_ID', 'template_iq7cld8', emailParams, 'public_key').then(
        //     (response) => {
        //         console.log('SUCCESS!', response.status, response.text);
        //         window.location.href = "/login-email-enviado"
        //     },
        //     (error) => {
        //         console.log('FAILED...', error);
        //     },
        // )
            
            
            //comentar essa parte depois
            window.location.href = "/login-email-enviado"
    }

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
                    <button onClick={() => sendEmail()} className="defaultButton" id="botaoLoginConf">
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