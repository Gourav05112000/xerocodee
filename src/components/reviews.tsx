import React, { Component } from 'react'
import Inserts from '../assets/Intersect.png'
import { Container, Typography } from '@material-ui/core'
import ScrollCards from './scrollCards'
import {data} from "../Data.tsx";


export default class Reviews extends Component {
  render() {
    return (
            <Container style={{marginTop:'30px',height:'660px', position: 'relative',width:'100%',overflow:'hidden'}}>
        <div style={{position:'relative',display:'flex',justifyContent:'space-around'}}>
      <div style={{marginTop:'70px',marginLeft:'70px',zIndex:'-2',height:'400px',width:'400px',WebkitBorderRadius:'0.8rem',WebkitClipPath:'polygon(50% 0, 100% 0, 100% 50%, 51% 100%, 0 100%, 0 49%)',background:'linear-gradient(#62AE6E,#EDE14F)'}}>
      </div>
      <div style={{ width:'40%',height:'100%',gap:40,marginTop:'20px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <Typography style={{fontSize:'40px'}}>We've stopped counting. Over 500 brands count on us.</Typography>
        <Typography>Our 4,000+ team has expertise in almost everyprogramming language.</Typography>
      </div>
      <img src={Inserts} height='90%' width='35%' style={{position:'absolute',top:'0',left:'40px'}}></img>
      <div style={{position:'absolute',marginTop:'70px',top:'140',left:'66px',height:'80px',width:'80px',WebkitBorderRadius:'0.8rem',WebkitClipPath:'polygon(50% 0, 100% 0, 100% 50%, 51% 100%, 0 100%, 0 49%)',background:'linear-gradient(#3171DE ,white)',opacity:'70%'}}>
      </div>
      
      </div>
      <div style={{ justifyContent:'space-between',position: 'absolute', bottom:'0px', left: '50%', transform:'translate(-50%, -10%)'}}>
      <ScrollCards data={data}/>
      </div>
      
      </Container>
    )
  }
}
