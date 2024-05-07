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
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur sed aliquid libero! Aliquid deserunt laudantium suscipit maxime inventore recusandae esse eos sunt nesciunt porro ut, iste vel perferendis quaerat.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus nam ducimus iste eveniet rem. Voluptatum veniam at doloribus atque cum odio minima nemo error? Neque quaerat dicta sint quisquam!
                    </p>
                </div>

                <div id="last-updates" className="box-text">
                    <h1>Ações Realizadas</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur sed aliquid libero! Aliquid deserunt laudantium suscipit maxime inventore recusandae esse eos sunt nesciunt porro ut, iste vel perferendis quaerat.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi dolorem error excepturi nemo doloremque? Maxime, nihil, mollitia accusamus assumenda earum, nulla quia rem quibusdam voluptatibus natus totam molestias provident saepe.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit maiores qui enim quia. Ipsam, quidem quis suscipit non delectus cupiditate, ut inventore debitis numquam quam enim doloribus voluptate sunt laborum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odit distinctio, saepe placeat tempore debitis recusandae amet, porro omnis vel eveniet commodi illo non totam inventore, sit doloremque excepturi quas?
                    </p>
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
