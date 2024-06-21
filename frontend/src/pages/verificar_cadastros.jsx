import '../styles/pages/verificar_cadastros.css'
import HeaderADM from '../components/header_adm'
import React, {useEffect, useState} from 'react';
import ListaVoluntario from '../components/listaVoluntario.jsx';
import { useStore } from '../zustand/store';
import { deleteVoluntario, getVoluntario } from '../services/voluntarioService.jsx';
import { formatarData } from '../utils/datautils.js';


function VerificarCadastros(props){

    const teste = useStore((state) => state.usuario)
    console.log("teste cadastro", teste)
    const [filtro,setFiltro] = useState('Todas')
    const botoes = [
        {texto:'Todas',onClick:()=>setFiltro('Todas')},
        {texto:'Visita',onClick:()=>setFiltro('Visita')},
        {texto:'Doação',onClick:()=>setFiltro('Doação')},
        {texto:'Preparo',onClick:()=>setFiltro('Preparo')},
        {texto:'Montagem',onClick:()=>setFiltro('Monstagem')},
        {texto:'Distribuição',onClick:()=>setFiltro('Distribuição')},
        {texto:'Retirada',onClick:()=>setFiltro('Retirada')},
    ]

    let formularioValues = {
        horario_inicio: '',
        horario_fim: '',
        data:''
    }

    function handleDataChange(){

    }

    function handleHorarioChange(event,inicio){
        inicio ? formularioValues.horario_inicio = event.target.value
               : formularioValues.horario_fim = event.target.value 
    }

    let [voluntarios,setVoluntarios] = useState([])

    async function removeVoluntario(nome){
        if(!confirm('Deseja mesmo excluir o voluntário: ' + nome)){
            return;
        }

        try{
            deleteVoluntario(nome)
            alert("Voluntário removido com sucesso!")
        }
        catch(error){
            alert('Não foi possível remover este voluntário')
            return;
        }
        loadVoluntarios()
    }
    async function loadVoluntarios(){
        try{
            let voluntarioTemp = await getVoluntario()
            voluntarioTemp.map((v) =>{
                let [datai,horai] = formatarData(v.horario_inicio)
                let [dataf,horaf] = formatarData(v.horario_fim)
                let [data,hora] = formatarData(v.data)

                v.horario_inicio = horai
                v.horario_fim = horaf
                v.data = data
            })
            setVoluntarios(voluntarioTemp)
        }
        catch(e){}
    }
    useEffect( ()=>{ loadVoluntarios()},[]) //Carregar voluntarios quando iniciar pagina

    return(
        <>
        <HeaderADM page='verificar-cadastros'/>
        <div id='verificar-voluntarios-container'>
            <div id='formulario'>
                <h1 className=''>Filtros</h1>
                <div className='selecao-filtros'>
                    <h2 className='textoBranco'>Tipo:</h2>
                    <div className='container-opcoes-filtro'>
                        {botoes.map((b,index) =>
                            <button className='defaultButton btn-filtro'>{b.texto}</button>
                        )}
                    </div>
                </div>
                <div>
                    <h2>Data:</h2>
                    <input  onChange={handleDataChange} type="date"  className='defaultInput input-data'></input>
                </div>
                <div>
                    <h2>Horário:</h2>
                    <section>
                        <input onChange={(evento) => handleHorarioChange(evento,true)} type="time" className='defaultInput input-horario'></input>
                        <p className='inline-text'>até</p>
                        <input onChange={(evento) => handleHorarioChange(evento,false)} type="time" className='defaultInput input-horario'></input>
                    </section>
                </div>
                <div className='container-btn'>
                    <button className='defaultButton btn-adicionar' onClick={()=>None}>Buscar</button>
                </div>
            </div>
            <ListaVoluntario voluntarios={voluntarios} callback_excluir={removeVoluntario}/>
        </div>
        </>
    )
}


export default VerificarCadastros;