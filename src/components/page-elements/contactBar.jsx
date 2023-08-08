import React, {useState, useContext, useEffect} from 'react';
import { DadosDeMensagens } from '../../global/mainData'
import {DadosDoUsuario} from '../../global/userData'
import CaixaPerfil from './userSection';
import Contato from '../contact';
import BarraDePesquisa from '../searchBar';
import '../../styles/contactBar.css';

const BarraContatos = () => {
    const {contatos, setarContato} = useContext(DadosDeMensagens);
    const {situacaoPopup, ativarPopup} = useContext(DadosDoUsuario);
    const [ids, incrementarId] = useState(2);
    const {dadosUsuario} = useContext(DadosDoUsuario);

    useEffect(() => {
      console.log('Contatos: ', contatos);
      console.log(dadosUsuario)
    })

    const adicionarContato = () => {
      setarContato((contatosAnt) => [...contatosAnt, {
        id: ids,
        nome: 'Teste',
        mensagem: 'Como vou fazer isso?'
      }]);

      incrementarId(ids => ids + 1);
    };

    const popupContato = () => {
      console.log(situacaoPopup)
      return situacaoPopup ? ativarPopup(false) : ativarPopup(true);
    }

    return(
        <aside className="_contactBar">
            <CaixaPerfil nomeUsuario={dadosUsuario.nome} />
            <BarraDePesquisa Placeholder="Pesquisar por contatos..." tipo="Barra" />
            {contatos.map((contato) => {return <Contato key={contato.id} nome={contato.nome} texto={contato.mensagem} id={contato.id} style={{backgroundColor: 'red'}} />})}
            <div className="temporaryBottomContainer">
              <button onClick={popupContato}>Adicionar contato</button>
              <span className="trademark">&copy; Desenvolvido por Gabriel A.</span>
            </div>
        </aside>
    );
};

export default BarraContatos;