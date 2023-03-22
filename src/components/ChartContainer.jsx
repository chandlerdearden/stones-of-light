import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BarChart from './BarChart'
import { useState } from 'react';
import {UserData} from "../Data"
import { Chart } from 'chart.js';
import LineChart from './LineChart';
import DoughnutChart from './DoughnutChart';
import PieChart from './PieChart';


const ChartContainer = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
          label: "Users Gained",
          data: UserData.map(data => data.userGain),
        }]
      })

const DoughnutData = {
  labels: ['Red', "Blue", "Yellow"],
  datasets: [{
    label: "DoughnutChart",
    data: [300,50,100],
    backgroundColor: ['Red', 'Blue', 'Yellow'],
    hoverOffset: 4
  }]
}    
  return (
    <Container>
        <Row>
            <Col className='shadow border m-2'>
            <BarChart chart_data={userData}></BarChart> 
            </Col>
            <Col className='shadow border m-2'>
            <LineChart chart_data={userData}/>
            </Col>
            <Col className='shadow border m-2'>
            <DoughnutChart chart_data={DoughnutData}/>
            </Col>
            <Col className='shadow border m-2'>
            <PieChart chart_data={DoughnutData}/>
            </Col>
        </Row>
      
    </Container>
  )
}

export default ChartContainer
