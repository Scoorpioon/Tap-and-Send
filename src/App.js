import {useState} from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CaixaMensagens from './components/page-elements/messageContainer';
import BarraContatos from './components/page-elements/contactBar';
import dadosMensagem from './global/provisionalDB';
import {DadosDeMensagens} from './global/mainData'
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' */

function App() {
  const [mensagensAPI, enviarTextoAPI] = useState(dadosMensagem.contatos['Contato0']);
  const [contatos, setarContato] = useState();

  return (
    <main>
      <DadosDeMensagens.Provider value={{mensagensAPI, enviarTextoAPI}}>
        <BarraContatos />
        <CaixaMensagens />
      </DadosDeMensagens.Provider>
    </main>
  );
};

export default App;

/* Desenvolvido por Gabriel A. */
