import React, { useState, useEffect } from "react";
import Header from '../components/header';
import Question from "../components/questions";
import Footer from '../components/footer';
import '../styles/pages/acoes.css'

function Acoes() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch('../../perguntas.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao obter os dados da API')
                }
                return response.json()
            })
            .then(data => {
                setQuestions(data)
            })
            .catch(error => {
                console.error(`Error: ${error}`)
            })
    }, []);

    return (
        <>
            <Header />
        
            <accounts id='page-acoes'>
                <div id="questions" className="box-questions">
                    <div class='text-acoes'>
                        <h1>NOSSAS AÇÕES</h1>
                    </div>
                    <div className="acoes">
                    <div id="main-banner-back">
                        <div id="main-banner">
                            <h2>NOSSA PASCOA 2024</h2>
                            <img className = "img-acoes" src = "../../public/images/acao1.png" alt="Acao Social" id="acao-social4" />
                        </div>
                    </div>
                    <div id="main-banner-back">
                        <h2>AÇÃO FRATERNIDADE ESPIRITA</h2>
                        <div id="main-banner">
                            <img className = "img-acoes" src = "../../public/images/acao2.png" alt="Acao Social" id="acao-social3" />
                        </div>
                    </div>
                    <div id="main-banner-back">
                        <h2>NOSSO NATAL 2023</h2>
                        <div id="main-banner">
                            <img className = "img-acoes" src = "../../public/images/acao3.png" alt="Acao Social" id="acao-social3" />
                        </div>
                    </div>
                    <div id="main-banner-back">
                        <h2>DOAÇÃO DE CESTAS</h2>
                        <div id="main-banner">
                            <img className = "img-acoes" src = "../../public/images/acao4.png" alt="Acao Social" id="acao-social4" />
                        </div>
                    </div>
                    </div>
                    
                </div>
            </accounts>
            <Footer />
        </>
    )
}

export default Acoes;
