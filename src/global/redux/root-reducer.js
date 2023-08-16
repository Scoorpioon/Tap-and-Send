import {combineReducers} from 'redux';
import userReducer from './Reducers/reducer';
import msgReducer from './Reducers/msgReducer';
import contactReducer from './Reducers/contactReducer';
import searchReducer from './Reducers/searchReducer';

const rootReducer = combineReducers({userReducer, msgReducer, contactReducer, searchReducer});

export default rootReducer;
