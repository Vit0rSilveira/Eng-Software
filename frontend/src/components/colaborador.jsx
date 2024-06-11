import '../styles/components/colaborador.css'
import { FaRegTrashCan } from "react-icons/fa6";


function Colaborador(props){
    const nome = props.nome;
    const url = props.url;
    const imagem = props.imagem;
    const callback = props.callback
    const id = props.id;


    return(
        <>
            <div id='colaborador-container'>
                <div className="colaborador-nome">
                    <p className="textoBranco">{nome}</p>
                </div>
                <div className="colaborador-corpo">
                    <p className='textoBranco '>{url}</p>
                    <img className='colaborador-imagem' src={imagem}></img>
                    <button className="btn-excluir-evento" onClick = {() => callback(id)}>
                        <FaRegTrashCan size={15} color="white"/>
                    </button>
                </div>
            </div>
        </>
    )

}

export default Colaborador;