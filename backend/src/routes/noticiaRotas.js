import express from 'express'
import Noticia  from '../models/Noticia.js'
import utils from '../utils/utils.js'
const router = express.Router()


const upload = utils.salvar_imagem('./publico/imagens/noticias');

router.get('/', async (req, res) => {
    try {
        const noticias = await Noticia.find();

        return res.status(200).json({Noticias: noticias});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
});


router.get('/:titulo', async (req, res) => {
    try {
        const tituloBuscado = req.params.titulo;
        const noticia = await Noticia.findOne({titulo: tituloBuscado})

        return res.status(200).json({Noticia : noticia})
    }
    catch(erro) {
        return res.status(500).json({erro : erro})
    }
});

router.post('/', upload.single('imagem'), async (req, res) => {
    const { titulo, data, descricao, link} = req.body;
    console.log(req.body)
    const imagem = req.file.path;
    try {
        const buscaDB = await Noticia.findOne({ titulo : titulo });

        if (buscaDB) {
            return res.status(422).json({ message: 'Noticia já cadastrada.' });
        }

        const noticia = new Noticia({
            titulo,
            data,
            descricao,
            link,
            imagem
        });

        await noticia.save();
        return res.status(201).json({ message: 'Noticia inserida no sistema com sucesso.' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.patch("/:titulo", upload.single('imagem'), async (req, res) => {
    const tituloBuscado = req.params.titulo;
    const { titulo, data, descricao, link} = req.body;
    let imagem = req.file ? req.file.path : null;

    try {
        const noticiaBD = await Noticia.findOne({ titulo: tituloBuscado });

        if (!noticiaBD) {
            await utils.deletar_imagem(imagem);
            return res.status(422).json({ message: "Noticia não encontrada" });
        }

        noticiaBD.titulo = titulo || noticiaBD.titulo;
        noticiaBD.data = data || noticiaBD.data;
        noticiaBD.descricao = descricao || noticiaBD.descricao;
        noticiaBD.link = link || noticiaBD.link;

        if (imagem) {
            const imagemPath = noticiaBD.imagem;
            if (imagemPath) {
                await utils.deletar_imagem(imagemPath);
            }
            noticiaBD.imagem = imagem;
        }

        await noticiaBD.save();

        return res.status(200).json({ message: "Noticia atualizada com sucesso" });
    } catch (error) {
        // Se houver um erro, apagar a nova imagem que foi enviada
        if (imagem) {
            await utils.deletar_imagem(imagem);
        }
        // Lidar com o erro
        console.error(error);
        return res.status(500).json({ error: "Erro ao atualizar a noticia" });
    }
});

router.delete("/:titulo", async (req, res) => {
    const tituloBuscado = req.params.titulo;

    try {
        const noticia = await Noticia.findOne({ titulo: tituloBuscado });

        if (!noticia) {
            return res.status(422).json({ message: "Noticia não encontrada" });
        }
        
        await utils.deletar_imagem(noticia.imagem)
        await Noticia.deleteOne({ titulo: tituloBuscado });

        return res.status(200).json({ message: "Noticia removida com sucesso" });
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


const noticiaRotas = router;
export default noticiaRotas