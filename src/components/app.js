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
    })
  }

  changeCountry = (e) => {
    let dataToSend = this.state.data;
    let country = e.target.value;
    if (country === 'All Countries') {
      if (this.state.gender !== 'Gender') {
        dataToSend = dataToSend.filter(eachData => eachData.sex_name === this.state.gender)
      }
      if (this.state.year === 'All Years') {
        dataToSend = dataToSend.filter(eachData => eachData.year === 2017).sort((a, b) => a.val - b.val);
        this.setState({ dataToSend, country, year: 2017, compareYears: false });
      } else {
        dataToSend = dataToSend.filter(eachData => eachData.year === this.state.year).sort((a, b) => a.val - b.val);
        this.setState({ dataToSend, country, year: this.state.year, compareYears: false });
      }
    } else {
      if (this.state.gender !== 'Gender') {
        dataToSend = dataToSend.filter(eachData => eachData.sex_name === this.state.gender)
      }
      dataToSend = dataToSend.filter(eachData => eachData.location_name === country).sort((a, b) => a.year - b.year);
      if (this.state.year !== 'All Years') {
        this.setState({ dataToSend, country, year: 'All Years', compareYears: true })
      } else {
        this.setState({ dataToSend, country, compareYears: true })
      }
    }
  }

  changeYear = (e) => {
    let dataToSend = this.state.data;
    let year = parseInt(e.target.value);
    if (e.target.value === 'All Years') {
      if (this.state.gender !== 'Gender') {
        dataToSend = dataToSend.filter(eachData => eachData.sex_name === this.state.gender);
      }
      if (this.state.country === 'All Countries') {
        dataToSend = dataToSend.filter(eachData => eachData.location_name === 'United States').sort((a, b) => a.year - b.year);
        this.setState({ dataToSend, year: e.target.value, country: 'United States', compareYears: true })
      } else {
        dataToSend = dataToSend.filter(eachData => eachData.location_name === this.state.location_name).sort((a, b) => a.year - b.year);
        this.setState({ dataToSend, year: e.target.value, compareYears: true })
      }
    } else {
      if (this.state.gender !== 'Gender') {
        dataToSend = dataToSend.filter(eachData => eachData.sex_name === this.state.gender)
      }
      dataToSend = dataToSend.filter(eachData => eachData.year === year).sort((a, b) => a.val - b.val);
      if (this.state.country !== 'All Countries') {
        this.setState({ dataToSend, year, country: 'All Countries', compareYears: false })
      } else {
        this.setState({ dataToSend, year })
      }
    }
  }

  changeSex = (e) => {
    let dataToSend = this.state.data;
    let gender = e.target.value;
    if (gender !== 'Gender') {
      if (this.state.country === 'All Countries') {
        dataToSend = dataToSend.filter(eachData => eachData.sex_name === gender).sort((a, b) => a.val - b.val);
      }
      if (this.state.year === 'All Years') {
        dataToSend = dataToSend.filter(eachData => eachData.sex_name === gender).sort((a, b) => a.year - b.year);
      }
    }
    if (this.state.country !== 'All Countries') {
      dataToSend = dataToSend.filter(eachData => eachData.location_name === this.state.country)
    }
    if (this.state.year !== 'All Years') {
      dataToSend = dataToSend.filter(eachData => eachData.year === this.state.year).sort((a, b) => a.val - b.val)
    }
    this.setState({ dataToSend, gender })
  }

  render() {

    return (
      <React.Fragment>

        <div className="header">
          <h1>What population is most affected by opioid use disorders?</h1>
        </div>

        <Chart csvData={this.state.dataToSend} allData={this.state} />

        <div className="selectors">

          <select id="countries" onChange={this.changeCountry} value={this.state.country} >
            <option value="All Countries">All Countries</option>
            {this.state.data.filter(datas => datas.sex_name === 'Both').reduce((acc, red) => {
              if (!acc.includes(red.location_name)) {
                acc.push(red.location_name);
              }
              return acc;
            }, []).sort((a, b) => a < b ? -1 : 1).map((countries, i) => {
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

        </div>

      </React.Fragment>
    );
  }
}


