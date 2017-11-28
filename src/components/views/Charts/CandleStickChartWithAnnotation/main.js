
import React from 'react';
import CandleStickChartWithAnnotation from './Chart';
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
				{type => <CandleStickChartWithAnnotation type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}
