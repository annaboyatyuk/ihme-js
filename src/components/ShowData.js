import React, { Component, Fragment } from 'react';
require('papaparse');
// import csvLoader from 'csv-loader';
// import csvParser from 'csv-parser';


import showAll from '../../data/data.json';
import showData from '../../data/IHME-GBD_2017_DATA-37d305ef-1.csv';
// import fs from 'fs';



export default class ShowData extends Component {



  
  render() {


    console.log(showAll[0])

    return (
      <Fragment>

        

        <h1>
          lfsjdflksjd
          <ul>
            {this.props.showJSON.map(result => {
              return <li key={result.val && result.upper} >{result.location_name}</li>
            })}
          </ul>
        </h1>
      </Fragment>
    );
  }
}
