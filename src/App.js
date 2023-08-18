import {useState, useEffect} from 'react';
import {DadosDoUsuario} from './global/TemporaryClasses/userData';
import {useSelector} from 'react-redux'
import {DadosDeMensagens} from './global/TemporaryClasses/mainData';
import CaixaMensagens from './components/page-elements/Messages/messageContainer';
import BarraContatos from './components/page-elements/Contacts/contactBar';
import dadosMensagem from './global/TemporaryClasses/provisionalDB';
import Variaveis from './global/TemporaryClasses/variables';
import AdicionarContato from './components/addContact';
import MenuMobile from './components/page-elements/Contacts/mobileMenu';
import LoginScreen from './components/login-section/loginScreen';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Variáveis Redux
  const {ContatoAtual} = useSelector(rootReducer => rootReducer.contactReducer);
  const [dadosAleatorios, setarDados] = useState(); // Redux
  const [situacaoPopup, ativarPopup] = useState(); // Mantém

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
        <DadosDoUsuario.Provider value={{situacaoPopup, ativarPopup}}>
          <BarraContatos />
          {situacaoPopup ? <div id="fakeBackground"><AdicionarContato /></div> : null}
        </DadosDoUsuario.Provider>
        <CaixaMensagens />
    </main>
  );
};

export default App;

/* Desenvolvido por Gabriel A. */
