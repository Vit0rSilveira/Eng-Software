import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import colaboradorRotas from './routes/colaboradorRotas.js';
import voluntarioRotas from './routes/voluntarioRotas.js';
import noticiaRotas from './routes/noticiaRotas.js';
import eventoRotas from './routes/eventoRotas.js';
import userRotas from './routes/userRotas.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT
const USER_MONGODB = process.env.USER_MONGODB
const PASSWORD_MONGODB = process.env.PASSWORD_MONGODB



app.use(cors())
app.use(express.json())
app.use('/colaborador', colaboradorRotas)
app.use('/voluntario', voluntarioRotas)
app.use('/noticia', noticiaRotas)
app.use('/evento', eventoRotas)
app.use('/usuario', userRotas)


app.get('/', (req, res) => {
    res.status(200).json({mensagem: 'Hello, world'})
})

mongoose.connect(`mongodb+srv://${USER_MONGODB}:${PASSWORD_MONGODB}@projetoengsoft.uduvgcm.mongodb.net/PaoFraterno`)
.then(() => {
    app.listen(PORT)
    console.log("Conectamos ao Mongo db")
    console.log('Servidor rodando na porta 3000');
})
.catch((err) => {console.log(err)})