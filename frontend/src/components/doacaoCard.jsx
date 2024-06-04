import React from "react";
import "../styles/components/doacaoCard.css";

function DoacaoCard(props) {

  const backgroundColor = {backgroundColor: props.color};

  return (
    <div id = "containerDoacaoCard" style={backgroundColor}>
        <img src={props.image} id = "doacaoCardImage"/>
        <div id = "t1" class = "titulo">{props.title}</div>
        <div id = "t2" class = "textoBranco">{props.text}</div>
    </div>
  );
}

export default DoacaoCard;