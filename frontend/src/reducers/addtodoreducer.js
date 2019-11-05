
import {addtodo} from '../constants/todos';


const initialState = {
 users: [ ]
};





export default function(state = initialState, action) {
  switch (action.type) {
   
    case addtodo.ADDSUCCESS:
      return {
        ...state,
        users: [action.payload]

      
      };
   
      default:
          return state
        }
}











