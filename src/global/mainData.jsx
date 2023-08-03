import {createContext, useState} from 'react';
import Variaveis from './variables';

/* const [dadosGerais, mudarDados] = useState({Contato0: [
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
); */

export const DadosDeMensagens = createContext({});