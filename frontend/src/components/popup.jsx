import React from "react";
import "../styles/components/popup.css";
import {formatarData} from "../utils/datautils";
import { useState } from "react";


function Popup(props) {

    // Props
    //nome
    //texto
    //botao1nome  
    //botao1funcao
    //botao2nome
    //botao2funcao
    //onNotShow
    //isTextArea

    const [textArea, setTextArea] = useState();

  return (
    <div id = "contPopUpCard">
        <div id = "PopUpTop"><button onClick={props.onNotShow} id = "PopUpXButton" class = "textoBranco">X</button></div>
        <div id="PopUpCentralize">
            <div id = "PopUpTitle" class = "titulo">{props.texto}</div>
            {(props.isTextArea === true &&
                <textarea onChange={(event) => setTextArea(event.target.value)} className="defaultInput rejeitarInput"></textarea>
            )}
            <div id="PopUpButtonCont">
                {(props.isTextArea === false &&
                    <button class = "defaultButton" onClick={() => props.botao1funcao(props.nome)}>{props.botao1nome}</button>
                )}
                {(props.isTextArea === true &&
                    <button class = "defaultButton" onClick={() => props.botao1funcao(props.nome, textArea)}>{props.botao1nome}</button>
                )}
                {(props.botao2nome != "" &&
                    <button class = "defaultButton" onClick={props.botao2funcao}>{props.botao2nome}</button>
                )}
            </div>
        </div>
    </div>
  );
}

export default Popup;