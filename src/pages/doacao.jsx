import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/pages/doacao.css'

function Doacao() {
  return (
    <div className="doacao-container">
      <Header />
      <div className="content">
        <div className="image-container">
          <div className="text-over">SEJA UM DOS DOADORES</div>
          <img src="../public/images/qr.png" alt="Imagem qr code" />
          <div className="text-under">Nome: Joazinho da Silva<br/> Chave Aleatória: dcta478j-196l-03fm-t6gh-4298er7845m2<br /></div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Doacao;
