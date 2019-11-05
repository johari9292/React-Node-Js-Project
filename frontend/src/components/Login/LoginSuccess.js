import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Alert, Button} from 'reactstrap'

class LoginSuccess extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event) {
       let usertoken = localStorage.getItem('userToken')
       localStorage.removeItem('userToken')
       console.log('localStorage@@@', localStorage.getItem('userToken'))

        this.props.handleBackClick(usertoken);
    }

    render() {
        return (
          <div>
              <Alert color="success"><h1>You have been logged in successfully</h1></Alert>
            
            <Button onClick={this.handleClick} color='primary'>Logout</Button>
            </div>
        );
    }
}



export default withRouter(LoginSuccess);
