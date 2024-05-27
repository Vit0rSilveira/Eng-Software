import React, { useState, useEffect } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/pages/acoes.css'
import NoticiaCard from "../components/noticiaCard";


function Acoes() {

    return (
        <>
            <Header 
                headerText2 = {'Noticias'} 
            />
        <div id="centralize">
            <div id = "conteinerNoticia">
                <NoticiaCard
                    image = "public\images\noticia\noticia1.png"
                    title = "Doação de kit alimentos na igreja Papa Roho"
                    descricao = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                    link=  "https://oaf.org.br/"
                />

                <NoticiaCard
                    image = "public\images\noticia\noticia1.png"
                    title = "Doação de kit alimentos na igreja Papa Roho"
                    descricao = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                    link=  "https://oaf.org.br/"
                />
                <NoticiaCard
                    image = "public\images\noticia\noticia1.png"
                    title = "Doação de kit alimentos na igreja Papa Roho"
                    descricao = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                    link=  "https://oaf.org.br/"
                />
                <NoticiaCard
                    image = "public\images\noticia\noticia1.png"
                    title = "Doação de kit alimentos na igreja Papa Roho RoRo"
                    descricao = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                    link=  "https://oaf.org.br/"
                />
            </div>
        </div>
            
            <Footer />
        </>
    )
}

export default Acoes;
