import React, { Component } from "react";
import { connect } from "react-redux";

import LoginFailure from './loginFailure'
import LoginLoading from './loginLoading'
import loginreducer from '../../reducers/loginreducer'
import Loginform from './loginNew'
import LoginSuccess from './LoginSuccess'
import {loginServer, Login, Logout } from '../../actions/Login';
import { Login_status } from '../../constants/Login';
import {  Login_actions } from '../../constants/Login';
import { register_Status } from '../../constants/Register';
import {register_actions} from '../../constants/Register';
import RegisterView from '../Registration/RegisterView';
import { withRouter } from 'react-router';
import TodosList from '../Todos/todocomponents/gettodo'
import App from '../Todos/App'
class LoginView extends Component{
    

    getScreen(status){
        console.log("I am from login Component getScreen: " + status);
        switch(status){
            case Login_status.login_SignIn.NEW:
                  
                return(
                    <Loginform Login = {this.props.Login} CreateButton={this.props.CreateButton}/>
                );
                break;
            case Login_status.login_SignIn.SIGN0UT:
                return(
                    <Loginform Login = {this.props.Login} CreateButton={this.props.CreateButton}/>
                );
                break;
            case Login_status.login_SignIn.FAILURE:
                return(
                    <LoginFailure/>
                );
                break;
            case Login_status.login_SignIn.AUTHORIZED:
                console.log("login Sucess")
                return(
                    
                    < TodosList handleBackClick = {this.props.handleBackClick} />
                );
                break;
            case Login_status.login_SignIn.NOT_AUTHORIZED:
                return(
                    <Loginform status ={status} Login = {this.props.Login} CreateButton={this.props.CreateButton}/>
                );
                break;
            case Login_status.login_SignIn.LOADING:
                return(
                    <LoginLoading/>
                );
            default:
                break;
        }

    }

    render(){
     
        return(
            <div>
               
                {this.getScreen(this.props.login_status)}
               
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("****************************state:", state);
    
    return{
    login_status: state.loginreducer.login_status,
    userid: state.loginreducer.userid, 
    register_status: state.registerreducer.register_status,
    
    }
    
}

const mapDispatchToProps= (dispatch) => {
   
    return{
        Login:(email, password) => { console.log('here is loging function', email, password);
         dispatch(loginServer.Login(email, password))},
        handleBackClick : (usertoken) => {dispatch(loginServer.Logout(usertoken))},
        CreateButton : () =>{ dispatch({ type: register_actions.register_Create.NEW }) },
    }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginView));