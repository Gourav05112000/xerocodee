import React from 'react'
import Pic from '../assets/phot.png'
import { Typography } from '@material-ui/core'
export default function Vision() {
  return (
    <div style={{ height:"100%",display:'flex', flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>

        <div style={{borderRadius:'30px',display:'flex', flexDirection:'column',alignItems:'center',width:'900px',height:'400px',background:'linear-gradient(#3171DE ,#4AC0F2)'}}>
        <Typography style={{textAlign:'center', fontSize:'30px',color:'white',marginTop:'10%'}}>Ready to Transform Your Vision into Reality?<br/> Let's Get Started!</Typography>

        </div>
      <img src={Pic} style={{height:'300px', width:'500px',marginTop:'-15%'}}></img>
    </div>
  )
}
