import axios from "axios";
import {parseDate,combineDateAndTime} from "../utils/datautils";
import constantes from "../utils/constantes";

const API_URL = constantes.PATH + "/voluntario"

export async function getVoluntario(){
    try {
        const response = await axios.get(API_URL)
        return response.data.Voluntarios
    } catch (error) {
        console.error('Erro ao obter os voluntarios:', error)
        return []
    }
}

export async function postVoluntario(nome,email,tipo,data,horario_inicio,horario_fim,produto,endereco,motivo,outros){
    data = parseDate(data)
    horario_inicio = combineDateAndTime(data,horario_inicio)
    horario_fim = combineDateAndTime(data,horario_fim)
    try{
        const datas = {nome: nome,
            email: email,
            tipo: tipo,
            data: data,
            horario_inicio: horario_inicio,
            horario_fim: horario_fim,
            produto: produto,
            endereco: endereco,
            motivo: motivo,
            outras_informacoes: outros
        }

        const response = await axios.post(API_URL + "/", datas);

        if(response.status == 201) return true
    }catch(error){
        console.error('Erro ao colocar a voluntario:', error)
        throw new Error(error)
    }
}

export async function deleteVoluntario(nome){
    try{
        const response = await axios.delete(API_URL + "/" + nome)
        if(response.status == 200) return true
    }catch(error){
        throw new Error(error)
    }
}

