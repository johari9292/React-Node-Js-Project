import React, { Component } from "react";
import { Button,Alert, Form, FormGroup, Label, Input,FormFeedback,FormText,Container } from 'reactstrap';
import validator from 'validator';
import { Link  } from 'react-router-dom';

export default class  RegisterNew extends Component{
    constructor(props){
        super(props)
        this.state ={
            username: '',
            email: '',
            password: '',
            ErrorMsguser: false,
            ErrorMsgPas: false,
            ErrorMsgEmail: false,
            UserHelperText: '',
            emailFlag: false,
            userFlag: false,
            passwordFlag: false,
            PassHelperText: '',
            UserNameHelperText:''
        }
        this.handleemail = this.handleemail.bind(this);
        this.handlename = this.handlename.bind(this);
        this.handlepassword = this.handlepassword.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }
    handlename(e){
        if (!validator.isEmpty(e.target.value)) {
            this.setState({
                userFlag: false,
                UserNameHelperText:'',
                ErrorMsguser: false
            })
        } else {
            this.setState({
                userFlag: true,
                UserNameHelperText:'Please enter your name',
                ErrorMsguser: true
            })
        }

        this.setState({ username: e.target.value });
    }
    handleemail(e) {
        ((validator.isEmail(e.target.value) || (e.target.value === '')) ?
            this.setState({
                emailFlag: false,
                UserHelperText: '',
                ErrorMsgEmail: false
            })
            :
            this.setState({
                emailFlag: true,
                UserHelperText: 'Please enter valid email',
                ErrorMsgEmail: true
            })
        )

        this.setState({ email: e.target.value });
    }
    handlepassword(e) {
        if (!validator.isEmpty(e.target.value)) {
            this.setState({
                passwordFlag: false,
                PassHelperText: '',
                ErrorMsgPas: false
            })
        } else {
            this.setState({
                passwordFlag: true,
                PassHelperText: 'enter your password',
                ErrorMsgPas: true
            })
        }

        this.setState({ password: e.target.value });
    }

    handlesubmit(e){
        this.props.Register(this.state.username, this.state.email, this.state.password)

    }

    render(){
        var errorMessage = (this.props.status != undefined && this.props.status == "REGISTER_EXISTING")
         ? "This email already exists" : ""
return(
    <Container>
         <h1>  Enter Your Detail here and enjoy!!</h1>
        <Form onSubmit={this.handlesubmit}>
            <FormGroup>
                <Label for="username">User Name</Label>
                <Input
                                 error={this.state.ErrorMsgEmail}
                                placeholder="User Name"
                                id="email"
                                type = 'username'
                                onChange={this.handlename}
                                value={this.state.username}
                                label="User Email"
                                 margin="normal"
                               >
                            </Input>
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input
                                
                                error={this.state.ErrorMsgEmail}
                                id="email"
                               placeholder="User Email"
                               type = 'email'
                               onChange={this.handleemail}
                               value={this.state.email}
                               label="User Email"
                                margin="normal"
                               helperText={this.state.PassHelperText}>
                           
                               >
                            </Input>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input
                                 error={this.state.ErrorMsgPas}
                                 placeholder="Enter Password"
                                 type="password"
                                  id ="password"
                                 onChange={this.handlepassword}
                                 helperText={this.state.PassHelperText}
                                 value={this.state.password}
                                 label="Password"
                                 margin="normal">
                               >
                            </Input>
            </FormGroup>
          <span>{errorMessage}</span>   
         <Button
                          onClick={this.props.handleCancel} color='danger'>
                              <Link to="/" style={{color:'primary',textDecoration:'none'}}>Cancel</Link>
                            
                        </Button>   

                       <Button 
                       
                         type='submit' variant='raised' color='primary'  
                        disabled={((this.state.username === ''|| this.state.email === '' || this.state.password === '') || (this.state.emailFlag || this.state.passwordFlag)) ? true : false}
                       >
                        Register
                       </Button> 
        </Form>
    </Container>
       
)
    }

}
