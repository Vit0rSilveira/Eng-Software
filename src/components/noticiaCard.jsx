import React from "react";
import "../styles/components/noticiaCard.css";

function NoticiaCard(props) {

  return (
    <div id = "containerNoticiaCard">
        <img src={props.image} id = "image"/>
        <a href = "" id = "saibaMais" class = "textoLink">Saiba Mais</a>
        <div id = "t1" class = "titulo">{props.title}</div>
    </div>


  );
}

export default NoticiaCard;