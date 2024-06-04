import '../styles/pages/info.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header';
import Footer from '../components/footer';

function Info(){
    return(
        <>
            <Header 
                headerText1 = {'Pão Fraterno André Luiz'}
                isHomePage = {false}
            />
            <div id = 'info-page'>
                <div id="identidade" className="iden">
                    <h1> Quem somos</h1>
                    <p> Somos uma fraternidade de São Carlos que surgiu nos anos 90, criada pelos próprios alunos da USP de São 
                    Carlos.</p> 
                    <p>Começamos como um grupo que aceitava apenas alimentos basicos, roupas e cobertores. Hoje em dia 
                    aceitamos os mais diversos alimentos, o nosso foco sao verduras, que é essencial para fazer nossa principal 
                    refeição, a sopa, distribuída todas as sextas-feiras.</p>
                    <p>Aceitamos produtos de higiene básica como papel 
                    higienico e sabonetes, tambem recolhemos roupas para o inverno ou não, roupas intimas, cobertores e 
                    mantas. Recebemos como muita alegria e gratidão sua doação.</p>
                </div>
                <div id="identidade" className="iden">
                    <h1> Localizacao </h1>
                    <p>R. Costa do Sol,450 - Vila Costa do Sol, São Carlos - SP, 13566-070</p>
                    <div class='localizacao'>
                        {/* Por enquanto só uma imagem para demonstração
                        Depois vejo como faz isso de verdade */}
                        <img class='loc-image' src='../../public/images/mapa.png'/>
                    </div>
                </div>
                <div id="identidade" className="iden">
                    <h1>Por que doar?</h1>
                    <p> Todos nós temos dentro de nós o poder de fazer uma diferença significativa no mundo ao nosso redor. Um dos
                    atos mais impactantes que podemos realizar é a doação. Quando decidimos dar de nós mesmos, não apenas
                     estamos ajudando aqueles que precisam, mas também estamos cultivando um espírito de generosidade e 
                     compaixão que reverbera positivamente em toda a sociedade. 
                     </p>
                    <p>Quando doamos nosso tempo, dinheiro ou 
                    recursos para causas dignas, estamos oferecendo esperança e oportunidade para aqueles que enfrentam
                    desafios. Cada contribuição, por menor que pareça, cria um impacto poderoso. Imagine o sorriso no
                    rosto de alguém que recebe ajuda quando mais precisa. Seja alimentando famílias necessitadas, doando 
                    um pouco do seu tempo para ajudar se voluntariando, cada gesto de doação abre portas para um futuro mais brilhante.
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Info;