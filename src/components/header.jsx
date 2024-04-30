import React from "react";
import "../styles/components/header.css"
import { Link } from "react-router-dom";

function Header() {

    return (
        <header>
            <div id="logo">
                <img src="../../public/images/logo.jpg" alt="Logotipo do Pão Fraterno" id="logo-pao-fraterno"/>
                <h4>Grupo Pão Fraterno</h4>
                <h4>André Luiz</h4>
            </div>
            <ul>
                <li>Quem Somos</li>
                <li>Notícias</li>
                <li>Doação</li>
                <li>Seja um Voluntário</li>
                <li>Seja um patrocinador</li>
                </ul>
        </header>

    )
}

export default Header;