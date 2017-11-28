
import React from 'react';
import BarChart from './Chart';
import { getData } from "./utils"

import { TypeChooser } from "react-stockcharts/lib/helper";


export class BarChartComponent extends React.Component {
	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<TypeChooser>
				{type => <BarChart type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}
