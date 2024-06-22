import emailjs from 'emailjs-com';

export function envia_email(email, conteudo) {
    console.log('Enviando e-mail')
    const serviceID = 'service_g5jlksr'; // Substitua pelo seu serviceID
    const templateID = 'template_3dvyvay'; // Substitua pelo seu templateID
    const publicKey = 'MNSL_oHJGMEmOQZaW'; // Substitua pelo seu userID

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
