const initialState = {
    usuarioAtual: {
        nome: 'Gabrieeel',
        email: undefined,
        foto: undefined,
        senha: undefined,
    }
};

const userReducer = (state = initialState, action) => {
    if(action.type === 'user/login') {
        return {...state, usuarioAtual: action.payload};
    };

    return state;
};

export default userReducer;
