import React, { useState, useEffect } from "react";
import Header from '../components/header';
import Question from "../components/questions";
import Footer from '../components/footer';
import '../styles/pages/home.css'
<<<<<<< HEAD
//import constantes from '../utils/constante.js'
=======
import constantes from '../utils/constantes.js'
>>>>>>> 502958503a77c53b2e4c5f2c6c3d58ba3c659274
import EventoCard from '../components/eventoCard';
import {getEvento} from "../services/eventoService";

function Home() {

    //questions
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


    //eventos
    let [eventos, setEventos] = useState([])

    async function LoadEvento(){
        //pega eventos do banco
        let eventosBD = await getEvento()
        setEventos(eventosBD)
    }

    useEffect(()=>{
        LoadEvento()
    }, []) 


    
    return (
        <>
            <Header 
                headerText1 = {'Conheça a Organização Pão Fraterno André Luiz'}
                isHomePage = {true}
            />
            <main>
                <div className="textoBranco box-text">
                    <h1>Um pouco sobre nós</h1>
                    <p>O Pão Fraterno André Luiz é uma organização que tem como objetivo ajudar, 
                        fisicamente e mentalmente os moradores de rua do São Carlos. 
                        Somos um grupo de aproximadamente 40 pessoas, sem fins lucrativos, com caráter de assistência social.
                    </p>
                    <div className="home-img-box">
                        <img
                        className="img-fluid"
                        src="../../public/images/quem_somos.png"
                        alt="First slide"
                        />
                    </div>
                    
                    <p>
                        Hoje em dia aceitamos os mais
                        diversos alimentos, o nosso foco sao verduras, que é essencial para fazer nossa principal refeição, a sopa, 
                        distribuída todas as sextas-feiras. Aceitamos produtos de higiene básica como papel higienico e sabonetes, tambem
                        recolhemos roupas para o inverno ou não, roupas intimas, cobertores e mantas. Recebemos como muita alegria e gratidão
                        sua doação.
                    </p>
                </div>

                <div className="textoBranco box-text orange">
                    <h1>Ações Realizadas</h1>
                    <p>
                    A nossa principal atividade é a entrega de kit para 140 moradores de rua na sexta toda semana sem falta. 
                    Nesse kit temos alimentos, roupas e alguns produtos de higiene.
                    
                    </p>
                    <p>
                    As ações voluntárias para a entrega podem ser divididas em 4 grupos distintos de atuação. Um deles é a doação, 
                    que é a fonte de todas as nossas ações. 
                    </p>
                    <p>
                    As demais se baseiam em atividades que realizamos cotidianamente para 
                    manter o funcionamento da Pão Fraterno. Ou seja, fazer os alimentos, realizar sua montagem para distribuiçao, ir
                    as casas dos doadores recolher as doações, ir em bairros que atendemos e distribuir. Todas essas constituem pilares essenciais que 
                    mantem a fraternidade em pé. 
                    </p>
                        
                    <div className="home-img-box">
                        <img
                        className="img-fluid"
                        src="../../public/images/entrega_doacoes.png"
                        alt="First slide"
                        />
                    </div>
                    
                    <p>
                        Além disso temos fazemos eventos aproximadamente 4 vezes por ano, para arrecadar o dinheiro para compra de produtos do kit. 
                    Dentre eles, temos eventos como venda de pizza, brechó e etc.
                    Qualquer pessoa está convida para ir nos eventos.
                    </p>
                    <p>Por mais que pareçam muitas funcoes buscamos sempre dividi-las ao maximo, o que ainda 
                    reforca nossa necessidade constante de voluntariado, por isso buscamos atençāo para a questao social a qual nos 
                    envolvemos e esperamos sua ajuda para fazer parte da nossa história.</p>
                    
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
                    <div className="home-img-box">
                        <img
                        className="img-fluid"
                        src="../../public/images/cenario_doacao.png"
                        alt="First slide"
                        />  
                    </div>
                </div>
                
                {/* Lista de eventos */}
                <div id="eventos" className="textoBranco eventos">

                    <h1>Eventos</h1>
                    <p>Venha participar!</p>

                    {eventos.map((evento,index)=> 
                        <>
                            <EventoCard
                                nome = {evento.nome}
                                imagem = {evento.imagem.replace('publico',constantes.PATH).replace('\\','/')}
                                data = {evento.data}
                                horarioInicio = {evento.horario_inicio}
                                horarioFim = {evento.horario_fim}
                                endereco = {evento.endereco}
                        />
                    </>)}
                </div>

                <button onClick={() => (window.location.href = "/voluntariado")} class = "defaultButton homePageButton2"
                >Venha nos conhecer!</button>
            </main>
            <Footer />
        </>
    )
}

export default Home;
