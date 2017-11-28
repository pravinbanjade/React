import React from 'react';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';
import Highlight from 'react-highlight';

export class StockChart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        title: {text: 'Bits Innovation Stock'},
        series: [{
          name: 'Bits Innovation',
          data: [[1511136000000, 22.56], [1511222400000, 21.67], [1511308800000, 21.66], [1511395200000, 21.81], [1511481600000, 21.28], [1511568000000, 20.05], [1511654400000, 19.98], [1511740800000, 18.26], [1511827200000, 19.16]],
          tooltip: {valueDecimals: 2}
        }]
      }
    }
  }


  render(){
    return(
      <div className="chart">
        <ReactHighstock
            config={this.state.chartData}
        />
      </div>
    );
  }
}
