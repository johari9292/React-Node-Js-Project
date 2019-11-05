import React, {Component} from 'react';
import axios from 'axios';
import validator from 'validator';
import { Link } from "react-router-dom";
import { Container, Button, Form, FormGroup, Label, Input,FormFeedback } from 'reactstrap';
class EditTodo  extends Component {

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
            todo_completed: false,
            text:'' ,
            lasttext:'',
            firsttext:'',
            disable:''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3201/get/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                todo_description: response.data.todo_description,
                todo_responsible: response.data.todo_responsible,
                todo_priority: response.data.todo_priority,
                todo_completed: response.data.todo_completed
            })
        })
        .catch(function(error) {
            console.log(error)
        })
    }
    onChangeTodoDescription(e) {
        if (validator.isAlpha(e.target.value)=== false){
            this.setState({           
                firsttext:'nameerror',
                disable:'nameerror'
                  
            })
          } else {
            this.setState({       
             firsttext:'nameright' , 
             disable:'lastright'
             
            })
           }
        this.setState({   todo_description: e.target.value })
    }

    onChangeTodoResponsible(e) {
        if(validator.isAlpha(e.target.value)=== false){
            this.setState({           
                lasttext:'lasterror' ,
                disable:'lasterror'
                
            })
          } else {
            this.setState({       
             lasttext:'lastright',
             disable:'lastright'  
             
             
            })
          }
        
        this.setState({  todo_responsible: e.target.value })
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };
        axios.post('http://localhost:3201/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
            this.props.history.push('/get')
    }
    

    render() {
        return (
            <Container>


           
            <div style={{marginTop: 20}}>
                <h3>Update Todo</h3>
                <Form >
                    <div className="form-group">
                    <FormGroup>
                        <Label> First Name: </Label>
                        <Input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                valid={this.state.firsttext === 'nameright'} invalid={this.state.firsttext === 'nameerror'} id="examplfirstname" placeholder="enter your first name" 
                                />
                        <FormFeedback valid></FormFeedback>
          <FormFeedback invalid>only alphabet is valid</FormFeedback>
          </FormGroup>
                    </div>
                    <div className="form-group">
                    <FormGroup>
                        <Label>Last Name </Label>
                        <Input  type="text"
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                valid = {this.state.lasttext === 'lastright'} invalid = {this.state.lasttext === "lasterror"} id="examplelastname" placeholder="enter your last name"
                                />
                        <FormFeedback valid></FormFeedback>
          <FormFeedback invalid>only alphabet is valid</FormFeedback>
          </FormGroup>
                    </div>
                    <Label>Gender </Label>
                    <div className="form-group">
                    <FormGroup check>
                        <div className="form-check form-check-inline">
                      
                            <Input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Male"
                                    checked={this.state.todo_priority==='Male'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <Label className="form-check-Label">Male</Label>
                        </div>
                        
                       
                        <div className="form-check form-check-inline">
                            <Input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Female"
                                    checked={this.state.todo_priority==='Female'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <Label className="form-check-Label">Female</Label>
                        </div>
                       
                       
                        <div className="form-check form-check-inline">
                            <Input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="Not want to specify"
                                    checked={this.state.todo_priority==='Not want to specify'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <Label className="form-check-Label">Not want to specify</Label>
                        </div>
                        </FormGroup>
                    </div>
                    <div className="form-group">
                    <Link to="/get" >         <input type="submit"  onClick={this.onSubmit} disabled = { this.state.disable === 'nameerror' || this.state.disable === 'lasterror' ||  this.state.todo_description === '' ||
                         this.state.todo_responsible === '' || this.state.todo_priority===''} value="Update Todo" className="btn btn-primary" />
                  </Link>  </div>
                    <Link to="/get" >
              <Button
                         color='primary'>
                            
                            
                              View Todos  </Button> </Link>
                </Form>
            </div>
             </Container>
        )
    }
}


  
  
  
  
   export default EditTodo;