import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Bg from '../assets/pexels-canva-studio-3153201 1.png';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;


  return (
       
        <div style={{
          position:'relative',
          width:'100%',
          height:'100vh',
        }}>
        
          <div style={{position:'relative'}}>
            <div style={{position:'absolute',backgroundImage:'linear-gradient(to right,white,transparent)',height:"650px", width:'100%'}}></div>
          <img style={{height:"650px", width:'100%' }} src={Bg}></img>
          </div>
          
        <Container style={{width:'35%', lineHeight:'24px',position:'absolute',top:'50%',left:'10%',transform:'translate(-25%,-50%)'}}>
        <Typography style={{color:'#F3BC4C',fontSize:'20px'}}>
        TECH SERVICES 
        </Typography>
        <Typography style={{color:'#3D3D3D',fontSize:'2.4rem'}}>
        TechSynergy: <br/>Innovate,<br/>Create, Elevate
        </Typography>
        <Typography style={{color:'#525252',fontSize:'18px'}}>
        Unlocking Possibilities, One Code at a Time
        </Typography>
        
        <Button variant="contained" style={{backgroundColor:"#66B066",marginTop:'50px',padding:'18px, 34px, 18px, 34px',fontSize:'16px',borderRadius:'50px',color:'white',textTransform:'capitalize'}}>
        See projects
      </Button>
      </Container>
      </div>
      
      
  );
}
