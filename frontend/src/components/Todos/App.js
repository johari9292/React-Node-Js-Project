import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "../Todos/todocomponents/newtodo";
import EditTodo from "./todocomponents/edittodo";
import TodosList from "./todocomponents/gettodo";



class Apptodo extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase nav-collapse">
              
            
                  <Link to="/get" className="nav-link">Todos</Link>
                
                
                  <Link to="/create" className="nav-link">Create Todo</Link>
                  
               
           
            </div>
          </nav>

          <Route exact path="/get"  component={TodosList} />
          <Route exact path="/edit/:id" component={EditTodo} />
          <Route  exact path="/create" component={CreateTodo} />
          
        </div>
      </Router>
    );
  }
}

export default Apptodo;
