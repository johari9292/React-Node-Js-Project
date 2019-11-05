import React from 'react';
import {Link} from 'react-router';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


let NavBar = (props) => {

  const loginOrProfile = (login_status) => {
  
    return login_status = "LOGIN_ACCOUNT_AURHORIZED" ?
      <Nav className="float-xs-right" navbar>
       
        <NavItem>
          <NavLink tag={Link} to="/">Logout</NavLink>
        </NavItem>
      </Nav>

      :

      <Nav className="float-xs-right" navbar>
        <NavItem>
          <NavLink tag={Link} to="/login">Log in</NavLink>
        </NavItem>
      </Nav>
  };

  return (
    <div>
      <Navbar color="inverse" dark full>
        <NavbarBrand href="/">Our Cool App</NavbarBrand>
        {loginOrProfile(props.login_status)}
        <NavbarBrand href="/register">Register</NavbarBrand>
      </Navbar>
    </div>
  );
};

export default NavBar;