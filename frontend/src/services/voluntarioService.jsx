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

export async function postVoluntario(nome,email,tipo,data,horario_inicio,horario_fim,produto,endereco,motivo,outros){
    data = parseDate(data)
    horario_inicio = combineDateAndTime(data,horario_inicio)
    horario_fim = combineDateAndTime(data,horario_fim)
    try{
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('email', email);
        formData.append('tipo', tipo);
        formData.append('data', data);
        formData.append('horario_inicio', horario_inicio);
        formData.append('horario_fim', horario_fim);
        formData.append('produto', produto);
        formData.append('endereco', endereco);
        formData.append('motivo', motivo);
        formData.append('outras_informacoes', outros);

        const response = await axios.post(API_URL + "/", formData);


        if(response.status == 201) return true
    }catch(error){
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

