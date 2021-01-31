import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form'
import loginReducer from './loginReducer'
import mapReducer from './mapReducer';

const reducers = combineReducers({
   loginPage: loginReducer,
   mapPage: mapReducer,
   form: formReducer
})

const store = createStore(reducers);

window.store = store

export default store;