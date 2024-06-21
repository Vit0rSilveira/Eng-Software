    import mongoose from 'mongoose'

const Voluntario = mongoose.model('Voluntario', {
    nome : String,
    email : String,
    tipo : String,
    data : Date,
    horario_inicio : Date,
    horario_fim : Date,
    produto : String,
    endereco : String,
    motivo : String,
    outras_informacoes : String,
}, 'voluntarios')

export default Voluntario