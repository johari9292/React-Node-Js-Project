import React, { Component } from 'react';
import {Alert , Button} from 'reactstrap';

class RegisterFailure extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event) {
        this.props.handleBackClick();
    }
    render() {

        return (
            <div>
              <Alert> <h1> Something went wrong ,please try again</h1> </Alert>  
                <Button color =" primary" onClick={this.handleClick}>Back</Button>
            </div>
        );
    }
}

export default RegisterFailure