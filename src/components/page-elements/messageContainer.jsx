import React, {useRef, useState, useEffect, useReducer} from 'react';
import Mensagem from '../message';
import '../../styles/messageContainer.css';
import dadosMensagem from '../../global/data';
import Variaveis from '../../global/variables';
import BarraDeEnvio from './messageBar';

const CaixaMensagens = ({}) => {
    const [mensagem, setarMensagem] = useState(); // Mensagem a ser enviada para a caixa de mensagens
    let idAtual = Variaveis.idAtual;
    let contatoAtual = dadosMensagem.contatos[idAtual];

    const receberMensagem = (textoMensagem) => {
        setarMensagem(textoMensagem)
    }

    useEffect(() => {
        enviarTexto((mensagensAnteriores) => [...mensagensAnteriores, {
            textoDaMensagem: mensagem,
            autor: 'author',
            horario: Variaveis.horaAtual
        }]);

        contatoAtual = mensagens;

    }, [mensagem]); // useEffect necessário, pois sem ele a mensagem não é atualizada instantaneamente

    const [mensagens, enviarTexto] = useState(contatoAtual); // Todas as mensagens armazenadas que já foram enviadas

    useEffect(() => {
        enviarTexto(contatoAtual);
    }, [contatoAtual]);

    return(
        <>
            <div className="_messageContainer">
                <div className="headerMessageContainer">
                    
                </div>

                <div className="messages">
                    {mensagens.map((msg) => {return <Mensagem key={Math.random()} texto={msg.textoDaMensagem} tipo={msg.autor} hora={msg.horario} />})}
                </div>
                <BarraDeEnvio onClick={receberMensagem} />
            </div>
        </>
    );
};

export default CaixaMensagens;
