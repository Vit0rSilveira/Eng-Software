import React from "react";
import "../styles/components/footer.css"
import { FaFacebook,FaInstagram} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
/*  */
function Footer() {
    return (
        <>
        <footer>
            <div class='redes'>
                <p class="redes-text" >Acesse nossas redes</p>
                <div class='redes-icons'>
                    <FaInstagram size={30}/>
                    <FaFacebook size={30}/>
                </div>
            </div>
            <div class='contato'>
                <p> Entre em contato conosco</p>
                <p> paofraterno@gmail.com </p>
                <FaPhone size={30} />
            </div>
            <div class='localizacao'>
                <p><IoLocationSharp size={30} />Localização:</p>
                <p>Rua Alguma Coisa, Bairro não sei o que lá</p>
                <p>Num: 123</p>
                <p>Cep: 123.456-78</p>
            </div>
        </footer>
        </>
    )
}

export default Footer;