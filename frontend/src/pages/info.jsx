import '../styles/pages/info.css';
import Header from '../components/header';
import Footer from '../components/footer';

function Info(){

    const imgDir = "../public/images/quemSomos/"

    return(
        <>
            <Header 
                headerText1 = {'Pão Fraterno'}
                headerText2 = {'André Luiz'}
                page = "quem-somos"
            />


            <div id = "info-cont">

            {/* Quem Somos */}
                <div id = "quem-cont">
                    <img id = "quem-img" src={`${imgDir}casaDoCaminho.png`} alt="" />
                    <div id = "quem-texto-cont">  
                        <p id="quem-titulo" className = "titulo">
                            Quem Somos
                        </p>
                        <p id="quem-barra"></p>
                        <p id="quem-texto" className = "textoLaranja">
                        Somos uma organização do São Carlos, com o objetivo de ajudar os moradores de rua.
                        Hoje, estamos com aproximadamente 40 pessoas voluntárias na organização.   
                        </p>
                        <p id="quem-texto" className = "textoLaranja">
                        Atuamente somos parte da ONG Casa do Caminho, onde são juntam várias entidades de caráter de assistência social.
                        </p>
                    </div>
                </div>


                {/* Objetivo */}
                <div id = "objetivo-cont">
                    <div id = "objetivo-titulo" className='titulo'>
                        Objetivo
                    </div>
                    <p id="objetivo-texto" className = "textoBranco">
                        Nosso objetivo é levar a fraternidade aos irmãos, através do alimento físico e espiritual quando desejado,
                        tentando auxiliar na caminhada da vida.
                    </p>
                </div>

                {/* Principais atividades */}
                <div id = "atv-titulo" className='titulo'>Principais atividades</div>
                {/* Doacao de kit de alimento*/}
                <div id = "kitAlim-cont">
                    <div id = "kitAlim-titulo" className='titulo'>
                        Doações de kit de alimento
                    </div>
                    {/* Para tela grande */}
                    <div className='hideInSmallDisplay'>
                        <div id="kitAlim-subcont">
                            <div id="kitAlim-texto" className='textoBranco'>
                                A nossa principal atividade é a doação de kit de alimentos, toda sexta, passando pela toda a cidade do São Carlos.
                                Entregamos sopa, bolo, água, e para quem precisar, roupas e produtos de higiene. 
                            </div>
                            <img id = "kitAlim-img" src={`${imgDir}montagem.png`} alt="" />
                        </div>
                        <div id="kitAlim-subcont">
                            <img id = "kitAlim-img" src={`${imgDir}entrega.png`} alt="" />
                            <div id="kitAlim-texto" className='textoBranco'>
                            A atividade de doação é separada em 4 partes: coleta/compra de produtos, preparação de sopa, montagem de kit e entrega. 
                            Em cada etapa trabalhamos, em média, com 10 pessoas.
                            </div>
                        </div>
                    </div>
                    {/* Aparece apenas no site pequeno */}
                    <div className='hideInBigDisplay'>
                        <div id="kitAlim-subcont">
                            <img id = "kitAlim-img" src={`${imgDir}montagem.png`} alt="" />
                            <div id="kitAlim-texto" className='textoBranco'>
                                A nossa principal atividade é a doação de kit de alimentos, toda sexta, passando pela toda a cidade do São Carlos.
                                Entregamos sopa, bolo, água, e para quem precisar, roupas e produtos de higiene. 
                            </div>
                            <div id="kitAlim-texto" className='textoBranco'>
                                A atividade de doação é separada em 4 partes: coleta/compra de produtos, preparação de sopa, montagem de kit e entrega. 
                                Em cada etapa trabalhamos, em média, com 10 pessoas.
                            </div>
                        </div>
                    </div>
                </div>
                
                
                {/* Eventos */}
                <div id = "evento-cont">
                    <div id = "evento-titulo" className='titulo'>
                        Eventos
                    </div>
                    <div id="evento-subcont">
                        <img id = "evento-img" src={`${imgDir}montagem.png`} alt="" />
                        <div id="evento-texto" className='textoBranco'>
                            Os eventos ocorrem, em média, de 3 em 3 meses.
                            Todo o dinheiro arrecadado nesses eventos são guardados e utilizadas para compras de produtos de doação.
                            Qualquer pessoa poderá participar dos eventos. Será uma boa oportunidade de nos conhecer!
                        </div>
                    </div>
                </div>
                
                {/* Historia */}
                <div id="hist-cinza-cont">
                    <div id="hist-cont">

                        <div id="hist-titulo" className='titulo'>História</div>
                        <div className='hideInSmallDisplay'>
                            <div id="hist-subcont">
                                <img id = "hist-img" src={`${imgDir}historia1.png`} alt="" />
                                <div id="hist-texto" className='textoLaranja'>
                                Somos uma fraternidade de São Carlos que surgiu nos anos 90, criada pelos alunos da USP de São Carlos.
                                Atualmente, somos uma parte da ONG Casa do Caminho, onde são juntam várias entidades de caráter de assistência social. 
                                Somos uma fraternidade de São Carlos que surgiu nos anos 90, criada pelos alunos da USP de São Carlos.
                                Atualmente, somos uma parte da ONG Casa do Caminho, onde são juntam várias entidades de caráter de assistência social. 
                                </div>
                            </div>
                            <div id="hist-subcont">
                                <div id="hist-texto" className='textoLaranja'>
                                Somos uma fraternidade de São Carlos que surgiu nos anos 90, criada pelos alunos da USP de São Carlos.
                                Atualmente, somos uma parte da ONG Casa do Caminho, onde são juntam várias entidades de caráter de assistência social.
                                 
                                </div>
                                <img id = "hist-img" src={`${imgDir}historia2.png`} alt="" />
                            </div>
                        </div>
                        <div className='hideInBigDisplay'>
                            <div id="hist-subcont">
                                <img id = "hist-img" src={`${imgDir}historia1.png`} alt="" />
                                <div id="hist-texto" className='textoLaranja'>
                                Somos uma fraternidade de São Carlos que surgiu nos anos 90, criada pelos alunos da USP de São Carlos.
                                Atualmente, somos uma parte da ONG Casa do Caminho, onde são juntam várias entidades de caráter de assistência social. 
                                </div>
                                <div id="hist-texto" className='textoLaranja'>
                                Somos uma fraternidade de São Carlos que surgiu nos anos 90, criada pelos alunos da USP de São Carlos.
                                Atualmente, somos uma parte da ONG Casa do Caminho, onde são juntam várias entidades de caráter de assistência social. 
                                </div>
                                <div id="hist-texto" className='textoLaranja'>
                                Somos uma fraternidade de São Carlos que surgiu nos anos 90, criada pelos alunos da USP de São Carlos.
                                Atualmente, somos uma parte da ONG Casa do Caminho, onde são juntam várias entidades de caráter de assistência social. 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Info;