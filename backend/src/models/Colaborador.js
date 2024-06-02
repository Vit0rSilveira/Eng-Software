import mongoose from 'mongoose'

const Colaborador = mongoose.model('Colaborador', {
    nome : String,
    imagem : String,
    descricao : String,
    link : String,
}, 'colaboradores')

export default Colaborador