import React, { Component } from 'react';

import ShowData from './ShowData.js';

import showJSON from '../../data/data.json';


export default class App extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     data: null,
  //   };
  // }

  render() {
    return (
      <ShowData showJSON={showJSON}/>
    );
  }
}


