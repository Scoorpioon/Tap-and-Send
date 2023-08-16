import {combineReducers} from 'redux';
import userReducer from './Reducers/reducer';

const rootReducer = combineReducers({userReducer});

export default rootReducer;
