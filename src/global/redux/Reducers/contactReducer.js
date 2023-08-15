const contatoInicial = {
    ContatoAtual: 'Contato0',
    idAtual: 0, 
    ListaDeContatos: [
      {
        id: 0,
        numero: 40028922,
        nome: 'Matheus Godoy',
        mensagem: 'Eai mano, assistiu o filme que te falei?',
        /* foto: '***' */
      }, 
      {
        id: 1,
        numero: 40028922,
        nome: 'Alef Kwanzas',
        mensagem: 'Foi tipo isso'
      }
    ]
};

const contactReducer = (state = contatoInicial, action) => {
    switch(action.type) {
        case 'contato/alterar':
            return {...state, ContatoAtual: action.payload, idAtual: action.Id};
            break;

        case 'contato/adicionar':
            return {...state, ListaDeContatos: action.novoContato};
            break;

        case 'contato/adicionarTeste':
            console.log(state);
            return {...state, ListaDeContatos: action.novoContato};
            break;
    };

    return state;
};

export default contactReducer;
