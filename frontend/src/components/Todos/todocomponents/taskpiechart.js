import React, { Component } from 'react';
import { connect } from 'react-redux';
import {gettodoaction, deletetodo} from '../../../actions/todos';
import {Bar, Pie, Line, HorizontalBar} from 'react-chartjs-2';

class PieChart extends Component {
    constructor(props){
        super(props)
        this.state =  {
         isOpen : false,
         value:'Login'
         , arr1:[],
		 arr2:[{ "y": '',"label":''}],
		 task25:[],
		 task50:[],
		 task75:[],
		 task100:[],
		 taskCompleted:[],
		 factor:'',
		 rdata:[],
		 datar:{},
		 date:[]
        
        
         
         
	 }}
	
	 linef =()=>{
		return(<div className="col-md-7" >	<Line data={this.state.datar.data} 
		options={{
			maintainAspectRatio: false,
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
					suggestedMin: 60,
					suggestedMax: 125,
					padding: 20,
					fontColor: "#9a9a9a"
				  }
				}
			  ],
			  xAxes: [
				{
				  barPercentage: 1.6,
				  type:'time',
				  distribution: 'series',
				 
				 
				  ticks: {
					
		            unit:'day'
				  }
				}
			  ]
			},
			animation: {
				duration: 5000 // general animation time
			},
			hover: {
				animationDuration: 1000 // duration of animations when hovering an item
			},
			responsiveAnimationDuration: 1000 
		 
		 }}
		height={'200%'}
		 /></div>)
	}
	Barf =()=>{
		return(<div className="col-md-7" >	<HorizontalBar data={this.state.datar.data} 
		options={{
			maintainAspectRatio: false,
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
					suggestedMin: 60,
					suggestedMax: 125,
					padding: 20,
					fontColor: "#9a9a9a"
				  }
				}
			  ],
			  xAxes: [
				{
				  barPercentage: 1.6,
				  gridLines: {
					drawBorder: false,
					color: "rgba(29,140,248,0.1)",
					zeroLineColor: "transparent"
				  },
				  ticks: {
					padding: 20,
					fontColor: "#9a9a9a"
				  }
				}
			  ]
			},
			animation: {
				duration: 5000 // general animation time
			},
			hover: {
				animationDuration: 1000 // duration of animations when hovering an item
			},
			responsiveAnimationDuration: 1000 
		 
		 }}
		height={'200%'}
		 /></div>)
	}
     componentWillMount(){
		 this.rdata()
	 }
    componentDidMount() {
       
        this.props.gettodoaction();
        
	  }
	  
	  rdata = ()=>{
		  let arr =[]
		 for(let i=0; i <12;i++){
			 if(i<13){
			 arr.push(Math.random()*1000)}
		}
		this.setState({
			rdata:arr
		})
	  }


	render() {
        const {users} = this.props.gettodo;
         console.log("users", users)
	   this.state.factor = parseInt(100/users.length,10);
	   console.log("rdata", this.state.rdata)
       users.map(({_id,todo_description, todo_completed,todo_date})=>{
          this.state.date.push(todo_date)
      
       this.state.arr2.push({"y":parseInt(todo_completed,10),"label":todo_description})
	  
	  if(parseInt(todo_completed,10)< 26){
		  this.state.task25.push(todo_completed)
	  }
	  else if(parseInt(todo_completed,10) <51)
       {
		   this.state.task50.push(todo_completed)
		}
	 else if(parseInt(todo_completed,10) < 76 ) {
          this.state.task75.push(todo_completed)
	 }	
	 else if(parseInt(todo_completed,10)<100) {
		 this.state.task100.push(todo_completed)
	}
	else if(parseInt(todo_completed,10)=== 100){
		this.state.taskCompleted.push(todo_completed)

	}
	else{

	}
	
})
console.log("todo_date", this.state.date)
let data= {
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
		  labels: [
			this.state.date
		  ],
		  datasets: [
			{
			  label: "My First dataset",
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
			  data: this.state.rdata
			}
		  ]
		};
}}

		return (
		<div>
			<h1>React Pie Chart</h1>
			
		
			<div className="col-md-7">	< Pie data={data} 
			options={{
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
			}} /></div>

			<br></br>	<br></br>	<br></br>
			{this.linef()}
	  <button onClick={this.rdata}>Here update the graph</button>
	  {this.Barf()}
        </div>
		);
	}
}
const mapStateToProps = (state) => {
    console.log('addtodohhhhh', state)
    return {
      gettodo: state.gettodo,
      
     
      
   
  };
  
  }
   
  
  
  
  
   export default connect(mapStateToProps, {gettodoaction})(PieChart);