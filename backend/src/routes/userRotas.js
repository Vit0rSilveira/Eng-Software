import express from 'express'
import User  from '../models/User.js'

const router = express.Router()

router.post('/', async (req, res) => {
    const {login, senha, texto_auxiliar} = req.body

    try {
        const buscaDb = await User.findOne({login: login})

        if (buscaDb)
            return res.status(422).json({mensagem : 'Usuário já Cadastrado no Sistema.' })
        
        const user = {
            login,
            senha,
            texto_auxiliar
        }

        await User.create(user)
        
        return res.status(201).json({mensagem: 'Usuário Inserido no Sistema com Sucesso.'})
    }
    catch (erro) {
        return res.status(500).json({erro: erro})
    }
})

const userRotas = router;
export default userRotas