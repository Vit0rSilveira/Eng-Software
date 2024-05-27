import React from "react";
import "../styles/components/colaboradorCard.css";

function ColaboradorCard(props) {

  const backgroundColor = {backgroundColor: props.color};

  return (
    <div id = "conteinerColabCard" style={backgroundColor}>
        <img src={props.imagem} id = "conteinerColabImagem"/>
        <div id = "conteinerColabCardDir" >
          <div id = "conteinerColabTitle" class="titulo" >{props.nome}</div>
          <div id = "conteinerColabDescricao" class="titulo">{props.descricao}</div>
          <a href={props.link} target="_blank" id = "conteinerColabLink" class="textoLink">Acese a instituição</a>
        </div>
    </div>


  );
}

export default ColaboradorCard;