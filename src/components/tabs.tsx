import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function DisabledTabs() {

  const [value, setValue] = React.useState(2);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
   
    
      <Tabs
    
      TabIndicatorProps={{
        style: {
          display: 'none'
        }
      }}
        value={value}
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        style={{borderRadius:'20px'}}
        centered
      > 
        <Tab style={{backgroundColor:'#F7F7FD',textTransform:'capitalize'}} label="Home" />
        <Tab style={{backgroundColor:'#F7F7FD',textTransform:'capitalize'}} label="About Us" />
        <Tab style={{backgroundColor:'#F7F7FD',textTransform:'capitalize'}} label="Service" />
        <Tab style={{backgroundColor:'#F7F7FD',textTransform:'capitalize'}} label="Contact Us" />
        
      </Tabs>
    
   
  );
}
