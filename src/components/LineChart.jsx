import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chartjs} from 'chart.js/auto'

const LineChart = ({chart_data}) => {
  return (
    <Line data={chart_data}/>
  )
}

export default LineChart
