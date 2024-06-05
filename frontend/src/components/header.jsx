// Componente de Header

// Exemplo de Uso:
    //<Header 
        //headerText1 = {'Linha1'} 
        //headerText2 = {'Linha2'}/>
        //isHomePage = {true}/>
        //isImage = {true}/>
//Coloque apenas o headerText1 caso tenha somente uma linha no header
//default do isHomePage = false
//default do isImage = true

import React from "react";
import "../styles/components/padrao.css"
import "../styles/components/header.css"
import { RxHamburgerMenu } from "react-icons/rx";

function Header(props) {

    function handleMenuClick(){
        let a = document.getElementsByName('menu')[0];
        let clss = a.classList;
        clss.toggle('show')        
    }

    return (
        <>

        <header>
            {/* logo */}
            <div id="logo">
                <a href='/'><img src="../../public/images/logo2.jpg" alt="Logotipo do Pão Fraterno" id="logo-pao-fraterno"/></a>
            </div>
            {/* navbar */}
            <ul class='collapse-xl header-ul'>
                <li> <a href='/info'>Quem somos</a></li>
                <li> <a href='/doacao'>Doação</a></li>
                <li> <a href='/voluntariado'>Seja voluntário</a></li>
                <li> <a href='/acoes'>Notícias</a></li>
                <li> <a href='/patrocinadores'>Colaboradores</a></li>
            </ul>
            {/* hamburguer */}
             <div class='show-xl'>
                <RxHamburgerMenu onClick= {handleMenuClick} size={60}/>
            </div>
        </header>
        {/* menu para telas pequenas */}
        <ul name='menu' class='header-ul show-xl header-menu-onclick'>
                <a href='/info'><li>Quem Somos</li></a>
                <div class = "boxline"></div>
                <a href='/doacao'><li>Doação</li></a>
                <div class = "boxline"></div>
                <a href='/voluntariado'><li>Seja um Voluntário</li></a>
                <div class = "boxline"></div>
                <a href='/acoes'><li>Notícias</li></a>
                <div class = "boxline"></div>
                <a href='/patrocinadores'><li>Colaboradores</li></a>
        </ul>
        {props.isImage ? (<></>):(
            <>
                <div id='headerImage'>
                    <h1>{props.headerText1}<br/>{props.headerText2}</h1>
                    {props.isHomePage ? (<button class = "defaultButton homePageButton">Venha nos conhecer!</button>):(<></>)}
                </div>
            </>
        )}
        </>

    )
}

export default Header;