import React, { useState, useEffect } from "react";
import Header from '../components/header';
import ColaboradorCard from '../components/colaboradorCard';
import Footer from '../components/footer';
import '../styles/pages/patrocinadores.css'
import {getColaborador} from "../services/colaboradorService";
import constantes from '../utils/constantes.js'

function Patrocinadores() {


    let [colaboradores, setColaboradores] = useState([])

    async function LoadColaborador(){
        //pega colaboradores do banco
        let colaboradoresBD = await getColaborador()
        setColaboradores(colaboradoresBD)
    }

    useEffect(()=>{
        LoadColaborador()
    }, [])

    return (
        <>
            <Header headerText1 = {'Colaboradores'} 
            page = "colaboradores"/>
                {colaboradores.map((colaborador,index)=> 
                    <>
                    <div className="conteinerColaborador">
                        <ColaboradorCard
                            nome = {colaborador.nome}
                            imagem = {colaborador.imagem.replace('publico',constantes.PATH).replace('\\','/')}
                            descricao = {colaborador.descricao}
                            link = {colaborador.link}
                            color = {index%2==0 ? "#F9C745" : "#F9B145"}
                        />
                    </div>
                    </>)}
            <Footer />
        </>
    )
}

export default Patrocinadores;
