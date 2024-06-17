import '../styles/pages/verificar_cadastros.css'
import HeaderADM from '../components/header_adm'
import React, {useState} from 'react';
import ListaVoluntario from '../components/listaVoluntario.jsx';
import { useStore } from '../zustand/store';


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


    let voluntarios=[
        {
            nome:'Kaito Hayashi',
            tipo:'doação',
            data:'11/05/2024',
            horario_inicio:'11:00',
            horario_fim:'',
            descricao:['5kg arroz','2kg cereja'],
            email:'kaito.hayashi@gmail.com',
            telefone:'1192382941',
        },
        {
            nome:'Gabriel Faccini',
            tipo:'visita',
            data:'19/05/2024',
            horario_inicio:'12:00',
            horario_fim:'15:00',
            descricao:['Quero conhecer a orgaqnizacao'],
            email:'gabriel_faccini@gmail.com',
            telefone:'1192382941',
        }
    ]

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
            <ListaVoluntario voluntarios={voluntarios}/>
        </div>
        </>
    )
}


export default VerificarCadastros;