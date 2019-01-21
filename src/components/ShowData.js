import React, { Component, Fragment } from 'react';
require('papaparse');
// import csvLoader from 'csv-loader';
// import csvParser from 'csv-parser';


// import showAll from '../../data/data.json';
// import showData from '../../data/IHME-GBD_2017_DATA-37d305ef-1.csv';
// import fs from 'fs';

import Menu from './menu.js';

import Chart from './Chart.js';


export default class ShowData extends Component {


  // showOneLocation = () => {
  //   for(let i = 0; i < this.props.showJSON.length; i++) {
  //     if(!this.props.showJSON[i].location_name) {
  //       console.log(this.props.location_name)
  //     }
  //   }
  // }

  
  render() {

    let showKeys = Object.keys(this.props.showJSON[0])


    // console.log(this.showOneLocation())
    console.log(showKeys)
    console.log(this.props.showJSON[0])
    

    return (
      <Fragment>

        <Menu keyList={showKeys}/>

        {/* <Chart showEach={this.props.showJSON.map(result => result)} /> */}

            {/* {this.props.showJSON.map(result => {
              return <Chart showEach={result} key={result.val && result.upper} />
            })} */}


            {/* {
              return <li key={result.val && result.upper} >{result}</li>
            } */}

      </Fragment>
    );
  }
}
