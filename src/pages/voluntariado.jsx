import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/pages/voluntariado.css';

function Voluntariado(){
    return(
        <>
            <Header/>
            <div id = 'voluntariado'>

                <div class = 'infos-contato'>
                    <h1>Agendamento de visita</h1>
                    <div class='info'>
                        <p> Nome Completo</p>
                        <input class='input'></input>
                    </div>

                    <div class='info'>
                            <p>Email</p>
                            <input class ='input'></input>
                    </div>

                    <div class='info'>
                        <p>Telefone</p>
                        <input class='input'></input>
                    </div>

                    <div class='info'>
                        <p class='input'>Motivo</p>
                        <select>
                            <option value="0">Preparo</option>
                            <option value="1">Montagem</option>
                            <option value="2">Entrega</option>
                            <option value="3">Visita</option>
                            <option value="4">Doação</option>
                            <option value="5">Outros</option>
                            {/* Depois fazer aparecer os inputs customizados para cada opcao */}
                        </select>
                    </div>

                    <div class='info'>
                        <p class='input'>Horário</p>
                        <input class='input'></input>
                        {/* Depois mudar para lista de selecao de horario(pode escolher mais de 1) */}
                    </div>

                    <div class='info'>
                        <p class='input'>Outras informações</p>
                        <textarea class='input-info-pessoal' cols="80" rows="5" maxLength={200}></textarea>
                    </div>
                    <button class="enviar-button">Enviar</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Voluntariado;