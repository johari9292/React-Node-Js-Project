import React from 'react';
import MaterialTable from "material-table";
export default class MaterialUITable extends React.Component {
    state = {
       
        data: this.props.content
    }

      


    render() {
     let    columns=[
            { title: "First Name", field: "name" },
            { title: "Second Name", field: "surname" },
            { title: "Pnone ", field: "birthYear", type: "numeric" },
           
          ]
     let    data=[
            { name: "Mehmet", surname: "Baran", birthYear: 1987 }
          ]
      return (
        <div>
           <MaterialTable
          columns={columns}
          data={data}
          title="Demo Title"
        />
              </div>
         

        
      );
    }
};