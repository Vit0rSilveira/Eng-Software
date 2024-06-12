import HeaderADM from '../components/header_adm.jsx';
import Evento from '../components/evento.jsx';
import Colaborador from '../components/colaborador.jsx';
import Noticia from '../components/noticia.jsx';
import '../styles/pages/editar_informacoes.css';
import React, {useState} from 'react';
// import {getColaborador, postColaborador} from "../services/colaboradorService";

function Edit_Info(){
    function Form(props){
        let eventoValues = {
            titulo: "",
            data: "",
            // imagem: "",
            horario_inicio: "",
            horario_fim: "",
            endereco: "",
        };

        let colaboradorValues ={
            nome:"",
            // imagem: "",
            url:""
        }

        let noticiaValues ={
            titulo:"",
            descricao:"",
            // imagem:"",
            url:"",
            data:""
        }
        
        function handleFileSelection(){
            let  nome_arquivo = document.getElementById('selecionar-arquivo').files[0].name;
            let p = document.getElementById('input-field-fileName')
            p.innerText = nome_arquivo
        }

        //verifica os campos e adicona um elemento
        function handleBtnAdicionar(selection){
            if(selection == 'eventos'){
                const {titulo,data,horario_inicio,horario_fim,endereco} = eventoValues;
                if(!(titulo && data && horario_fim && horario_inicio && endereco)){
                    alert("Preencha todos os campos");
                    return;
                }
                setEventos([...eventos,{...eventoValues}]);
            }
            else if(selection == 'colaboradores'){
                const {nome,url} = colaboradorValues;
                if(!(nome,url)){
                    alert("Preencha todos os campos");
                    return;
                }
                setColaboradores([...colaboradores,{...colaboradorValues}])
                
                //coloca o colaborador no banco de dados
                //pode apagar que usei so para colocar uns para testar na pagina de colaborador
                //Kaito Hayashi
                // postColaborador(nome, "descricao", "www", document.getElementById('selecionar-arquivo').files[0])
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
            eventoValues = {};
            alert("Adicionado com sucesso!");
        }
        
        // funcoes que sao emitidas quando escreve no input
        //eventos
        function handleNomeChange(event){
            eventoValues.titulo=event.target.value;
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

        function colabHandleURLChange(event){
            colaboradorValues.url=event.target.value;
        }

        function colabHandleFileChange(event){

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
                        <input type="file" id="selecionar-arquivo" style={{display:'none'}} onChange={handleFileSelection}/>
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
                        <h2>Imagem:</h2>    
                        <input type="file" id="selecionar-arquivo" style={{display:'none'}} onChange={handleFileSelection}/>
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
                        <input type="file" id="selecionar-arquivo" style={{display:'none'}} onChange={handleFileSelection}/>
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



    //elementos de teste
    //eventos
    let [selection,setSelection] = useState('eventos');
    let [eventos,setEventos] = useState([
        {
            titulo: "Brechó de roupas",
            data: "11/05/2024",
            horario_inicio: "12:00",
            horario_fim: "15:00",
            endereco: "Rua Costa do Sol, 450 - Vila Costa do Sol, São Carlos - SP, 13566-070",
        },
        {
            titulo: "Venda de pizza",
            data: "19/05/2024",
            horario_inicio: "11:00",
            horario_fim: "16:00",
            endereco: "Rua Costa do Sol, 450 - Vila Costa do Sol, São Carlos - SP, 13566-070",
        }
    ]);

    //colaboradores
    let [colaboradores,setColaboradores] = useState([
        {
            nome:'Universidade de São Paulo',
            url: 'https://www.usp.br',
            imagem: '../public/images/colaborador/USPLogo.png'
        },
    ]);

    //noticias
    let [noticias,setNoticias] = useState([
        {
            titulo:'Universidade de São Paulo',
            data: '22-11-2024',
            imagem: '../public/images/colaborador/USPLogo.png',
            descricao: "teste",
            url: 'https://www.usp.br'
        },
    ]);



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
                    <Evento id={index} endereco={evento.endereco} titulo={evento.titulo} data={evento.data}
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