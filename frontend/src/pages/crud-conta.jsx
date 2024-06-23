import '../styles/pages/crud-conta.css';
import HeaderADM from '../components/header_adm';
import React, { useState, useEffect } from "react";
import { deleteUsuario, getUsuario, postUsuario} from '../services/usuarioService';
import bcrypt from 'bcryptjs'


function CRUD_Conta(){
    //usados na verificacao de erros
    const [primeiro, setPrimeiro] = useState(true);
    const [verificar, setVerificar] = useState(false);
    const [validado, setValidado] = useState(false);

    //valor dos inputs
    const [emailAnt, setEmailAnt] = useState('');
    const [emailNovo, setEmailNovo] = useState('');
    const [emailNovoConf, setEmailNovoConf] = useState('');
    const [senhaAnt, setSenhaAnt] = useState('');
    const [senhaNova, setSenhaNova] = useState('');
    const [senhaNovaConf, setSenhaNovaConf] = useState('');
    const [textoConf, setTextoConf] = useState('');

    //erros
    const [erroEmailAnt, setErroEmailAnt] = useState(false);
    const [erroEmailNovo, setErroEmailNovo] = useState(false);
    const [erroEmailNovoConf, setErroEmailNovoConf] = useState(false);
    const [erroSenhaAnt, setErroSenhaAnt] = useState(false);
    const [erroSenhaNova, setErroSenhaNova] = useState(false);
    const [erroSenhaNovaConf, setErroSenhaNovaConf] = useState(false);
    const [erroTextoConf, setErroTextoConf] = useState(false);



    //reseta os mensagens de erro
    const resetarErro = () => {
        setErroEmailAnt(false);
        setErroEmailNovo(false);
        setErroEmailNovoConf(false);
        setErroSenhaAnt(false);
        setErroSenhaNova(false);
        setErroSenhaNovaConf(false);
        setErroTextoConf(false);
    }


    
    //ativado com o botao confirmar
    //validada os itens do login
    async function validarEdit () {
        
        //pega usuario do banco
        let usuarios = await getUsuario()
        if(usuarios.length > 1) 
        {
            console.log("Tem mais de 1 usuario!")
            return
        }
        let usuario = usuarios[0]
        
        //reseta os variaveis de erro
        resetarErro()
        
        //verifica erro
        if(emailAnt == "")
            setErroEmailAnt(true);

        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ //para validar email
        if (!regex.test(emailNovo))
            setErroEmailNovo(true);

        if(emailNovo !== emailNovoConf)
            setErroEmailNovoConf(true);

        if(senhaAnt == "")
            setErroSenhaAnt(true);

        if (senhaNova == "")
            setErroSenhaNova(true);

        if(senhaNova !== senhaNovaConf)
            setErroSenhaNovaConf(true);

        if(textoConf == "")
            setErroTextoConf(true);

        if(emailAnt != usuario.login)
           setErroEmailAnt(true);

        if(!bcrypt.compareSync(senhaAnt,usuario.senha ))
           setErroSenhaAnt(true);
        
        //atualiza verificar para entrar no useEffect 
        setVerificar(!verificar)
    }

    async function updateUsuario(){
        //delete usuario
        let deletado = await deleteUsuario(emailAnt)
        if(!deletado) return
        
        //post usuario
        const salt = bcrypt.genSaltSync()
        const hashedPassWord = bcrypt.hashSync(senhaNova, salt)
        let postado = await postUsuario(emailNovo, hashedPassWord, textoConf)
        if(!postado) return

        //vai para tela de sucesso
        window.location.href = "/crud_conta_sucesso"
    }

    //se nao tiver erro, atualiza usuario e vai para aba de administrador
    //foi colocado no useEffect, porque nao da para atualizar um state e ver o state atualizado na mesma funcao
    useEffect(()=>{
        if(primeiro) setPrimeiro(false)
            else if(!validado && !erroEmailAnt && !erroEmailNovo && !erroEmailNovoConf &&
        !erroSenhaAnt && !erroSenhaNova && !erroSenhaNovaConf && !erroTextoConf)
        {
            setValidado(true);
            updateUsuario()
        }
    }, [verificar])

    return(
        <>
            <HeaderADM page='editar-conta'/>
            <div id = 'editContaPage'>
                {/* header */}
                <div id="tituloEditC">
                    <p class="titulo">Editar Conta</p>
                </div>
                

                {/* Titulo */}
                <div id = "editCTextBox">
                    <div id= "editCTitleBox" class = "textoBranco">Editar Conta</div>

                    {/* Email Antigo */}
                    <div className="TextoEInputEditC">
                        <div className="editCTexto textoBranco">Email Antigo:</div>
                        <input 
                            onChange={(event) => setEmailAnt(event.target.value)} 
                            className="editCInput defaultInput" 
                            type="text" 
                        />
                    </div>
                    {erroEmailAnt && <div className="textoErroEditC textoErro">O email está errado</div>}

                    {/* Email Novo */}
                    <div className="TextoEInputEditC">
                        <div className="editCTexto textoBranco">Email Novo:</div>
                        <input 
                            onChange={(event) => setEmailNovo(event.target.value)} 
                            className="editCInput defaultInput" 
                            type="text" 
                        />
                    </div>
                    {erroEmailNovo && <div className="textoErroEditC textoErro">Preencha o email válido</div>}

                    {/* Confirmar Email Novo */}
                    <div className="TextoEInputEditC">
                        <div className="editCTexto textoBranco">Confirmar Email Novo:</div>
                        <input 
                            onChange={(event) => setEmailNovoConf(event.target.value)} 
                            className="editCInput defaultInput" 
                            type="text" 
                        />
                    </div>
                    {erroEmailNovoConf && <div className="textoErroEditC textoErro">A confirmação do email deve coincidir</div>}

                    {/* Senha Antiga */}
                    <div className="TextoEInputEditC">
                        <div className="editCTexto textoBranco">Senha Antiga:</div>
                        <input 
                            onChange={(event) => setSenhaAnt(event.target.value)} 
                            className="editCInput defaultInput" 
                            type="password" 
                        />
                    </div>
                    {erroSenhaAnt && <div className="textoErroEditC textoErro">A senha está errada</div>}

                    {/* Senha Nova */}
                    <div className="TextoEInputEditC">
                        <div className="editCTexto textoBranco">Senha Nova:</div>
                        <input 
                            onChange={(event) => setSenhaNova(event.target.value)} 
                            className="editCInput defaultInput" 
                            type="text" 
                        />
                    </div>
                    {erroSenhaNova && <div className="textoErroEditC textoErro">Preencha a senha nova</div>}

                    {/* Confirmar Senha Nova */}
                    <div className="TextoEInputEditC">
                        <div className="editCTexto textoBranco">Confirmar Senha Nova:</div>
                        <input 
                            onChange={(event) => setSenhaNovaConf(event.target.value)} 
                            className="editCInput defaultInput" 
                            type="text" 
                        />
                    </div>
                    {erroSenhaNovaConf && <div className="textoErroEditC textoErro">A confirmação da senha deve coincidir</div>}
                    
                    {/* Texto auxiliar */}
                    <div className="TextoEInputEditC">
                        <div className="editCTexto textoBranco">Texto para lembrar a senha:</div>
                        <div id="textoAuxEditC" className='textoBranco'>*Será enviado por email caso esquecer a senha</div>
                        <input 
                            onChange={(event) => setTextoConf(event.target.value)} 
                            className="editCInput defaultInput" 
                            type="text" 
                        />
                    </div>
                    {erroTextoConf && <div className="textoErroEditC textoErro">Preencha o texto</div>}

                    {/* cadastro Button */}
                    <div id = "buttonPlaceEditC">
                        <button onClick={validarEdit} id="editButton" class="orangeButton">Confirmar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CRUD_Conta;