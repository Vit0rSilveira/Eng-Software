import '../styles/pages/verificar_cadastros.css'
import HeaderADM from '../components/header_adm'
import React, {useEffect, useState} from 'react';
import { useCookies } from "react-cookie";
import ListaVoluntario from '../components/listaVoluntario.jsx';
import { deleteVoluntario, getVoluntario } from '../services/voluntarioService.jsx';
import { formatarData } from '../utils/datautils.js';
import { useNavigate } from 'react-router-dom';


function VerificarCadastros(props){

    //cookie & navigate
    const [cookies, setCookies, removeCookies] = useCookies(["isLogin"]);
    const navigate = useNavigate()
    
    //ve se o usuario esta login
    useEffect(() => {
        if (!cookies.isLogin)
            navigate("/login")
    }, [])



    const [filtro,setFiltro] = useState('todas')
    const botoes = [
        {texto:'Todas',onClick:()=>{setFiltro('todas')}},
        {texto:'Visita',onClick:()=>setFiltro('visita')},
        {texto:'Doação',onClick:()=>setFiltro('doação')},
        {texto:'Cozinha',onClick:()=>setFiltro('Cozinha')},
        {texto:'Montagem',onClick:()=>setFiltro('montagem')},
        {texto:'Distribuição',onClick:()=>setFiltro('distribuição')},
        {texto:'Retirada',onClick:()=>setFiltro('retirada')},
    ]

    let formularioValues = {
        horario_inicio: '',
        horario_fim: '',
        data:''
    }

    function handleDataChange(event){
        data = event.target.value
    }

    function handleHorarioChange(event,inicio){
        inicio ? formularioValues.horario_inicio = event.target.value
               : formularioValues.horario_fim = event.target.value 
    }

    function aplicarFiltros(voluntarios){
        if(filtro == 'todas'){
            return voluntarios;
        }
        else{
            return voluntarios.filter((v)=>v.tipo == filtro)
        }

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
    useEffect( ()=>{
        loadVoluntarios()
    },[]) //Carregar voluntarios quando iniciar pagina

    let voluntariosFiltrados = aplicarFiltros(voluntarios)

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
                            <button className='defaultButton btn-filtro' onClick={b.onClick}>{b.texto}</button>
                        )}
                    </div>
                </div>
            </div>
            <ListaVoluntario voluntarios={voluntariosFiltrados} callback_excluir={removeVoluntario}/>
        </div>
        </>
    )
}


export default VerificarCadastros;