import {register_actions} from '../constants/Register';
import {register_Status} from '../constants/Register';

const register_initialState = { register_status: register_Status.register_Create.NEW };

export default function(state=register_initialState, action){
    console.log(action.type);
    switch(action.type){
        case  register_actions.register_Create.NEW:
            return {...state,
                register_status: register_Status.register_Create.NEW }
        case  register_actions.register_Create.POST:
            return {...state,
                 register_status: register_Status.register_Create.LOADING}
        case  register_actions.register_Create.CREATED:
            console.log("data before...." ,{userData:action.payload});
            return { ...state,
                 register_status: register_Status.register_Create.SUCCESS}
        
        case  register_actions.register_Create.FAILURE:
            return { ...state,
                 register_status: register_Status.register_Create.FAILURE}
        case  register_actions.register_Create.EXISTING:
            return {...state,
                 register_status: register_Status.register_Create.EXISTING}
        default:
            return {...state,
                 register_status: register_Status.register_Create.NEW}
    }
}