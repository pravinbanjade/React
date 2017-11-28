import React from 'react';
import AreaChart from './Chart';
import { getData } from "./utils"

import { TypeChooser } from "react-stockcharts/lib/helper";


export class AreaChartComponent extends React.Component {
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
				{type => <AreaChart type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}
