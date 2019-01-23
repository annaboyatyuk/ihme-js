import React, { Component, Fragment } from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export default class Chart extends Component {

  



  // renderTooltip() {
  //   return (
  //    <div>Custom content</div>
  //   )
  // }


  render() {

    // console.log(this.props.csvData)


    return (

      <Fragment>


        <BarChart width={1020} height={430} data={this.props.csvData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"year"} />
          <YAxis />
          <Tooltip />
          {/* <Tooltip content={this.renderTooltip} /> */}
          <Legend />
          <Bar dataKey="val" fill="#8884d8" />
          {/* <Bar dataKey="upper" fill="#82ca9d" />
            <Bar dataKey="lower" fill="#828a8d" /> */}
        </BarChart>

        <select id="year" onChange={this.props.changeYear}>

          <option value="All Years">All Years</option>
          {this.props.csvData.filter(datas => datas.sex_name === 'Both').reduce((acc, red) => {
            if (!acc.includes(red.year)) {
              acc.push(red.year);
            }
            return acc;
          }, []).sort((a, b) => b - a).map((years, i) => {
            return <option key={i} value={years}>{years}</option>
          })}

        </select>

        <select id="gender" onChange={this.props.changeSex} >

          <option value="Gender">Gender</option>
          {this.props.csvData.reduce((acc, red) => {
            if(!acc.includes(red.sex_name)) {
              acc.push(red.sex_name);
            }
            return acc;
          }, []).sort().map((sexName, i) => {
            return <option key={i} value={sexName}>{sexName}</option>
          })}

        </select>


      </Fragment>
    );
  }
}