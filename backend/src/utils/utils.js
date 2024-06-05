import multer from 'multer'
import { promises as fs } from 'fs';

function salvar_imagem(path) {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path);
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`);
        },
    });

    return multer({ storage: storage });
}

async function deletar_imagem(path) {
    try {
        await fs.unlink(path);
        console.log('Imagem removida com sucesso');
    } catch (err) {
        console.error(err);
    }
}


const utils = {
    salvar_imagem,
    deletar_imagem
}


export default utils