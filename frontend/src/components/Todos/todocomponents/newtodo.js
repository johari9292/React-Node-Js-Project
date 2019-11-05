import React, {Component} from 'react';
import download from 'downloadjs';
import Resizer from 'react-image-file-resizer';
import {connect} from 'react-redux';
import validator from 'validator';
import { addtodoaction } from "../../../actions/todos";
import {  Link } from "react-router-dom";
import axios from 'axios'

import { Container, Button, Form, FormGroup, Label, Input,FormFeedback} from 'reactstrap';
class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: '',
            text:'' ,
            lasttext:'',
            firsttext:'',
            disable:'',
            image:{}
    }
    }
       
    fileChangedHandler =(event)=> {
        var fileInput = false
        if(event.target.files[0]) {
            fileInput = true
        }
        if(fileInput) {
            Resizer.imageFileResizer(
                event.target.files[0],
                200,
                200,
                'JPEG',
                40,
                0,
                uri => {
                    this.setState({
                        image:uri

                    })
                    axios.post("http://localhost:3201/upload", uri, { 
                        // receive two    parameter endpoint url ,form data
                    })
                  .then(res => { // then print response status
                      console.log(res.statusText)
                   })
                    // download(uri,"D:/intrenship/SignIn_React_Redux_Authentication-master/frontend/rc/assets/photo.jpeg", "image/jpeg")
                    console.log(uri)
                },
                'base64'
            );
        }
    }
 
    onChangeTodoDescription(e) {
        // if (validator.isAlpha(e.target.value)=== false){
        //     this.setState({           
        //         firsttext:'nameerror',
        //         disable:'nameerror'
                  
        //     })
        //   } else {
        //     this.setState({       
        //      firsttext:'nameright' , 
        //      disable:'nameright'
             
        //     })
        //    }
        this.setState({   todo_description: e.target.value })
    }

    onChangeTodoResponsible(e) {
        // if(validator.isAlpha(e.target.value)=== false){
        //     this.setState({           
        //         lasttext:'lasterror' ,
        //         disable:'lasterror'
                
        //     })
        //   } else {
        //     this.setState({       
        //      lasttext:'lastright',  
        //      disable:'lastright'
             
        //     })
        //   }
        
        this.setState({  todo_responsible: e.target.value })
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }
    onChangeTodoCompleted = (e)=> {
        this.setState({
            todo_completed: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed,
            todo_date: Date.now(),
            todo_image: this.state.image
            
        }
      this.props.addtodoaction(newTodo) 

    this.setState({
        todo_description: '',
        todo_responsible: '',
        todo_priority: '',
        todo_completed: ''
    })
    }

    render() {
        return (
            <Container>


           
            <div style={{marginTop: 20}}>
                <h3>Create New Todo</h3>
                <Form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <FormGroup>
                        <Label> Task Description: </Label>
                        <Input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                valid={this.state.firsttext === 'nameright'} invalid={this.state.firsttext === 'nameerror'} id="examplfirstname" placeholder="enter your first name" 
                                />
                        {/* <FormFeedback valid></FormFeedback>
          <FormFeedback invalid>only alphabet is valid</FormFeedback> */}
          </FormGroup>
                    </div>
                    <div className="form-group">
                    <FormGroup>
                        <Label>Task Resposibility </Label>
                        <Input  type="text"
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                valid = {this.state.lasttext === 'lastright'} invalid = {this.state.lasttext === "lasterror"} id="examplelastname" placeholder="enter your last name"
                                />
                        {/* <FormFeedback valid></FormFeedback>
          <FormFeedback invalid>only alphabet is valid</FormFeedback> */}
          </FormGroup>
                    </div>
                   
                    <div className="form-group">
                    <FormGroup >
                    <Label>Task Perrioty</Label>
                      
                            <Input  className="form-control"
                                    type="text"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value ={this.state.todo_priority}
                                   
                                    onChange={this.onChangeTodoPriority}
                                    />
                            
                        </FormGroup>
                        <FormGroup >
                    <Label>Task completation </Label>
                      
                    <Input type="select" value={this.state.todo_completed} onChange={this.onChangeTodoCompleted} name="todo_completed" id="exampleSelect44">
            <option>10% Completed </option>
            <option>25% Completed</option>
            <option>40% Completed</option>
            <option>50% Completed</option>
            <option>65% Completed</option>
            <option>75% Completed</option>
            <option>90% Completed</option>
            <option>100% Completed</option>
          </Input>
                        </FormGroup>
                        
                        <FormGroup >
                    <Label>Task completation </Label>
                    <Input type="file" onChange={this.fileChangedHandler}/>
                   
     
                        </FormGroup>
                       {console.log("image",this.state.image)}
                    
                    </div>
                    <div className="form-group">
                        <input type="submit" disabled = { this.state.disable === 'nameerror' || this.state.disable === 'lasterror' ||  this.state.todo_description === '' ||
                         this.state.todo_responsible === ''   || this.state.todo_priority === ''} value="Create Todo" className="btn btn-primary" />
                    </div>
                    {/* <Link to="/get" >
              <Button
                         color='primary'>
                            
                            
                              View Todos  </Button> </Link> */}
                </Form>
            </div>
             </Container>
        )
    }
}
const mapStateToProps = (state) => ({
    addtodo: state.addtodo

});

export default connect(mapStateToProps,{addtodoaction})(CreateTodo)