import '../styles/pages/crud-conta.css';
import HeaderADM from '../components/header_adm';
import React, { useState, useEffect } from "react";


function CRUD_Conta(){
    //usados na verificacao de erros
    const [primeiro, setPrimeiro] = useState(true);
    const [verificar, setVerificar] = useState(false);

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
    const validarEdit = () => {
        
        //reseta os variaveis de erro
        resetarErro()
        
        //verifica erro
        if(emailAnt == "")
            setErroEmailAnt(true);

        if (emailNovo == "")
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

        //////////////////////////////////
        //Modificar essa parte para conectar com o backend
        //
        //if(emailAnt != emailDB)
        //    setErroEmailAnt(true);
        //if(senhaAnt != senhaDB)
        //    setErroSenhaAnt(true);
        //////////////////////////////////
        
        //atualiza verificar para entrar no useEffect 
        setVerificar(!verificar)
    }

    //se nao tiver erro, vai para aba de administrador
    //foi colocado no useEffect, porque nao da para atualizar um state e ver o state atualizado na mesma funcao
    useEffect(()=>{
        if(primeiro) setPrimeiro(false)
        else if(!erroEmailAnt && !erroEmailNovo && !erroEmailNovoConf &&
                !erroSenhaAnt && !erroSenhaNova && !erroSenhaNovaConf && !erroTextoConf)
        {
            window.location.href = "/crud_conta_sucesso"
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
                    {erroEmailAnt && <div className="textoErroEditC textoErro">Preencha o email válido</div>}

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
                    {erroSenhaAnt && <div className="textoErroEditC textoErro">Preencha a senha antiga</div>}

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
                        <button onClick={validarEdit} id="editButton" class="defaultButton">Confirmar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CRUD_Conta;