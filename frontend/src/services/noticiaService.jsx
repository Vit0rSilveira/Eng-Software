import axios from "axios";

const API_URL = ((typeof process !== 'undefined')? process.env.REACT_APP_API_URL:"http://localhost:3000") + "/noticia"

export async function getNoticia(){
    try {
        const response = await axios.get(API_URL)
        return response.data.Noticias
    } catch (error) {
        console.error('Erro ao obter as noticias:', error)
        return []
    }
}

export async function postNoticia(nome, descricao, link, imagem){
    try{
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('descricao', descricao);
        formData.append('link', link);
        formData.append('imagem', imagem);

        const response = await axios.post(API_URL + "/", formData);


        if(response.status == 201) return true
    }catch(error){
        console.error('Erro ao colocar o colaborador:', error)
        return false
    }
}

