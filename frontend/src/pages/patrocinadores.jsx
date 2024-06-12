import React, { useState, useEffect } from "react";
import Header from '../components/header';
import ColaboradorCard from '../components/colaboradorCard';
import Footer from '../components/footer';
import '../styles/pages/patrocinadores.css'
import {getColaborador, postColaborador} from "../services/colaboradorService";

function Patrocinadores() {


    let [colaboradores, setColaboradores] = useState([])

    async function LoadColaborador(){
        //pega colaboradores do banco
        let colaboradoresBD = await getColaborador()
        setColaboradores(colaboradoresBD)
        console.log(colaboradores[0].imagem.replace("publico\\imagens\\colaboradores", "publico"))
        console.log(colaboradores[0].imagem.replace("publico/imagens/colaboradores", "../../public/images/colaborador"))
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
                    {console.log("entrou")}
                    <div className="conteinerColaborador">
                        <ColaboradorCard
                            nome = {colaborador.nome}
                            imagem={colaborador.imagem.replace("publico\\imagens\\colaboradores", "../../public/images/colaborador")}
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
