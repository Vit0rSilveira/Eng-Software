import HeaderADM from '../components/header_adm';
import '../styles/pages/crud_conta_sucesso.css';


function CrudContaSucesso(){

    return(
        <>
            <HeaderADM/>

            <div class = "titulo"  id = "contLoginConf">
                <div id = "textoLoginConf">
                    As informações da conta foram 
                    <br />
                    modificadas com sucesso
                </div>
                <button onClick={() => (window.location.href = "/cadastro")} className="defaultButton" id="botaoLoginConf">
                    Voltar para o site
                </button>
            </div>
        </>
    )
}

export default CrudContaSucesso;