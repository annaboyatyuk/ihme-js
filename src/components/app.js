import React, { Component } from 'react';


// import showJSON from '../../data/data.json';

import Chart from '../components/Chart.js';

import showCSV from '../../data/IHME-GBD_2017_DATA-37d305ef-1.csv';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      dataToSend: [],
      country: 'All Countries',
      year: 2017,
    };
  }

  componentDidMount() {
    this.setState({data:showCSV}, () => {

      
      
      this.changeCountry({target: {value: 'Belize'}})
      this.addTotal()


    })
  }

  addTotal = () => {

    let dataToSend = this.state.data;
      dataToSend = dataToSend.reduce((acc, datas) => {
        if(acc.length === 0) {
          acc[0] = {}
          acc[0].counter = 1;
          acc[0].val = datas.val;
          acc[0].year = datas.year;
        }

        for(let i = 0; i < acc.length; i++) {
          // console.log(datas)
          if(acc[i].year === datas.year) {
            acc[i].val += datas.val;
            acc[i].counter ++;
          }
          else {
            acc[i] = {}
            acc[i].counter = 1;
            acc[i].val = datas.val;
            acc[i].year = datas.year;
          }

        }
        return acc;

      },[])

      console.log('and',dataToSend)
  }

  changeCountry = (e) => {
    let dataToSend = this.state.data;
    // let year = parseInt(this.state.year);
    // dataToSend = dataToSend.filter(eachData => eachData.year === year)
    if(e.target.value !== 'All Countries') {
      dataToSend = dataToSend.filter(eachData => eachData.location_name === e.target.value)
     }
     this.setState({dataToSend, country:e.target.value})
  }

  changeYear = (e) => {
    let dataToSend = this.state.data;
    let year = parseInt(e.target.value);
    dataToSend = dataToSend.filter(eachData => eachData.year === year)
    if(this.state.country !== 'All Countries') {
     dataToSend = dataToSend.filter(eachData => eachData.location_name === this.state.country)
    }
    this.setState({dataToSend, year})

  }

  render() {
    // console.log(this.state.dataToSend)
    return (
      <React.Fragment>

        <select id="countries" onChange={this.changeCountry} >

          <option value="All Countries">All Countries</option>
          {this.state.data.filter(datas => datas.sex_name === 'Both').reduce((acc, red) => {
          if(!acc.includes(red.location_name)) {
            acc.push(red.location_name);
          }
          return acc;
        },[]).sort((a,b) => a < b ? -1 :1).map((datas, i) => {
            // console.log(datas)
            return <option key={i} value={datas}>{datas}</option>
          })}

        </select>

        {/* <select id="year" onChange={this.changeYear} >
        
        {this.state.data.filter(datas => datas.sex_name === 'Both').reduce((acc, red) => {
          if(!acc.includes(red.year)) {
            acc.push(red.year);
          }
          return acc;
        },[]).sort((a,b) => b-a).map((years, i) => {
          return <option key={i} value={years}>{years}</option>
        })}
        
        </select> */}



        <h1>What population is most affected by opioid use disorders?</h1>
        <Chart csvData={this.state.dataToSend} changeCountry={this.changeCountry}/>


      </React.Fragment>
    );
  }
}


