import React, {useState, useEffect, useContext} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {DadosDeMensagens} from '../../../global/TemporaryClasses/mainData';
import Mensagem from '../../message';
import Variaveis from '../../../global/TemporaryClasses/variables';
import BarraDeEnvio from './messageBar';
import CabecalhoMensagem from './messageHeader';
import '../../../styles/messageContainer.css';

const CaixaMensagens = () => {
    const [mensagem, setarMensagem] = useState(); // Mensagem a ser enviada para a caixa de mensagens
    const {mensagensAPI, enviarTextoAPI, contatoAtual, dadosGerais, atualizacaoDeDados} = useContext(DadosDeMensagens); // Import do Context API (variáveis globais)
    
    const {ContatoAtual, ListaDeContatos, idAtual} = useSelector(rootReducer => rootReducer.contactReducer);
    const {ContatosAndMensagens} = useSelector(rootReducer => rootReducer.msgReducer);
    
    const dispatch = useDispatch();

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
        atualizacaoDeDados({...dadosGerais, [ContatoAtual]: [...mensagensAPI]});
        dispatch({
            type: 'usuario/mensagem',
            contatoDaMensagem: ContatoAtual,
            dadosDaMensagem: {
                textoDaMensagem: mensagem,
                autor: 'author',
                horario: Variaveis.horaAtual
            }
        })

        console.log('Dados mensagens Redux:', ContatosAndMensagens);

    }, [mensagensAPI]);

    return(
        <>
            <div className="_messageContainer">
                <CabecalhoMensagem nomeContato={ListaDeContatos[idAtual].nome} />
                <ul className="messages">
                    {dadosGerais[ContatoAtual].map((msg) => {return <Mensagem key={Math.random()} texto={msg.textoDaMensagem} tipo={msg.autor} hora={msg.horario} />})}
                </ul>
                <BarraDeEnvio onClick={receberMensagem} />
            </div>
        </>
    );
};

export default CaixaMensagens;
