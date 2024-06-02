import mongoose from 'mongoose'

const User = mongoose.model('User', {
    login : String,
    senha : String,
    texto_auxiliar : String,
}, 'users')

export default User 