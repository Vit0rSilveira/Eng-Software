import React, { useState, useEffect } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/pages/acoes.css'
import NoticiaCard from "../components/noticiaCard";
import NoticiaDetaildCard from "../components/noticiaDetailedCard";


function Acoes() {
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
                <NoticiaCard
                    title = "Doação de kit alimentos na igreja Papa Roho"
                    image = "public\images\noticia\noticia1.png"
                    descricao = "Escrever a descrição da notícia a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss. a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss"
                    data = "13/4/2024"
                    link =  "https://edisciplinas.usp.br"
                    onShow = {showNoticia}
                />
                <NoticiaCard
                    title = "Doação de kit alimentos na igreja Papa Roho"
                    image = "public\images\noticia\noticia1.png"
                    descricao = "Escrever a descrição da notícia a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss. a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss"
                    data = "13/4/2024"
                    link=  "https://edisciplinas.usp.br"
                    onShow = {showNoticia}
                />
                <NoticiaCard
                    title = "Doação de kit alimentos na igreja Papa Roho"
                    image = "public\images\noticia\noticia1.png"
                    descricao = "Escrever a descrição da notícia a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss. a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss"
                    data = "13/4/2024"
                    link=  "https://edisciplinas.usp.br"
                    onShow = {showNoticia}
                />
                <NoticiaCard
                    title = "Doação de kit alimentos na igreja Papa Roho RoRo"
                    image = "public\images\noticia\noticia1.png"
                    descricao = "Escrever a descrição da notícia a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss. a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss a aaa aas sssdsdsss ssssss sssss ssssss ssss s s ssss sssss sss ssss ssssssssss"
                    data = "13/4/2024"
                    link =  "https://edisciplinas.usp.br"
                    onShow = {showNoticia}
                />
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
