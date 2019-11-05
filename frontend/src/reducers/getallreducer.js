import {getallConstants } from '../constants/Getall';


const initialState = {
 users: [ ]
};





export default function(state = initialState, action) {
  switch (action.type) {
   
    case getallConstants.getallcons.GETALL_SUCCESS:
      return {
        ...state,
        users: action.payload,
      
      };
      default:
          return state
        }
}