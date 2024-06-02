import mongoose from 'mongoose'

const Evento = mongoose.model('Evento', {
    nome : String,
    imagem : String,
    data : Date,
    horario_inicio : Date,
    horario_fim : Date,
    endereco : String,
}, 'eventos')

export default Evento