import React, { useState, useEffect } from "react";
import Header from '../components/header';
import Question from "../components/questions";
import '../styles/pages/home.css'

function Home() {
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
            <div id="carrosel"></div>
            <div id="about-us">
                <h1>Um pouco sobre nós</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur sed aliquid libero! Aliquid deserunt laudantium suscipit maxime inventore recusandae esse eos sunt nesciunt porro ut, iste vel perferendis quaerat.</p>
            </div>

            <div id="last-updates">
                <h1>Últimas Ações Realizadas</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur sed aliquid libero! Aliquid deserunt laudantium suscipit maxime inventore recusandae esse eos sunt nesciunt porro ut, iste vel perferendis quaerat.</p>
            </div>

            <div id="questions">
                <h1>Perguntas Frequentes</h1>
                <div id="box-questions">
                    {questions.slice(0, 4).map((q, index) => (
                        <Question
                            key={index}
                            question={q.question}
                            answer={q.answer}
                            className = "one-question"
                        />
                    ))}
                </div>

            </div>
        </>
    )
}

export default Home;
