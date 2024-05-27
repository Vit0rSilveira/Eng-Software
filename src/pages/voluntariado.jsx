import Header from '../components/header';
import VoluntarioCard from '../components/voluntarioCard';
import Footer from '../components/footer';
import '../styles/pages/voluntariado.css';

function Voluntariado(){
    return(
        <>
            <Header 
                headerText1 = {'Cadastro de Voluntários'}
                isHomePage = {false}
            />
            <div id = "conteinerMaster">
                {/* titulo */}
                <div class = "titulo">Veja o que você consegue fazer!</div>
                {/* explicacoes das opcoes de cadastro */}
                <div id = "cardMargin">
                    <VoluntarioCard
                        color = "#F1C144"
                        image = "public\images\cadastroVoluntario\alimento.png"
                        title = "Doação de produtos"
                        text = "Aceitamos doação de alimento, roupa, produtos de higiene e outros"
                    />
                    
                
                    <div id="last"><VoluntarioCard
                        color = "#FFBA52"
                        image = "public\images\cadastroVoluntario\sopa.png"
                        title = "Preparo do kit de doação"
                        text = "Temos tranalho de cozinhar, montagem de kit e entrega"
                    /></div>
                    <VoluntarioCard
                        color = "#FFBA52"
                        image = "public\images\cadastroVoluntario\carro.png"
                        title = "Doação a partir da casa"
                        text = "Retiramos a doação na sua casa"
                    />
                    <VoluntarioCard
                        color = "#F1C144"
                        image = "public\images\cadastroVoluntario\casa.png"
                        title = "Visita no Pão Fraterno"
                        text = "Venha conhecer nossa casa!"
                    />
                </div>
                <a href="/doacao" class="textoLink">Para mais detalhes, clique aqui</a>

                {/* cadastro */}
                <div id="cinzaConteiner">
                    <div class = "titulo">Ajude da sua forma!</div>
                    
                    <div id = "cadastroTextBox">
                        <div id= "cadastroTitleBox" class = "textoBranco">Cadastro de Voluntário</div>
                        <div class="TextoEInput">
                            <div class = "cadastroTexto textoBranco">Nome:</div>
                            <input class = "smallSizeInput defaultInput" type="text"/>
                        </div>
                        <div class="TextoEInput">
                            <div class = "cadastroTexto textoBranco">Email:</div>
                            <input class = "smallSizeInput defaultInput" type="text" />
                        </div>
                        <div class="TextoEInput">
                            <div class = "cadastroTexto textoBranco">Tipo:</div>
                            <input class = "smallSizeInput defaultInput" type="text" />
                        </div>
                        <div class="TextoEInput">
                            <div class = "cadastroTexto textoBranco">Data:</div>
                            <input class = "smallSizeInput defaultInput" type="date" />
                        </div>
                        <div class="TextoEInput">
                            <div class = "cadastroTexto textoBranco">Horário:</div>
                            <input class = "smallSizeInput defaultInput" type="time" />
                            <div class = "textoBranco mx-2">até</div>
                            <input class = "smallSizeInput defaultInput" type="time" />
                        </div>
                        <div class = "TextoEInput textoBranco">Outras informações:</div>
                        <textarea id = "outrasInput" class = "TextoEInput defaultInput"  type="text" />
                        <div id = "buttonPlace">
                            <button id = "cadastroButton" class="defaultButton">Confirmar</button>
                        </div>
                    </div>
                </div>

            </div>
            

            <Footer/>
        </>
    )
}

export default Voluntariado;