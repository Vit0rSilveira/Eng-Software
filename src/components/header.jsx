import React from "react";
import "../styles/components/header.css"
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {

    function handleMenuClick(){
        let a = document.getElementsByName('menu')[0];
        let clss = a.classList[0];
        if(clss == 'menu-onclick-hidden'){
            a.classList.remove('menu-onclick-hidden');
            a.classList.add('menu-onclick-show');
            return;
        }
        a.classList.remove('menu-onclick-show');
        a.classList.add('menu-onclick-hidden');
        
    }

    return (
        <>
        <header>
            <div id="logo">
                <a href='/'><img src="../../public/images/logo.jpg" alt="Logotipo do Pão Fraterno" id="logo-pao-fraterno"/></a>
                <h4 >Grupo Pão Fraterno</h4>
                <h4>André Luiz</h4>
            </div>
            <ul class='collapse-xl'>
                <li> <a href='#'>Quem somos</a></li>
                <li> <a href='#'>Notícias</a></li>
                <li> <a href='#'>Doação</a></li>
                <li> <a href='/voluntariado'>Seja um voluntário</a></li>
                <li> <a href='/patrocinadores'>Seja um patrocinador</a></li>
            </ul>
            <div class='show-xl'>
                <RxHamburgerMenu onClick= {handleMenuClick} size={60}/>
            </div>
        </header>
        <ul name='menu' class='menu-onclick-hidden'>
                <a href='#'><li>Quem Somos</li></a>
                <a href='#'><li>Notícias</li></a>
                <a href='#'><li>Doação</li></a>
                <a href='/voluntariado'><li>Seja um Voluntário</li></a>
                <a href='/patrocinadores'><li>Seja um patrocinador</li></a>
        </ul>
        </>

    )
}

export default Header;