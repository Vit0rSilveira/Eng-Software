import React, { useState, useEffect } from "react";
import Header from '../components/header';
import VoluntarioCard from '../components/voluntarioCard';
import Footer from '../components/footer';
import '../styles/pages/voluntariado.css';
import { getVoluntario, postVoluntario } from "../services/voluntarioService";
import { parseDate } from "../utils/datautils";
import { envia_email_voluntario } from '../utils/utils';

function Voluntariado() {

    // usados na verificacao de erros
    const [primeiro, setPrimeiro] = useState(true);
    const [verificar, setVerificar] = useState(false);

    // valor dos inputs
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [tipo, setTipo] = useState('');
    const [produto, setProduto] = useState('');
    const [endereco, setEndereco] = useState('');
    const [motivo, setMotivo] = useState('');
    const [data, setData] = useState('');
    const [horarioInicio, setHorarioInicio] = useState('');
    const [horarioFinal, setHorarioFinal] = useState('');
    const [informacaoExtra, setInformacaoExtra] = useState('');

    // erros
    const [erroNome, setErroNome] = useState(false);
    const [erroEmail, setErroEmail] = useState(false);
    const [erroTelefone, setErroTelefone] = useState(false);
    const [erroTipo, setErroTipo] = useState(false);
    const [erroProduto, setErroProduto] = useState(false);
    const [erroEndereco, setErroEndereco] = useState(false);
    const [erroMotivo, setErroMotivo] = useState(false);
    const [erroData, setErroData] = useState(false);
    const [erroHorario, setErroHorario] = useState(false);

    // reseta os mensagens de erro
    const resetarErro = () => {
        setErroNome(false);
        setErroEmail(false);
        setErroTelefone(false);
        setErroTipo(false);
        setErroProduto(false);
        setErroEndereco(false);
        setErroMotivo(false);
        setErroData(false);
        setErroHorario(false);
    }

    // ativado com o botao confirmar
    // validada os itens do cadastro
    const validarCadastro = () => {
        // reseta os variaveis de erro
        resetarErro()

        // verifica erro
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ // para validar email

        if (nome === '')
            setErroNome(true)
        if (!regexEmail.test(email))
            setErroEmail(true)
        if (telefone == "")
            setErroTelefone(true)
        if (tipo === "")
            setErroTipo(true);
        if (produto === "" && (tipo === "Doação direta" || tipo === "Doação pela casa"))
            setErroProduto(true);
        if (endereco === "" && tipo === "Doação pela casa")
            setErroEndereco(true);
        if (motivo === "" && (tipo === "Visita" || tipo === "Outros"))
            setErroMotivo(true);
        if (data === "" && tipo !== "Outros")
            setErroData(true);
        if (horarioInicio === "" && horarioFinal === "" && tipo !== "Outros")
            setErroHorario(true);

        // atualiza verificar para entrar no useEffect 
        setVerificar(!verificar)
    }

    // cadastra o voluntario no BD e envia email
    const cadastrarVoluntario = async () => {
        //conversao dos nomes dos tipos
        if(tipo == 'Cozinha') setTipo('cozinha')
        if(tipo == 'Montagem') setTipo('montagem')
        if(tipo == 'Entrega')setTipo('entrega')
        if(tipo == 'Doação direta') setTipo('doação')
        if(tipo == 'Doação pela casa') setTipo('retirada')
        if(tipo == 'Visita') setTipo('visita')
        if(tipo == 'Outros') setTipo('outros')


        const conteudo = {
            assunto: 'Confirmação de Cadastro',
            email: email,
            nome: nome,
            email: email,
            telefone: telefone,
            tipo: tipo,
            data: data,
            horario_inicial: horarioInicio,
            horario_final: horarioFinal,
        };

        await postVoluntario(nome, email, telefone, tipo, data, horarioInicio, horarioFinal, produto, endereco, motivo, informacaoExtra)
            .then((response) => {
                envia_email_voluntario(email, conteudo)
                    .then((response) => {
                        window.location.href = "/voluntario-confirmado"
                    })
            })
    };

    // se nao tiver erro, vai para pagina de confirmacao
    // foi colocado no useEffect, porque nao da para atualizar um state e ver o state atualizado na mesma funcao
    useEffect(() => {
        if (primeiro) setPrimeiro(false)
        // verifica se todos 
        else if (!erroNome && !erroEmail && !erroTelefone && !erroTipo && !erroProduto && !erroEndereco && !erroMotivo && !erroData && !erroHorario) {
            // cadastra no BD e envia email
            cadastrarVoluntario()
        }
    }, [verificar])

    return (
        <>
            <Header
                headerText1={'Cadastro de Voluntários'}
                isHomePage={false}
                page='seja-voluntario'
            />

            <div id="conteinerMaster">
                {/* titulo */}
                <div class="titulo">Veja o que você consegue fazer!</div>
                {/* explicacoes das opcoes de cadastro */}
                <div id="cardMargin">
                    <VoluntarioCard
                        color="#F1C144"
                        image="public\images\cadastroVoluntario\alimento.png"
                        title="Doação de produtos"
                        text="Aceitamos doação de alimento, roupa, produtos de higiene e outros"
                    />
                    <div id="last"><VoluntarioCard
                        color="#FFBA52"
                        image="public\images\cadastroVoluntario\sopa.png"
                        title="Preparo do kit de doação"
                        text="Temos tranalho de cozinhar, montagem de kit e entrega"
                    /></div>
                    <VoluntarioCard
                        color="#FFBA52"
                        image="public\images\cadastroVoluntario\carro.png"
                        title="Retirada de doação"
                        text="Retiramos a doação na sua casa"
                    />
                    <VoluntarioCard
                        color="#F1C144"
                        image="public\images\cadastroVoluntario\casa.png"
                        title="Visita no Pão Fraterno"
                        text="Venha conhecer nossa casa!"
                    />
                </div>
                <a href="/doacao" class="textoLink">Para mais detalhes, clique aqui</a>

                {/* cadastro */}
                <div id="cinzaConteiner">
                    <div class="titulo">Ajude da sua forma!</div>

                    {/* Titulo */}
                    <div id="cadastroTextBox">
                        <div id="cadastroTitleBox" class="textoBranco">Cadastro de Voluntário</div>

                        {/* Nome */}
                        <div class="TextoEInput">
                            <div class="cadastroTexto textoBranco">Nome:</div>
                            <input onChange={(event) => setNome(event.target.value)} class="smallSizeInput defaultInput" type="text" />
                        </div>
                        {(erroNome && <div class="textoErroCadastroVol textoErro">Preencha o nome</div>)}

                        {/* Email */}
                        <div class="TextoEInput">
                            <div class="cadastroTexto textoBranco">Email:</div>
                            <input onChange={(event) => setEmail(event.target.value)} class="smallSizeInput defaultInput" type="email" />
                        </div>
                        {(erroEmail && <div class="textoErroCadastroVol textoErro">Preencha com o email válido</div>)}

                        {/* Telefone */}
                        <div class="TextoEInput">
                            <div class="cadastroTexto textoBranco">Telefone:</div>
                            <input onChange={(event) => setTelefone(event.target.value)} class="smallSizeInput defaultInput" type="text" />
                        </div>
                        {(erroTelefone && <div class="textoErroCadastroVol textoErro">Preencha o telefone</div>)}

                        {/* Tipo */}
                        <div class="TextoEInput">
                            <div class="cadastroTexto textoBranco">Tipo:</div>
                            <select onChange={(event) => setTipo(event.target.value)} name="example" class="smallSizeInput defaultInput">
                                <option value="" disabled selected></option>
                                <optgroup label="Trabalho">
                                    <option>Cozinha</option>
                                    <option>Montagem</option>
                                    <option>Entrega</option>
                                </optgroup>
                                <optgroup label="Doação">
                                    <option>Doação direta</option>
                                    <option>Doação pela casa</option>
                                </optgroup>
                                <optgroup label="Outros">
                                    <option>Visita</option>
                                    <option>Outros</option>
                                </optgroup>
                            </select>
                        </div>
                        {(erroTipo && <div class="textoErroCadastroVol textoErro">Preencha o tipo</div>)}
                        {/* Area customizada para cada tipo */}
                        {/* Cozinha */}
                        {(tipo == "Cozinha" &&
                            <div class="textoBranco textoExplicacaoTipo ">
                                Trabalho: Preparação do sopa de kit de doação
                                <br />
                                Intervalo permitido: 11:00-16:00 toda sexta
                            </div>
                        )}
                        {/* Montagem */}
                        {(tipo == "Montagem" &&
                            <div class="textoBranco textoExplicacaoTipo ">
                                Trabalho: Montagem do kit de doação
                                <br />
                                Intervalo permitido: 18:00-20:00 toda sexta
                            </div>
                        )}
                        {/* Entrega */}
                        {(tipo == "Entrega" &&
                            <div class="textoBranco textoExplicacaoTipo ">
                                Trabalho: Entrega do kit de doação com carro
                                <br />
                                Intervalo permitido: 20:00-24:00 toda sexta
                            </div>
                        )}
                        {/* Doacao no pao fraterno */}
                        {(tipo == "Doação direta" &&
                            <>
                                <div class="textoBranco textoExplicacaoTipo ">
                                    Pretendo mudar essa parte depois receber uma lista de produtos com o cliente (inclusive o visual)
                                    Produtos permitidos:
                                    <br />
                                    -Alimentos: Escrever alimentos necessarios
                                    <br />
                                    -Roupa: Escrever tipo de roupas necessarios
                                    <br />
                                    -Produtos de higiene: Escrever produtos de higiene necessarios
                                </div>
                                <div class="TextoEInput">
                                    <div class="cadastroTexto textoBranco">Produtos:</div>
                                    <input onChange={(event) => setProduto(event.target.value)} class="smallSizeInput defaultInput" type="text" />
                                </div>
                                {(erroProduto && <div class="textoErroCadastroVol textoErro">Preencha o produto</div>)}
                            </>
                        )}
                        {/* Doacao pela casa */}
                        {(tipo == "Doação pela casa" &&
                            <>
                                <div class="textoBranco textoExplicacaoTipo ">
                                    Pretendo mudar essa parte depois receber uma lista de produtos com o cliente (inclusive o visual)
                                    Produtos permitidos:
                                    <br />
                                    -Alimentos: Escrever alimentos necessarios
                                    <br />
                                    -Roupa: Escrever tipo de roupas necessarios
                                    <br />
                                    -Produtos de higiene: Escrever produtos de higiene necessarios
                                </div>
                                <div class="TextoEInput">
                                    <div class="cadastroTexto textoBranco">Produtos:</div>
                                    <input onChange={(event) => setProduto(event.target.value)} class="smallSizeInput defaultInput" type="text" />
                                </div>
                                {(erroProduto && <div class="textoErroCadastroVol textoErro">Preencha o produto</div>)}
                                <div class="TextoEInput">
                                    <div class="cadastroTexto textoBranco">Endereço:</div>
                                    <input onChange={(event) => setEndereco(event.target.value)} class="smallSizeInput defaultInput" type="text" />
                                </div>
                                {(erroEndereco && <div class="textoErroCadastroVol textoErro">Preencha o endereço</div>)}
                            </>
                        )}
                        {/* Visita */}
                        {(tipo == "Visita" &&
                            <>
                                <div class="TextoEInput">
                                    <div class="cadastroTexto textoBranco">Motivo:</div>
                                    <input onChange={(event) => setMotivo(event.target.value)} class="smallSizeInput defaultInput" type="text" />
                                </div>
                                {(erroMotivo && <div class="textoErroCadastroVol textoErro">Preencha o motivo</div>)}
                            </>
                        )}
                        {/* Outros */}
                        {(tipo == "Outros" &&
                            <>
                                <div class="TextoEInput">
                                    <div class="cadastroTexto textoBranco">Motivo:</div>
                                    <input onChange={(event) => setMotivo(event.target.value)} class="smallSizeInput defaultInput" type="text" />
                                </div>
                                {(erroMotivo && <div class="textoErroCadastroVol textoErro">Preencha o motivo</div>)}
                            </>
                        )}

                        {/* Data */}
                        <div class="TextoEInput">
                            <div class="cadastroTexto textoBranco">Data:</div>
                            <input onChange={(event) => setData(event.target.value)} class="smallSizeInput defaultInput" type="date" />
                        </div>
                        {(erroData && <div class="textoErroCadastroVol textoErro">Preencha a data</div>)}

                        {/* Horario */}
                        <div class="TextoEInput">
                            <div class="cadastroTexto textoBranco">Horário:</div>
                            <input onChange={(event) => setHorarioInicio(event.target.value)} class="smallSizeInput defaultInput" type="time" />
                            <div class="textoBranco mx-2">até</div>
                            <input onChange={(event) => setHorarioFinal(event.target.value)} class="smallSizeInput defaultInput" type="time" />
                        </div>
                        {(erroHorario && <div class="textoErroCadastroVol textoErro">Preencha o horário</div>)}

                        {/* Outras informacoes */}
                        <div class="TextoEInput textoBranco">Outras informações:</div>
                        <textarea onChange={(event) => setInformacaoExtra(event.target.value)} id="outrasInput" class="TextoEInput defaultInput" type="text" />

                        {/* cadastro Button */}
                        <div id="buttonPlace">
                            <button onClick={validarCadastro} id="cadastroButton" class="defaultButton">Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Voluntariado;
