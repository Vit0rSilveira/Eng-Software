import React from "react";
import "../styles/components/voluntarioCard.css";

function VoluntarioCard(props) {

  const backgroundColor = {backgroundColor: props.color};

  return (
    <div id = "containerMaster" style={backgroundColor}>
        <img src={props.image} id = "image"/>
        <div id = "t1" class = "titulo">{props.title}</div>
        <div id = "t2" class = "textoBranco">{props.text}</div>
    </div>
  );
}

export default VoluntarioCard;