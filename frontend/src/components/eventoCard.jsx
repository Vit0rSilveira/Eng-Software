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
      <p2> Endereço: {props.endereco} </p2>
      <div className = "eventos-imagem-cont" >
          <img className = "eventos-imagem" src={props.imagem}/>
      </div>
    </div>
  );
}

export default EventoCard;