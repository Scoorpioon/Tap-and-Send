import {combineReducers} from 'redux';
import userReducer from './mensagem/reducer';

const rootReducer = combineReducers({userReducer});

export default rootReducer;