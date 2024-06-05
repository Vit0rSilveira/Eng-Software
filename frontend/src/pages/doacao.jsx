import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import DoacaoCard from '../components/doacaoCard';
import '../styles/pages/doacao.css'
import '../styles/pages/voluntariado.css';
import { Container } from "react-bootstrap";

function Doacao() {
  return (
    <div className="doacao">
      <Header 
        headerText1 = {'Formas de Ajudar'}
        isHomePage = {false}
      />
      <div id = "conteinerMaster">
                <div class = "titulo">Produtos de Doação</div>
                <div id = "cardMargin">
                    <DoacaoCard
                        color = "#F1C144"
                        title = "Alimento"
                        text = "Aceitamos doação de alimento, optamos por verduras para fazer nossa sopa, porém qualquer alimento é bem vindo!"
                    />
                    <div id="last"><DoacaoCard
                        color = "#FFBA52"
                        title = "Recipiente"
                        text = "Temos trabalho de cozinhar, montagem de kit e entrega, aceitamos doações de recipientes e talheres descartáveis!"
                    /></div>
                    <DoacaoCard
                        color = "#FFBA52"
                        title = "Produtos de Higiene"
                        text = "Aceitamos doações de sabonetes, papel toalha e produtos de cozinha tambem!"
                    />
                    <DoacaoCard
                        color = "#F1C144"
                        title = "Dinheiro"
                        text = "Também aceitamos doações financeiras por pix, dinheiro e cartão!"
                    />
                </div>
                <div class = "titulo">Formas de Doação</div>
                <div id = "cardMargin">
                <DoacaoCard
                        color = "#FFBA52"
                        
                        title = "Doação Direta"
                        text = "Doação Direta
                                Doe direto na casa do Pão Fraterno!
                                Endereço: 
                                Rua Costa do Sol, 450 Vila Costa do Sol São Carlos - SP 13566-070
                                Horário: 
                                Escrever os horários de atendimento"
                    />
                    <DoacaoCard
                        color = "#F1C144"
                        
                        title = "Doação pela casa"
                        text = "Doação pela Casa
                                Doe sem sair de sua casa!
                                Procedimento: 
                                Escreva o endereço e horário no formulário abaixo, e nós vamos retirar o produto
                                Horário: 
                                Escrever os horários de atendimento"
                    />
              </div>

              <button class = "defaultButton "
                >Clique aqui para começar a sua doação
              </button>

              <div class = "text-donate"
                >Preparo de kit de doação
              </div>

              <div class = "text-donate-bottom"
                >Fazemos doação para os moradores de rua do São Carlos toda sexta
              </div>

              <Container>
                <div class = "text-donate">
                <img
                    className="img-fluid"
                    src="../../public/images/preparo.png"
                    alt="First slide"
                />
                  Preparo
                </div>
                <div class = "text-donate-bottom">
                  <p>Etapa de preparaçao da sopa, o principal produto da doação.</p>
                  <p>Horário: 11:00-16:00   toda sexta</p>
                  <p>Escrever a quantidade feita, numero de pessoas etc</p>
                </div>
                <div class = "text-donate">
                  Montagem
                </div>
                <div class = "text-donate-bottom">
                  <p>Etapa de motagem do kit de doação.</p>
                  <p>Horário: 18:00-20:00   toda sexta</p>
                  <p>Escrever a quantidade feita, numero de pessoas etc</p>
                  <img
                    className="img-fluid"
                    src="../../public/images/montagem.png"
                    alt="First slide"
                />
                </div>
                <div class = "text-donate">
                <img
                    className="img-fluid"
                    src="../../public/images/entrega.png"
                    alt="First slide"
                />
                  Entrega
                </div>
                <div class = "text-donate-bottom">
                  <p>Etapa de entrega do kit de doação.</p>
                  <p>Horário: 20:00-   toda sexta</p>
                  <p>Escrever a quantidade feita, numero de pessoas etc</p>
                </div>                
              </Container>

              <button class = "defaultButton "
                >Clique aqui para ser um de nossos integrantes
              </button>

              <div class = "text-donate-above">
                  Está interessado, mas ainda não sabe o que fazer?
              </div>

              <button class = "defaultButton "
                >Aceitamos visitas na casa
              </button>

       
      </div>
      <Footer />
    </div>
  );
}

export default Doacao;
