import React , {Component} from 'react';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { Button,Alert, Form, FormGroup, Label, Input,FormFeedback,FormText,Container } from 'reactstrap';


export default class Loginform extends Component {
    constructor(props){
        super(props)
        this.state ={
            email: '',
            password: '',
            ErrorMsgPas: false,
            ErrorMsgEmail: false,
            UserHelperText: '',
            emailFlag: false,
            passwordFlag: false,
            emailtext:'',
            passwordtext:''
           
        }
        this.handleemail = this.handleemail.bind(this);
        this.handlepassword = this.handlepassword.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }
  
    handleemail(e){
        ((validator.isEmail(e.target.value) || (e.target.value === '')) ?
            this.setState({
                emailFlag: false,
                // UserHelperText: '',
                ErrorMsgEmail: false
            })
            :
            this.setState({
                emailFlag: true,
                // UserHelperText: 'Please enter valid email',
                ErrorMsgEmail: true
            })
        )

        this.setState({ email: e.target.value });
    }
    handlepassword(e) {
        if (!validator.isEmpty(e.target.value)) {
            this.setState({
                passwordFlag: false,
               
                ErrorMsgPas: false
            })
        } else {
            this.setState({
                passwordFlag: true,
               
                ErrorMsgPas: true
            })
        }

        this.setState({ password: e.target.value });
    }
    
    handlesubmit(){
        
        console.log('here is handle submit')
        this.props.Login(this.state.email, this.state.password)
    }

    render() {
        var errorMessage = (this.props.status !== undefined && this.props.status === "LOGIN_ACCOUNT_NOT_AUTHORIZED") ? 
        "Email or password is incorrect" : "";
        return(
            <Container>
            <h1>  Enter Your Detail here and enjoy!!</h1>
           <Form onSubmit ={this.handlesubmit}>
               
                   
               <FormGroup>
                   <Label for="email">Email</Label>
                   <Input
                                   
                                   error={this.state.ErrorMsgEmail}
                                   placeholder="User Email"
                                   type = 'email'
                                   onChange={this.handleemail}
                                   value={this.state.email}
                                   label="User Email"
                                   id="email"
                                    margin="normal">
                              
                                  
                               </Input>
               </FormGroup>
               <FormGroup>
                   <Label for="password">Password</Label>
                   <Input
                                    error={this.state.ErrorMsgPas}
                                    placeholder="Enter Password"
                                    type="password"
                                    id="password"
                                    onChange={this.handlepassword}
                                    
                                    value={this.state.password}
                                    label="Password"
                                    margin="normal">
                                  
                               </Input>
               </FormGroup>
               <span>{errorMessage}</span>
                       
                       <Button 
                      
                         type='submit' variant='raised' color='primary' 
                        disabled={((this.state.email === '' || this.state.password === '') || (this.state.emailFlag || this.state.passwordFlag)) ? true : false}
                       >
                        Login
                       </Button>
           
           </Form>
           <br></br>
           <Button 
           style={{alignItems:"center"}}
                type='submit'
                 variant='raised' 
                 color='primary'>
                                        <Link to="/Register" style={{ color: 'white', textDecoration: 'none' }}>Create New Account</Link>
                                    </Button>
       </Container>
          





        )
    }
}