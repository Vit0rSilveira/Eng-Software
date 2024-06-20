import HeaderADM from '../components/header_adm.jsx';
import Evento from '../components/evento.jsx';
import Colaborador from '../components/colaborador.jsx';
import Noticia from '../components/noticia.jsx';
import '../styles/pages/editar_informacoes.css';
import React, {useState,useEffect} from 'react';
import {getColaborador, postColaborador} from "../services/colaboradorService";
import { getNoticia } from '../services/noticiaService.jsx';
import { getEvento, postEvento } from '../services/eventoService.jsx';
import { formatarData } from '../utils/datautils.js';

function Edit_Info(){
    function Form(props){
        let eventoValues = {
            nome: "",
            imagem:"",
            data: "",
            horario_inicio: "",
            horario_fim: "",
            endereco: "",
        };

        let colaboradorValues ={
            nome:"",
            url:"",
            imagem: "",
            descricao: ""
        }

        let noticiaValues ={
            titulo:"",
            descricao:"",
            url:"",
            data:""
        }

        let selected_file = ''
        
        function handleFileSelection(){
            selected_file = document.getElementById('selecionar-arquivo').files[0]
            let  nome_arquivo = selected_file.name;
            let p = document.getElementById('input-field-fileName')
            p.innerText = nome_arquivo
        }

        //verifica os campos e adicona um elemento
        async function handleBtnAdicionar(selection){
            if(selection == 'eventos'){
                const {nome,data,horario_inicio,horario_fim,endereco} = eventoValues;
                let imagem = selected_file;
                if(!(nome && data && horario_fim && horario_inicio && endereco)){
                    alert("Preencha todos os campos");
                    return;
                }
                try{
                    await postEvento(nome,data,horario_inicio,horario_fim,endereco,imagem)
                }
                catch(error){
                    console.error(error)
                    return;
                }
                const [ano,mes,dia] = eventoValues.data.split('-')
                eventoValues.data = `${dia}/${mes}/${ano}`
                setEventos([...eventos,{...eventoValues}]);
            }
            else if(selection == 'colaboradores'){
                const {nome,url,descricao} = colaboradorValues;
                let imagem = selected_file;
                if(!(nome && url && imagem && descricao)){
                    alert("Preencha todos os campos");
                    return;
                }
                try{
                    await postColaborador(nome,descricao,url,imagem)
                }
                catch(error){
                    console.error(error)
                    return
                }
                setColaboradores([...colaboradores,{...colaboradorValues}])
            }
            else if(selection == 'noticias'){
                const {titulo,descricao,url,data} = noticiaValues;
                if(!(titulo,data)){
                    alert("Preencha os campos necessários");
                    return;
                }
                setNoticias([...noticias,{...noticiaValues}])
            }
            else{
                console.log('unreachable');
            }
            alert("Adicionado com sucesso!");
        }
        
        // funcoes que sao emitidas quando escreve no input
        //eventos
        function handleNomeChange(event){
            eventoValues.nome=event.target.value;
        }

        function handleDataChange(event){
            eventoValues.data = event.target.value;
        }

        function handleHorarioChange(event,inicio){
            inicio ? eventoValues.horario_inicio = event.target.value
                   : eventoValues.horario_fim = event.target.value 
        }

        function handleEnderecoChange(event){
            eventoValues.endereco = event.target.value;
        }

        //colaboradores
        function colabHandleNomeChange(event){
            colaboradorValues.nome=event.target.value;
        }

        function colabHandleDescricaoChange(event){
            colaboradorValues.descricao = event.target.value;
        }

        function colabHandleURLChange(event){
            colaboradorValues.url=event.target.value;
        }
        //noticias
        function notHandleTituloChange(event){
            noticiaValues.titulo=event.target.value;
        }

        function notHandleDescricaoChange(event){
            noticiaValues.descricao=event.target.value;
        }

        function notHandleURLChange(event){
            noticiaValues.url=event.target.value;
        }

        function notHandleDataChange(event){
            noticiaValues.data=event.target.value;
        }


        let selection = props.selection;
        
        //editar eventos
        if(selection == 'eventos'){
            return(
                <div className ='container-edit'>
                    <h1 className="Titulo">Adicionar Evento</h1>
                    <div>
                        <h2>Nome:</h2>
                        <input className="defaultInput" maxlength="50" onChange={handleNomeChange} type='text'></input>
                    </div>
                    <div>
                        <h2>Imagem:</h2>
                        <input type="file" id="selecionar-arquivo" style={{display:'none'}} onChange={handleFileSelection} accept='.png, .jpg, .jpeg'/>
                        <button className='button-choose' onClick={()=> document.getElementById('selecionar-arquivo').click()}>Escolher Foto</button>
                        <p id='input-field-fileName'className='inline-text'></p>
                    </div>
                    <div>
                        <h2>Data:</h2>
                        <input onChange={handleDataChange}type="date"  className='defaultInput input-data'></input>
                    </div>
                    <div>
                        <h2>Horário:</h2>
                        <section>
                            <input onChange={(evento) => handleHorarioChange(evento,true)} type="time" className='defaultInput input-horario'></input>
                            <p className='inline-text'>até</p>
                            <input onChange={(evento) => handleHorarioChange(evento,false)} type="time" className='defaultInput input-horario'></input>
                        </section>
                    </div>
                    <div>
                        <h2>Endereço:</h2>
                        <input  maxlength="100"onChange={handleEnderecoChange} className='defaultInput'></input>
                    </div>
                    <button className='button-adicionar' onClick={()=>handleBtnAdicionar('eventos')}>Adicionar</button>
                </div>
            )
        }


        // editar colaboradores
        else if(selection == 'colaboradores'){
            return(
                <div className ='container-edit'>
                    <h1 className="Titulo">Adicionar Colaborador</h1>
                    <div>
                        <h2>Nome:</h2>
                        <input onChange={colabHandleNomeChange} type='text' className='defaultInput'></input>
                    </div>
                    <div>
                        <h2>Descrição:</h2>
                        <textarea onChange={colabHandleDescricaoChange} id = "outrasInput" class = "TextoEInput defaultInput"  type="text" />
                    </div>
                    <div>
                        <h2>Imagem:</h2>    
                        <input type="file" id="selecionar-arquivo" style={{display:'none'}} onChange={handleFileSelection} accept='.png, .jpg, .jpeg'/>
                        <button className='button-choose' onClick={()=> document.getElementById('selecionar-arquivo').click()}>Escolher Foto</button>
                        <p id='input-field-fileName'className='inline-text'></p>
                    </div>
                    <div>
                        <h2>URL:</h2>
                        <input onChange={colabHandleURLChange} type='text' className='defaultInput'></input>
                    </div>
                    <div className='content'></div>
                    <button className='button-adicionar' onClick={()=>handleBtnAdicionar('colaboradores')}>Adicionar</button>
                </div>
            )
        }


        // editar noticias
        else if(selection == 'noticias'){
            return(
                <div className ='container-edit'>
                    <h1 className="Titulo">Adicionar Notícia</h1>
                    <div>
                        <h2>Título:</h2>
                        <input onChange={notHandleTituloChange} type='text' className='defaultInput'></input>
                    </div>
                    <div>
                        <h2>Data:</h2>    
                        <input onChange={notHandleDataChange} type='text' className='defaultInput'></input>
                    </div>
                    <div>
                        <h2>Imagem:</h2>    
                        <input type="file" id="selecionar-arquivo" style={{display:'none'}} onChange={handleFileSelection} accept='.png, .jpg, .jpeg'/>
                        <button className='button-choose' onClick={()=> document.getElementById('selecionar-arquivo').click()}>Escolher Foto</button>
                        <p id='input-field-fileName'className='inline-text'></p>
                    </div>
                    <div>
                        <h2>Descricao:</h2>
                        <input onChange={notHandleDescricaoChange} type='text' className='defaultInput'></input>
                    </div>
                    <div>
                        <h2>Link:</h2>
                        <input onChange={notHandleURLChange} type='text' className='defaultInput'></input>
                    </div>
                    <div className='content'></div>
                    <button className='button-adicionar' onClick={()=>handleBtnAdicionar('noticias')}>Adicionar</button>
                </div>
            )
        }
    }

    async function loadColaborador(){
        try{
            let colaboradoresBD = await getColaborador()
            for(let i = 0; i < colaboradoresBD.length; i++){
                colaboradoresBD[i].imagem = colaboradoresBD[i].imagem.replace("publico\\imagens\\colaboradores\\", "../../../backend/publico/imagens/colaboradores/")
            }
            setColaboradores(colaboradoresBD)
        }
        catch(e){}
    }
    async function loadEvento(){

        try{
            let eventoTemp = await getEvento()
            eventoTemp.map((e) =>{
                let [datai,horai] = formatarData(e.horario_inicio)
                let [dataf,horaf] = formatarData(e.horario_fim)
                let [data,hora] = formatarData(e.data)

                e.horario_inicio = horai
                e.horario_fim = horaf
                e.data = data
            })
            setEventos(eventoTemp)
        }
        catch(e){}
        
        
    }
    async function loadNoticia(){
        let noticiaTemp = await getNoticia()
        setNoticias(noticiaTemp)
    }

    useEffect( () => {
        loadColaborador()
        loadEvento()
        loadNoticia()
    },[])



    //elementos de teste
    //eventos
    let [selection,setSelection] = useState('eventos');
    let [eventos,setEventos] = useState([]);
    let [colaboradores,setColaboradores] = useState([])
    let [noticias,setNoticias] = useState([])



    let btnEventosClass = '';
    let btnColaboradoresClass='';
    let btnNoticiasClass='';


    if(selection == 'eventos')
        btnEventosClass = 'selected-btn';
    else if(selection == 'colaboradores')
        btnColaboradoresClass = 'selected-btn';
    else if(selection == 'noticias')
        btnNoticiasClass = 'selected-btn';

    function removeEvento(index){
        eventos.splice(index,1)
        setEventos([...eventos]);
    }

    function removeColaborador(index){
        colaboradores.splice(index,1)
        setColaboradores([...colaboradores]);
    }

    function removeNoticia(index){
        noticias.splice(index,1)
        setNoticias([...noticias]);
    }

    return(
        <>
            <HeaderADM page='editar-site'/>
            <h1 className='titulo-pagina'>Editar Site</h1>
            <div id='edit-info'>
                <div className = 'select-mode'>
                    <button className={btnEventosClass} onClick= {()=> setSelection('eventos')}>Eventos</button>
                    <button className={btnColaboradoresClass} onClick= {()=> setSelection('colaboradores')}>Colaboradores</button>
                    <button className={btnNoticiasClass} onClick= {()=> setSelection('noticias')}>Notícias</button>
                </div>
                <Form selection={selection}/>
            </div>

            {selection == 'eventos' &&
                <div id="container-lista">
                {eventos.map((evento,index)=> 
                    <Evento id={index} endereco={evento.endereco} titulo={evento.nome} data={evento.data}
                    horario_fim={evento.horario_fim} horario_inicio={evento.horario_inicio} onClick={removeEvento}/>)}
                </div>

            }

            {selection == 'colaboradores' &&
                <div id='container-lista'>
                    {colaboradores.map((c,index)=> 
                    <Colaborador {...c} index={index} callback={removeColaborador}/>)}
                </div>
            }

            {selection == 'noticias' &&
                <div id='container-lista'>
                    {noticias.map((c,index)=> 
                    <Noticia {...c} index={index} callback={removeNoticia}/>)}
                </div>
            }
            
           
        </>
    )
}

export default Edit_Info;