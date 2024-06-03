import "../styles/components/header_adm.css"

export function HeaderADM(props){

    const header_items = [
        {nome:'verificar-voluntarios',ref:'',texto:'Verificar Voluntários'},
        {nome:'editar-conta',ref:'/crud-conta',texto:'Editar Conta'},
        {nome:'editar-site',ref:'/edit-info',texto:'Editar Site'},
    ];

    const pagina_atual = props.page;

    return (
    <>
        <header id ="header-adm">
            <div id="logo">
                <a href='/'><img src="../../public/images/logo2.jpg" alt="Logotipo do Pão Fraterno" id="logo-pao-fraterno"/></a>
                <h4 >Pão Fraterno</h4>
                <h4>André Luiz</h4>
            </div>
            <ul class='header-adm-ul'>
                {header_items.map((i) => i.nome == pagina_atual
                ? <li class='header-adm-li selected-page'><a href = {i.ref}>{i.texto} </a></li>
                : <li class='header-adm-li'><a href = {i.ref}>{i.texto} </a></li>
                )}
            </ul>
        </header>
    </>
    )
}

export default HeaderADM;