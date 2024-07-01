// separa a data(String) em ano, mes e dia
export function parseDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return new Date(year, month, day);
}

// separa junta a data e o horario
export function combineDateAndTime(date, timeString) {
    const [hours, minutes] = timeString.split(':');
    const combinedDate = new Date(date);

    combinedDate.setHours(hours);
    combinedDate.setMinutes(minutes);
    
    return combinedDate;
}

// separa o data em horario e data
export function formatarData(data) {
    data = new Date(data)
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // Ajustando o mês para começar em 1
    const ano = data.getFullYear();
    const hora = data.getHours().toString().padStart(2,'0');
    const minuto = data.getMinutes().toString().padStart(2,'0');

    const dataFormatada = `${dia}/${mes}/${ano}`;
    const horarioFormatado = `${hora}:${minuto}`;

    return [dataFormatada,horarioFormatado];
}