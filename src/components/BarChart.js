import React, { Component, Fragment } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

export default class BarChart extends Component {

  

  render() {
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

    const data = [
      {quarter: 1, earnings: 13000},
      {quarter: 2, earnings: 16500},
      {quarter: 3, earnings: 14250},
      {quarter: 4, earnings: 19000}
    ];
    
    return (
      <VictoryChart 
        theme={VictoryTheme.material}
        domainPadding={20} 
      >

        <VictoryAxis
          // tickValues={[1, 2, 3, 4, 5]}
          // tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          
        />
        <VictoryAxis
          dependentAxis
          // tickFormat={(x) => (`$${x / 1000}k`)}
        />

        <VictoryStack
          colorScale={"warm"}
        >

        <VictoryBar 
          data={dats}
          x="location_name"
          y="val"
        />
        </VictoryStack>
      </VictoryChart>
    );
  }
}