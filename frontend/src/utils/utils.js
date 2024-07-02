import emailjs from 'emailjs-com';
import constantes from './constantes';

//Tutorial: https://www.youtube.com/watch?v=Lz8yx-zn-O4

// Modelo de email geral
export function envia_email(email, conteudo) {
    const serviceID = constantes.SERVICEID;
    const templateID = constantes.TEMPLATEID;
    const publicKey = constantes.PUBLICKEY_EMAILJS;
    const templateParams = {
        email: email,
        name: conteudo.nome,
        subject: conteudo.assunto,
        message: conteudo.mensagem,
        message2: conteudo.mensagem2,
        message3: conteudo.mensagem3
    };
    
    return emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then(response => {
            console.log('Email enviado com sucesso!', response.status, response.text);
            return response;
        })
        .catch(error => {
            console.error('Falha ao enviar email. Erro:', error);
            throw error;
        });
}

// Modelo de email para cadastro de voluntario
export function envia_email_voluntario(email, conteudo) {
    const serviceID = constantes.SERVICEID;
    const templateID = constantes.TEMPLATEID_VOLUNTARIO;
    const publicKey = constantes.PUBLICKEY_EMAILJS;

    const templateParams = {
        email: email,
        subject: conteudo.assunto,
        nome: conteudo.nome,
        email:conteudo.email,
        tipo:conteudo.tipo,
        data:conteudo.data,
        horario_inicial:conteudo.horario_inicial,
        horario_final:conteudo.horario_final
    };

    
    return emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then(response => {
            console.log('Email enviado com sucesso!', response.status, response.text);
            return response;
        })
        .catch(error => {
            console.error('Falha ao enviar email. Erro:', error);
            throw error;
        });
}