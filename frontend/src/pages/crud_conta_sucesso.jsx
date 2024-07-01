import HeaderADM from '../components/header_adm';
import '../styles/pages/crud_conta_sucesso.css';
import { useCookies } from "react-cookie";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


function CrudContaSucesso(){

    //cookie & navigate
    const [cookies, setCookies, removeCookies] = useCookies(["isLogin"]);
    const navigate = useNavigate()
    
    //ve se o usuario esta login
    useEffect(() => {
        if (!cookies.isLogin)
            navigate("/login")
    }, [])


    return(
        <>
            <HeaderADM/>

            <div class = "titulo"  id = "contLoginConf">
                <div id = "textoLoginConf">
                    As informações da conta foram 
                    <br />
                    modificadas com sucesso
                </div>
                <button onClick={() => (window.location.href = "/verificar-cadastros")} className="defaultButton" id="botaoLoginConf">
                    Voltar para o site
                </button>
            </div>
        </>
    )
}

export default CrudContaSucesso;