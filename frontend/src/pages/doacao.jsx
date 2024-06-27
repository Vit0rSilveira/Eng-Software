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
      {/* Produtos de doacao */}
        <div className="prod-doacao-titulo titulo">Produtos que podem ser doados</div>
          {/* Alimento */}
          <div className="prod-doacao-cont">
            <p className="prod-doacao-subtitulo titulo">Alimento</p>
            <div className="prod-doacao-separador"></div>
            <p className="prod-doacao-texto textoBranco">Aceitamos doação de alimento, optamos por verduras para fazer nossa sopa, porém qualquer alimento é bem vindo!</p>
          </div>
          {/* Recipiente */}
          <div className="cor-recipiente prod-doacao-cont">
            <p className="prod-doacao-subtitulo titulo">Recipiente</p>
            <div className="prod-doacao-separador"></div>
            <p className="prod-doacao-texto textoBranco">Temos também o trabalho de montagem de kit, aceitamos doações de colheres, potes e sacolas para os kits!</p>
          </div>
          {/* Produto de higiene */}
          <div className="cor-higiene prod-doacao-cont">
            <p className="prod-doacao-subtitulo titulo">Produto de Higiene</p>
            <div className="prod-doacao-separador"></div>
            <p className="prod-doacao-texto textoBranco">Aceitamos doações de roupas em geral (inclusive roupas íntimas), sabonetes, escova de dente, shampoo, e outros produtos de higiene tambem!</p>
          </div>
          {/* Roupa */}
          <div className="cor-roupa prod-doacao-cont">
            <p className="prod-doacao-subtitulo titulo">Roupa</p>
            <div className="prod-doacao-separador"></div>
            <p className="prod-doacao-texto textoBranco">Aceitamos doações de roupas em geral (inclusive roupas íntimas), sabonetes, escova de dente, shampoo, e outros produtos de higiene tambem!</p>
          </div>
          {/* Dinheiro */}
          <div className="cor-dinheiro prod-doacao-cont">
            <p className="prod-doacao-subtitulo titulo">Dinheiro</p>
            <div className="prod-doacao-separador"></div>
            <p className="prod-doacao-texto textoBranco">Também aceitamos doações financeiras por pix, dinheiro e cartão!</p>
          </div>
        

        {/* Formas de doacao */}
        <p className="forma-doacao-bigtitulo titulo">Formas de Doação</p>
        <div id="forma-doacao-pos">
          {/* Doacao direta */}
          <div className="forma-doacao-cont">
            <p className="forma-doacao-titulo titulo">Doação Direta</p>
            <p className="center-texto textoBranco">Doe direto na casa do Pão Fraterno!</p>
            <p className="forma-doacao-subtitulo textoBranco">Endereço:</p>
            <p className="textoBranco">Rua Costa do Sol, 450 Vila Costa do Sol São Carlos - SP 13566-070</p>
            <p className="forma-doacao-subtitulo textoBranco">Horário:</p>
            <p className="textoBranco">Toda sexta-feira, 10:00-16:00 (mudar depois)</p>
          </div>
          {/* Doe sem sair de sua casa */}
          <div className="forma-doacao-color2 forma-doacao-cont">
            <p className="forma-doacao-titulo titulo">Retirada de doação</p>
            <p className="center-texto textoBranco">Doe sem sair de sua casa!</p>
            <p className="forma-doacao-subtitulo textoBranco">Procedimento:</p>
            <p className="textoBranco">Escreva o endereço e horário no formulário abaixo, e nós vamos retirar o produto</p>
            <p className="forma-doacao-subtitulo textoBranco">Horário:</p>
            <p className="textoBranco">Horário: toda sexta-feira, de 10:00-16:00 (mudar depois)</p>
          </div>
        </div>


        {/* Botao para voluntario */}
        <button onClick={() => (window.location.href = "/voluntariado")} className="textoLink textoLink-doacao">
          Clique aqui para começar a sua doação
        </button>


        {/*Trabalho Fraterno */}
        <div className="trab-frat-titulo-cont">
          <p className="titulo">Trabalho Fraterno</p>
          <p className="textoLaranja centralize-text">Fazemos doação para os moradores de rua do São Carlos toda sexta sem falta</p>
        </div>
        {/* Preparo */}
        <div className="trab-frat-cont cinza-conteiner">
            <img src="../../public/images/preparo.png" className="trab-frat-img" alt="Preparo" />
            <div className="trab-frat-textcont">
              <p className="trab-frat-subtitulo titulo">Preparo</p>
              <p className="textoLaranja">Etapa de preparação da sopa</p>
              <p className="textoLaranja">Horário: 11:00-16:00 toda sexta</p>
              <p className="trab-frat-bordafina textoLaranja">Número médio de pessoas: 6</p>
              <p className="trab-frat-bordafina textoLaranja">Quantidade: 150L de sopa</p>
            </div>
        </div>
         {/* Montagem */}
        <div className="trab-frat-cont">
            <div className="trab-frat-textcont">
              <p className="trab-frat-subtitulo titulo">Montagem</p>
              <p className="textoLaranja">Etapa de preparação da sopa</p>
              <p className="textoLaranja">Horário: 11:00-16:00 toda sexta</p>
              <p className="trab-frat-bordafina textoLaranja">Número médio de pessoas: 6</p>
              <p className="trab-frat-bordafina textoLaranja">Quantidade: 150L de sopa</p>
            </div>
            <img src="../../public/images/montagem.png" className="trab-frat-img" alt="Montagem" />
        </div>
        {/* Entrega */}
        <div className="trab-frat-cont cinza-conteiner">
            <img src="../../public/images/entrega.png" className="trab-frat-img" alt="Entrega" />
            <div className="trab-frat-textcont">
              <p className="trab-frat-subtitulo titulo">Entrega</p>
              <p className="textoLaranja">Etapa de entrega do kit de doação</p>
              <p className="textoLaranja">Horário: 20:00-até terminar toda sexta</p>
              <p className="trab-frat-bordafina textoLaranja">Número médio de pessoas: 12</p>
            </div>
        </div>


        {/* Botao para voluntario */}
        <p onClick={() => (window.location.href = "/voluntariado")} className="textoLink textoLink-doacao">
          Clique aqui para ser um de nossos integrantes                
        </p>


        {/* Aceitar visita */}
        <div className="cinza-conteiner aceitar-visita-cont">
          <p className="titulo aceitar-visita-titulo">Está interessado, mas ainda não sabe o que fazer?</p>
          <button onClick={() => (window.location.href = "/voluntariado")} className="defaultButton">
            Aceitamos visitas na casa
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Doacao;