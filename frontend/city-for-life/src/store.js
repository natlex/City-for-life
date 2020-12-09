import { createStore } from 'redux'

function reducer(state, action) {
   switch(action.type) {
       case 'action_1': 
         return action.value_1;
       case 'action_2': 
         return action.value_2;
       default: return state;
   }
}

const action_1 = (value) => ({type: 'action_1', value_1: value})
const action_2 = (value) => ({type: 'action_2', value_2: value})

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()))  

store.dispatch(action_1('text_1'));
store.dispatch(action_2('text_2'));