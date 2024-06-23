import React from "react";
import "../styles/components/footer.css"
import { FaFacebook,FaInstagram} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
/*  */
function Footer() {
    return (
        <>
        <footer>
            <div class='redes'>
                <p class="contrast-text media-hide" >Acesse nossas redes:</p>
                <div class='redes-icons'>
                    <a href="https://www.instagram.com/grupopaofraternoandreluiz/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                        <FaInstagram size={30}/>
                    </a>
                    <a href="https://www.facebook.com/groups/960934403960292?locale=id_ID" target="_blank" rel="noopener noreferrer"  style={{ color: 'inherit' }}>
                        <FaFacebook size={30}/>
                    </a>
                </div>
            </div>
            <div class='contato'>
                <p class='contrast-text media-hide'> Entre em contato conosco:</p>
                <p> paofraterno@gmail.com </p>
                <p> +55 (16) 99192-4555 </p>
                <div class='media-hide'><FaPhone size={30} /></div>
            </div>
            <div class='localizacao'>
                <p class='contrast-text media-hide'><IoLocationSharp size={30} />Localização:</p>
                <p>R. Costa do Sol,450 - Vila Costa do Sol</p>
                <p>São Carlos - SP</p>
                <p class='media-hide'>CEP: 13566-070</p>
            </div>
        </footer>
        </>
    )
}

export default Footer;