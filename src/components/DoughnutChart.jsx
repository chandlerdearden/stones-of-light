import React from 'react'
import {Chartjs} from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = ({chart_data}) => {
  return (
    <Doughnut data={chart_data}/>
  )
}

export default DoughnutChart
