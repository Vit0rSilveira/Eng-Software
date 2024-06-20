import axios from "axios";

const API_URL = ((typeof process !== 'undefined')? process.env.REACT_APP_API_URL:"http://localhost:3000") + "/voluntario"

export async function getVoluntario(){
    try {
        const response = await axios.get(API_URL)
        return response.data.Voluntarios
    } catch (error) {
        console.error('Erro ao obter os voluntarios:', error)
        return []
    }
}

export async function postVoluntario(nome, descricao, link, imagem){
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

