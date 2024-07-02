import '../styles/components/listaVoluntario.css'
import { FaRegTrashCan } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


export function ItemVoluntario(props){

    function TextoVoluntario({tipo,endereco,produto,motivo}){
        if(tipo == 'doação'){
            
            return <p>Produtos: {produto}</p>
        }
        else if(tipo == 'visita')
            return <p>Motivo: {motivo}</p>
        else if(tipo == 'retirada'){
            return <p>Endereço: {endereco}</p>
        }
        return <></>
            
    }

    let nome = props.nome
    let horario_inicio = props.horario_inicio;
    let horario_fim = props.horario_fim;
    let tipo = props.tipo;
    let data = props.data;
    let email = props.email;
    let telefone = props.telefone;
    let callback_excluir = props.callback_excluir;
    let callback_confirmar = props.callback_confirmar;

    // somente um desses vai ter valor, os outros serao undefined
    let endereco = props.endereco;
    let motivo = props.motivo;
    let produto = props.produto;

    let horario = horario_fim ? horario_inicio + '-' + horario_fim : horario_inicio;
    
    return(
        <>
            <div id='voluntario-container'>
                <div className="voluntario-info">
                    <h2 className="">{nome}</h2>
                    <h2 className="">Tipo: {tipo}</h2>
                    <h2 className="">Data: {data}</h2>
                    <h2 className="">{horario}</h2>
                </div>
                <div className="voluntario-corpo">
                    <TextoVoluntario tipo ={tipo} endereco = {endereco} motivo={motivo} produto={produto}/>
                    <p>Email: {email}</p>
                    <p>Telefone: {telefone}</p>
                </div>
                <div id='voluntario-botoes'>
                    <button className='btn-confirmar' onClick={()=>callback_confirmar(nome)}>
                        <FaCircleCheck size={36} color='#12970d'/>
                    </button>
                    <button className='btn-excluir' onClick={()=>callback_excluir(nome)}>
                        <FaRegTrashCan size={20} color="white"/>
                    </button>
                </div>
                
            </div>
        </>
    )
}
export function ListaVoluntarios(props){
    let voluntarios = props.voluntarios
    return(
        <>
            <div id='lista-voluntarios'>
                {voluntarios.map(
                    (v,index) => <ItemVoluntario {...v} key={index} callback_excluir={props.callback_excluir} callback_confirmar={props.callback_confirmar}/>
                    )}
            </div>
        </>
    )
}

export default ListaVoluntarios
