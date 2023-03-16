import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BarChart from './BarChart'
import { useState } from 'react';
import {UserData} from "../Data"
import { Chart } from 'chart.js';


const ChartContainer = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
          label: "Users Gained",
          data: UserData.map(data => data.userGain),
        }]
      })
    
  return (
    <Container>
        <Row>
            <Col className='shadow border m-2'>
            <BarChart chart_data={userData}></BarChart> 
            </Col>
        </Row>
      
    </Container>
  )
}

export default ChartContainer
