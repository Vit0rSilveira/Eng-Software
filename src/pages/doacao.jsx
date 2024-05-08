import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/pages/doacao.css'

function Doacao() {
  return (
    <div className="doacao-container">
      <Header />
      <div className="content">
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
