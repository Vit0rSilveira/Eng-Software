import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/pages/voluntariado.css';

function Voluntariado(){
    return(
        <>
            <Header/>
            <div id = 'voluntariado'>
                <div class = 'infos-contato'>
                    <h1> Informações para contato</h1>
                    <div class='info-nome'>
                        <p class='text-nome'> Nome Completo</p>
                        <input class='input-nome'></input>
                    </div>
                    <div class='info-email-telefone'>
                        <div class='info-email'>
                            <p>Email</p>
                            <input class ='input-email'></input>
                        </div>
                        <div class='info-telefone'>
                            <p>Telefone</p>
                            <input class='input-telefone'></input>
                        </div>
                    </div>
                    <div class='info-pessoal'>
                        <h1>Sobre você</h1>
                        <p class='text-info-pessoal'>Nos conte mais sobre você, sua motivação e como pretende nos ajudar</p>
                        <textarea class='input-info-pessoal' cols="40" rows="5" maxLength={200}></textarea>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Voluntariado;