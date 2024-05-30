import React, { useState, useEffect } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/pages/voluntario-confirmado.css'

function VoluntarioConfirmado() {



    return (
        <>
            <Header 
            isImage = "false"
            />
            <div class = "titulo"  id = "contVolunConf">
                <div  id = "textoVolunConf">
                    O cadastro foi enviado para o Pão Fraterno!
                    <br/>
                    Espere a resposta pelo email
                </div>
                <button onClick={() => (window.location.href = "/")} className="defaultButton" id="botaoVolunConf">
                    Voltar para o site
                </button>
            </div>
            <div id = "fixarFooter">
                <Footer />
            </div>

        </>
    )
}

export default VoluntarioConfirmado;
