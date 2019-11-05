import {Login_actions} from '../constants/Login';
import store from '../store/index'

const URL = 'http://localhost:3201';

export const loginServer = {
    Login: Login,
    Logout: Logout
    }
    
    export function Login(email,password){
    
      var user ={'email':email,'password':password}
      console.log('userData@@', user)
      console.log('userdata@@',JSON.stringify(user))
    
      const postRequest =  fetch(URL+'/api/Accounts/SignIn', {
            method: 'POST',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
             mode: 'cors',
            body: JSON.stringify(user)
       }).then((response)=>{
        console.log('********'+response.status);
        response.json().then(data=>{
          console.log("data:......" + data.signInStatus )
          console.log(data.userid);
        if(data.signInStatus=='failure'){
          store.dispatch({type:Login_actions.login_SignIn.FAILURE,payload:data});
          return ;
          }
        else if(data.signInStatus=='authorized') {
          console.log('userAuthoriedData:', data)
          localStorage.setItem('userToken', JSON.stringify(data.token))
    
          store.dispatch({type:Login_actions.login_SignIn.AUTHORIZED,payload:data , auth: true});
          return ;
        }
        else if(data.signInStatus == 'not_authorized'){
          store.dispatch({type:Login_actions.login_SignIn.NOT_AUTHORIZED,payload:data});
          return ;
        }
    
         });
       })
    
    
    return {type:Login_actions.login_SignIn.POST,payload:'none'};
    
    };
    
    
    
    
    export function Logout(usertoken)
    {
      const postRequest =  fetch(URL+'/api/Accounts/SignOut', {
            method: 'POST',
            headers: {'Content-Type':'application/json;charset=UTF-8'},
             mode: 'cors',
            body: usertoken
       }).then((response)=>{
        console.log('********'+response.status);
        response.json().then(data=>{
          console.log("data:......" + data )
          console.log(data);
        if(data.signOutStatus=='failure'){
          store.dispatch({type:Login_actions.login_SignIn.FAILURE,payload:data});
          return ;
          }
        else if(data.signOutStatus=='success') {
          
    
          store.dispatch({type:Login_actions.login_SignIn.SIGN0UT});
          return ;
        }
    
         });
       })
    
    
    return {type:Login_actions.login_SignIn.POST};
    
    };
    











// export const loginServer = {
//     Login: Login,
//     Logout: Logout 
//     }

// export function Login(email,password){
//     var user = {'email':email, 'password':password}
//     console.log('userData@@', user)
//     console.log('userdata@@',JSON.stringify(user))
//     const post_request = fetch(URL + '/api/Accounts/SignIn', {
//         method: "POST",
//         headers: { 'Content-Type': 'application/json; charset=UTF-8'},
//         mode: 'cors',
//         body:JSON.stringify(user)

//     }).then((response)=>{
//         console.log('********'+response.status);
//         response.json().then(data =>{
//             console.log("data:......" + data.signInStatus )
//       console.log(data.userid);
//             if(data.signInStatus == "failure"){
//                 console.log('failure:', data)
//                 store.dispatch({ type:Login_actions.FAILURE, payload:data})
//                 return;
//             }
//             else if(data.signInStatus == 'authorized'){
//                 console.log('userAuthoriedData:', data)
//                 localStorage.setItem('userToken', JSON.stringify(data.token))
//                 store.dispatch({type:Login_actions.AUTHORIZED, payload:data})
//                 return ;
//             }
//             else if(data.signInStatus == 'not_authorized') {
//                 store.dispatch({type:Login_actions.NOT_AUTHORIZED, payload:data})
//                 return ;
//             }
//         })
//     })
// return {type:Login_actions.POST, payload:'none'}
// }

// export function Logout(usertoken){
//     const postRequest =  fetch(URL+'/api/Accounts/SignOut', {
//         method: 'POST',
//         headers: {'Content-Type':'application/json;charset=UTF-8'},
//          mode: 'cors',
//         body: usertoken
//    }).then((response)=>{
//        response.json().then(data => {
//            if(data.signOutstatus == 'failure'){
//                store.dispatch({type:Login_actions.FAILURE, payload:data})
//                 return ;
//             }
//             else if(data.signOutstatus == 'success'){
//                 store.dispatch({type:Login_actions.SIGN0UT})
//                 return ;  
//             }
//        })
//    })
// return {type:Login_actions.POST}
// }