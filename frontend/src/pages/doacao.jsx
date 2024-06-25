import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import DoacaoCard from '../components/doacaoCard';
import '../styles/pages/doacao.css';
import '../styles/pages/voluntariado.css';
import { Container } from "react-bootstrap";

function Doacao() {
  return (
    <div className="doacao">
      <Header 
        headerText1={'Formas de Ajudar'}
        isHomePage={false}
        page="doacao"
      />
      <div id="conteinerMaster">
        <div className="titulo">Produtos de Doação</div>
        <div id="cardMargin">
          <DoacaoCard
            color="#F1C144"
            title="Alimento"
            text="Aceitamos doação de alimento, optamos por verduras para fazer nossa sopa, porém qualquer alimento é bem vindo!"
          />
          <div id="last">
            <DoacaoCard
              color="#FFBA52"
              title="Recipiente"
              text="Temos também o trabalho de montagem de kit, aceitamos doações de colheres, potes e sacolas para os kits!"
            />
          </div>
          <DoacaoCard
            color="#FFBA52"
            title="Produtos de Higiene"
            text="Aceitamos doações de roupas em geral (inclusive roupas íntimas), sabonetes, escova de dente, shampoo, e outros produtos de higiene tambem!"
          />
          <DoacaoCard
            color="#F1C144"
            title="Dinheiro"
            text="Também aceitamos doações financeiras por pix, dinheiro e cartão!"
          />
        </div>
        <div className="titulo">Formas de Doação</div>
        <div id="cardMargin">
          <DoacaoCard
            color="#FFBA52"
            title="Doação Direta"
            text="Doação Direta
                  Doe direto na casa do Pão Fraterno!
                  Endereço: 
                  Rua Costa do Sol, 450 Vila Costa do Sol São Carlos - SP 13566-070
                  Horário: toda sexta-feira, de 10:00-16:00 (mudar depois)"
          />
          <DoacaoCard
            color="#F1C144"
            title="Doação pela casa"
            text="Doação pela Casa
                  Doe sem sair de sua casa!
                  Procedimento: 
                  Escreva o endereço e horário no formulário abaixo, e nós vamos retirar o produto
                  Horário: toda sexta-feira, de 10:00-16:00 (mudar depois)"
          />
        </div>

        <button onClick={() => (window.location.href = "/voluntariado")} id="doacaoButton" className="defaultButton">
          Clique aqui para começar a sua doação
        </button>

        <div className="text-donate">
          Preparo de kit de doação
        </div>

        <div className="text-donate-bottom">
          Fazemos doação para os moradores de rua do São Carlos toda sexta sem falta
        </div>

        <Container>
          <div id="hist-cinza-cont">
            <div id="hist-cont">
              <div className="text-donate">
                Preparo
              </div>
              <div className="text-donate-bottom-images">
                <p>Etapa de preparação da sopa, o principal produto da doação.</p>
                <p>Horário: 11:00-16:00 toda sexta</p>
                <p>Número médio de pessoas: 6</p>
                <p>Quantidade: X kg</p>
                <img
                  className="img-fluid"
                  src="../../public/images/preparo.png"
                  alt="Preparo"
                />
              </div>
            </div>
          </div>

          <div className="montagem-meio">
            <div className="text-donate">
              Montagem
            </div>
            <div className="text-donate-bottom-images">
              <p>Etapa de montagem do kit de doação.</p>
              <p>Horário: 18:00-20:00 toda sexta</p>
              <p>Número médio de pessoas: 10</p>
              <p>Quantidade: 140 kits</p>
              <img
                className="img-fluid"
                src="../../public/images/montagem.png"
                alt="Montagem"
              />
            </div>
          </div>

          <div id="hist-cinza-cont">
            <div id="hist-cont">
              <div className="text-donate">
                Entrega
              </div>
              <div className="text-donate-bottom-images">
                <p>Etapa de entrega do kit de doação.</p>
                <p>Horário: 20:00-até terminar toda sexta</p>
                <p>Número médio de pessoas: 12</p>
                <img
                  className="img-fluid"
                  src="../../public/images/entrega.png"
                  alt="Entrega"
                />
              </div>   
            </div>
          </div>
        </Container>

        <button onClick={() => (window.location.href = "/voluntariado")} className="defaultButton">
          Clique aqui para ser um de nossos integrantes                
        </button>

        <div id="hist-cinza-cont">
          <div id="hist-cont">
            <div className="text-donate-above">
              Está interessado, mas ainda não sabe o que fazer?
            </div>

            <button onClick={() => (window.location.href = "/voluntariado")} className="defaultButton">
              Aceitamos visitas na casa
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Doacao;