import React from "react";
import "../styles/components/header.css"
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {

    function handleMenuClick(){
        let a = document.getElementsByName('menu')[0];
        let clss = a.classList;
        clss.toggle('show')        
    }

    return (
        <>
        <header>
            <div id="logo">
                <a href='/'><img src="../../public/images/logo2.jpg" alt="Logotipo do Pão Fraterno" id="logo-pao-fraterno"/></a>
                <h4 >Pão Fraterno</h4>
                <h4>André Luiz</h4>
            </div>
            <ul class='collapse-xl header-ul'>
                <li> <a href='/info'>Quem somos</a></li>
                <li> <a href='/acoes'>Notícias</a></li>
                <li> <a href='/doacao'>Doação</a></li>
                <li> <a href='/voluntariado'>Seja voluntário</a></li>
                <li> <a href='/patrocinadores'>Colaboradores</a></li>
            </ul>
            <div class='show-xl'>
                <RxHamburgerMenu onClick= {handleMenuClick} size={60}/>
            </div>
        </header>
        <ul name='menu' class='header-ul menu-onclick'>
                <a href='/info'><li>Quem Somos</li></a>
                <a href='/acoes'><li>Notícias</li></a>
                <a href='/doacao'><li>Doação</li></a>
                <a href='/voluntariado'><li>Seja um Voluntário</li></a>
                <a href='/patrocinadores'><li>Patrocinadores</li></a>
        </ul>
        </>

    )
}

export default Header;