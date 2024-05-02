import '../styles/pages/info.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header';
import Footer from '../components/footer';

function Info(){
    return(
        <>
            <Header/>
            <div id = 'info-page'>
                <div class='quem-somos'>
                    <h1> Quem somos</h1>
                    <p>Anyone can see who's in the group and what they post.Anyone can see who's in the group and what they post.Anyone can see who's in the group and what they post.Anyone can see who's in the group and what they post.Anyone can see who's in the group and what they post.Anyone can see who's in the group and what they post.Anyone can see who's in the group and what they post.Anyone can see who's in the group and what they post.Anyone can see who's in the group and what they post.Anyone can see who's in the group and what they post.</p>
                </div>
                <div class='local'>
                    <h1> Localizacao </h1>
                    <p>R. Costa do Sol,450 - Vila Costa do Sol, São Carlos - SP, 13566-070</p>
                    <div class='localizacao'>
                        {/* Por enquanto só uma imagem para demonstração
                        Depois vejo como faz isso de verdade */}
                        <img class='image' src='../../public/images/mapa.png'/>
                    </div>
                </div>
                <div class='doar'>
                    <h1>Por que doar?</h1>
                    <p> Anyone can see who's in the group and what they post.Anyone can see who's in the group and what they post.Anyone can see who's in the group and what they post.Anyone can see who's in the group and what they post.Anyone can see who's in the group and what they post.Anyone can see who's in the group and what they post.Anyone can see who's in the group and what they post.Anyone can see who's in the group and what they post.Anyone can see who's in the group and what they post.Anyone can see who's in the group and what they post.</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Info;