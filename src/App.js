import {useState, useEffect} from 'react';
import {DadosDoUsuario} from './global/TemporaryClasses/userData';
import {useSelector} from 'react-redux'
import CaixaMensagens from './components/page-elements/Messages/messageContainer';
import BarraContatos from './components/page-elements/Contacts/contactBar';
import AdicionarContato from './components/addContact';
import MenuMobile from './components/page-elements/Contacts/mobileMenu';
import GPopup from './components/page-elements/generalPopup';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Variáveis Redux
  const {ContatoAtual} = useSelector(rootReducer => rootReducer.contactReducer);
  const [dadosAleatorios, setarDados] = useState(); // Redux
  const [situacaoPopup, ativarPopup] = useState(); // Mantém
  const inputs = [{
    InputType: 'text',
    Value: 'Testando...',
    Label: 'Nome do contato',
    Identification: 'nome-contato'
},
{
    InputType: 'number',
    Value: '123456789',
    Label: 'Número do contato',
    Identification: 'numero-contato'
},
{
  InputType: 'submit',
  Value: 'Alterar dados'
}
]

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
          {/* <div class="fakeBackground">
            <div className="background" />
            <GPopup elements={inputs} title="Editar contato" />
          </div> */}
          <BarraContatos />
          {situacaoPopup ? <div className="fakeBackground"><AdicionarContato /></div> : null}
        </DadosDoUsuario.Provider>
        <CaixaMensagens />
    </main>
  );
};

export default App;

/* Desenvolvido por Gabriel A. */