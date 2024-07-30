import axios from "axios";
import constantes from "../utils/constantes";
import {parseDate, combineDateAndTime} from "../utils/datautils";

const API_URL = constantes.PATH + "/evento"

export async function getEvento(){
    try {
        const response = await axios.get(API_URL)
        return response.data.eventos
    } catch (error) {
        console.error('Erro ao obter os eventos:', error)
        return []
    }
}

export async function postEvento(nome,data,horario_inicio,horario_fim,endereco,imagem){
    data = parseDate(data)
    horario_inicio = combineDateAndTime(data,horario_inicio)
    horario_fim = combineDateAndTime(data,horario_fim)
    try{
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('data', data);
        formData.append('horario_inicio', horario_inicio);
        formData.append('horario_fim', horario_fim);
        formData.append('endereco', endereco);
        formData.append('imagem', imagem);

        const response = await axios.post(API_URL + "/", formData);


        if(response.status == 201) return true
    }catch(error){
        console.error('Erro ao colocar o evento:', error)
        throw new Error(error)
    }
}

export async function deleteEvento(nome){
    try{
        const response = await axios.delete(API_URL + "/" + nome)
        if(response.status == 200) return true
    }catch(error){
        throw new Error(error)
    }
}

