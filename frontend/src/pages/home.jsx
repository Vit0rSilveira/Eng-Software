import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Question from "../components/questions";
import Footer from '../components/footer';
import '../styles/pages/home.css'
import constantes from '../utils/constantes.js'
import EventoCard from '../components/eventoCard';
import {getEvento} from "../services/eventoService";

function Home() {

    //variaveis
    const [questions, setQuestions] = useState([]);
    let [eventos, setEventos] = useState([])
    
    //pega as perguntas no inicio
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

    //pega eventos do banco no inicio
    async function LoadEvento(){
        //pega do BD
        let eventosBD = await getEvento()
        
        //retira os eventos ja passados
        let ontem = new Date();
        ontem.setDate(ontem.getDate() + 1)
        ontem = ontem.toISOString()
        eventosBD = eventosBD.filter(evento => evento.data >= ontem)

        //ordena
        eventosBD.sort((a, b) => {
            if(a.data != b.data) return a.data.localeCompare(b.data);
            else return a.horarioInicio.localeCompare(b.horarioInicio)
        })

        //limita para primeiros 3 eventos
        eventosBD = eventosBD.slice(0,3)
        
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

                {/* Um pouco sobre nos */}
                <div className="textoBranco box-text">
                    <h1>Um pouco sobre nós</h1>
                    <p>
                    A Campanha do Pão Fraterno André Luiz, iniciada em 1996 em São Carlos, é um projeto voluntário dedicado a levar amor e apoio aos moradores de rua. Inspirada na Campanha do Pão de Ribeirão Preto, nossa equipe distribui semanalmente sopa, pão, roupas, cobertores e kits de higiene, além de oferecer conforto espiritual através da leitura do Evangelho segundo o Espiritismo, mensagens edificantes e conversas fraternas.
                    </p>
                    <div className="home-img-box">
                        <img
                        className="img-fluid"
                        src="../../public/images/quem_somos.png"
                        alt="First slide"
                        />
                    </div>
                    
                    <p>
                    Nossa missão é proporcionar não apenas o alimento material, mas também o alimento espiritual, revivendo a pureza da Boa Nova e levando a esperança e a solidariedade às ruas. Venha fazer parte deste trabalho de amor ao próximo!
                    </p>

                    <div className="home-saiba-mais-cont">
                        <Link to="info" className="textoLink home-saiba-mais">Saiba Mais</Link>
                    </div>
                </div>

                {/* Acoes realizadas */}
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
                        src="../../public/images/sopao.png"
                        alt="First slide"
                        />
                    </div>
                    
                    <p>
                        Além disso temos fazemos eventos aproximadamente 4 vezes por ano, para arrecadar o dinheiro para compra de produtos do kit. 
                        Dentre eles, temos eventos como venda de pizza, brechó e etc.
                        Qualquer pessoa está convida para ir nos eventos.
                    </p>
                    <p>
                        Por mais que pareçam muitas funcoes buscamos sempre dividi-las ao maximo, o que ainda 
                        reforca nossa necessidade constante de voluntariado, por isso buscamos atençāo para a questao social a qual nos 
                        envolvemos e esperamos sua ajuda para fazer parte da nossa história.
                    </p>
                    <div className="home-saiba-mais-cont">
                        <Link to="info" className="textoLink home-saiba-mais">Saiba Mais</Link>
                    </div>
                </div>

                {/* Perguntas frequentes */}
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
                    
                    {eventos.length > 0 ? 
                    (<>{eventos.map((evento,index)=> 
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
                    </>)
                    :(<> 
                        <p>Estamos sem evento no momento </p>
                    </>)}
                </div>
                
                {/* Botao de venha nos conhecer */}
                <button onClick={() => (window.location.href = "/voluntariado")} class = "defaultButton homePageButton2"
                >Venha nos conhecer!</button>
            </main>
            <Footer />
        </>
    )
}

export default Home;
