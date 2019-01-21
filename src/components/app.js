import React, { Component } from 'react';

import ShowData from './ShowData.js';

import showJSON from '../../data/data.json';

import Chart from '../components/Chart.js';

import Dropdown from './menu.js';

import BarChart from './BarChart.js';

export default class App extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     data: showJSON,
  //   };
  // }


  render() {
    return (
      <React.Fragment>

      {/* <div style={{display: 'flex', justifyContent: 'center'}} >
        <Dropdown />
      </div> */}

        <h1>What population is most affected by opioid use disorders?</h1>
        <Chart />
      {/* <Chart showJSON={showJSON}/> */}
      {/* <ShowData showJSON={this.state.data}/> */}

      <BarChart  />
      </React.Fragment>
    );
  }
}


