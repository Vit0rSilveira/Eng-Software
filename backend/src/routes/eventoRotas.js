import express from 'express'
import Evento  from '../models/Evento.js'
import utils from '../utils/utils.js'
const router = express.Router()

const upload = utils.salvar_imagem('./publico/imagens/eventos');

router.get('/', async (req, res) => {
    try {
        const eventos = await Evento.find();

        return res.status(200).json({eventos: eventos});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
});


router.get('/:nome', async (req, res) => {
    try {
        const nomeBuscado = req.params.nome;
        const evento = await Evento.findOne({nome: nomeBuscado})

        return res.status(200).json({evento : evento})
    }
    catch(erro) {
        return res.status(500).json({erro : erro})
    }
});

router.post('/', upload.single('imagem'), async (req, res) => {
    const { nome, data, horario_inicio, horario_fim, endereco} = req.body;
    const imagem = req.file.path;
    try {
        const buscaDB = await Evento.findOne({ nome : nome });

        if (buscaDB) {
            return res.status(422).json({ message: 'Evento já cadastrado.' });
        }

        const evento = new Evento({
            nome,
            data,
            horario_inicio,
            horario_fim,
            endereco,
            imagem
        });

        await evento.save();
        return res.status(201).json({ message: 'Evento inserido no sistema com sucesso.' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.patch("/:nome", upload.single('imagem'), async (req, res) => {
    const nomeBuscado = req.params.nome;
    const { nome, data, horario_inicio, horario_fim, endereco} = req.body;
    let imagem = req.file ? req.file.path : null;

    try {
        const eventoBD = await Evento.findOne({ nome: nomeBuscado });

        if (!eventoBD) {
            await utils.deletar_imagem(imagem);
            return res.status(422).json({ message: "Evento não encontrado" });
        }

        eventoBD.nome = nome || eventoBD.nome;
        eventoBD.data = data || eventoBD.data;
        eventoBD.horario_inicio = horario_inicio || eventoBD.horario_inicio;
        eventoBD.horario_fim = horario_fim || eventoBD.horario_fim;
        eventoBD.endereco = endereco || eventoBD.endereco;

        if (imagem) {
            const imagemPath = eventoBD.imagem;
            if (imagemPath) {
                await utils.deletar_imagem(imagemPath);
            }
            eventoBD.imagem = imagem;
        }

        await eventoBD.save();

        return res.status(200).json({ message: "Evento atualizado com sucesso" });
    } catch (error) {
        // Se houver um erro, apagar a nova imagem que foi enviada
        if (imagem) {
            await utils.deletar_imagem(imagem);
        }
        // Lidar com o erro
        console.error(error);
        return res.status(500).json({ error: "Erro ao atualizar o evento" });
    }
});

router.delete("/:nome", async (req, res) => {
    const nomeBuscado = req.params.nome;

    try {
        const evento = await Evento.findOne({ nome: nomeBuscado });

        if (!evento) {
            return res.status(422).json({ message: "Evento não encontrado" });
        }
        
        await utils.deletar_imagem(evento.imagem)
        await Evento.deleteOne({ nome: nomeBuscado });

        return res.status(200).json({ message: "Evento removido com sucesso" });
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

const eventoRotas = router;
export default eventoRotas