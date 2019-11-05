import React from 'react';
import {Input,Table,
   } from 'reactstrap';
export default class MyFilteringComponent extends React.Component {
    state = {
        filter:'',
        filter1:'',
        filter2:'',
        filter3:'',
        data: this.props.content
    }
onchangefilter = (e)=>{
  let newData= []
  if(e.target.value){
    newData = this.state.data.filter((item,i) =>
    {
      
    const text = e.target.value.toLowerCase();
      return  Object.keys(item).some(key =>
        item[key].toLowerCase().startsWith(text)
       );
    })
    this.setState({
      data: [...newData],
      
    })}else {
      this.setState({
        data: this.props.content,
        
      })
    }
}
      
onchangefilter1 = (e)=>{
  let newData= []
if(e.target.value){
   newData =  this.state.data.filter((res)=>{
    const fname = res[0].toLowerCase();
    const text = e.target.value.toLowerCase();
    return fname.startsWith(text)
  })
  this.setState({
    data: [...newData],
    
  })}else {
    this.setState({
      data: this.props.content,
      
    })
  }
  }
  onchangefilter2 = (e)=>{
    let newData1= []
if(e.target.value){
   newData1 =  this.state.data.filter((res)=>{
    const lname = res[1].toLowerCase();
    const text2 = e.target.value.toLowerCase();
    return lname.startsWith(text2)
  })
  this.setState({
    data: [...newData1],
    
  })}else {
    this.setState({
      data: this.props.content,
      
    })
  }
    }
    onchangefilter3 = (e)=>{
      let newData2= []
if(e.target.value){
   newData2 =  this.state.data.filter((res)=>{
    const gname = res[2].toLowerCase();
    const text1 = e.target.value.toLowerCase();
    return gname.startsWith(text1)
  })
  this.setState({
    data: [...newData2],
    
  })}else {
    this.setState({
      data: this.props.content,
      
    })
  }
      } 

    render() {
      
      return (
        <div>
          <Input type="text"  style={{marginLeft:"25%", marginRight:'25%', width:'50%'}} placeholder="Search....." onChange={this.onchangefilter}/>
           <Table dark striped bordered >
        <thead>
          <tr>
          
            <th>  First Name
            <br/> <Input type="text" placeholder="Search....." onChange={this.onchangefilter1}/>
            </th>
            <th>
             Last Name
            <br/> <Input type="text"  placeholder="Search....." onChange={this.onchangefilter2}/>
           </th>
            <th>
              Gender
            <br/>  <Input type="text"  placeholder="Search....." onChange={this.onchangefilter3}/>
            </th>
          </tr>
        </thead>
        <tbody>
      
        
           
                                
                                                           
                                                             {
                this.state.data.map((res, index) =>{
                 return (   
                     <tr  key={index}> <td>{res[0]}</td>
                      <td>{res[1]}</td> 
                      <td>{res[2]}</td>  </tr>
                )
            })}

              </tbody>
              </Table>
              </div>
         

        
      );
    }
};