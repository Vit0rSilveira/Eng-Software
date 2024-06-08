import '../styles/pages/verificar_voluntarios.css'
import HeaderADM from '../components/header_adm'
import React, {useState} from 'react';

function VerificarVoluntarios(props){

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

    return(
        <>
        <HeaderADM page='verificar-voluntarios'/>
        <div id='verificar-voluntarios-container'>
            <div id='formulario'>
                <h1 className=''>Filtros</h1>
                <div className='selecao-filtros'>
                    <h2 className='textoBranco'>Tipo:</h2>
                    <div className='container-opcoes-filtro'>
                        {botoes.map((b,index) =>
                            <button className='btn-filtro'>{b.texto}</button>
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
                    <button className='btn-adicionar' onClick={()=>None}>Buscar</button>
                </div>
            </div>
        </div>
        </>
    )
}


export default VerificarVoluntarios;