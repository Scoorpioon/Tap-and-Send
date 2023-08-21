import React, {useState, useContext, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {DadosDoUsuario} from '../../../global/TemporaryClasses/userData';
import MenuMobile from './mobileMenu';
import CaixaPerfil from './userSection';
import Contato from '../../contact';
import BarraDePesquisa from '../../searchBar';
import '../../../styles/contactBar.css';

const BarraContatos = () => {
    // Variáveis do Redux
    const {usuarioAtual} = useSelector(rootReducer => rootReducer.userReducer);
    const {ContatoAtual, ListaDeContatos} = useSelector(rootReducer => rootReducer.contactReducer);
    const {DadosDasBarras} = useSelector(rootReducer => rootReducer.searchReducer);
    const dispatch = useDispatch();
    // ==================

    const {situacaoPopup, ativarPopup} = useContext(DadosDoUsuario);
    const [listaFiltrada, filtrarLista] = useState(ListaDeContatos);
    const [numeroAleatorio, mudarNumeroAleatorio] = useState(Math.trunc(Math.random() * 5));

    const capitalizeAll = (palavra) => {
      if(!palavra) {
        return palavra;
      };

      let palavraNova = [];

      for(let c = 0; c <= palavra.length; c++) {
        if(palavra[c - 1] === ' ' || c === 0) {
          palavraNova.push(palavra[c].toUpperCase());
        } else {
          palavraNova.push(palavra[c]);
        };
      };

      let palavraFinal = palavraNova.toString();
      
      return palavraFinal.replaceAll(",", "");
    }; // Essa function faz com que todas as letras de inicio de palavras em uma frase se tornem maiúscula. Ela serve para nomes próprios.

    useEffect(() => {
      try {
        if(!DadosDasBarras.pesquisaDeContato) {
          filtrarLista(ListaDeContatos); // Se a lista filtrada não for resetada, além de disparar um erro de "campo undefined", os novos contatos da lista serão repetidamente adicionados no filtro.
        } else {
          filtrarLista(ListaDeContatos.filter(contato => contato.nome.includes(capitalizeAll(DadosDasBarras.pesquisaDeContato))));
        };

      } catch(erroDoFiltro) {
        console.log('Erro ao filtrar: ', erroDoFiltro);
      };

      /* console.log('Lista filtrada:', listaFiltrada); */
    }, [DadosDasBarras, ListaDeContatos]);

    const adicionarContato = () => {
      const nomes = ['Bruce lee', 'Mike Tyson', 'Arnold Schwarzenegger', 'Muhammad Ali', 'Anderson Silva'];
      mudarNumeroAleatorio(Math.trunc(Math.random() * 5));

      dispatch({
        type: 'contato/adicionarTeste',
        novoContato: [...ListaDeContatos, {
          id: ListaDeContatos.length++,
          numero: 13371337,
          nome: nomes[numeroAleatorio],
          mensagemAtual: 'Be water, my friend.',
          mensagens: [{
            textoDaMensagem: null,
            autor: null,
            horario: null
          }]
        }]
      });
    };

    const popupContato = () => {
      return situacaoPopup ? ativarPopup(false) : ativarPopup(true);
    };

    return(
        <aside className="_contactBar">
            <header>
              <CaixaPerfil nomeUsuario={usuarioAtual.nome} />
              <BarraDePesquisa identificacao="pesquisaDeContato" Placeholder="Pesquisar por contatos..." tipo="Barra" />
              {/* <MenuMobile /> */}
            </header>

            <div className="conteudoPrincipalContato">
              {listaFiltrada.map((contato) => {return <Contato key={contato.id} nome={contato.nome} texto={contato.mensagemAtual} id={contato.id} style={{backgroundColor: 'red'}} />})}
              {listaFiltrada.length === 0 ? <p className="notFound">Nenhum contato foi encontrado...!</p> : null}
              <div className="temporaryBottomContainer">
                <button onClick={popupContato}>Adicionar contato</button>
                <button onClick={adicionarContato} style={{margin: 0}}>Adicionar contato de teste</button>
                <span className="trademark">&copy; Desenvolvido por Gabriel A.</span>
                <span className="version">Ver. 0.0.2 - 2023</span>
              </div>
            </div>
        </aside>
    );
};

export default BarraContatos;
