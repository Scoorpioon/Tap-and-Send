import Variaveis from "./variables";

class dadosMensagem{
    static mensagens = [
        {
            textoDaMensagem: 'Eu sou a sua mensagem!',
            tipo: 'author',
            hora: Variaveis.horaAtual
        },
        {
            textoDaMensagem: 'Eu sou a mensagem do seu amigo!',
            tipo: 'receiver',
            hora: Variaveis.horaAtual
        }
    ]; /* =======================CÓDIGO ANTERIOR DE CAIXA DE MENSAGEM ÚNICA======================= */

   static contatos = {
    Contato0: [
    {
        mensagem: 'Bom dia! Tudo bem com você?',
        autor: 'receiver',
        data: Variaveis.horaAtual
    },
    {
        mensagem: 'Estamos conversando através de uma aplicação web em React desenvolvida por Gabriel Alexandre!',
        autor: 'receiver',
        data: Variaveis.horaAtual
    },
    {
        mensagem: 'Que incrível!',
        autor: 'author',
        data: Variaveis.horaAtual
    }
],
    Contato1: [{}]
   }
};

export default dadosMensagem;
