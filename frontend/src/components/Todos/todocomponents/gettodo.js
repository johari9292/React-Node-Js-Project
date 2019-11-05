import React from 'react';

import MaterialTable from "material-table";
// import PieChart from './taskpiechart'
import { connect } from 'react-redux';
import {gettodoaction, deletetodo} from '../../../actions/todos';
import { addtodoaction } from "../../../actions/todos";
import {  Link } from "react-router-dom";
import MyFilteringComponent from '../../filteringcomponent';
import { forwardRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios'; 
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Container, Button, Table,CSSTransition} from 'reactstrap';
import {Bar, Pie, Line, HorizontalBar} from 'react-chartjs-2';
import { Input } from '@material-ui/core';
import { keys } from '@material-ui/core/styles/createBreakpoints';



const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};



class TodosList extends React.Component {
 constructor(props){
   super(props)
   this.state =  {
    isOpen : false,
    value:'Login'
    , arr1:[],
    arr2:[],
  arrimage:[],
      task25:[],
      task50:[],
      task75:[],
      task100:[],
      taskCompleted:[],
      factor:'',
      rdata:[],
      datar:{},
      date:[],
      series2:[],
      series4:[],
      task25:[],
      task50:[],
      task75:[],
      task100:[],
      taskCompleted:[],
      pdata:{},
     
      dateuniqe:[],
      datar2:{},
      dataarr:[],
      answer:''
      
     
   
   
    
    
}

 }
 handleSubmit = (event) => {
    const {users} = this.props.gettodo;
    this.state.factor = parseInt(100/users.length,10);
    let date =[]
    let task25=[]
    let task50=[]
    let task75=[]
    let task100=[]
    let taskCompleted=[]
    let dataarr=[]
    let dateuniqe=[]
    users.map(({_id,todo_completed,todo_date})=>{
        
        date.push((new Date(todo_date).toDateString()))
 
       
        if(parseInt(todo_completed,10)< 26){
            task25.push(todo_completed)
        }
        else if(parseInt(todo_completed,10) <51)
         {
             task50.push(todo_completed)
          }
       else if(parseInt(todo_completed,10) < 76 ) {
            task75.push(todo_completed)
       }	
       else if(parseInt(todo_completed,10)<100) {
           task100.push(todo_completed)
      }
      else if(parseInt(todo_completed,10)=== 100){
          taskCompleted.push(todo_completed)
  
      }
      else{
       
      }
         })
         
         for(var i =0;i< this.state.date.length -1;i++){
             if(this.state.date[i+1] != this.state.date[i]){
                dateuniqe.push(this.state.date[i+1])
             }
         }
         var j =0;
         while(j< this.state.date.length- 1){
           
             if(this.state.date[j+1] != this.state.date[j]){
             dataarr.push(1)
                 j=j+1
             }
             else{
                 var k =1
                 while (this.state.date[j+1] == this.state.date[j]) {
                     k = k+1
                     j=j+ 1
                 }
                 dataarr.push(k)
                 j = j+1
             }
         
         }
         dataarr.shift();
         this.setState({
            date :date,
            task25:task25,
            task50:task50,
            task75:task75,
            task100:task100,
            taskCompleted:taskCompleted,
            dataarr:dataarr,
            dateuniqe:dateuniqe
         })
    this.setState({ answer: event.target.name ,
       
      
    })
    
}
 Pief = ()=>{
     return(<div>
          < Pie data={this.state.pdata} height={"80%"}
			options={{
               
                title:{
                    position:'top',
                    text:'Percentage of Task with thier completation stautus',
                    display:true
                },
                legend: {
                    position: 'left',
                    padding:10
                    
                 },
				tooltips:{
					callbacks:{
						label: function(tooltipsItem,data) {
						
							return data.datasets[0].data[tooltipsItem.index]+"%"
							
						},
						title:function (tooltipsItem,data) {
							return data.labels[tooltipsItem[0].index]
							
						}
						
					},
					animation: false,
					
				}
            }}
           />
     </div>)
 }
 Linef =()=>{
    
    return(<div className="col-md-7" >	<Line data={this.state.datar.data} 
    options={{
        title:{
            position:'top',
            text:'Number of Task done on given date',
            display:true
        },
        maintainAspectRatio: true,
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: "#f5f5f5",
          titleFontColor: "#333",
          bodyFontColor: "#666",
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        responsive: true,
        scales: {
          yAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(29,140,248,0.0)",
                zeroLineColor: "transparent"
              },
              ticks: {
                suggestedMin: 0,
               
                fontColor: "#9a9a9a"
              }
            }
          ],
         
        },
        animation: {
            duration: 5000 // general animation time
        },
        hover: {
            animationDuration: 1000 // duration of animations when hovering an item
        },
        responsiveAnimationDuration: 1000 
     
     }}
    height={'130%'}
     /></div>)
} 
Barf =()=>{
    return(<div className="col-md-7" >	<Bar data={this.state.datar2.data} 
    options={{
       
        title:{
            position:'top',
            text:'Number of Task with thier completation stautus',
            display:true
        },
        tooltips: {
          backgroundColor: "#f5f5f5",
          titleFontColor: "#333",
          bodyFontColor: "#666",
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        responsive: true,
        scales: {
          yAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(29,140,248,0.0)",
                zeroLineColor: "transparent"
              },
              ticks: {
                suggestedMin: 0,
               
              
                fontColor: "#9a9a9a"
              }
            }
          ],
          
        },
        animation: {
            duration: 5000 // general animation time
        },
        hover: {
            animationDuration: 1000 // duration of animations when hovering an item
        },
        responsiveAnimationDuration: 1000 
     
     }}
    
     /></div>)
}
handdeletetodo = id => {
 
   this.props.deletetodo(id)
  
}
      componentDidMount() {
       
        this.props.gettodoaction();
     
        
      }
    
      
    render() {
         const {users} = this.props.gettodo;
         console.log("usersss",users)
         let    columns=[
          { title: "Avater", field: "avater" },
          { title: "Task Description", field: "todo_description" },
          { title: "Task Resposbility", field: "todo_responsible" },
          { title: "Task Perioty ", field: "todo_priority" },
          { title: "Task Completed ", field: "todo_completed" },
         
        ]
        
   
       users.map(({_id,todo_image,todo_description, todo_responsible,todo_priority,todo_completed,todo_date})=>{
       var avater = <Avatar style={{width:70,height:70, margin:3}} src= {todo_image}></Avatar>    
        this.state.arr1.push({_id, avater,todo_description, todo_responsible,todo_priority,todo_completed,todo_date})
       
        
      })
        console.log("dataarr",this.state.dataarr)
        console.log("dateunique", this.state.dateuniqe)
              
        this.state.datar2= { 
            data: canvas => {
            
                let ctx = canvas.getContext("2d");
            
                let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
            
                gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
                gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
                gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
            
                return {
                    labels: ["UnCompleted", "Partially UnCompleted", "Partially Completed", "Almost completed", "Fully Completed"],
                    
                  datasets: [
                    {
                      label: "No of Task",
                      fill: true,
                      backgroundColor: gradientStroke,
                      borderColor: "#1f8ef1",
                      borderWidth: 2,
                      borderDash: [],
                      borderDashOffset: 0.0,
                      pointBackgroundColor: "#1f8ef1",
                      pointBorderColor: "rgba(255,255,255,0)",
                      pointHoverBackgroundColor: "#1f8ef1",
                      pointBorderWidth: 20,
                      pointHoverRadius: 4,
                      pointHoverBorderWidth: 15,
                      pointRadius: 4,
                      data: [this.state.task25.length , this.state.task50.length ,
                        this.state.task75.length, this.state.task100.length ,
                        this.state.taskCompleted.length ]
        
                    }
                ]
                }       
             
            }} 
        this.state.pdata= {
                labels: ["UnCompleted", "Partially UnCompleted", "Partially Completed", "Almost completed", "Fully Completed"],
               datasets: [{
               label: "Percentage  of task Completed",
               fill: true,
               backgroundColor: ['red','blue','green','yellow','purple'],
               borderColor: 'rgb(255, 99, 132)',
               data: [this.state.task25.length * this.state.factor, this.state.task50.length * this.state.factor,
                   this.state.task75.length * this.state.factor, this.state.task100.length * this.state.factor,
                   this.state.taskCompleted.length * this.state.factor],
                   
               }]
           }
           this.state.datar= { 
            data: canvas => {
            
                let ctx = canvas.getContext("2d");
            
                let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
            
                gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
                gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
                gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
            
                return {
                  labels: 
                    this.state.dateuniqe,
                    
                  
                  datasets: [
                    {
                      label: "Number of task done on",
                      fill: true,
                      backgroundColor: gradientStroke,
                      borderColor: "#1f8ef1",
                      borderWidth: 2,
                      borderDash: [],
                      borderDashOffset: 0.0,
                      pointBackgroundColor: "#1f8ef1",
                      pointBorderColor: "rgba(255,255,255,0)",
                      pointHoverBackgroundColor: "#1f8ef1",
                      pointBorderWidth: 20,
                      pointHoverRadius: 4,
                      pointHoverBorderWidth: 15,
                      pointRadius: 4,
                    //   data: [120, 3, 100, 90, 29, 69, 22, 9, 111,50, 70, 109, 50, 130, 90, 70, 29, 79, 105]
                        data: this.state.dataarr
                    }
                  ]
                };
        }}
                    
      
     
                  
      
        return (
          
            <div>
         <div className="collpase nav-collapse">
              
                     <Link to="/create" >
                    <Button
                              color='primary'>
                                  
                                  
                                  Create Todo  </Button> </Link>
                        <br></br>
                   
           
                 </div><br></br>
                 <p>From below select the Graph to visulize data</p>
                 <Button onClick={this.handleSubmit} color='info' name="yes">PieChart</Button>
        <Button onClick={this.handleSubmit} color='info' name="no">Line Chart</Button>
        <Button onClick={this.handleSubmit} color='info'  name="la">Bar Chart</Button>

                 {this.state.answer === "yes" && this.Pief() }
                 {this.state.answer === "no" && this.Linef() }
                 {this.state.answer === "la" && this.Barf() }
        
          
               
                  <MaterialTable
         
          columns={columns}
          data={this.state.arr1}
          icons={tableIcons}
          title="Material Title"
          editable={{
            // isEditable:( rowData)=> rowData.name === "5", // only name(a) rows would be editable
            // isDeletable: rowData => rowData.name === "ishaq", // only name(a) rows would be deletable
            onRowAdd: newData =>
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        {
                             const data = this.state.arr1;
                            data.push(newData);
                            
                            this.setState({ data }, () => resolve()); 
                        }
                        resolve();
                    }, 1000);
                }),
            onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                    
                    
                    setTimeout(() => {
                        {
                            const data = this.state.arr1;
                            const index = data.indexOf(oldData);
                            data[index] = newData;                
                            this.setState({ data }, () => resolve())
                            
                        }
                        resolve();
                    }, 1000);
                }),
            onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        {
                           let data = this.state.arr1;
                            const index = data.indexOf(oldData);
                            
                            data.splice(index, 1);
                            this.setState({ data }, () => resolve()); 
                        } 
                        resolve();
                    }, 1000);
                })
        }}
        
         /> 

            // {/* <MyFilteringComponent content={this.state.arr1} /> */}
 {/*          
         <Container>  
        
           
           
         

          
                
          
            
             <h2>Taask Detail</h2> 
             <Table dark >
        <thead>
          <tr>
          
            <th>Task </th>
            <th>Task resposibiity</th>
            <th>Task Perioty</th>
            <th>Task Completed</th>
            
          </tr>
        </thead>
        <tbody>

        
              {users.map(({_id,todo_description,todo_responsible,todo_priority,todo_completed}) =>(
            
                                
                                                            <tr key={_id}>
                                        
                                        <td>{ todo_description}</td>
                                        <td>{todo_responsible}</td>
                                        <td>{todo_priority}</td>
                                        <td>{todo_completed}</td>
                                        <td><Button onClick = {() =>this.props.deletetodo(_id)} color='danger'>
            Delete
           
              
            
          </Button></td>
          <td> <Link to={'/edit/'+ _id}p><Button onClick = {() =>this.props.u} color='primary'>
           Update 
              
             
          </Button> </Link></td>
                                    </tr>
                                                                

                           

          )

          )

          

              }
              </tbody>
              </Table>
              
  

  
        
           
          </Container>
  */}


          </div>
        );
    }
}

const mapStateToProps = (state) => {
  console.log('addtodohhhhh', state)
  return {
    gettodo: state.gettodo,
    addtodo: state.addtodo
   
    
 
};

}
 




 export default connect(mapStateToProps, {gettodoaction, deletetodo,addtodoaction })(TodosList);