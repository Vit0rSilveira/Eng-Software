import '../styles/components/noticia.css'
import { FaRegTrashCan } from "react-icons/fa6";


function Noticia(props){
    const titulo = props.titulo;
    const url = props.url;
    const data = props.data;
    const descricao = props.descricao
    const imagem = props.imagem;
    const callback = props.callback
    const id = props.id;


    return(
        <>
            <div id='noticia-container'>
                <div className="noticia-corpo">
                    <div>
                        <p className='textoBranco '>Título: {titulo}</p>
                        <p className='textoBranco '>Data: {data}</p>

                    </div>
                    <button className="btn-excluir-evento" onClick = {() => callback(id)}>
                        <FaRegTrashCan size={15} color="white"/>
                    </button>
                </div>
            </div>
        </>
    )

}

export default Noticia;