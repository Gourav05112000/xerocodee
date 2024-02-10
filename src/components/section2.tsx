import { Card, CardContent, Container, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import Sim from '../assets/sim.png'

export default class Section2 extends Component {
  render() {
    return (
      <div style={{ height:"850px",display:'flex', flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
        
        <Typography style={{textAlign:'center', fontSize:'40px', width:'70%'}}>Empowering Your Digital Vision: Our Comprehensive Tech Services.
        </Typography>
        <div style={{ height:'60%', width:'80%', display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:40,gridAutoRows:'200px'}}>
        <Card style={{padding:'20px',display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-evenly'}} >
                <img src={Sim} />
                    <div >
                    <Typography style={{fontSize:'28px'}}>Custom SoftwareDevelopment</Typography>
                    <Typography style={{fontSize:'16px'}}>Create custom software tailored for your unique needs, including front-end, and core back-end technology.</Typography>
                    </div>
            </Card>
            <Card style={{padding:'20px',display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-evenly'}} >
                
                <img src={Sim}/>
                <div>
                    <Typography style={{fontSize:'28px'}}>QA and Testing</Typography>
                    <Typography style={{fontSize:'16px'}}>Create custom software tailored for your unique needs, including front-end, and core back-end technology.</Typography>
                </div>
                
            </Card>
            <Card style={{padding:'20px',display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-evenly'}} >
                <img src={Sim}/>
                    <div>
                    <Typography style={{fontSize:'28px'}}>AI and Data Science</Typography>
                    <Typography style={{fontSize:'16px'}}>Use leading AI, machine learning, and data engineering technologies to unlock business value. </Typography>
                    </div>
            </Card>
            <Card style={{padding:'20px',display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-evenly'}} >
                <img src={Sim}/>
                <div>
                    <Typography style={{fontSize:'28px'}}>UX/UI Design</Typography>
                    <Typography style={{fontSize:'16px'}}>Our backend developers are the architects of efficiency and security. They design and build the databases andAPIs. </Typography>
                    </div>
            </Card>
            <Card style={{padding:'20px',display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-evenly'}} >
                <img src={Sim}/>
                    <div>
                    <Typography style={{fontSize:'28px'}}>Mobile App Development</Typography>
                    <Typography style={{fontSize:'16px'}}>Build performant, scalable, and secure mobile applications for iOS and Android devices. </Typography>
                    </div>
            </Card>
            <Card style={{padding:'20px',display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-evenly'}} >
                <img src={Sim}/>
                <div>
                    <Typography style={{fontSize:'28px'}}>Platform and Infrastructure</Typography>
                    <Typography style={{fontSize:'16px'}}>Ensure applications are secure, fault tolerant and highly available with our DevOps and Security engineers. </Typography>
                </div>
            </Card>

        </div>
        
        
        </div>

      </div>
    )
  }
}
