import './styles/App.css';
import {Button, Alert, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CaixaMensagens from './components/page-elements/messageContainer';
import BarraContatos from './components/page-elements/contactBar';
import {lazy} from 'react';

function App() {
  return (
    <main>
      <BarraContatos />
      <CaixaMensagens />
    </main>
  );
};

export default App;

/* Desenvolvido por Gabriel A. */