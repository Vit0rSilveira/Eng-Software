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
        
            <accounts>
                <div id="questions" className="box-questions">
                    <div className="text-p">
                        NOSSA ACOES
                    </div>
                    <div className="acoes">
                        <img src = "../../public/images/acao1.png" alt="Acao Social" id="acao-social4" />
                        <img src = "../../public/images/acao2.png" alt="Acao Social" id="acao-social3" />
                        <img src = "../../public/images/acao3.png" alt="Acao Social" id="acao-social3" />
                        <img src = "../../public/images/acao4.png" alt="Acao Social" id="acao-social4" />
                        
                    </div>
                    
                </div>
            </accounts>
            <Footer />
        </>
    )
}

export default Acoes;
