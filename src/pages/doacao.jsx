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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda consectetur sed aliquid libero! Aliquid deserunt laudantium suscipit maxime inventore recusandae esse eos sunt nesciunt porro ut, iste vel perferendis quaerat.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi dolorem error excepturi nemo doloremque? Maxime, nihil, mollitia accusamus assumenda earum, nulla quia rem quibusdam voluptatibus natus totam molestias provident saepe.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit maiores qui enim quia. Ipsam, quidem quis suscipit non delectus cupiditate, ut inventore debitis numquam quam enim doloribus voluptate sunt laborum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odit distinctio, saepe placeat tempore debitis recusandae amet, porro omnis vel eveniet commodi illo non totam inventore, sit doloremque excepturi quas?<a href='/voluntariado'> Clique aqui para doar!</a></p>
            
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
