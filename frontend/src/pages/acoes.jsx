import React, { useState, useEffect } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/pages/acoes.css'
import NoticiaCard from "../components/noticiaCard";
import NoticiaDetaildCard from "../components/noticiaDetailedCard";
import {getNoticia} from "../services/noticiaService";
import constantes from '../utils/constante.js'


function Acoes() {

    //funcoes para pegar noticias do banco
    let [noticias, setNoticias] = useState([])

    async function LoadNoticia(){
        let noticiasBD = await getNoticia()
        setNoticias(noticiasBD)
    }

    useEffect(()=>{
        LoadNoticia()
    }, [])


    //funcoes para mostrar o detalhe da noticia
    const[isShow, setShow] = useState(false);
    const[propriedade, setPropriedade] = useState([]);

    const showNoticia = (props) => {
        setShow(true)
        setPropriedade(props)
    }
    const cancelShowNoticia = () => {
        setShow(false)
    }


    return (
        <>
        <Header 
            headerText1 = {'Noticias'} 
            page = "noticias"
        />
        <div id="centralize">
            <div id = "conteinerNoticia">
                {noticias.map((noticia,index)=> 
                    <>
                    <div className="conteinerNoticia">
                        <NoticiaCard
                            title = {noticia.titulo}
                            image = {noticia.imagem.replace('publico',constantes.PATH).replace('\\','/')}
                            descricao = {noticia.descricao}
                            data = {noticia.data}
                            link =  {noticia.link}
                            onShow = {showNoticia}
                        />
                    </div>
                </>)}
            </div>
        </div>

        {/* quando clica no 'Saiba Mais' aparece */}
        {(isShow === true &&
            <div id = "conteinerNoticiaDetalhe">
                <NoticiaDetaildCard
                    title = {propriedade.title}   
                    image = {propriedade.image}   
                    descricao = {propriedade.descricao}
                    data = {propriedade.data}
                    link = {propriedade.link}
                    onNotShow = {cancelShowNoticia}

                />
            </div>
        )}
        
            
        <Footer />
        </>
    )
}

export default Acoes;
