import React from "react";
import "../styles/components/noticiaDetailedCard.css";
import {formatarData} from "../utils/datautils";


function NoticiaDetaildCard(props) {

  const [data, nulo] = formatarData(props.data)

  return (
    <div id = "contNoticiaDetCard">
        <div id = "noticiaDetTop"><button onClick={props.onNotShow} id = "noticiaDetXButton" class = "textoBranco">X</button></div>
        <div id = "noticiaDetTopScroll"> 
          <div id="noticiaDetCentralize">
            <div id = "noticiaDetTitle" class = "titulo">{props.title}</div>
            <div id = "noticiaDetData" class = "titulo">{data}</div>
            <img src={props.image} id = "noticiaDetImage"/>
            <div id = "noticiaDetDescricao" class = "textoLaranja">{props.descricao}</div>
          </div>
          <a href={props.link} target="_blank" id = "noticiaDetLink" class = "textoLink">Clique aqui para mais informações</a>
        </div>
    </div>


  );
}

export default NoticiaDetaildCard;