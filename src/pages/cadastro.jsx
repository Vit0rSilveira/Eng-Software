import React, { useState, useEffect } from "react";
import Header from '../components/header';
import Question from "../components/questions";
import Footer from '../components/footer';
import '../styles/pages/cadastro.css'

function Cadastro() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch('../../perguntas.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao obter os dados da API')
                }
                return response.json()
            })
            .then(data => {
                setQuestions(data)
            })
            .catch(error => {
                console.error(`Error: ${error}`)
            })
    }, []);

    return (
        <>
            <Header />
        
            <div class="container">
                <div class="row mt-5 mb-5">
                    
                    <div class=" border border-dark rounded offset-1 col-4 bg-light p-5 mb-5" >
                        <img className="img-x" src = "../../public/images/marca-cruzada.png" alt="X" id="imagem-x" />
                        <p>Thiago Ribeiro Correia</p>
                        <p>ThiagoRibeiroCorreia@rhyta.com</p>
                        <p>978-761-7423</p>
                        <p>Mozilla/5.0 (Windows NT 10.0; Win64; x64)</p>
                        <p>AppleWebKit/537.36</p>
                        <p>(KHTML, like Gecko)Chrome/74.0.3729.169</p>
                        Safari/537.36
                    </div>

                    <div class=" border border-dark rounded offset-1 col-4 bg-light p-5 mb-5">
                        <img className="img-x" src = "../../public/images/marca-cruzada.png" alt="X" id="imagem-x" />
                        <p>Thiago Ribeiro Correia</p>
                        <p>ThiagoRibeiroCorreia@rhyta.com</p>
                        <p>978-761-7423</p>
                        <p>Mozilla/5.0 (Windows NT 10.0; Win64; x64)</p>
                        <p>AppleWebKit/537.36</p>
                        <p>(KHTML, like Gecko)Chrome/74.0.3729.169</p>
                        Safari/537.36
                    </div>

                    <div class=" border border-dark rounded offset-1 col-4 bg-light p-5 ">
                        <img className="img-x" src = "../../public/images/marca-cruzada.png" alt="X" id="imagem-x" />
                        <p>Thiago Ribeiro Correia</p>
                        <p>ThiagoRibeiroCorreia@rhyta.com</p>
                        <p>978-761-7423</p>
                        <p>Mozilla/5.0 (Windows NT 10.0; Win64; x64)</p>
                        <p>AppleWebKit/537.36</p>
                        <p>(KHTML, like Gecko)Chrome/74.0.3729.169</p>
                        Safari/537.36
                    </div>
                    <div class=" border border-dark rounded offset-1 col-4 bg-light p-5">
                        <img className="img-x" src = "../../public/images/marca-cruzada.png" alt="X" id="imagem-x" />
                        <p>Thiago Ribeiro Correia</p>
                        <p>ThiagoRibeiroCorreia@rhyta.com</p>
                        <p>978-761-7423</p>
                        <p>Mozilla/5.0 (Windows NT 10.0; Win64; x64)</p>
                        <p>AppleWebKit/537.36</p>
                        <p>(KHTML, like Gecko)Chrome/74.0.3729.169</p>
                        Safari/537.36
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Cadastro;
