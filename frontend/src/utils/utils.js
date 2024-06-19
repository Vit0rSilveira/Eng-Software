import emailjs from 'emailjs-com';

export function envia_email(email, conteudo) {
    const serviceID = 'service_xxxxx'; // Substitua pelo seu serviceID
    const templateID = 'template_yyyyy'; // Substitua pelo seu templateID
    const userID = 'user_zzzzz'; // Substitua pelo seu userID

    const templateParams = {
        email,
        subject: conteudo.assunto,
        message: conteudo.mensagem
    };

    return emailjs.send(serviceID, templateID, templateParams, userID)
        .then(response => {
            console.log('Email enviado com sucesso!', response.status, response.text);
            return response;
        })
        .catch(error => {
            console.error('Falha ao enviar email. Erro:', error);
            throw error;
        });
}
