import emailjs from 'emailjs-com';

export function envia_email(email, conteudo) {
    const serviceID = process.env.REACT_APP_SERVICEID;
    const templateID = process.env.REACT_APP_TEMPLATEID;
    const publicKey = process.env.REACT_APP_PUBLICKEYEMAILJSs;

    console.log('Service ID:', serviceID);
    console.log('Template ID:', templateID);
    console.log('Public Key:', publicKey);

    const templateParams = {
        email,
        subject: conteudo.assunto,
        message: conteudo.mensagem
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