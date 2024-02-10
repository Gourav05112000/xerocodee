import { Card, Typography } from '@material-ui/core'
import { CardContent } from '@mui/material'
import React, { Component } from 'react'
import Monitor from '../assets/monitor.png'
import Sim from '../assets/sim.png'
import Driver from '../assets/driver.png'

export default class TeamsCard extends Component {
  render() {
    return (
      <div style={{height:"80vh",display:'flex', flexDirection:'column',justifyContent:'space-evenly',alignItems:'center'}}>
        <Typography style={{textAlign:'center', fontSize:'30px'}}>We have multidisciplinary teams to meet any <span style={{background:'-webkit-linear-gradient(#3171DE, #704AF2)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>challenge.</span></Typography>
        <Card style={{width:'80%'}}>
            <CardContent>
                <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'20px',justifyItems:'center',alignItems:'center'}} >
                {/* style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', gap:'16px'}} */}
                    <div >
                    <img src={Monitor} style={{marginBottom:'15px'}}/>
                    <Typography style={{fontSize:'28px'}}>Front-end</Typography>
                    <Typography style={{fontSize:'16px', textAlign:'start'}}>Our frontend developers understand the delicate balance between aesthetics and functionality. </Typography>

                    </div>
                    <div>
                    <img src={Sim} style={{marginBottom:'15px'}}/>
                    <Typography style={{fontSize:'28px'}}>Back-end</Typography>
                    <Typography style={{fontSize:'16px' , textAlign:'start'}}>Our backend developers are the architects of efficiency and security. They design and build the databases andAPIs. </Typography>

                    </div>
                    <div style={{}}>
                    <img src={Driver} style={{marginBottom:'15px'}}/>
                    <Typography style={{fontSize:'28px'}}>Data Analysts</Typography>
                    <Typography style={{fontSize:'16px', textAlign:'start'}}>Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts. </Typography>

                    </div>

                </div>
            </CardContent>
        </Card>
      </div>
    )
  }
}
