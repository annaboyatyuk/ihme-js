import React, { Component } from 'react';

import '../style/style.scss';

import showCSV from '../../data/IHME-GBD_2017_DATA-37d305ef-1.csv';

import Chart from '../components/Chart.js';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      dataToSend: [],
      country: 'All Countries',
      year: 2017,
      gender: 'Both',
      compareYears: false,
    };
  }

  componentDidMount() {
    this.setState({ data: showCSV }, () => {



      this.changeCountry({ target: { value: 'All Countries' } })
      this.changeYear({target: {value: 2017}})


    })
  }


  changeCountry = (e) => {
    let dataToSend = this.state.data;
    let country = e.target.value;
    if (country !== 'All Countries') {
      dataToSend = dataToSend.filter(eachData => eachData.location_name === country)
    }
    if (this.state.year !== 'All Years') {
      dataToSend = dataToSend.filter(eachData => eachData.year === this.state.year);
    }
    if (this.state.gender !== 'Gender') {
      dataToSend = dataToSend.filter(eachData => eachData.sex_name === this.state.gender);
    }
    this.setState({ dataToSend, country })
  }

  changeYear = (e) => {
    let dataToSend = this.state.data;
    let year = parseInt(e.target.value);
    if (e.target.value !== 'All Years') {
      dataToSend = dataToSend.filter(eachData => eachData.year === year);
    }
    if (this.state.country !== 'All Countries') {
      dataToSend = dataToSend.filter(eachData => eachData.location_name === this.state.country)
    }
    if (this.state.gender !== 'Gender') {
      dataToSend = dataToSend.filter(eachData => eachData.sex_name === this.state.gender);
    }
    this.setState({ dataToSend, year:e.target.value })

  }

  changeSex = (e) => {
    let dataToSend = this.state.data;
    let gender = e.target.value;
    if (gender !== 'Gender') {
      dataToSend = dataToSend.filter(eachData => eachData.sex_name === gender);
    }
    if (this.state.country !== 'All Countries') {
      dataToSend = dataToSend.filter(eachData => eachData.location_name === this.state.country)
    }
    if (this.state.year !== 'All Years') {
      dataToSend = dataToSend.filter(eachData => eachData.year === this.state.year);
    }
    this.setState({ dataToSend, gender })
  }

  render() {
    // console.log(this.state.dataToSend)
    return (
      <React.Fragment>

        <h1>What population is most affected by opioid use disorders?</h1>


        <Chart csvData={this.state.dataToSend} allData={this.state} />


        <select id="countries" onChange={this.changeCountry} >

          <option value="All Countries">All Countries</option>
          {this.state.data.filter(datas => datas.sex_name === 'Both').reduce((acc, red) => {
            if (!acc.includes(red.location_name)) {
              acc.push(red.location_name);
            }
            return acc;
          }, []).sort((a, b) => a < b ? -1 : 1).map((countries, i) => {
            // console.log(countries)
            return <option key={i} value={countries}>{countries}</option>
          })}

        </select>


        <select id="year" onChange={this.changeYear} value={this.state.year}>

          <option value="All Years">All Years</option>
          {this.state.data.filter(datas => datas.sex_name === 'Both').reduce((acc, red) => {
            if (!acc.includes(red.year)) {
              acc.push(red.year);
            }
            return acc;
          }, []).sort((a, b) => b - a).map((years, i) => {
            return <option key={i} value={years}>{years}</option>
          })}

        </select>

        <select id="gender" onChange={this.changeSex} value={this.state.gender} >

          <option value="Gender">Gender</option>
          {this.state.data.reduce((acc, red) => {
            if (!acc.includes(red.sex_name)) {
              acc.push(red.sex_name);
            }
            return acc;
          }, []).sort().map((sexName, i) => {
            return <option key={i} value={sexName}>{sexName}</option>
          })}

        </select>


      </React.Fragment>
    );
  }
}


