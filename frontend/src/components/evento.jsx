import { FaRegTrashCan } from "react-icons/fa6";
import '../styles/components/evento.css'


function Evento(props){

    let id = props.id;
    let data = props.data;
    let endereco = props.endereco;
    let hora_inicio = props.horario_inicio;
    let hora_fim = props.horario_fim;
    let titulo = props.titulo;
    let callback = props.onClick;

    return(
        <>
        <div id='evento-container'>
            <div className="evento-titulo">
                {/* <p className="textoBranco">{id}</p> */}
                <p className="textoBranco">{titulo}</p>
                <p className='textoBranco'>{data}</p>
                <p className="textoBranco">{hora_inicio + '-' + hora_fim}</p>
            </div>
            <div className="evento-endereco">
                <p className='textoBranco texto-endereco-evento'>{endereco}</p>
                <button className="btn-excluir-evento" onClick = {() => callback(id)}>
                    <FaRegTrashCan size={15} color="white"/>
                </button>
            </div>
        </div>
        </>
    )
}

export default Evento;