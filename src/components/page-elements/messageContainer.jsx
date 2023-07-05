import React, {useRef, useState, useEffect} from 'react';
import Mensagem from '../message';
import '../../styles/messageContainer.css';
import dadosMensagem from '../../global/data';

const CaixaMensagens = () => {
    const textoDigitado = useRef();
    const [mensagem, setarMensagem] = useState();
    const data = new Date;
    var horaAtual = `${data.getHours()}:${data.getMinutes()}`;

    if(horaAtual[4] == undefined) {
       horaAtual = horaAtual.split().splice(3, 0, '0');
    };
    
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
            hora: horaAtual
        }]);
    }, [mensagem]);

    const [mensagens, enviarTexto] = useState(dadosMensagem.mensagens);

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
