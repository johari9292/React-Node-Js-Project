
import {Login_actions} from '../constants/Login';
import {Login_status} from '../constants/Login';
const loginInitialstate ={
    login_status: Login_status.login_SignIn.NEW,
    userid: "",
    auth: false}

export default function(state=loginInitialstate, action){
    console.log(action.type);
    switch(action.type){
        case Login_actions.login_SignIn.NEW:
            console.log("here NEW reducer" )
            return {...state,login_status:Login_status.login_SignIn.NEW, auth:false}
        case Login_actions.login_SignIn.POST:
            console.log("here POST reducer")
            return {...state, login_status:Login_status.login_SignIn.LOADING, auth:false};
        case Login_actions.login_SignIn.AUTHORIZED:
            console.log("here AUTHORIZED reducer");
            return {...state, login_status: Login_status.login_SignIn.AUTHORIZED,userid:action.payload.userid,auth:true};
        case Login_actions.login_SignIn.NOT_AUTHORIZED:
            console.log("here NOT AUTHORIXED refducer");
            return {...state, login_status: Login_status.login_SignIn.NOT_AUTHORIZED,auth:false}
        case Login_actions.login_SignIn.FAILURE:
            console.log("here FAILURE REDucer")
            return {...state, login_status:Login_status.login_SignIn.FAILURE}
        case Login_actions.login_SignIn.SIGN0UT:
            console.log("here Signout")
            return {...state,
                login_status: Login_status.login_SignIn.SIGN0UT }
        default:
                console.log("here default")
            return {...state};

    }

}