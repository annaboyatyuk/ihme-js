import React, { Component, Fragment } from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export default class Chart extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }
  // }


  render() {

    //     let array = [];
    //     let locationName = array.push(this.props.showEach.location_name);

    //     // filterLocationName = () => {

    //     //   for(let i = 0; i < this.props.)

    //     // }

    // // console.log('sldkfjd', this.props.showEach.location_name);

    // console.log('aa',array)
    let dats = [
      {age_id: 22,
        age_name: "All Ages",
        cause_id: 562,
        cause_name: "Opioid use disorders",
        location_id: 108,
        location_name: "Belize",
        lower: 0.09007127002844932,
        measure_id: 1,
        measure_name: "Deaths",
        metric_id: 3,
        metric_name: "Rate",
        sex_id: 1,
        sex_name: "Male",
        upper: 0.13431723563669823,
        val: 0.11106562231873124,
        year: 1990
      },
      {
        age_id: 22,
        age_name: "All Ages",
        cause_id: 562,
        cause_name: "Opioid use disorders",
        location_id: 108,
        location_name: "Belize",
        lower: 0.04340834686876427,
        measure_id: 1,
        measure_name: "Deaths",
        metric_id: 3,
        metric_name: "Rate",
        sex_id: 2,
        sex_name: "Female",
        upper: 0.06220008217075092,
        val: 0.05271716391781033,
        year: 1990,
      },
      {
        age_id: 22,
        age_name: "All Ages",
        cause_id: 562,
        cause_name: "Opioid use disorders",
        location_id: 108,
        location_name: "Belize",
        lower: 0.06907802870534893,
        measure_id: 1,
        measure_name: "Deaths",
        metric_id: 3,
        metric_name: "Rate",
        sex_id: 3,
        sex_name: "Both",
        upper: 0.09477680114265163,
        val: 0.08224296715130404,
        year: 1990
      }

    ]

    let locs = [{location_name:'belize'}, {location_name:'peru'}, {location_name:'uk'}]

    // console.log('bb',JSON.parse(dats))

    return (
      <Fragment>


        <BarChart width={700} height={300} data={dats}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              {console.log('skdj', locs)}
              <XAxis dataKey={"location_name"} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="val" fill="#8884d8" />
              <Bar dataKey="upper" fill="#82ca9d" />
              <Bar dataKey="lower" fill="#828a8d" />
            </BarChart>




      </Fragment>
    );
  }
}