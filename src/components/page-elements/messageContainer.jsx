import React, {useState, useEffect, useContext} from 'react';
import {DadosDeMensagens} from '../../global/mainData';
import Mensagem from '../message';
import Variaveis from '../../global/variables';
import BarraDeEnvio from './messageBar';
import '../../styles/messageContainer.css';

const CaixaMensagens = () => {
    const [mensagem, setarMensagem] = useState(); // Mensagem a ser enviada para a caixa de mensagens
    const {mensagensAPI, enviarTextoAPI} = useContext(DadosDeMensagens); // Import do Context API (variáveis globais)

    useEffect(() => {
       console.log('Context API: ', mensagensAPI)
    }, [mensagensAPI]);

    const receberMensagem = (textoMensagem) => {
        setarMensagem(textoMensagem)
    };

    useEffect(() => {
        enviarTextoAPI((msgsAnt) => [...msgsAnt, {
            textoDaMensagem: mensagem,
            autor: 'author',
            horario: Variaveis.horaAtual
        }]);

    }, [mensagem]); // useEffect necessário, pois sem ele a mensagem não é atualizada instantaneamente

    return(
        <>
            <div className="_messageContainer">
                <div className="messages">
                    {mensagensAPI.map((msg) => {return <Mensagem key={Math.random()} texto={msg.textoDaMensagem} tipo={msg.autor} hora={msg.horario} />})}
                    {/* <Mensagem texto={mensagem} tipo="author" />
                    <Mensagem texto="Mensagem da outra pessoa!" tipo="receiver" /> */}
                </div>
                <BarraDeEnvio onClick={receberMensagem} />
            </div>
        </>
    );
};

export default CaixaMensagens;
