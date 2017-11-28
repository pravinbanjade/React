import React from 'react';
import { Segment, Grid, Dropdown, Menu } from 'semantic-ui-react';
import { AreaChartComponent } from '../Charts/AreaChart/main';
import { BarChartComponent } from '../Charts/BarChart/main';
import { CandleStickChartComponent } from '../Charts/CandleStickChart/main';
import { BubbleChartComponent } from '../Charts/BubbleChart/main';
import { CandleStickChartForContinuousIntraDayChartComponent } from '../Charts/CandleStickChartForContinuousIntraDay/main';
import { CandleStickChartForDiscontinuousIntraDayChartComponent } from '../Charts/CandleStickChartForDiscontinuousIntraDay/main';

const options = [
  { key: 1, text: 'Area Chart', value: <AreaChartComponent /> },
  { key: 2, text: 'Bar Chart', value: <BarChartComponent /> },
  { key: 3, text: 'CandleStick Chart', value: <CandleStickChartComponent /> },
  { key: 4, text: 'Bubble Chart', value: <BubbleChartComponent /> },
  { key: 5, text: 'CandleStick Chart For Continuous IntraDay ChartComponent', value: <CandleStickChartForContinuousIntraDayChartComponent /> },
  { key: 6, text: 'CandleStick Chart For Discontinuous IntraDay ChartComponent', value: <CandleStickChartForDiscontinuousIntraDayChartComponent /> }
]

export default class DropDown extends React.Component {
  state = {
    value: <AreaChartComponent />
  }

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state

    return (
      <Grid>
        <Grid.Row columns={1}>
        <Grid.Column >
            <Dropdown
              onChange={this.handleChange}
              options={options}
              placeholder='Choose an option'
              selection
              value={value}
            />
        </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
        <Grid.Column>
          <Segment>
            {value}
          </Segment>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
