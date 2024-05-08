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
                    <p>As ações voluntarias que realizamos podem ser divididas em 4 grupos distintos de atuação. Um deles é a doação, </p>
                    <p>que é a fonte de todas as nossas ações. As demais se baseiam em atividades que realizamos cotidianamente para </p>
                    <p>manter o funcionamento da Pão Fraterno. Ou seja, fazer os alimentos, realizar sua montagem para distribuicao, ir</p>
                    <p>as ruas recolher doacoes, ir em bairros que atendemos e distribuir. Todas essas constituem pilares essenciais que </p>
                    <p>manteem a fraternidade em pe. Por mais que pareçam muitas funcoes buscamos sempre dividi-las ao maximo, o que ainda </p>
                    <p>reforca nossa necessidade constante de voluntariado, por isso buscamos atençāo para a questao social a qual nos </p>
                    <p>envolvemos e esperamos sua ajuda para fazer parte da nossa história. placeat tempore debitis recusandae</p>
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
