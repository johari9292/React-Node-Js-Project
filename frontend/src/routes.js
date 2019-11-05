import React, { Component } from "react";
import {  BrowserRouter as Router,HashRouter, BrowserRouter,  Route, Switch, Link } from 'react-router-dom';
import LoginView from './components/Login/LoginView';
import RegisterView from './components/Registration/RegisterView';
import Home from './components/Home';
import Footer from './components/Footer';
import { connect } from "react-redux";
import TodosList from './components/Todos/todocomponents/gettodo'
import EditTodo from './components/Todos/todocomponents/edittodo'
import CreateTodo from './components/Todos/todocomponents/newtodo'
import Graph from './components/reactgraph'
import PieChart from './components/Todos/todocomponents/taskpiechart'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import Graphstemplate from "./graphs";

class Root extends Component{
 constructor(props){
   super(props);
   this.state = {
     value: 'Login'
   }
 }

 componentWillMount(){
   console.log('this.props.login_status', this.props.login_status)
  if(this.props.login_status == ' LOGIN_ACCOUNT_AURHORIZED'){
    this.setState = {
    value: 'Logout'
    }
  }
    else{
      this.setState = {
       value: 'Logout'
      }

  
  }
  console.log('localstorage.getitem',localStorage.getItem('userToken'))
 }






render(){
return(
   <div >  
     <Navbar color="dark" dark expand="sm" className ="mb-5">
                <Container>
                    <NavbarBrand href="/"> Home
                    </NavbarBrand>
                    
                   
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/login">
                                    {this.state.value}
                                </NavLink>
                               
                            </NavItem>
                            <NavItem>
                            <NavLink href="/register">
                                    Register
                                </NavLink>
                            </NavItem>

                        </Nav>
                    

                </Container>

            </Navbar>

            
  
<BrowserRouter>    

    
    <Route exact path='/' component={Home} />
    <Route exact path='/login' component={LoginView} />
    <Route exact path='/Register' component={RegisterView} />
    <Route exact path="/get"  component={TodosList} />
          <Route exact path="/edit/:id" component={EditTodo} />
          <Route  exact path="/create" component={CreateTodo} />
          <Route  exact path="/graph" component={Graph} />
          <Route exact path ='/template' component={Graphstemplate} />
          <Route  exact path="/pie" component={PieChart} />
    </BrowserRouter>
    <div >
               
                   <footer>
                   <Footer/>

                   </footer>
                        
                         
                       
                   
               
            </div>
  </div>




    

      
)
  }
}
function mapStateToProps(state) {
  console.log('login staturajd', state.loginreducer.login_status.auth)
  return {
    login_status: state.loginreducer.login_status
  }
}

export default connect(
  mapStateToProps
)(Root);
