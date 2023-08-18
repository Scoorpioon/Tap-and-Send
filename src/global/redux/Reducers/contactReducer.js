import Variaveis from "../../TemporaryClasses/variables";

const contatoInicial = {
    ContatoAtual: 'Contato0',
    idAtual: 0, 
    ListaDeContatos: [
      {
        id: 0,
        numero: 40028922,
        nome: 'Matheus Godoy',
        mensagemAtual: 'Eai mano, assistiu o filme que te falei?',
        mensagens: [
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
        ]
        /* foto: '***' */
      }, 
      {
        id: 1,
        numero: 40028922,
        nome: 'Alef Kwanzas',
        mensagemAtual: 'Foi tipo isso',
        mensagens: [
          {
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
          }
        ]
      }
    ]
};

const contactReducer = (state = contatoInicial, action) => {
    switch(action.type) {
        case 'contato/alterar':
            return {...state, ContatoAtual: action.payload, idAtual: action.Id};
            break;

        case 'contato/adicionar':
            return {...state, ListaDeContatos: action.novoContato};
            break;

        case 'contato/adicionarTeste':
            return {...state, ListaDeContatos: action.novoContato};
            break;

        case 'contato/enviarmensagem':
          if(!action.mensagensAtualizadas.textoDaMensagem) {
            return {...state};
          };

          const State = {...state}
          const novaLista = [...State.ListaDeContatos[action.idAtual].mensagens];

          novaLista.push(action.mensagensAtualizadas);

          State.ListaDeContatos[action.idAtual].mensagens = novaLista;
          return State;
    };

    return state;
};

export default contactReducer;
