import React from "react";
import "../styles/components/noticiaCard.css";

function NoticiaCard(props) {

  return (
    <div id = "containerNoticiaCard">
        <img src={props.image} id = "image"/>
        <button onClick={() => props.onShow(props)} class = "saibaMais textoLink">Saiba Mais</button>
        <div id = "noticiaTitle" class = "titulo">{props.title}</div>
    </div>


  );
}

export default NoticiaCard;