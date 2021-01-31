const initialState = {
   email: null,
   userName: null,
   img: null,
   isAuth: false
};

const loginReducer = (state = initialState, action) => {
   switch(action.type) {
      case 'SET-USER-DATA': 
         return {
            ...state,
            ...action.payload
         };
       default: return state;
   }
}


export const setUserData = (email, userName, img, isAuth) => (
   {type: 'SET-USER-DATA', payload: {email, userName, img, isAuth}}
)



export default loginReducer;