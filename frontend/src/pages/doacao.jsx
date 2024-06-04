import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import DoacaoCard from '../components/doacaoCard';
import '../styles/pages/doacao.css'
import '../styles/pages/voluntariado.css';

function Doacao() {
  return (
    <div className="doacao-container">
      <Header 
        headerText1 = {'Cadastro de Voluntários'}
        isHomePage = {true}
      />
      <div id = "conteinerMaster">
                <div class = "titulo">Veja o que você consegue fazer!</div>
                <div id = "cardMargin">
                    <DoacaoCard
                        color = "#F1C144"
                        image = "public\images\cadastroVoluntario\alimento.png"
                        title = "Doação de produtos"
                        text = "Aceitamos doação de alimento, roupa, produtos de higiene e outros"
                    />
                    <div id="last"><DoacaoCard
                        color = "#FFBA52"
                        image = "public\images\cadastroVoluntario\sopa.png"
                        title = "Preparo do kit de doação"
                        text = "Temos tranalho de cozinhar, montagem de kit e entrega"
                    /></div>
                    <DoacaoCard
                        color = "#FFBA52"
                        image = "public\images\cadastroVoluntario\carro.png"
                        title = "Doação a partir da casa"
                        text = "Retiramos a doação na sua casa"
                    />
                    <DoacaoCard
                        color = "#F1C144"
                        image = "public\images\cadastroVoluntario\casa.png"
                        title = "Visita no Pão Fraterno"
                        text = "Venha conhecer nossa casa!"
                    />
                </div>

        <h1>Como doar?</h1>
            <p>Aceitamos doacoes de alimentos, cobertores, roupas, produtos de limpeza e descartaveis</p>
            <p>Também aceitamos doações em dinheiro, seja no cartão ou pix!</p>
            <p>Sua doação é muito importante para continuarmos nosso caminho de fraternidade!</p>
              <a href='/voluntariado'>  <p>Clique aqui para doar!</p></a>
            
        <div className="image-container">
          <h1>Doação por pix</h1>
          <img src="../public/images/qr.png" alt="Imagem qr code" />
          <div className="text-under">Nome: Joazinho da Silva<br/> Chave Aleatória: dcta478j-196l-03fm-t6gh-4298er7845m2<br /></div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Doacao;
