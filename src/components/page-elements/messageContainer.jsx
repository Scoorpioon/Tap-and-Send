import React, {useState, useEffect, useContext} from 'react';
import {DadosDeMensagens} from '../../global/mainData';
import Mensagem from '../message';
import Variaveis from '../../global/variables';
import BarraDeEnvio from './messageBar';
import CabecalhoMensagem from './messageHeader';
import '../../styles/messageContainer.css';

const CaixaMensagens = () => {
    const [mensagem, setarMensagem] = useState(); // Mensagem a ser enviada para a caixa de mensagens
    const {mensagensAPI, enviarTextoAPI, contatoAtual, dadosGerais, atualizacaoDeDados} = useContext(DadosDeMensagens); // Import do Context API (variáveis globais)

    const receberMensagem = (textoMensagem) => {
        setarMensagem(textoMensagem);
    };

    useEffect(() => {
        enviarTextoAPI((msgsAnt) => [...msgsAnt, {
            textoDaMensagem: mensagem,
            autor: 'author',
            horario: Variaveis.horaAtual
        }]);

    }, [mensagem]); // useEffect necessário, pois sem ele a mensagem não é atualizada instantaneamente

    useEffect(() => {
        atualizacaoDeDados({...dadosGerais, [contatoAtual]: [...mensagensAPI]});
    }, [mensagensAPI]);

    return(
        <>
            <div className="_messageContainer">
                <CabecalhoMensagem nomeContato={"Contato de teste"} />
                <ul className="messages">
                    {dadosGerais[contatoAtual].map((msg) => {return <Mensagem key={Math.random()} texto={msg.textoDaMensagem} tipo={msg.autor} hora={msg.horario} />})}
                </ul>
                <BarraDeEnvio onClick={receberMensagem} />
            </div>
        </>
    );
};

export default CaixaMensagens;