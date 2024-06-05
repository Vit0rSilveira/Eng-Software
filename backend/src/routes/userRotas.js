import express from 'express'
import User  from '../models/User.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const usuarios = await User.find()

        return res.status(200).json({usuarios : usuarios})
    }
    catch(erro) {
        return res.status(500).json({erro : erro})
    }
})

router.get('/:login', async (req, res) => {
    try {
        const login = req.params.login;
        const usuario = await User.findOne({login: login})

        return res.status(200).json({usuario : usuario})
    }
    catch(erro) {
        return res.status(500).json({erro : erro})
    }
})

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


router.patch("/:login", async (req, res) => {
    const loginBuscado = req.params.login
    const {login, senha, texto_auxiliar} = req.body

    const user = {
        login,
        senha,
        texto_auxiliar
    }

    try {
        const updateUser = await User.updateOne({ login: loginBuscado }, user)

        if (updateUser.matchedCount === 0)
            return res.status(422).json({ message: "Usuário não encontrado" })

        return res.status(200).json({ message: "Usuário atualizado com sucesso" })
    } catch (error) {
        return res.status(500).json({ error: error })
    }
})

router.delete("/:login", async (req, res) => {
    const login = req.params.login;

    try {
        const usuario = await User.findOne({ login: login });

        if (!usuario) {
            return res.status(422).json({ message: "Usuário não encontrado" });
        }

        await User.deleteOne({ login: login });

        return res.status(200).json({ message: "Usuário removido com sucesso" });
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

const userRotas = router;
export default userRotas