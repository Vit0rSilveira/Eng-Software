import '../styles/pages/verificar_cadastros.css'
import HeaderADM from '../components/header_adm'
import React, {useEffect, useState} from 'react';
import { useCookies } from "react-cookie";
import ListaVoluntario from '../components/listaVoluntario.jsx';
import PopUp from "../components/popup.jsx";
import { deleteVoluntario, getVoluntario, getVoluntarioNome } from '../services/voluntarioService.jsx';
import { formatarData } from '../utils/datautils.js';
import { envia_email } from '../utils/utils';
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

    // funcoes para popup
    const[isShow, setShow] = useState(false);
    const [popup, setPopup] = useState({
        nome: "",
        texto: "",
        botao1nome: "",
        botao1funcao: "",
        botao2nome: "",
        botao2funcao: "",
        isTextArea: false
    })
    const showPopUp = (props) => {
        setShow(true)
        setPopup(props)
    }
    const cancelPopUp = () => {
        setShow(false)
    }


    //tipos de filtros
    const [filtro,setFiltro] = useState('todas')
    const botoes = [
        {texto:'Todas',onClick:()=>{setFiltro('todas')}},
        {texto:'Visita',onClick:()=>setFiltro('visita')},
        {texto:'Doação',onClick:()=>setFiltro('doação')},
        {texto:'Cozinha',onClick:()=>setFiltro('cozinha')},
        {texto:'Montagem',onClick:()=>setFiltro('montagem')},
        {texto:'Distribuição',onClick:()=>setFiltro('entrega')},
        {texto:'Retirada',onClick:()=>setFiltro('retirada')},
    ]

    function aplicarFiltros(voluntarios){
        if(filtro == 'todas'){
            return voluntarios;
        }
        else{
            return voluntarios.filter((v)=>v.tipo == filtro)
        }
    }


    let [voluntarios,setVoluntarios] = useState([])

    async function loadVoluntarios(){
        try{
            let voluntarioTemp = await getVoluntario()

            //apaga o voluntario que ja passou o dia
            voluntarioTemp.map((v) =>{
                //formatacoes
                let ontem = new Date();
                ontem.setDate(ontem.getDate() + 1)
                ontem = ontem.toISOString()
                //apagar
                if(v.data <= ontem)
                    try{
                        deleteVoluntario(v.nome)
                    }
                    catch(error){
                        console.log('Erro na remoção do voluntário')
                        return;
                    }
            })
            
            //formata dado
            voluntarioTemp.map((v) =>{
                let [datai,horai] = formatarData(v.horario_inicio)
                let [dataf,horaf] = formatarData(v.horario_fim)
                let [data,hora] = formatarData(v.data)
                
                v.horario_inicio = horai
                v.horario_fim = horaf
                v.data = data
            })

            //ordena
            voluntarioTemp.sort((a, b) => {
                if(a.data != b.data) return a.data.localeCompare(b.data);
                else return a.horario_inicio.localeCompare(b.horario_inicio)
            })

            setVoluntarios(voluntarioTemp)
        }
        catch(e){}
    }


    //popup de confirmacao de aceita
    async function confirmaVoluntario(nome){
        //pega do voluntario do banco
        let voluntario 
        try{
            voluntario = await getVoluntarioNome(nome)
        }
        catch(error){
            alert('Erro na obtenção do voluntário')
            return;
        }

        //mensagem de confirmacao
        const propriedade = {
            nome: voluntario.nome,
            texto: "Deseja enviar o email de confirmação para " + voluntario.nome + "?",
            botao1nome: "Sim",
            botao1funcao: voluntarioConfirmado,
            botao2nome: "Não",
            botao2funcao: cancelPopUp,
            isTextArea: false
        }
        showPopUp(propriedade)
    }
    //aceita e apaga o voluntario
    async function voluntarioConfirmado(nome)
    {
        //pega voluntario do banco
        let voluntario 
        try{
            voluntario = await getVoluntarioNome(nome)
        }
        catch(error){
            alert('Erro na obtenção do voluntário')
            return;
        }

        //Formatacao da mensagem do email
        let [nulo1,horario_inicio] = formatarData(voluntario.horario_inicio)
        let [nulo2,horario_final] = formatarData(voluntario.horario_fim)
        let [data,nulo3] = formatarData(voluntario.data)
        let mensagem2
        if(voluntario.tipo == 'retirada')
            mensagem2 = 'Espere a nossa chegada no endereço ' +  voluntario.endereco
        else
            mensagem2 = 'Venha até a Casa do Caminho, no endereço R. Costa do Sol,450 - Vila Costa do Sol São Carlos - SP'
        const conteudo = {
            assunto: 'Confirmação do Cadastro',
            nome: voluntario.nome,
            mensagem: 'O seu cadastro de ' + voluntario.tipo + ' no dia ' + data + ', de ' + horario_inicio + ' até ' +horario_final + ' foi aceito!',
            mensagem2: mensagem2
        };

        //envio de email
        envia_email(voluntario.email, conteudo)
            .then((response) => {
                // // remove o voluntario
                try{
                    deleteVoluntario(nome)
                }
                catch(error){
                    alert('Erro na remoção do voluntário')
                    return;
                }

                //mostra o popup de mensagem de confirmacao
                const propriedade = {
                    texto: "Foi enviado a mensagem de confirmação!",
                    botao1nome: "Confirmar",
                    botao1funcao: cancelPopUp,
                    botao2nome: "",
                    isTextArea: false
                }
                showPopUp(propriedade)
            })
            .catch((error) => {
                cancelPopUp()
                alert('Erro ao enviar o email: ' + error.text);
        });

        loadVoluntarios()
    }

    //popup de confirmacao de rejeicao
    async function confirmaRemoveVoluntario(nome){
        const propriedade = {
            nome: nome,
            texto: "Escreva o motivo de rejeição do " + nome + " em uma linha",
            botao1nome: "Enviar",
            botao1funcao: removeVoluntario,
            botao2nome: "",
            isTextArea: true
        }
        showPopUp(propriedade)
    }
    //rejeita e apaga o voluntario
    async function removeVoluntario(nome, textoRejeicao){
        //pega voluntario do banco
        let voluntario 
        try{
            voluntario = await getVoluntarioNome(nome)
        }
        catch(error){
            alert('Erro na obtenção do voluntário')
            return;
        }

        //Formatacao da mensagem do email
        let [nulo1,horario_inicio] = formatarData(voluntario.horario_inicio)
        let [nulo2,horario_final] = formatarData(voluntario.horario_fim)
        let [data,nulo3] = formatarData(voluntario.data)
        const conteudo = {
            assunto: 'Rejeição do Cadastro',
            nome: voluntario.nome,
            mensagem: 'O seu cadastro de ' + voluntario.tipo + ' no dia ' + data + ', de ' + horario_inicio + ' até ' +horario_final + ' foi rejeitado por seguinte motivo:',
            mensagem2: textoRejeicao
        };

        envia_email(voluntario.email, conteudo)
            .then((response) => {
                // // remove o voluntario
                try{
                    deleteVoluntario(nome)
                }
                catch(error){
                    alert('Erro na remoção do voluntário')
                    return;
                }

                //mostra o popup de mensagem de rejeicao
                const propriedade = {
                    texto: "Foi enviado a mensagem de rejeição!",
                    botao1nome: "Confirmar",
                    botao1funcao: cancelPopUp,
                    botao2nome: "",
                    isTextArea: false
                }
                showPopUp(propriedade)
            })
            .catch((error) => {
                cancelPopUp()
                alert('Erro ao enviar o email: ' + error.text);
        });
        loadVoluntarios()
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
            <ListaVoluntario voluntarios={voluntariosFiltrados} callback_excluir={confirmaRemoveVoluntario} callback_confirmar={confirmaVoluntario}/>
        </div>

        {(isShow === true &&
            <div id = "popupCont">
                <PopUp
                    nome = {popup.nome}
                    texto = {popup.texto}   
                    botao1funcao = {popup.botao1funcao}   
                    botao1nome = {popup.botao1nome}
                    botao2funcao = {popup.botao2funcao}   
                    botao2nome = {popup.botao2nome}
                    onNotShow = {cancelPopUp}
                    isTextArea = {popup.isTextArea}
                />
            </div>
        )}
        </>
    )
}


export default VerificarCadastros;