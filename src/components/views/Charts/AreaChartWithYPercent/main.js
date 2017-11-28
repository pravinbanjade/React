
import React from 'react';
import AreaChartWithYPercent from './Chart';
import { getData } from "./utils"

import { TypeChooser } from "react-stockcharts/lib/helper";


export class ChartComponent extends React.Component {
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
				{type => <AreaChartWithYPercent type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}
