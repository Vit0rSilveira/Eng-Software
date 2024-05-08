import '../styles/pages/info.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header';
import Footer from '../components/footer';

function Info(){
    return(
        <>
            <Header/>
            <div id = 'info-page'>
                <div class='container'>
                    <div class='quem-somos'>
                        <h1> Quem somos</h1>
                        <p> Somos uma fraternidade de São Carlos que surgiu nos anos 90, criada pelos próprios alunos da USP de São </p>
                        <p>Carlos. Começamos como um grupo que aceitava apenas alimentos basicos, roupas e cobertores. Hoje em dia </p>
                        <p>aceitamos os mais diversos alimentos, o nosso foco sao verduras, que é essencial para fazer nossa principal </p>
                        <p>refeição, a sopa, distribuída todas as sextas-feiras. Aceitamos produtos de higiene básica como papel </p>
                        <p>higienico e sabonetes, tambem recolhemos roupas para o inverno ou não, roupas intimas, cobertores e </p>
                        <p>mantas. Recebemos como muita alegria e gratidão sua doação.</p>
                    </div>
                </div>
                <div class='container'>
                    <div class='local'>
                        <h1> Localizacao </h1>
                        <p>R. Costa do Sol,450 - Vila Costa do Sol, São Carlos - SP, 13566-070</p>
                        <div class='localizacao'>
                            {/* Por enquanto só uma imagem para demonstração
                            Depois vejo como faz isso de verdade */}
                            <img class='loc-image' src='../../public/images/mapa.png'/>
                        </div>
                    </div>
                </div>
                <div class='container'>
                    <div class='doar'>
                    <h1>Por que doar?</h1>
                    <p> Todos nós temos dentro de nós o poder de fazer uma diferença significativa no mundo ao nosso redor. Um dos</p>
                    <p> atos mais impactantes que podemos realizar é a doação. Quando decidimos dar de nós mesmos, não apenas</p>
                    <p> estamos ajudando aqueles que precisam, mas também estamos cultivando um espírito de generosidade e </p>
                    <p> compaixão que reverbera positivamente em toda a sociedade. Quando doamos nosso tempo, dinheiro ou </p>
                    <p> recursos para causas dignas, estamos oferecendo esperança e oportunidade para aqueles que enfrentam </p>
                    <p> desafios. Cada contribuição, por menor que pareça, cria um impacto poderoso. Imagine o sorriso no </p>
                    <p> rosto de alguém que recebe ajuda quando mais precisa. Seja alimentando famílias necessitadas, doando </p>
                    <p>um pouco do seu tempo para ajudar se voluntariando, cada gesto de doação abre portas para um futuro mais </p>
                    <p>brilhante.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Info;