import React, { Component, Fragment } from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, Brush, Label } from 'recharts';


export default class Chart extends Component {

  render() {

    if (this.props.allData.compareYears) {

      return (
        <Fragment>

          <BarChart className='chart' width={1040} height={440} data={this.props.csvData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='year'  height={70}>
              <Label value='Comparing years per country' offset={10} position="insideBottom" />
            </XAxis>
            <YAxis label={{ value: 'Deaths per year for chosen country', angle: -90, position: 'insideBottomLeft' }} />
            <Tooltip />
            <ReferenceLine y={0} stroke='#000' />
            <Brush dataKey='year' height={30} stroke='#00dc6d' startIndex={0} endIndex={15}/>
            <Bar dataKey='val' fill='#004d26' />

          </BarChart>

          <div className="description">
            <p>Hover over the bars to view the value for each year</p>

            <p>Drag and drop the edges of the bar below the chart to compare more or less years</p>
          </div>

        </Fragment>
      );

    } else {

      return (
        <Fragment>

          <BarChart className='chart' width={1040} height={440} data={this.props.csvData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray='3 3'/>
            <XAxis dataKey='location_name' height={70} >
              <Label value='Comparing countries by year' offset={10} position="insideBottom" />
            </XAxis>
            <YAxis label={{ value: 'Deaths per country for chosen year', angle: -90, position: 'insideBottomLeft' }} />
            <Tooltip />
            <ReferenceLine y={0} stroke='#000' />
            <Brush dataKey='location_name' height={30} stroke='#00dc6d' className='zoomBrush' startIndex={0} endIndex={15}/>
            <Bar dataKey='val' fill='#004d26' />
          </BarChart>

          <div className="description">
            <p>Hover over the bars to view the value for each country</p>

            <p>Drag and drop the edges of the bar below the chart to compare more or less countries</p>
          </div>

        </Fragment>
      );
    }
  }
}