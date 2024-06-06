import HeaderADM from '../components/header_adm.jsx';
import Evento from '../components/evento.jsx';
import '../styles/pages/editar_informacoes.css';
import React, {useState} from 'react';

function Edit_Info(){
    function Form(props){
        let eventoValues = {
            titulo: "",
            data: "",
            horario_inicio: "",
            horario_fim: "",
            endereco: "",
        };

        let colaboradorValues ={}
        
        function handleFileSelection(){
            let  nome_arquivo = document.getElementById('selecionar-arquivo').files[0].name;
            let p = document.getElementById('input-field-fileName')
            p.innerText = nome_arquivo
        }

        function handleBtnAdicionar(selection){
            if(selection == 'eventos'){
                const {titulo,data,horario_inicio,horario_fim,endereco} = eventoValues;
                console.log(titulo,data,horario_inicio,horario_fim,endereco);
                if(!(titulo && data && horario_fim && horario_inicio && endereco)){
                    alert("Preencha todos os campos");
                    return;
                }
                setEventos([...eventos,{...eventoValues}]);
            }
            else if(selection == 'colaboradores'){
                alert('todo!');
                return;
            }
            else{
                console.log('unreachable');
            }
            eventoValues = {};
            alert("Adicionado com sucesso!");
        }

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

        let selection = props.selection;
        
        if(selection == 'eventos'){
            return(
                <div className ='container-edit'>
                    <h1 className="Titulo">Adicionar Evento</h1>
                    <div>
                        <h2>Nome:</h2>
                        <input maxlength="50" onChange={handleNomeChange} type='text'></input>
                    </div>
                    <div>
                        <h2>Imagem:</h2>
                        <input type="file" id="selecionar-arquivo" style={{display:'none'}} onChange={handleFileSelection}/>
                        <button className='button-choose' onClick={()=> document.getElementById('selecionar-arquivo').click()}>Escolher Foto</button>
                        <p id='input-field-fileName'className='inline-text'></p>
                    </div>
                    <div>
                        <h2>Data:</h2>
                        <input  onChange={handleDataChange}type="date"  className='input-data'></input>
                    </div>
                    <div>
                        <h2>Horário:</h2>
                        <section>
                            <input onChange={(evento) => handleHorarioChange(evento,true)} type="time" className='input-horario'></input>
                            <p className='inline-text'>até</p>
                            <input onChange={(evento) => handleHorarioChange(evento,false)} type="time" className='input-horario'></input>
                        </section>
                    </div>
                    <div>
                        <h2>Endereço:</h2>
                        <input  maxlength="100"onChange={handleEnderecoChange}></input>
                    </div>
                    <button className='button-adicionar' onClick={()=>handleBtnAdicionar('eventos')}>Adicionar</button>
                </div>
            )
        }
        else if(selection == 'colaboradores'){
            return(
                <div className ='container-edit'>
                    <h1 className="Titulo">Adicionar Colaborador</h1>
                    <div>
                        <h2>Nome:</h2>
                        <input type='text'></input>
                    </div>
                    <div>
                        <h2>Imagem:</h2>
                        <input type="file" id="selecionar-arquivo" style={{display:'none'}} onChange={handleFileSelection}/>
                        <button className='button-choose' onClick={()=> document.getElementById('selecionar-arquivo').click()}>Escolher Foto</button>
                        <p id='input-field-fileName'className='inline-text'></p>
                    </div>
                    <div>
                        <h2>URL:</h2>
                        <input type='text'></input>
                    </div>
                    <div className='content'></div>
                    <button className='button-adicionar' onClick={()=>handleBtnAdicionar('colaboradores')}>Adicionar</button>
                    

                </div>
            )
        }
    }

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

    let [colaboradores,setColaboradores] = useState([
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

    let btnEventosClass = '';
    let btnColaboradoresClass='';


    if(selection == 'eventos')
        btnEventosClass = 'selected-btn';
    else if(selection == 'colaboradores')
        btnColaboradoresClass = 'selected-btn';

    function removeEvento(index){
        eventos.splice(index,1)
        setEventos([...eventos]);
    }


    return(
        <>
            <HeaderADM page='editar-site'/>
            <h1 className='titulo-pagina'>Editar Site</h1>
            <div id='edit-info'>
                <div className = 'select-mode'>
                    <button className={btnEventosClass} onClick= {()=> setSelection('eventos')}>Eventos</button>
                    <button className={btnColaboradoresClass} onClick= {()=> setSelection('colaboradores')}>Colaboradores</button>
                </div>
                <Form selection={selection}/>
            </div>
            {selection == 'eventos' 
                ? 
                <div id="container-lista-eventos">
                {eventos.map((evento,index)=> 
                    <Evento id={index} endereco={evento.endereco} titulo={evento.titulo} data={evento.data}
                    horario_fim={evento.horario_fim} horario_inicio={evento.horario_inicio} onClick={removeEvento}/>)}
                </div>

                : 
                
                <div id='container-lista-colaboradores'>
                    
                </div>
            }
            
           
        </>
    )
}

export default Edit_Info;