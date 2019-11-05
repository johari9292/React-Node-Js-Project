import React, { Component } from 'react';
import {Alert, Button, Container} from 'reactstrap'

class RegisterSuccess extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        
   
        return (

          <div>
              <Container>
              <Alert color="success"> <h1>   You have been registered successfully</h1> </Alert>   
            <Button onClick={this.handleClick} color='primary'>
                <Link to="/" style={{ color: 'Primary', textDecoration: 'none' }}>Back to Home</Link></Button>
           

              </Container>
         </div>
        );
    }
}


    export default (RegisterSuccess);
