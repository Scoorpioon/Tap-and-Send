import React, {useRef, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Sugestoes from '../../suggestions';
import '../../../styles/messageBar.css';

const BarraDeEnvio = (props) => {
    const textoDigitado = useRef();
    const [mensagem, setarMensagem] = useState(undefined);
    const [mensagemVazia, ticarMensagemVazia] = useState();
    const [placeholder, mudarPlaceholder] = useState('Mensagem a ser enviada...');
    const [listaComandos, mostrarListaComandos] = useState(false);
    const {idAtual} = useSelector(rootReducer => rootReducer.contactReducer);
    const dispatch = useDispatch();

    const commands = [{
        name: '/lorem',
        description: 'Gera uma mensagem rápida em lorem ipsum dolor.'
    },
    {
        name: '/receivermessage',
        description: 'Gera uma mensagem do seu destinatário'
    }
    ];

    const enviarMensagem = () => {
        const texto = textoDigitado.current.value;
        
        if(!texto) {
            console.log('Mensagem vazia bloqueada.');

            ticarMensagemVazia('animacaoErro');
            mudarPlaceholder('Mensagem vazia não pode ser enviada...!');
            
            mostrarListaComandos(false);

            return false;
        } else if(texto[0] === '/') {
            console.log('Comando (/) solicitado.');

            switch(texto) {
                case '/lorem':
                    setarMensagem('Lorem Ipsum Dolor Sit Amet. '.repeat(Math.round(Math.random() * 12)));
                    break;
                case '/sizecheck':
                    console.log('Checagem de tamanho dos elementos requisitada.');
                    break;
                case '/receivermessage':
                    const mensagens = ['Eai, como você está?', 'Sério mesmo? Que daora!', 'Tem certeza disso?', 'Não foi como eu esperava', 'Concordo plenamente!', 'Nunca pare de sonhar!', 'Pode ser hein, eu topo!'];
                    console.log('Mensagem do destinatário enviada.');

                    dispatch({
                        type: 'contato/enviarmensagem',
                        idAtual: idAtual,
                        mensagensAtualizadas: {
                            textoDaMensagem: mensagens[Math.trunc(Math.random() * mensagens.length)],
                            autor: 'receiver',
                            horario: '13:37'
                        }
                    });
            };

            ticarMensagemVazia();
            mudarPlaceholder('Mensagem a ser enviada...');

        } else {
            setarMensagem(texto);

            ticarMensagemVazia();
            mudarPlaceholder('Mensagem a ser enviada...');
        };

        textoDigitado.current.value = '';
    };

    useEffect(() => {
        props.onClick(mensagem)
    }, [mensagem]);

    const mostrarComandos = () => {
        let texto = textoDigitado.current.value;
        if(texto[0] === '/') {
            mostrarListaComandos(true);
        } else {
            mostrarListaComandos(false);
        }

        console.log(listaComandos)
    };

    return(
        <div className="barraDeEnvio">
            {listaComandos ? <Sugestoes commands={commands} /> : null}
            <input type="file" name="sendFile" id="sendFile" />
            <label htmlFor="sendFile" className="sendFileButton" onClick={() => {console.log('Botão de imagem clicado!')}}><FontAwesomeIcon icon={faImage} /></label>
            <input type="text" onChange={mostrarComandos} ref={textoDigitado} placeholder={placeholder} onKeyDown={(evento) => {
                if(evento.key === 'Enter') {
                    enviarMensagem();
                };
            }} />
            <button onClick={enviarMensagem} className={`botaoDeEnvio ${mensagemVazia}`}><FontAwesomeIcon icon={faPaperPlane} /></button>
        </div>
    );
};

export default BarraDeEnvio;