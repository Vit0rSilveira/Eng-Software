import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import DoacaoCard from '../components/doacaoCard';
import '../styles/pages/doacao.css'
import '../styles/pages/voluntariado.css';

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
                        text = "Aceitamos doação de alimento, roupa, produtos de higiene e outros"
                    />
                    <div id="last"><DoacaoCard
                        color = "#FFBA52"
                    
                        title = "Recipiente"
                        text = "Temos tranalho de cozinhar, montagem de kit e entrega"
                    /></div>
                    <DoacaoCard
                        color = "#FFBA52"
                        
                        title = "Produtos de Higiene"
                        text = "Retiramos a doação na sua casa"
                    />
                    <DoacaoCard
                        color = "#F1C144"
                        
                        title = "Dinheiro"
                        text = "Venha conhecer nossa casa!"
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
       
      </div>
      <Footer />
    </div>
  );
}

export default Doacao;
