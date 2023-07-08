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
    Contato1: [{
        mensagem: 'Este é um exemplo de alteração de conversas.',
        autor: 'receiver',
        data: Variaveis.horaAtual
    },
    {
        mensagem: 'Você pode criar um novo contato e uma nova caixa de conversas será criada!',
        autor: 'receiver',
        data: Variaveis.horaAtual
    },
    {
        mensagem: 'Entendi...! Obrigado pela informação, meu amigo.',
        autor: 'author',
        data: Variaveis.horaAtual
    }]
   }
};

export default dadosMensagem;
