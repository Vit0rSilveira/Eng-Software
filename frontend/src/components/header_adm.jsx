import "../styles/components/header_adm.css"
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export function HeaderADM(props){

    //abas para serem colocados no header
    const header_items = [
        {nome:'verificar-cadastros',ref:'/verificar-cadastros',texto:'Verificar Voluntários'},
        {nome:'editar-conta',ref:'/crud-conta',texto:'Editar Conta'},
        {nome:'editar-site',ref:'/edit-info',texto:'Editar Site'},
        {nome:'logout',ref:'/',texto:'Sair'}
    ];

    //remove o cookie caso sair do modo administrador
    const [cookies, setCookies, removeCookies] = useCookies(["isLogin"]);
    function verificarSaida(item){
        if(item.nome == 'logout') 
            removeCookies("isLogin")
    }

    //hamburguer
    function handleMenuClick(){
        let a = document.getElementsByName('menu')[0];
        let clss = a.classList;
        clss.toggle('show')        
    }

    const pagina_atual = props.page;

    return (
    <>
        <header id ="header-adm">
            <div id="logo">
                <a href='/'><img src="../../public/images/logo2.jpg" alt="Logotipo do Pão Fraterno" id="logo-pao-fraterno"/></a>
            </div>

            <div id='headeradm-content-container'>
                {/* para telas grandes */}
                <ul class='collapse-xl header-adm-ul'>
                    {header_items.map((i) => i.nome == pagina_atual
                    ? <li class='header-adm-li selected-page'><a href = {i.ref}>{i.texto} </a></li>
                    : <li class='header-adm-li'><a onClick={()=>verificarSaida(i)} href = {i.ref}>{i.texto} </a></li>
                    )}
                </ul>

                {/* para telas pequenas */}
                <div class='show-xl'>
                    <RxHamburgerMenu onClick= {handleMenuClick} size={60}/>
                </div>
            </div>

        </header>

        {/* para telas pequenas */}
        <ul name = 'menu' class='header-adm-ul menu-onclick show-xl'>
            {header_items.map((i) => (
                <>
                    <li class='header-adm-li'><a onClick={()=>verificarSaida(i)} href = {i.ref}>{i.texto} </a></li>
                    <div class = "boxline"></div>
                </>
            ))}
        </ul>
    </>
    )
}

export default HeaderADM;