import React, { Component, Fragment } from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export default class Chart extends Component {

  


  // changeYear = (e) => {

  // }


  render() {

    console.log(this.props.csvData)


    return (

      <Fragment>


        <BarChart width={700} height={300} data={this.props.csvData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"year"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="val" fill="#8884d8" />
          {/* <Bar dataKey="upper" fill="#82ca9d" />
            <Bar dataKey="lower" fill="#828a8d" /> */}
        </BarChart>

        <select id="year" onChange={this.props.changeYear}>

          {this.props.csvData.filter(datas => datas.sex_name === 'Both').reduce((acc, red) => {
            if (!acc.includes(red.year)) {
              acc.push(red.year);
            }
            return acc;
          }, []).sort((a, b) => b - a).map((years, i) => {
            return <option key={i} value={years}>{years}</option>
          })}

        </select>


      </Fragment>
    );
  }
}