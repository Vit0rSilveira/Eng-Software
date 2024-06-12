import React, { useState, useEffect } from "react";
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
            <Header 
                headerText1 = {'Conheça a Organização Pão Fraterno André Luiz'}
                isHomePage = {true}
            />
            <main>
                <div className="textoBranco box-text">
                    <h1>Um pouco sobre nós</h1>
                    <p>Somos uma fraternidade de São Carlos que surgiu nos anos 90, criada pelos próprios alunos da USP de São Carlos.
                    Começamos como um grupo que aceitava apenas alimentos basicos, roupas e cobertores. 
                    </p>
                    <img
                    className="img-fluid"
                    src="../../public/images/quem_somos.png"
                    alt="First slide"
                    />
                    <p>Hoje em dia aceitamos os mais
                    diversos alimentos, o nosso foco sao verduras, que é essencial para fazer nossa principal refeição, a sopa, 
                    distribuída todas as sextas-feiras. Aceitamos produtos de higiene básica como papel higienico e sabonetes, tambem
                    recolhemos roupas para o inverno ou não, roupas intimas, cobertores e mantas. Recebemos como muita alegria e gratidão
                    sua doação.
                    </p>
                </div>

                <div className="textoBranco box-text orange">
                    <h1>Ações Realizadas</h1>
                    <p>As ações voluntarias que realizamos podem ser divididas em 4 grupos distintos de atuação. Um deles é a doação, 
                    que é a fonte de todas as nossas ações. As demais se baseiam em atividades que realizamos cotidianamente para 
                    manter o funcionamento da Pão Fraterno. Ou seja, fazer os alimentos, realizar sua montagem para distribuicao, ir
                    as ruas recolher doacoes, ir em bairros que atendemos e distribuir. Todas essas constituem pilares essenciais que 
                    manteem a fraternidade em pe. </p>
                    <img
                    className="img-fluid"
                    src="../../public/images/entrega_doacoes.png"
                    alt="First slide"
                    />
                    <p>Por mais que pareçam muitas funcoes buscamos sempre dividi-las ao maximo, o que ainda 
                    reforca nossa necessidade constante de voluntariado, por isso buscamos atençāo para a questao social a qual nos 
                    envolvemos e esperamos sua ajuda para fazer parte da nossa história. placeat tempore debitis recusandae
                    met, porro omnis vel eveniet commodi illo non totam inventore, sit doloremque excepturi quas?</p>
                    
                </div>

                <div id="questions" className="textoBranco box-text">
                    <h1>Perguntas Frequentes</h1>
                    <div id="box-questions">
                        {questions.slice(0, 4).map((q, index) => (
                            <Question
                                key={index}
                                question={q.question}
                                answer={q.answer}
                            />
                        ))}
                    </div>
                    <img
                    className="img-fluid"
                    src="../../public/images/cenario_doacao.png"
                    alt="First slide"
                    />
                </div>

                <div id="eventos" className="textoBranco eventos">
                    <h1>Eventos</h1>
                    <p>Venha participar!</p>
                    <div className="eventos-text">
                        <h2 className="titulo eventos-titulo"> Brechó de roupas    Dia: 15/4     11:00-15:00   </h2>
                        <p2>  Rua Costa do Sol, 450 - Vila Costa do Sol, São Carlos - SP, 13566-070
                        </p2>
                    </div>
                    <div className="eventos-text">
                        <h2 className="titulo eventos-titulo"> Venda de pizzas    Dia: 5/5      16:00-19:00    </h2>
                        <p2>  Rua Costa do Sol, 450 - Vila Costa do Sol, São Carlos - SP, 13566-070
                        </p2>
                    </div>
                </div>

                <button class = "defaultButton homePageButton2"
                >Venha nos conhecer!</button>
            </main>
            <Footer />
        </>
    )
}

export default Home;
