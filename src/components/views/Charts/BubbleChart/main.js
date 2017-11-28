
import React from 'react';
import BubbleChart from './Chart';
import { getData } from "./utils"

import { TypeChooser } from "react-stockcharts/lib/helper";


export class BubbleChartComponent extends React.Component {
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
				{type => <BubbleChart type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}
