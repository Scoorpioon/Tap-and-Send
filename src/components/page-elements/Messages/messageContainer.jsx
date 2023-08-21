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
    const [estadoCaixa, alterarEstadoCaixa] = useState(undefined); // Sinaliza quando a caixa de mensagens de certo contato está vazia ou não
    
    const dispatch = useDispatch();

    const receberMensagem = (textoMensagem) => {
        setarMensagem(textoMensagem);
    };

    useEffect(() => {
        atualizarInfoContato(ListaDeContatos[idAtual]);
        console.log(ListaDeContatos[idAtual].mensagens);
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

    useEffect(() => {
        if(ListaDeContatos[idAtual].mensagens.length <= 1 && !ListaDeContatos[idAtual].mensagens[0].textoDaMensagem) {
            alterarEstadoCaixa(false);
        } else {
            alterarEstadoCaixa(true);
        };
    });

    return(
        <>
            <div className="_messageContainer">
                <CabecalhoMensagem nomeContato={ListaDeContatos[idAtual].nome} />
                <ul className={`messages ${!estadoCaixa? 'caixaFlex' : null}`}>
                    {!estadoCaixa ? <span className="textoCaixaVazia">Que tal ser o primeiro a enviar uma mensagem?</span> : null}
                    {infoContatoAtual.mensagens.map((msg) => {return <Mensagem key={Math.random()} texto={msg.textoDaMensagem} tipo={msg.autor} hora={msg.horario} />})}
                </ul>
                <BarraDeEnvio onClick={receberMensagem} />
            </div>
        </>
    );
};

export default CaixaMensagens;
