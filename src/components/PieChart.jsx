import React from 'react'
import { Pie } from 'react-chartjs-2'
import {Chartjs} from 'chart.js/auto'


const PieChart = ({chart_data}) => {
  return (
    <Pie data = {chart_data}/>
      
    
  )
}

export default PieChart
