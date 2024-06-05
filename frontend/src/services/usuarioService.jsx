import axios from "axios";

const API_URL = ((typeof process !== 'undefined')? process.env.REACT_APP_API_URL:"http://localhost:3000") + "/usuario"

export async function getUsuario(){
    try {
        const response = await axios.get(API_URL)
        return response.data.usuarios;
    } catch (error) {
        console.error('Erro ao obter os usuarios:', error);
        return [];
    }
}

