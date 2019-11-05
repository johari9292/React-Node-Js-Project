import { gettodo , deletetodoc,updatetodo} from '../constants/todos';


const initialState = {
 users: [ ]
};





export default function(state = initialState, action) {
  switch (action.type) {
   
    case gettodo.GETSUCCESS:
      return {
        ...state,
        users: action.payload,
        
      };
      case gettodo.GETID:
          return { ...state, [action.payload._id]: action.payload };
      case updatetodo.UPDATESUCCESS:
          return { ...state, [action.payload._id]: action.payload };
      case deletetodoc.DELETESUCSESS:
          return {
            ...state,
            users: state.users.filter(user => user._id !== action.payload)
          };
      
      default:
          return state
        }
}