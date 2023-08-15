const initialState = {
    DadosDasBarras: undefined
};

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'pesquisa/atualizar':
            return {...state, DadosDasBarras: {[action.nomeBarra]: action.dadosPesquisa}};
            break;
    };

    return state;
};

export default searchReducer;
