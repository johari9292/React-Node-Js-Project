
import React, { Component } from 'react';
import ReactApexChart from "apexcharts"
class Graphstemplate extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
          options: {
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
          series: [44, 55, 13, 43, 22],
        }
      }

      render() {
        return (
          <div>
            <div id="chart">
              <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width="380" />
            </div>
            <div id="html-dist">
            </div>
          </div>
        );
      }
}

export default Graphstemplate