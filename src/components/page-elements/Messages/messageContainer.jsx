import {useState, useEffect, useContext} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Mensagem from '../../message';
import Variaveis from '../../../global/TemporaryClasses/variables';
import BarraDeEnvio from './messageBar';
import CabecalhoMensagem from './messageHeader';
import '../../../styles/messageContainer.css';

const CaixaMensagens = () => {
    const {ListaDeContatos, idAtual} = useSelector(rootReducer => rootReducer.contactReducer);
    const [infoContatoAtual, atualizarInfoContato] = useState(ListaDeContatos[idAtual]);
    const [mensagem, setarMensagem] = useState(); // Mensagem a ser enviada para a caixa de mensagens
    
    const dispatch = useDispatch();

    const receberMensagem = (textoMensagem) => {
        setarMensagem(textoMensagem);
    };

    useEffect(() => {
        atualizarInfoContato(ListaDeContatos[idAtual]);
    }, [idAtual]);

    useEffect(() => {
        dispatch({
            type: 'contato/enviarmensagem',
            idAtual: idAtual,
            mensagensAtualizadas: {
                textoDaMensagem: mensagem,
                autor: 'author',
                horario: Variaveis.horaAtual
            }
        });
    }, [mensagem]); // useEffect necessário, pois sem ele a mensagem não é atualizada instantaneamente

    return(
        <>
            <div className="_messageContainer">
                <CabecalhoMensagem nomeContato={ListaDeContatos[idAtual].nome} />
                <ul className="messages">
                    {infoContatoAtual.mensagens.map((msg) => {return <Mensagem key={Math.random()} texto={msg.textoDaMensagem} tipo={msg.autor} hora={msg.horario} />})}
                </ul>
                <BarraDeEnvio onClick={receberMensagem} />
            </div>
        </>
    );
};

export default CaixaMensagens;
