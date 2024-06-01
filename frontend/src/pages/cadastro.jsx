import React, { useState, useEffect } from "react";
import Header from '../components/header';
import Question from "../components/questions";
import Footer from '../components/footer';
import '../styles/pages/cadastro.css'

function Cadastro() {
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
            
            <h1 id="titulo-cadastro"> Solicitações de Visita</h1>

            <div class="container-cadastro">
                <div class="row mt-5 mb-5">
                    
                    <div class=" border border-dark rounded offset-1 col-4 bg-light p-5 mb-5" >
                        <img className="img-x" src = "../../public/images/marca-cruzada.png" alt="X" id="imagem-x" />
                        <p>Thiago Ribeiro Correia</p>
                        <p>ThiagoRibeiroCorreia@rhyta.com</p>
                        <p>978-761-7423</p>
                        <p>Visita</p>
                        <p>11:00-12:00</p>
                        <p>solicitacao de vista para conhecer o Pao Fraterno</p>
                    </div>

                    <div class=" border border-dark rounded offset-1 col-4 bg-light p-5 mb-5">
                        <img className="img-x" src = "../../public/images/marca-cruzada.png" alt="X" id="imagem-x" />
                        <p>Joao Paulo Neto</p>
                        <p>JPN@rhyta.com</p>
                        <p>978-761-7424</p>
                        <p>Doacao</p>
                        <p>11:00-12:00</p>
                        <p>Doacao de 20kg de batata</p>
                    </div>

                    <div class=" border border-dark rounded offset-1 col-4 bg-light p-5 ">
                        <img className="img-x" src = "../../public/images/marca-cruzada.png" alt="X" id="imagem-x" />
                        <p>Xalon Tuja</p>
                        <p>XTj@rhyta.com</p>
                        <p>978-761-7424</p>
                        <p>Preparo</p>
                        <p>11:00-16:00</p>
                    </div>
                    <div class=" border border-dark rounded offset-1 col-4 bg-light p-5">
                        <img className="img-x" src = "../../public/images/marca-cruzada.png" alt="X" id="imagem-x" />
                        <p>Quars Ron</p>
                        <p>QR@rhyta.com</p>
                        <p>978-761-7425</p>
                        <p>Montagem</p>
                        <p>16:00-17:00</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Cadastro;
