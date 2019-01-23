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
      year: 'All Years',
      gender: 'Gender'
    };
  }

  componentDidMount() {
    this.setState({ data: showCSV }, () => {



      this.changeCountry({ target: { value: 'All Countries' } })

      // this.addTotal()


    })
  }

  addTotal = () => {
    let dataToSend = this.state.data;

    dataToSend = dataToSend.reduce((acc, datas, i, array) => {

      // console.log('abc',i)
      if (acc.length === 0) {
        acc.push({})
        acc[0].val = datas.val;
        acc[0].year = datas.year;
        acc[0].gender = datas.sex_name;
        acc[0].counter = 1;
      }
      else {
        console.log('rrr', acc[i], datas.year)
      }
      // if(acc[i].year && acc.length === datas.year) {
      //   console.log('bb',  acc)
      //   acc[i].val += datas.val;
      //   acc[i].counter ++;
      // }
      // else {
      //   // acc.push({d:2})
      acc.push({});
      acc[i].val = datas.val;
      acc[i].year = datas.year;
      acc[i].gender = datas.sex_name;
      acc[i].counter = 1;
      // }
      console.log('ooo', acc[i], i)
      return acc;
    }, [])
  }

  //   addTotal = () => {

  //     let dataToSend = this.state.data;
  //       dataToSend = dataToSend.reduce((acc, datas) => {
  //         if(acc.length === 0) {
  //           acc.push({});
  //           acc[0].counter = 1;
  //           acc[0].val = datas.val;
  //           acc[0].year = datas.year;
  //         }

  //         for(let i = 0; i < acc.length; i++) {
  //           // console.log(datas)
  //           if(acc[i].year === datas.year) {
  //             console.log(acc[i].year)
  // // if datas .sex_name === both 

  //             acc[i].val += datas.val;
  //             acc[i].counter ++;
  //           }
  //           else {
  //             acc.push({});
  //             acc[i].counter = 1;
  //             acc[i].val = datas.val;
  //             acc[i].year = datas.year;
  //           }

  //           console.log('ooo',acc, i)
  //         }
  //         return acc;

  //       },[])

  // console.log('and',dataToSend)
  // }

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
    if (year !== 'All Years') {
      dataToSend = dataToSend.filter(eachData => eachData.year === year);
    }
    if (this.state.country !== 'All Countries') {
      dataToSend = dataToSend.filter(eachData => eachData.location_name === this.state.country)
    }
    if (this.state.gender !== 'Gender') {
      dataToSend = dataToSend.filter(eachData => eachData.sex_name === this.state.gender);
    }
    this.setState({ dataToSend, year })

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


        <Chart csvData={this.state.dataToSend} changeYear={this.changeYear} changeSex={this.changeSex} />


        <select id="year" onChange={this.changeYear}>

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

        <select id="gender" onChange={this.changeSex} >

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


