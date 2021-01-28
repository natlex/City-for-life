const initialState = {
   coordinateLabel: []
};

const mapReducer = (state = initialState, action) => {
   switch(action.type) {
      case 'SET-COORDINATE': 
         return {...state,
            coordinateLabel: action.coordinate
         };
       default: return state;
   }
}


export const setCoordinate = (coordinate) => (
   {type: 'SET-COORDINATE', coordinate}
)



export default mapReducer;