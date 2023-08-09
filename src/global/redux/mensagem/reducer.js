const initialState = {
    usuarioAtual: null
};

const userReducer = (state = initialState, action) => {
    if(action.type === 'user/login') {
        return {...state, usuarioAtual: 'Gabriel'}
    };

    return state;
};

export default userReducer;