import mongoose from 'mongoose'

const Noticia = mongoose.model('Noticia', {
    titulo : String,
    imagem : String,
    descricao : String,
    link : String,
    data : Date,
}, 'noticias')

export default Noticia