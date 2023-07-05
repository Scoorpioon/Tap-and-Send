const data = new Date;
let minutos = data.getMinutes();
const horaAtual = `${data.getHours()}:${minutos}`;

class dadosMensagem{
    static data = new Date;
    static horaAtual = `${this.data.getHours()}:${this.data.getMinutes()}`;

    static mensagens = [
        {
            textoDaMensagem: 'Eu sou a sua mensagem!',
            tipo: 'author',
            hora: this.horaAtual
        },
        {
            textoDaMensagem: 'Eu sou a mensagem do seu amigo!',
            tipo: 'receiver',
            hora: this.horaAtual
        }
    ];
};

export default dadosMensagem;