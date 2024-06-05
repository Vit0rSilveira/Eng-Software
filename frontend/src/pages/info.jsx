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
                        Falar sobre: area de atuacao, que tipo de grupo, numero de pessoas envolvidas envolvidas. 
                        Pode mudar a altura do conteiner conforme o tamanho do texto e imagem colocado. 
                        Deixar um espaco entre `saiba mais` e o texto. 
                        </p>
                    </div>
                </div>


                {/* Objetivo */}
                <div id = "objetivo-cont">
                    <div id = "objetivo-titulo" className='titulo'>
                        Objetivo
                    </div>
                    <p id="objetivo-texto" className = "textoBranco">
                    Escrever sobre o objetivo. Pode escrever outra coisa tambem aaaaaaa aaa aaaaa aaaaaaa aaaaaaaaaaaa aaaaaaa aaaaaaaa aaa aaaa aaaaaaaaaaaaaaaaaaaaaa.  aaaaaaaaaaaa aaaaaaa aaaaaaaa aaa aaaa aaaaaaaaaaaaaaaaaaaaaa.  aaaaaaaaaaaa aaaaaaa aaaaaaaa aaa aaaa aaaaaaaaaaaaaaaaaaaaaa.
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
                                aaaaaaa aaa aaaaa aaa aaaa aa aaaaa aaaaaaa aa aaa aaaaaaa aaaaa aaa aaaa a aaaaaaa aaa aaaaa aa aaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaaa aaaaaa aaa a aaaa aaa aaa aaaaa a
                            </div>
                            <img id = "kitAlim-img" src={`${imgDir}montagem.png`} alt="" />
                        </div>
                        <div id="kitAlim-subcont">
                            <img id = "kitAlim-img" src={`${imgDir}entrega.png`} alt="" />
                            <div id="kitAlim-texto" className='textoBranco'>
                            aaaaaaa aaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaa aaaaaa aaaa a aaaaaaa aaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaaaaaa aaaa a aaaa aaa aaa aaaaa a
                            </div>
                        </div>
                    </div>
                    {/* Aparece apenas no site pequeno */}
                    <div className='hideInBigDisplay'>
                        <div id="kitAlim-subcont">
                            <img id = "kitAlim-img" src={`${imgDir}montagem.png`} alt="" />
                            <div id="kitAlim-texto" className='textoBranco'>
                                aaaaaaa aaa aaaaa aaa aaaa aa aaaaa aaaaaaa aa aaa aaaaaaa aaaaa aaa aaaa a aaaaaaa aaa aaaaa aa aaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaaa aaaaaa aaa a aaaa aaa aaa aaaaa a
                                aaaaaaa aaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaa aaaaaa aaaa a aaaaaaa aaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaaaaaa aaaa a aaaa aaa aaa aaaaa a
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
                        aaaaaaa aaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaaaaaaaaaa a aaaaaaa aaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaaaaaaaaaa a aaaa aaa aaa a
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
                                aaaaaaa aaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaa aaaaaa aaaa a aaaaaaa aaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaaaaaa aaaa a aaaa aaa aaa aaaaa a
                                aaaaaaa aaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaa aaaaaa aaaa a aaaaaaa aaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaaaaaa aaaa a aaaa aaa aaa aaaaa a
                                aaaaaaa aaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaa aaaaaa aaaa a aaaaaaa aaa aaaaa aaaaaaa aaaaa a
                                </div>
                            </div>
                            <div id="hist-subcont">
                                <div id="hist-texto" className='textoLaranja'>
                                    aaaaaaa aaa aaaaa aaa aaaa aa aaaaa aaaaaaa aa aaa aaaaaaa aaaaa aaa aaaa a aaaaaaa aaa aaaaa aa aaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaaa aaaaaa aaa a aaaa aaa aaa aaaaa a
                                    a aaa aaaaaaa aaaaa aaa aaaa a aaaaaaa aaa aaaaa aa aaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaaa aaaaaa aaa a aaaa aaa aaa aaaaa a
                                </div>
                                <img id = "hist-img" src={`${imgDir}historia2.png`} alt="" />
                            </div>
                        </div>
                        <div className='hideInBigDisplay'>
                            <div id="hist-subcont">
                                <img id = "hist-img" src={`${imgDir}historia1.png`} alt="" />
                                <div id="hist-texto" className='textoLaranja'>
                                aaaaaaa aaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaa aaaaaa aaaa a aaaaaaa aaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaaaaaa aaaa a aaaa aaa aaa aaaaa a
                                aaaaaaa aaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaa aaaaaa aaaa a aaaaaaa aaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaaaaaa aaaa a aaaa aaa aaa aaaaa a
                                aaaaaaa aaa aaaaa aaaaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaa aaaaaa aaaa a aaaaaaa aaa aaaaa aaaaaaa aaaaa a
                                aaaaaaa aaa aaaaa aaa aaaa aa aaaaa aaaaaaa aa aaa aaaaaaa aaaaa aaa aaaa a aaaaaaa aaa aaaaa aa aaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaaa aaaaaa aaa a aaaa aaa aaa aaaaa a
                                    a aaa aaaaaaa aaaaa aaa aaaa a aaaaaaa aaa aaaaa aa aaaaa aaaaa aaaaaaa aaaaa aaaaaaa aaaa aaaaaa aaa a aaaa aaa aaa aaaaa a
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