import Variaveis from '../../TemporaryClasses/variables';

const stateInicial = {
    ContatosAndMensagens: { 
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
}
};

const msgReducer = (state = stateInicial, action) => {
    switch(action.type) {
        case 'usuario/mensagem':
            return {...state, Contato0: action.dadosDaMensagem}
            break;
    };

    return state;
};

export default msgReducer;
