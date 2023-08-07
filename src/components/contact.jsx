import React, {useEffect, useContext} from 'react';
import {DadosDeMensagens} from '../global/mainData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/contactBar.css';

const Contato = ({nome, texto, id}) => {
    const {mensagensAPI} = useContext(DadosDeMensagens);

    const selecionarContato = () => {
        console.log('ID do contato selecionado: ' + id);
    };

    useEffect(() => {
        console.log('API direto dos contatos: ', mensagensAPI)
    }, [mensagensAPI]);

    return(
        <div className={`_contato`} onClick={selecionarContato}>
            <div className="_info-contato">
                <span className="foto-contato"><FontAwesomeIcon icon={faUser} /></span>
                <div className="textos-contato">
                    <span className="nome-contato">{nome}</span>
                    <span className="mensagem-contato">{texto}</span>
                </div>
            </div>
            <div className="_editar-contato">
                <span>E.</span>
            </div>
        </div>
    );
};

export default Contato;
