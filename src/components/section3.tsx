import { Button, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import Samsung from '../assets/samsung-logo-png-1300.png'
import Sony from '../assets/sony_- logo-250x44.png'
import Ms from '../assets/microsoft_- logo-1000x214.png'
import Lg from '../assets/lg-logo-14451.png'
import Google from '../assets/google_- logo-1000x327.png'


export default class Section3 extends Component {
  render() {
    return (
        <div style={{ height:"400px",display:'flex', flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
        <div style={{borderRadius:'30px',backgroundColor:'#F7F7FD', height:"400px",width:'90%',display:'flex', flexDirection:'column',justifyContent:'space-around',alignItems:'center',overflow:'hidden'}}>
        <div>
        <Typography style={{textAlign:'center', fontSize:'40px', width:'100%'}}>Trusted by Leading Organizations
        </Typography>
        <Typography style={{textAlign:'center', fontSize:'16px', width:'100%'}}>Our 4,000+ team has expertise in almost<br/> everyprogramming language.
        </Typography>
        </div>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center',position:'relative',width:'120%'}}>
          <div style={{height:'auto',opacity:'0.5', width:'100%', backgroundPosition:'center center',backgroundSize:'cover' ,margin:'0 1.1rem'}}><img src={Samsung} alt="" style={{height:'100%', width:'100%'}}/></div>
          <div style={{height:'auto',opacity:'0.5', width:'100%', backgroundPosition:'center center',backgroundSize:'cover' ,margin:'0 1.1rem'}}><img src={Ms} alt="" style={{height:'100%', width:'100%'}}/></div>
          <div style={{height:'auto',opacity:'0.5', width:'100%', backgroundPosition:'center center',backgroundSize:'cover' ,margin:'0 1.1rem'}}><img src={Google} alt="" style={{height:'100%', width:'100%'}}/></div>
          <div style={{height:'auto',opacity:'0.5', width:'100%', backgroundPosition:'center center',backgroundSize:'cover' ,margin:'0 1.1rem'}}><img src={Samsung} alt="" style={{height:'100%', width:'100%'}}/></div>
          <div style={{height:'auto',opacity:'0.5', width:'100%', backgroundPosition:'center center',backgroundSize:'cover' ,margin:'0 1.1rem'}}><img src={Lg} alt="" style={{height:'100%', width:'100%'}}/></div>
          <div style={{height:'auto',opacity:'0.5', width:'100%', backgroundPosition:'center center',backgroundSize:'cover' ,margin:'0 1.1rem'}}><img src={Sony} alt="" style={{height:'100%', width:'100%'}}/></div>
        </div>
        <Button variant="contained" style={{backgroundColor:"#3171DE",borderRadius:'50px',color:'white',textTransform:'capitalize'}}>
        Our full repertorie
      </Button>
      </div>
      </div>
    )
  }
}
