import express from 'express'
import Colaborador  from '../models/Colaborador.js'
import utils from '../utils/utils.js'
const router = express.Router()

const upload = utils.salvar_imagem('./publico/imagens/colaboradores');

router.get('/', async (req, res) => {
    try {
        const colaboradores = await Colaborador.find();

        return res.status(200).json({colaboradores: colaboradores});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
});


router.get('/:nome', async (req, res) => {
    try {
        const nomeBuscado = req.params.nome;
        const colaborador = await Colaborador.findOne({nome: nomeBuscado})

        return res.status(200).json({colaborador : colaborador})
    }
    catch(erro) {
        return res.status(500).json({erro : erro})
    }
});

router.post('/', upload.single('imagem'), async (req, res) => {
    const { nome, descricao, link } = req.body;
    const imagem = req.file.path;
    try {
        const buscaDB = await Colaborador.findOne({ nome });

        if (buscaDB) {
            return res.status(422).json({ message: 'Colaborador já cadastrado.' });
        }

        const colab = new Colaborador({
            nome,
            descricao,
            link,
            imagem
        });

        await colab.save();
        return res.status(201).json({ message: 'Colaborador inserido no sistema com sucesso.' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.patch("/:nome", upload.single('imagem'), async (req, res) => {
    const nomeBuscado = req.params.nome;
    const { nome, descricao, link } = req.body;
    let imagem = req.file ? req.file.path : null;

    try {
        const colaboradorBD = await Colaborador.findOne({ nome: nomeBuscado });

        if (!colaboradorBD) {
            await utils.deletar_imagem(imagem);
            return res.status(422).json({ message: "Colaborador não encontrado" });
        }

        colaboradorBD.nome = nome || colaboradorBD.nome;
        colaboradorBD.descricao = descricao || colaboradorBD.descricao;
        colaboradorBD.link = link || colaboradorBD.link;

        if (imagem) {
            const imagemPath = colaboradorBD.imagem;
            if (imagemPath) {
                await utils.deletar_imagem(imagemPath);
            }
            colaboradorBD.imagem = imagem;
        }

        await colaboradorBD.save();

        return res.status(200).json({ message: "Colaborador atualizado com sucesso" });
    } catch (error) {
        // Se houver um erro, apagar a nova imagem que foi enviada
        if (imagem) {
            await utils.deletar_imagem(imagem);
        }
        // Lidar com o erro
        console.error(error);
        return res.status(500).json({ error: "Erro ao atualizar o colaborador" });
    }
});

router.delete("/:nome", async (req, res) => {
    const nomeBuscado = req.params.nome;

    try {
        const colaborador = await Colaborador.findOne({ nome: nomeBuscado });

        if (!colaborador) {
            return res.status(422).json({ message: "colaborador não encontrado" });
        }
        
        await utils.deletar_imagem(colaborador.imagem)
        await Colaborador.deleteOne({ nome: nomeBuscado });

        return res.status(200).json({ message: "colaborador removido com sucesso" });
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});



const colaboradorRotas = router;
export default colaboradorRotas