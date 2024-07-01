import axios from "axios";
import constantes from "../utils/constantes";

const API_URL = constantes.PATH + "/usuario"

export async function getUsuario(){
    try {
        const response = await axios.get(API_URL)
        return response.data.usuarios[0]
    } catch (error) {
        console.error('Erro ao obter o usuario:', error)
        return null
    }
}

export async function deleteUsuario(login){
    try{
        const response = await axios.delete(API_URL+"/"+login)
        if(response.status == 200) return true
    }catch(error){
        console.error('Erro ao deletar o usuario:', error)
        return false
    }
}

export async function postUsuario(login, senha, texto_auxiliar){
    try{
        const response = await axios.post(API_URL+"/",{
            login: login,
            senha: senha,
            texto_auxiliar: texto_auxiliar
            }
        )
        if(response.status == 201) return true
    }catch(error){
        console.error('Erro ao colocar o usuario:', error)
        return false
    }
}

