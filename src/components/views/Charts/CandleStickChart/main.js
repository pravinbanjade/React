
import React from 'react';
import CandleStickChart from './Chart';
import { getData } from "./utils"

import { TypeChooser } from "react-stockcharts/lib/helper";


export class CandleStickChartComponent extends React.Component {
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
				{type => <CandleStickChart type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}
