import HeaderADM from '../components/header_adm.jsx';
import '../styles/pages/editar_informacoes.css';
import React, {useState} from 'react';

function Edit_Info(){
    
    const [selection,setSelection] = useState('eventos');

    let btnEventosClass = '';
    let btnColaboradoresClass='';


    if(selection == 'eventos')
        btnEventosClass = 'selected-btn';
    else if(selection == 'colaboradores')
        btnColaboradoresClass = 'selected-btn';

    function handleBtnAdicionar(){
        alert("Adicionado com sucesso!");
    }

    function Form(props){

        function handleFileSelection(){
            let  nome_arquivo = document.getElementById('selecionar-arquivo').files[0].name;
            let p = document.getElementById('input-field-fileName')
            p.innerText = nome_arquivo
        }
        let selection = props.selection;
        if(selection == 'eventos'){
            return(
                <div className ='container-edit'>
                    <h1 className="Titulo">Adicionar Evento</h1>
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
                        <h2>Data:</h2>
                        <input type="text" className='input-data' placeholder='dd/mm/yyyy'></input>
                    </div>
                    <div>
                        <h2>Horário:</h2>
                        <input type="text" className='input-horario' placeholder='HH:MM'></input>
                        <p className='inline-text'>até</p>
                        <input type="text" className='input-horario' placeholder="HH:MM"></input>
                    </div>
                    <div>
                        <h2>Endereço:</h2>
                        <input></input>
                    </div>
                    <button className='button-adicionar' onClick={handleBtnAdicionar}>Adicionar</button>
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
                    <button className='button-adicionar' onClick={handleBtnAdicionar}>Adicionar</button>
                    

                </div>
            )
        }
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
        </>
    )
}

export default Edit_Info;