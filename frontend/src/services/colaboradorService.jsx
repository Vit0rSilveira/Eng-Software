import axios from "axios";

const API_URL = ((typeof process !== 'undefined')? process.env.REACT_APP_API_URL:"http://localhost:3000") + "/colaborador"

export async function getColaborador(){
    try {
        const response = await axios.get(API_URL)
        return response.data.colaboradores
    } catch (error) {
        console.error('Erro ao obter os colaboradores:', error)
        return []
    }
}

export async function postColaborador(nome, descricao, link, imagem){
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
        throw new Error(error)
    }
}

export async function deleteColaborador(nome){
    try{
        const response = await axios.delete(API_URL + "/" + nome)
        if(response.status == 200) return true
    }catch(error){
        throw new Error(error)
    }
}


