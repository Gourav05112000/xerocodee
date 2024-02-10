import { Typography } from '@material-ui/core'
import React from 'react'
import {data} from "../Data.tsx";
import ScrollCards from './scrollCards.tsx';

export default function Section5() {
  return (
    <div style={{ height:"100%",display:'flex', flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <Typography style={{textAlign:'center', fontSize:'30px'}}>Choose Us: Your Path to Innovation and <br/><span style={{background:'-webkit-linear-gradient(#3171DE, #704AF2)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Success.</span></Typography>
                <ScrollCards data={data}/>
    </div>
  )
}
