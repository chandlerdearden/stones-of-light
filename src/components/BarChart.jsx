import React from 'react'
import {Bar} from "react-chartjs-2"
import {Chartjs} from 'chart.js/auto'
import { Container } from 'react-bootstrap'

const BarChart = ({chart_data}) => {
  return (
    <Bar data={chart_data}>
    </Bar>
  )
}

export default BarChart
