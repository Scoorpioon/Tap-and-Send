import React, {useRef, useState, useEffect} from 'react';
import Mensagem from '../message';
import '../../styles/messageContainer.css';
import dadosMensagem from '../../global/data';
import Variaveis from '../../global/variables';

const CaixaMensagens = ({idContato}) => {
    const textoDigitado = useRef();
    const [mensagem, setarMensagem] = useState(); // Mensagem a ser enviada para a caixa de mensagens
    
    const enviarMensagem = () => {
        const texto = textoDigitado.current.value;
        
        if(!texto) {
            console.log('Mensagem vazia não vai!!');
            return false;
        } else {
            setarMensagem(texto);
        };

        textoDigitado.current.value = '';        
    };

    useEffect(() => {
        enviarTexto((mensagensAnteriores) => [...mensagensAnteriores, {
            textoDaMensagem: mensagem,
            tipo: 'author',
            hora: Variaveis.horaAtual
        }]);
    }, [mensagem]); // useEffect necessário, pois sem ele a mensagem não é atualizada instantaneamente

    const [mensagens, enviarTexto] = useState(dadosMensagem.mensagens); // Todas as mensagens armazenadas que já foram enviadas

    return(
        <>
            <div className="_messageContainer">
                <div className="headerMessageContainer">
                    
                </div>

                <div className="messages">
                    {mensagens.map((msg) => {return <Mensagem key={Math.random()} texto={msg.textoDaMensagem} tipo={msg.tipo} hora={msg.hora} />})}
                    {/* <Mensagem texto={mensagem} tipo="author" />
                    <Mensagem texto="Mensagem da outra pessoa!" tipo="receiver" /> */}
                </div>

                <div className="barraDeEnvio">
                    <input type="text" ref={textoDigitado} placeholder="Mensagem a ser enviada..." onKeyDown={(evento) => {
                        if(evento.key === 'Enter') {
                            enviarMensagem();
                        };
                    }} />
                    <button onClick={enviarMensagem}>{'>'}</button>
                </div>
            </div>
        </>
    );
};

export default CaixaMensagens;
