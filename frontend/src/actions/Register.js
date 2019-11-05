import {register_actions} from '../constants/Register';
import store from '../store/index';
import { browserHistory } from 'react-router';
import jwtDecode from 'jwt-decode';
const URL = 'http://localhost:3201';
export const registerServer = {
  Register: Register
  }

export  function Register(username, email, password){
    var user ={'username':username,'email': email,'password':password}

    const postRequest =  fetch(URL+'/api/Accounts/Register', {
        method: 'POST',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
        body: JSON.stringify(user)
   }).then((response)=>{
    
     
    response.json().then(data=>{
    
    if(data.registerStatus=='failure'){
      store.dispatch({type:register_actions.register_Create.FAILURE,payload:data});
      return ;
      }
    else if(data.registerStatus=='created') {
      store.dispatch({type:register_actions.register_Create.CREATED});
      return ;
    }
    else if(data.registerStatus=='existing') {

      store.dispatch({type:register_actions.register_Create.EXISTING});
      return ;
    }
    
     });
   })


return {type:register_actions.register_Create.NEW,payload:'none'};

};
   
