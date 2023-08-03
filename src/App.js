import {useState, useEffect} from 'react';
import {DadosDeMensagens} from './global/mainData';
import {DadosDoUsuario} from './global/userData';
import CaixaMensagens from './components/page-elements/messageContainer';
import BarraContatos from './components/page-elements/contactBar';
import dadosMensagem from './global/provisionalDB';
import Variaveis from './global/variables';
import AdicionarContato from './components/generalPopup';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [contatos, setarContato] = useState(dadosMensagem.contatos); // Contatos
  const [contatoAtual, mudarContato] = useState('Contato0') // Contato atual
  const [mensagensAPI, enviarTextoAPI] = useState(dadosMensagem.DadosDeMensagens[contatoAtual]); // Mensagens atuais
  const [dadosGerais, atualizacaoDeDados] = useState({Contato0: [
    {
        textoDaMensagem: 'Bom dia! Tudo bem com você?',
        autor: 'receiver',
        horario: Variaveis.horaAtual
    },
    {
        textoDaMensagem: 'Estamos conversando através de uma aplicação web em React desenvolvida por Gabriel Alexandre!',
        autor: 'receiver',
        horario: Variaveis.horaAtual
    },
    {
        textoDaMensagem: 'Que incrível!',
        autor: 'author',
        horario: Variaveis.horaAtual
    }
],
    Contato1: [{
        textoDaMensagem: 'Este é um exemplo de alteração de conversas.',
        autor: 'receiver',
        horario: Variaveis.horaAtual
    },
    {
        textoDaMensagem: 'Você pode criar um novo contato e uma nova caixa de conversas será criada!',
        autor: 'receiver',
        horario: Variaveis.horaAtual
    },
    {
        textoDaMensagem: 'Entendi...! Obrigado pela informação, meu amigo.',
        autor: 'author',
        horario: Variaveis.horaAtual
    }]
   }
);
  const [dadosUsuario, atualizarDadosUsuario] = useState({nome: "Gabriel", foto: undefined});
  const [dadosAleatorios, setarDados] = useState();
  const [situacaoPopup, ativarPopup] = useState();

  useEffect(() => {
    fetch("http://localhost:1337/api")
      .then((res) => res.json())
      .then((data) => {
        setarDados(data.mensagem)
         console.log(data)})
      .catch((error) => console.log(`Erro ao dar FETCH: ${error}`));
  }, []);

  return (
    <main>
      <DadosDeMensagens.Provider value={{mensagensAPI, enviarTextoAPI, contatos, setarContato, contatoAtual, mudarContato, dadosGerais, atualizacaoDeDados}}>
        <DadosDoUsuario.Provider value={{dadosUsuario, situacaoPopup, ativarPopup}}>
          <BarraContatos />
          {situacaoPopup ? <AdicionarContato /> : null}
        </DadosDoUsuario.Provider>
        <CaixaMensagens />
      </DadosDeMensagens.Provider>
    </main>
  );
};

export default App;

/* Desenvolvido por Gabriel A. */