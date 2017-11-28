
import React from 'react';
import CandleStickChartPanToLoadMore from './Chart';
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
				{type => <CandleStickChartPanToLoadMore type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}