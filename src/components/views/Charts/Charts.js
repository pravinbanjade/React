import React from 'react';
import {Bar, Line, Pie, Doughnut } from 'react-chartjs-2';

export class Bars extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ['Something', 'Nothing', 'Anything', 'Hey', 'You'],
        datasets:[
          {
            label: 'Marks',
            fill: false,
            borderColor: '#23ccef',
            pointBackgroundColor: '#23ccef',
            pointRadius: 5,
            data: [
              123,
              345,
              567,
              789,
              950
            ],
            backgroundColor:[
              '#553d7b',
              '#87cb16',
              '#f9454a',
              '#17a2b8',
              '#ffa63e'
            ]
          }
        ]
      }
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  }

  render(){
    return(
      <div className="chart">
        <Bar
            data={this.state.chartData}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Marks in All Subjects',
                fontSize: 25
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }}
        />
      </div>
    );
  }
}

export class Lines extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ['Something', 'Nothing', 'Anything', 'Hey', 'You'],
        datasets:[
          {
            label: 'Marks',
            fill: false,
            borderColor: '#23ccef',
            pointBackgroundColor: '#23ccef',
            pointRadius: 5,
            data: [
              123,
              345,
              567,
              789,
              950
            ],
            backgroundColor:[
              '#553d7b',
              '#87cb16',
              '#f9454a',
              '#17a2b8',
              '#ffa63e'
            ]
          }
        ]
      }
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  }

  render(){
    return(
      <div className="chart">
        <Line
            data={this.state.chartData}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Marks in All Subjects',
                fontSize: 25
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }}
        />
      </div>
    );
  }
}

export class Pies extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ['Something', 'Nothing', 'Anything', 'Hey', 'You'],
        datasets:[
          {
            label: 'Marks',
            fill: false,
            borderColor: '#23ccef',
            pointBackgroundColor: '#23ccef',
            pointRadius: 5,
            data: [
              123,
              345,
              567,
              789,
              950
            ],
            backgroundColor:[
              '#553d7b',
              '#87cb16',
              '#f9454a',
              '#17a2b8',
              '#ffa63e'
            ]
          }
        ]
      }
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  }

  render(){
    return(
      <div className="chart">
        <Pie
            data={this.state.chartData}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Marks in All Subjects',
                fontSize: 25
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }}
        />
      </div>
    );
  }
}

export class Doughnuts extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ['Something', 'Nothing', 'Anything', 'Hey', 'You'],
        datasets:[
          {
            label: 'Marks',
            fill: false,
            borderColor: '#23ccef',
            pointBackgroundColor: '#23ccef',
            pointRadius: 5,
            data: [
              123,
              345,
              567,
              789,
              950
            ],
            backgroundColor:[
              '#553d7b',
              '#87cb16',
              '#f9454a',
              '#17a2b8',
              '#ffa63e'
            ]
          }
        ]
      }
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  }

  render(){
    return(
      <div className="chart">
        <Doughnut
            data={this.state.chartData}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Marks in All Subjects',
                fontSize: 25
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }}
        />
      </div>
    );
  }
}
