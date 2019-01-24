import React, { Component, Fragment } from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, Brush } from 'recharts';


export default class Chart extends Component {


  render() {

    // console.log(this.props.csvData)

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

          <h3>comparing years per country</h3>

        </Fragment>
      );

    }
    else {


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

          <h3>Comparing countries by year</h3>

        </Fragment>
      );

    }

  }
}