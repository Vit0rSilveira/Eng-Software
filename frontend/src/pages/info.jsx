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


            <div className = "info-cont">
            {/* Quem Somos */}
                <div className = "quem-cont">
                    <img className = "quem-img" src={`${imgDir}casaDoCaminho.png`} alt="" />
                    <div className = "quem-texto-cont">  
                        <p className="quem-titulo titulo">
                            Quem Somos
                        </p>
                        <p className="quem-barra"></p>
                        <p className="quem-texto textoLaranja">
                        Somos uma organização do São Carlos, com o objetivo de ajudar os moradores de rua.
                        Hoje, estamos com aproximadamente 40 pessoas voluntárias na organização.   
                        </p>
                        <p className="quem-texto textoLaranja">
                        Atuamente somos parte da ONG Casa do Caminho, onde são juntam várias entidades de caráter de assistência social.
                        </p>
                    </div>
                </div>


                {/* Objetivo */}
                <div className = "objetivo-cont">
                    <div className = "objetivo-titulo titulo">
                        Objetivo
                    </div>
                    <p className="objetivo-texto textoBranco">
                        Nosso objetivo é levar a fraternidade aos irmãos, através do alimento físico e espiritual quando desejado,
                        tentando auxiliar na caminhada da vida.
                    </p>
                </div>

                {/* Principais atividades */}
                <div className = "atv-titulo titulo">Principais atividades</div>
                {/* Doacao de kit de alimento*/}
                <div className = "kitAlim-cont">
                    <div className = "kitAlim-titulo titulo">
                        Doações de kit de alimento
                    </div>

                    {/* Para tela grande */}
                    <div className='hideInSmallDisplay'>
                        <div className="kitAlim-subcont">
                            <div className="kitAlim-texto textoBranco">
                                A nossa principal atividade é a doação de kit de alimentos, toda sexta, passando pela toda a cidade do São Carlos.
                                Entregamos sopa, bolo, água, e para quem precisar, roupas e produtos de higiene. 
                            </div>
                            <img className = "kitAlim-img" src={`${imgDir}montagem.png`} alt="" />
                        </div>
                        <div className="kitAlim-subcont">
                            <img className = "kitAlim-img" src={`${imgDir}entrega.png`} alt="" />
                            <div className="kitAlim-texto textoBranco">
                            A atividade de doação é separada em 4 partes: coleta/compra de produtos, preparação de sopa, montagem de kit e entrega. 
                            Em cada etapa trabalhamos, em média, com 10 pessoas.
                            </div>
                        </div>
                    </div>
                    {/* Aparece apenas no site pequeno */}
                    <div className='hideInBigDisplay'>
                        <div className="kitAlim-subcont">
                            <img className = "kitAlim-img" src={`${imgDir}montagem.png`} alt="" />
                            <div className="kitAlim-texto textoBranco">
                                A nossa principal atividade é a doação de kit de alimentos, toda sexta, passando pela toda a cidade do São Carlos.
                                Entregamos sopa, bolo, água, e para quem precisar, roupas e produtos de higiene. 
                            </div>
                            <div className="kitAlim-texto textoBranco">
                                A atividade de doação é separada em 4 partes: coleta/compra de produtos, preparação de sopa, montagem de kit e entrega. 
                                Em cada etapa trabalhamos, em média, com 10 pessoas.
                            </div>
                        </div>
                    </div>
                </div>
                
                
                {/* Eventos */}
                <div className = "evento-cont">
                    <div className = "evento-info-titulo titulo">
                        Eventos
                    </div>
                    <div className="evento-subcont">
                        <img className = "evento-img" src={`${imgDir}montagem_kit.png`} alt="" />
                        <div className="evento-texto textoBranco">
                            Os eventos ocorrem, em média, de 3 em 3 meses.
                            Todo o dinheiro arrecadado nesses eventos são guardados e utilizadas para compras de produtos de doação.
                            Qualquer pessoa poderá participar dos eventos. Será uma boa oportunidade de nos conhecer!
                        </div>
                    </div>
                </div>
                
                {/* Historia */}
                <div className="hist-cinza-cont">
                    <div className="hist-cont">

                        <div className="hist-titulo titulo">História</div>
                        <div className='hideInSmallDisplay'>
                            <div className="hist-subcont">
                                <img className = "hist-img" src={`${imgDir}casaDoCaminho.png`} alt="" />
                                <div className="hist-texto textoLaranja">
                                Somos uma fraternidade de São Carlos que surgiu nos anos 90, criada pelos alunos da USP de São Carlos.
                                Atualmente, somos uma parte da ONG Casa do Caminho, onde são juntam várias entidades de caráter de assistência social. 
                                Somos uma fraternidade de São Carlos que surgiu nos anos 90, criada pelos alunos da USP de São Carlos.
                                Atualmente, somos uma parte da ONG Casa do Caminho, onde são juntam várias entidades de caráter de assistência social. 
                                </div>
                            </div>
                            <div className="hist-subcont">
                                <div className="hist-texto textoLaranja">
                                Somos uma fraternidade de São Carlos que surgiu nos anos 90, criada pelos alunos da USP de São Carlos.
                                Atualmente, somos uma parte da ONG Casa do Caminho, onde são juntam várias entidades de caráter de assistência social.
                                 
                                </div>
                                <img className = "hist-img" src={`${imgDir}entrega.png`} alt="" />
                            </div>
                        </div>
                        <div className='hideInBigDisplay'>
                            <div className="hist-subcont">
                                <img className = "hist-img" src={`${imgDir}historia1.png`} alt="" />
                                <div className="hist-texto textoLaranja">
                                Somos uma fraternidade de São Carlos que surgiu nos anos 90, criada pelos alunos da USP de São Carlos.
                                Atualmente, somos uma parte da ONG Casa do Caminho, onde são juntam várias entidades de caráter de assistência social. 
                                </div>
                                <div className="hist-texto textoLaranja">
                                Somos uma fraternidade de São Carlos que surgiu nos anos 90, criada pelos alunos da USP de São Carlos.
                                Atualmente, somos uma parte da ONG Casa do Caminho, onde são juntam várias entidades de caráter de assistência social. 
                                </div>
                                <div className="hist-texto textoLaranja">
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