import axios from "axios";
import constantes from "../utils/constantes";
import {parseDate, combineDateAndTime} from "../utils/datautils";

const API_URL = constantes.PATH + "/noticia"

export async function getNoticia(){
    try {
        const response = await axios.get(API_URL)
        return response.data.Noticias
    } catch (error) {
        console.error('Erro ao obter as noticias:', error)
        return []
    }
}

export async function postNoticia(titulo,data,descricao,link,imagem){

    data = parseDate(data)
    try{
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('data',data)
        formData.append('descricao', descricao);
        formData.append('link', link);
        formData.append('imagem', imagem);

        const response = await axios.post(API_URL + "/", formData);


        if(response.status == 201) return true
    }catch(error){
        console.error('Erro ao colocar a noticia:', error)
        throw new Error(error)
    }
}

export async function deleteNoticia(titulo){
    try{
        const response = await axios.delete(API_URL + "/" + titulo)
        if(response.status == 200) return true
    }catch(error){
        throw new Error(error)
    }
}

