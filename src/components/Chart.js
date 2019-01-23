import React, { Component, Fragment } from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export default class Chart extends Component {





  // renderTooltip() {
  //   return (
  //    <div>Custom content</div>
  //   )
  // }


  render() {

    console.log(this.props.allData)


    // if (!this.props.csvData) {

      return (
        <Fragment>

          <BarChart width={1020} height={430} data={this.props.csvData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={"location_name"} />
            <YAxis />
            <Tooltip />
            {/* <Tooltip content={this.renderTooltip} /> */}
            <Legend />
            <Bar dataKey="val" fill="#8884d8" />
            {/* <Bar dataKey="upper" fill="#82ca9d" />
            <Bar dataKey="lower" fill="#828a8d" /> */}
          </BarChart>

            <h1>Comparing countries by year</h1>

        </Fragment>
      );


    // }




    // return (

    //   <Fragment>


    //     <BarChart width={1020} height={430} data={this.props.csvData}
    //       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    //       <CartesianGrid strokeDasharray="3 3" />
    //       <XAxis dataKey={"year"} />
    //       <YAxis />
    //       <Tooltip />
    //       {/* <Tooltip content={this.renderTooltip} /> */}
    //       <Legend />
    //       <Bar dataKey="val" fill="#8884d8" />
    //       {/* <Bar dataKey="upper" fill="#82ca9d" />
    //         <Bar dataKey="lower" fill="#828a8d" /> */}
    //     </BarChart>


    // <h1>comparing years per country</h1>



    //   </Fragment>
    // );
  }
}