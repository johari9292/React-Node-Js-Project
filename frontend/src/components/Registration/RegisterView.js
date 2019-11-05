import React, { Component } from "react";
import { connect } from "react-redux";

import RegisterFailure from './RegisterFailure'
import RegisterLoading from './RegisterLoading'
import RegisterNew from './RegisterNew'

import {registerServer } from '../../actions/Register';
import { register_Status } from '../../constants/Register';
import { register_actions } from '../../constants/Register';



class RegisterView extends Component{
    constructor(props) {
        super(props);
       this.state = {};
       this.Register = this.Register.bind(this);
  
    }

    componentWillMount(){
        var userToken= localStorage.getItem('userToken')
    }
    Register(un,em, pw){
        this.props.Register(un,em,pw)
    }
    getScreen(status) {
       
        switch (status) {
          case register_Status.register_Create.NEW:
            return (
              <RegisterNew Register={this.props.Register}  />
            );
            break;
          case register_Status.register_Create.FAILURE:
            return (
              <RegisterFailure handleBackClick={this.props.handleBackClick} />
            );
          break;
          case register_Status.register_Create.SUCCESS:
            return (
              <loginNew/>
            );
            break;
            case register_Status.register_Create.LOADING:
              return (
                <RegisterLoading />
              );
              break;
              case register_Status.register_Create.EXISTING:
                return (
                  <RegisterNew status={status}  Register={this.Register}/>
                );
                break;
          default:
            break;
        }
      }
    render(){
        return(
            <div>
            {this.getScreen(this.props.register_status)}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        register_status: state.registerreducer.register_status,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
    Register: (username,email, password) =>{ dispatch(registerServer.Register(username,email,password))},
    handleBackClick : () => { dispatch({ type: register_actions.NEW }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);