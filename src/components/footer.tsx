import { InputBase, TextField, Typography } from '@material-ui/core'
import React from 'react'
import Logo from '../assets/Annotation 2024-02-06 133803.png'
import Social from '../assets/socialmedia.png'

export default function Footer() {
  return (
    <>
  <div style={{ height:"100%",display:'flex',justifyContent:'space-around',alignItems:'start',padding:'30px'}}>
    <div style={{height:'100%'}}>
        <Typography>Product</Typography>
        <Typography style={{color:'grey'}}>Employee database<br/>Payroll<br/>Absence<br/>Time Tracking<br/>Sift Planner<br/>REcruting</Typography>
    </div>
    <div style={{height:'100%'}}>
        <Typography>Information</Typography>
        <Typography style={{color:'grey'}}>FAQ<br/>Blog<br/>Support</Typography>
    </div>
    <div style={{height:'100%'}}>
        <Typography >Company</Typography>
        <Typography style={{color:'grey'}}>About us<br/>Contact us<br/>career<br/>Lift media</Typography>
    </div>
    <div style={{display:'flex',flexDirection:'column',padding:'20px',justifyContent:'space-evenly',width:'20%',height:'200px',borderRadius:'30px',backgroundColor:'#F7F7FD'}}>
    
    <Typography style={{width:'50%'}}>Subscribe</Typography>
        <div>
        <TextField
        id="outlined-secondary"
        label="Email address"
        variant="outlined"
        color="secondary"
        InputProps={{
            style: {
              borderRadius: "50px",
              
            }
          }}
         />       
   </div >
   <Typography style={{width:'100%', fontSize:'10px'}}>Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</Typography>
   
    </div>
</div>
    <hr/>
<div style={{height:"100%",display:'flex',justifyContent:'space-around',alignItems:'center',padding:'30px'}}>
    <img src={Logo}></img>
    <Typography style={{wordSpacing:'40px'}}>Terms   Privacy  Cookies</Typography>
    <img src={Social}></img>
</div>
</>
  )
}
