import React from "react";
import "../styles/components/eventoCard.css";
import {formatarData} from "../utils/datautils";

function EventoCard(props) {

  const [data, nulo] = formatarData(props.data)
  const [nulo2, horarioInicio] = formatarData(props.horarioInicio)
  const [nulo3, horarioFim] = formatarData(props.horarioFim)

  return (
    <div className="eventos-text">
          <h2 className="titulo eventos-titulo"> {props.nome}    Dia: {data}     {horarioInicio}-{horarioFim}   </h2>
          <p2>  {props.endereco} </p2>
    </div>
    // <div id = "containerDoacaoCard" style={backgroundColor}>
    //     <img src={props.image} id = "doacaoCardImage"/>
    //     <div id = "t1" class = "titulo">{props.title}</div>
    //     <div id = "t2" class = "textoBranco">{props.text}</div>
    // </div>
  );
}

export default EventoCard;