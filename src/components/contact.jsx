import React, {useRef, useState, lazy} from 'react';
import '../styles/contactBar.css';
import dadosMensagem from '../global/data';
import Variaveis from '../global/variables';

const Contato = ({nome, texto, id}) => {
    const [contatoMudado, mudarContato] = useState(false);

    const selecionarContato = () => {
        console.log('ID do contato selecionado: ' + id)
        Variaveis.idAtual = `Contato${id}`;

        mudarContato(true);
        Variaveis.contatoAlterado = contatoMudado;
    }

    return(
        <div className="_contato" onClick={selecionarContato}>
            <div className="_info-contato">
                <span className="foto-contato">Foto</span>
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
