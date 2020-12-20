const initialState = {
   boolean: false,
};

const reducer = (state = initialState, action) => {
   switch(action.type) {
      case 'Login': 
         return {
            boolean: action.value,
            data: action.res
         };
       default: return state;
   }
}

export default reducer;