import express from 'express'
import Voluntario  from '../models/Voluntario.js'
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const voluntarios = await Voluntario.find();

        return res.status(200).json({Voluntarios: voluntarios});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
});


router.get('/:nome', async (req, res) => {
    try {
        const nomeBuscado = req.params.nome;
        const voluntario = await Voluntario.findOne({nome: nomeBuscado})

        return res.status(200).json({Voluntario: voluntario})
    }
    catch(erro) {
        return res.status(500).json({erro : erro})
    }
});

router.post('/', async (req, res) => {
    const { nome, email, tipo, data, horario_inicio, horario_fim,
         produto, endereco, motivo, outras_informacoes } = req.body;

    try {
        const buscaDB = await Voluntario.findOne({ nome : nome });

        if (buscaDB) {
            return res.status(422).json({ message: 'Voluntário já cadastrado.' });
        }

        const voluntario = new Voluntario({
            nome,
            email,
            tipo,
            data,
            horario_inicio,
            horario_fim,
            produto,
            endereco,
            motivo,
            outras_informacoes
        });

        await voluntario.save();
        return res.status(201).json({ message: 'Voluntário cadastrado com sucesso.' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.patch("/:nome", async (req, res) => {
    const nomeBuscado = req.params.nome;
    const { nome, email, tipo, data, horario_inicio, horario_fim,
        produto, endereco, motivo, outras_informacoes } = req.body;

    try {
        const voluntarioBD = await Voluntario.findOne({ nome: nomeBuscado });

        if (!voluntarioBD) {
            return res.status(422).json({ message: "Voluntario não encontrado" });
        }

        voluntarioBD.nome = nome || voluntarioBD.nome;
        voluntarioBD.email = email || voluntarioBD.email;
        voluntarioBD.tipo = tipo || voluntarioBD.tipo;
        voluntarioBD.data = data || voluntarioBD.data;
        voluntarioBD.horario_inicio = horario_inicio || voluntarioBD.horario_inicio;
        voluntarioBD.horario_fim = horario_fim || voluntarioBD.horario_fim;
        voluntarioBD.produto = produto || voluntarioBD.produto;
        voluntarioBD.endereco = endereco || voluntarioBD.endereco;
        voluntarioBD.motivo = motivo || voluntarioBD.motivo;
        voluntarioBD.outras_informacoes = outras_informacoes || voluntarioBD.outras_informacoes;

        await voluntarioBD.save();

        return res.status(200).json({ message: "Voluntário atualizado com sucesso" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao atualizar o voluntário." });
    }
});

router.delete("/:nome", async (req, res) => {
    const nomeBuscado = req.params.nome;

    try {
        const voluntario = await Voluntario.findOne({ nome: nomeBuscado });

        if (!voluntario) {
            return res.status(422).json({ message: "Voluntário não encontrado" });
        }
        
        await Voluntario.deleteOne({ nome: nomeBuscado });

        return res.status(200).json({ message: "Volutário removido com sucesso." });
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


const voluntarioRotas = router;
export default voluntarioRotas