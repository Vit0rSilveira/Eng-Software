import React from "react";
import "../styles/components/eventoCard.css";

function EventoCard(props) {

  const dataString =  props.data
  const data = new Date(dataString)
  const hInicialString =  props.horarioInicio
  const hInicial = new Date(hInicialString)
  const hFimString =  props.horarioFim
  const hFim = new Date(hFimString)

  const dia = data.getDate()
  const mes = data.getMonth()+1
  const horaI = hInicial.getHours();
  const minutoI = hInicial.getMinutes();
  const horaF = hFim.getHours();
  const minutoF = hFim.getMinutes();
  // const horarioI = 
  // const horarioF = 

  return (
    <div className="eventos-text">
          <h2 className="titulo eventos-titulo"> {props.nome}    Dia: {mes}/{dia}     {horaI}:{minutoI}-{horaF}:{minutoF}   </h2>
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