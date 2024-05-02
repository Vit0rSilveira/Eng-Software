import React, { useState, useEffect } from "react";
import Header from '../components/header';
import Question from "../components/questions";
import Footer from '../components/footer';
import '../styles/pages/patrocinadores.css'

function Patrocinadores() {
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
                    <div class='text-patrocinadores'>
                        <h1>CONHEÇA NOSSOS PATROCINADORES</h1>
                    </div>
                    <div className="patrocinadores">
                        <img className = "img-patrocinadores" src = "../../public/images/japa.png" alt="Logotipo do Japa Acai" id="logo-japa-acai" />
                        <img className = "img-patrocinadores" src = "../../public/images/banana.png" alt="Logotipo do Banana Brasil" id="logo-banana-brasil" />
                        <img className = "img-patrocinadores" src = "../../public/images/cea.png" alt="Logotipo do C&A" id="logo-cea" />
                        <img className = "img-patrocinadores" src = "../../public/images/ifood.png" alt="Logotipo do IFood" id="logo-ifood" />
                        <img className = "img-patrocinadores" src = "../../public/images/unimed.png" alt="Logotipo do Unimed" id="logo-unimed" />
                    </div>
                    
                </div>
            </accounts>
            <Footer />
        </>
    )
}

export default Patrocinadores;
