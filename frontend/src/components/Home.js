import React from 'react';
import {Container,ListGroup, ListGroupItem,Form,Input, Button,Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,  } from 'reactstrap';
import {TransitionGroup, CSSTransition} from "react-transition-group";
import { connect } from 'react-redux';
import { getAll} from '../actions/getAll';
import MyFilteringComponent from './filteringcomponent'
class Home extends React.Component {
  state = {
    isOpen : false,
    value:'Login',
    searchterm: '',
    currentlydisplayed:this.props.user,
    data:[]
}




      componentDidMount() {
       
        this.props.getAll();
       
      }
    render() {
         
         const {users} = this.props.user;
         console.log("usersss",this.props.user.username)
        
        return (
          
          <Container>
             
            <ListGroup>
              <TransitionGroup>
            
             <h2>Registered Users</h2> 
            
           
               {users.map(({_id, username}) =>( 
            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                   
                                <a href="/">   {username}  </a>
                                
                                    
                                </ListGroupItem>

                             </CSSTransition>

          )

          )

          

              }
              </TransitionGroup>
            </ListGroup> 
           </Container>
            
        );
    }
}

const mapStateToProps = (state) => ({
      user: state.user
  
});




 export default connect(mapStateToProps, {getAll})(Home);






















// import React, { Component } from "react";
// import { connect } from 'react-redux';


// class Home extends Component {
//     render() {
       
//         return (
            
//             <div >
//             <h1>Welcome</h1>
//             <h3>Registered Users</h3>
//               user
//             </div>


//         );
//     }
// }
// function mapStateToProps(state) {
    
//     const userData = state.getallreducer.userData;
//     console.log("data",userData)
//     return { userData };
// }
   

// export default connect(mapStateToProps)(Home);
