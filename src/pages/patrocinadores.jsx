import React, { useState, useEffect } from "react";
import Header from '../components/header';
import ColaboradorCard from '../components/colaboradorCard';
import Footer from '../components/footer';
import '../styles/pages/patrocinadores.css'

function Patrocinadores() {

    return (
        <>
            <Header headerText1 = {'Colaboradores'} />
            <div className="conteinerColaborador">
                <ColaboradorCard
                    nome = "Universidade de São Paulo"
                    imagem = "public\images\colaborador\USPLogo.png"
                    descricao = "Descrição básica do USP e sua contribuição no Pão Fraterno s sssssss ssss ssssssss sss . ssss sssssss sss sssssss ssssss sss. s sssssss ssss ssssssss sss . ssss sssssss sss sssssss ssssss sss."
                    link = "https://www5.usp.br/"
                    color = "#F9C745"
                />
            </div>
            <div className="conteinerColaborador">
                <ColaboradorCard
                    nome = "Universidade de São Paulo"
                    imagem = "public\images\colaborador\USPLogo.png"
                    descricao = "Descrição básica do USP e sua contribuição no Pão Fraterno s sssssss ssss ssssssss sss . ssss sssssss sss sssssss ssssss sss. s sssssss ssss ssssssss sss . ssss sssssss sss sssssss ssssss sss."
                    link = "https://www5.usp.br/"
                    color = "#F9B145"
                />
            </div>
            <div className="conteinerColaborador">
                <ColaboradorCard
                    nome = "Universidade de São Paulo"
                    imagem = "public\images\colaborador\USPLogo.png"
                    descricao = "Descrição básica do USP e sua contribuição no Pão Fraterno s sssssss ssss ssssssss sss . ssss sssssss sss sssssss ssssss sss. s sssssss ssss ssssssss sss . ssss sssssss sss sssssss ssssss sss."
                    link = "https://www5.usp.br/"
                    color = "#F9C745"
                />
            </div>
            <Footer />
        </>
    )
}

export default Patrocinadores;
