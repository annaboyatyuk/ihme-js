import React, { Component, Fragment } from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, Brush } from 'recharts';


export default class Chart extends Component {

  render() {

    if (this.props.allData.compareYears) {

      return (
        <Fragment>

          <BarChart className='chart' width={1020} height={520} data={this.props.csvData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='year' />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke='#000' />
            <Brush dataKey='year' height={30} stroke='#00dc6d' />
            <Bar dataKey='val' fill='#004d26' />

          </BarChart>

          <div className="description">

            <h3>comparing years per country</h3>

            <p>Hover over the bars to view the value for each year</p>

            <p>Drag and drop the edges of the bar below the chart to zoom in and view fewer years</p>

          </div>

        </Fragment>
      );

    } else {

      return (
        <Fragment>

          <BarChart className='chart' width={1020} height={520} data={this.props.csvData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='location_name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke='#000' />
            <Brush dataKey='location_name' height={30} stroke='#00dc6d' />
            <Bar dataKey='val' fill='#004d26' />

          </BarChart>

          <div className="description">

            <h3>Comparing countries by year</h3>

            <p>Hover over the bars to view the value for each country</p>

            <p>Drag and drop the edges of the bar below the chart to zoom in and view fewer countries</p>

          </div>

        </Fragment>
      );
    }
  }
}