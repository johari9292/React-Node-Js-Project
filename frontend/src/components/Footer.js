import React, {Component} from 'react';
import {Navbar, NavbarBrand,Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialIcon } from 'react-social-icons';
export default class Footer extends Component{
    
    render(){
        return(
          
            <footer className="page-footer font-small mdb-color lighten-3 pt-4">
            
              
              <div className="container text-center text-md-left">
            
                
                <div className="row">

            
                  
                  <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
            
                   
                    <h5 className="font-weight-bold text-uppercase mb-4">Our Moto</h5>
                    <p></p>
                    <p></p>
            
                  </div>
                 
            
                  <hr className="clearfix w-100 d-md-none"/>
            
                 
                  <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
            
                  
                    <h5 className="font-weight-bold text-uppercase mb-4">About</h5>
            
                    <ul className="list-unstyled">
                      <li>
                        <p>
                          <a href="#!">PROJECTS</a>
                        </p>
                      </li>
                      <li>
                        <p>
                          <a href="#!">ABOUT US</a>
                        </p>
                      </li>
                      <li>
                        <p>
                          <a href="#!">BLOG</a>
                        </p>
                      </li>
                      <li>
                        <p>
                          <a href="#!">AWARDS</a>
                        </p>
                      </li>
                    </ul>
            
                  </div>
                 
            
                  <hr className="clearfix w-100 d-md-none"/>
            
                  
                  <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
            
                   
                    <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>
            
                    <ul className="list-unstyled">
                      <li>
                        <p>
                          <i className="fas fa-home mr-3"></i> Uiversity of Engineering and Technology Lahore</p>
                      </li>
                      <li>
                        <p>
                          <i className="fas fa-envelope mr-3"></i> johari9292@gmail.com</p>
                      </li>
                      <li>
                        <p>
                          <i className="fas fa-phone mr-3"></i> +92-343-8160801</p>
                      </li>
                      
                    </ul>
            
                  </div>
                  
            
                  <hr className="clearfix w-100 d-md-none"/>
            
                  
                  <div className="col-md-2 col-lg-2 text-center mx-auto my-4">
            
                   
                    <h5 className="font-weight-bold text-uppercase mb-4">Contact Us</h5>
                    <ul>
                    <li > <SocialIcon url="http://facebook.com/jaketrent" /> </li>
                    <br/>
                    
                    <li > <SocialIcon url="http://twitter.com/jaketrent" /> </li>
                    <br/>
                    
                   
                      <li > <SocialIcon url="http://google.com/jaketrent" /> </li>
                      <br/>
                     
                    
                    </ul>
            
                  </div>
                
            
                </div>
                
            
              </div>
              
            
              
             
             
            
            </footer>
       
        )
    }


}