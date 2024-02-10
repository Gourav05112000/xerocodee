import React from 'react'
import Crew1 from '../assets/Frame 3254-1.png'
import Crew2 from '../assets/Frame 3254-2.png'
import Crew3 from '../assets/Frame 3254-3.png';
import Crew4 from "../assets/Frame 3254.png";
import { Button, Typography } from '@material-ui/core';
export default function Crew() {
  return (
    <>
    <div style={{ height:"400px",display:'flex', flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
    <div style={{display:'grid',gridTemplateColumns:'repeat(7,minmax(20px,1fr)', justifyItems: 'center', alignItems: 'center', width: 'fit-content', margin: '0 auto'}}>
    <div style={{marginRight:'-100%',height:'50px',width:'50px',WebkitBorderRadius:'0.8rem',WebkitClipPath:'polygon(50% 0, 100% 0, 100% 50%, 51% 100%, 0 100%, 0 49%)',background:'linear-gradient(#3171DE ,white)',opacity:'70%'}}></div>

        <img src={Crew2} style={{height: '6.5rem', width: '6.5rem'}}></img>
        <img src={Crew1} style={{marginLeft:'-50%', height: '6.5rem', width: '6.5rem'}}></img>
        <img src={Crew3} style={{marginLeft:'-100%', height: '6.5rem', width: '6.5rem'}}></img>
        <img src={Crew4} style={{marginLeft:'-150%', height: '6.5rem', width: '6.5rem'}}></img>
        <img src={Crew1} style={{marginLeft:'-200%', height: '6.5rem', width: '6.5rem'}}></img>
        <div style={{marginLeft:'-290%',height:'50px',width:'50px',WebkitBorderRadius:'0.8rem',WebkitClipPath:'polygon(50% 0, 100% 0, 100% 50%, 51% 100%, 0 100%, 0 49%)',background:'linear-gradient(#3171DE ,white)',opacity:'70%'}}></div>

    </div>
    <div>
        <Typography style={{textAlign:'center' , fontSize:'40px'}}>Let's Form Your Crew.</Typography>
    </div>
    <Button variant="contained" style={{backgroundColor:"#3171DE",borderRadius:'50px',color:'white',textTransform:'capitalize'}}>
        Schedule a call
      </Button>
    </div>
    </>
  )
}
