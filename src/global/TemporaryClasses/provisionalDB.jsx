import Variaveis from "./variables";

class dadosMensagem{
    static mensagens = [
        {
            textoDaMensagem: 'Eu sou a sua mensagem!',
            autor: 'author',
            hora: Variaveis.horaAtual
        },
        {
            textoDaMensagem: 'Eu sou a mensagem do seu amigo!',
            autor: 'receiver',
            hora: Variaveis.horaAtual
        }
    ]; /* =======================CÓDIGO ANTERIOR DE CAIXA DE MENSAGEM ÚNICA======================= */

   static DadosDeMensagens = {
    Contato0: [
    {
        textoDaMensagem: 'Bom dia! Tudo bem com você?',
        autor: 'receiver',
        horario: Variaveis.horaAtual
    },
    {
        textoDaMensagem: 'Estamos conversando através de uma aplicação web em React desenvolvida por Gabriel Alexandre!',
        autor: 'receiver',
        horario: Variaveis.horaAtual
    },
    {
        textoDaMensagem: 'Que incrível!',
        autor: 'author',
        horario: Variaveis.horaAtual
    }
],
    Contato1: [{
        textoDaMensagem: 'Este é um exemplo de alteração de conversas.',
        autor: 'receiver',
        horario: Variaveis.horaAtual
    },
    {
        textoDaMensagem: 'Você pode criar um novo contato e uma nova caixa de conversas será criada!',
        autor: 'receiver',
        horario: Variaveis.horaAtual
    },
    {
        textoDaMensagem: 'Entendi...! Obrigado pela informação, meu amigo.',
        autor: 'author',
        horario: Variaveis.horaAtual
    }]
    /*
    Quando um usuário criar um novo contato, um novo parâmetro será adicionado aqui neste formato, seguindo sempre de uma chave que contém uma lista de objetos. Nesta lista, sempre serão armazenados o texto, o autor e o horario. Conforme a evolução do projeto, o 'texto da mensagem' se tornará 'conteúdo da mensagem', pois o usuário também poderá enviar imagens, áudios, etc...

    Exemplo:
    
    Contato2: [{
        textoDaMensagem: 'Mensagem aqui...',
        autor: 'Autor da mensagem',
        horario: Hora que será armazenada na mensagem
    }
    */
   }

   static contatos = [{
    id: 0,
    nome: 'Matheus Godoy',
    mensagem: 'Sou uma mensagem de teste...',
    /* foto: '***' */
  }, {
    id: 1,
    nome: 'Alef Kwanzas',
    mensagem: 'tomale'
  }]
};

export default dadosMensagem;
