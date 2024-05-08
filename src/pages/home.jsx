import React, { useState, useEffect } from "react";
import Images_carousel from '../components/carrousel'
import Header from '../components/header';
import Question from "../components/questions";
import Footer from '../components/footer';
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
            <Images_carousel/>
            <main>
                <div id="about-us" className="box-text">
                    <h1>Um pouco sobre nós</h1>
                    <p>Somos uma fraternidade de São Carlos que surgiu nos anos 90, criada pelos próprios alunos da USP de São Carlos.</p>
                    <p>Começamos como um grupo que aceitava apenas alimentos basicos, roupas e cobertores. Hoje em dia aceitamos os mais</p>
                    <p>diversos alimentos, o nosso foco sao verduras, que é essencial para fazer nossa principal refeição, a sopa, </p>
                    <p>distribuída todas as sextas-feiras. Aceitamos produtos de higiene básica como papel higienico e sabonetes, tambem</p>
                    <p>recolhemos roupas para o inverno ou não, roupas intimas, cobertores e mantas. Recebemos como muita alegria e gratidão</p>
                    <p>sua doação.
                    </p>
                </div>

                <div id="last-updates" className="box-text">
                    <h1>Ações Realizadas</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur sed aliquid libero! Aliquid deserunt</p>
                    <p>laudantium suscipit maxime inventore recusandae esse eos sunt nesciunt porro ut, iste vel perferendis quaerat.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi dolorem error excepturi nemo doloremque? Maxime,</p>
                    <p>nihil, mollitia accusamus assumenda earum, nulla quia rem quibusdam voluptatibus natus totam molestias provident saepe.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit maiores qui enim quia. Ipsam, quidem quis suscipit</p>
                    <p>non delectus cupiditate, ut inventore debitis numquam quam enim doloribus voluptate sunt laborum?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odit distinctio, saepe placeat tempore debitis recusandae</p>
                    <p>amet, porro omnis vel eveniet commodi illo non totam inventore, sit doloremque excepturi quas?</p>
                    
                </div>

                <div id="questions" className="box-text">
                    <h1>Perguntas Frequentes</h1>
                    <div id="box-questions">
                        {questions.slice(0, 4).map((q, index) => (
                            <Question
                                key={index}
                                question={q.question}
                                answer={q.answer}
                                className="one-question"
                            />
                        ))}
                    </div>

                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home;
