import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DisabledTabs from './tabs';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Logo from '../assets/Annotation 2024-02-06 133803.png'




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);

export default function DenseAppBar() {
  const classes = useStyles();
  const [lang, setLang] = React.useState('EN');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLang(event.target.value as string);
  };
  return (
    
      <AppBar style={{boxShadow:'none'}} position='static' >
        <Toolbar  style={{ backgroundColor:'white', padding:"10px, 10px, 10px, 10px",
                          display:'flex', justifyContent:'space-between',alignItems:'center'}}>
        
          <IconButton style={{margin:'10px'}} edge="start" className={classes.menuButton}  aria-label="menu">
            {/* <MenuIcon /> */}
            <>
            <img src={Logo}></img>
            </>
          </IconButton>
          <div className='tab' style={{borderRadius:'50px',padding: "17px, 67px, 16px, 68px", margin:"10px",backgroundColor:"#F7F7FD"}}><DisabledTabs/></div>
          
          
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <FormControl style={{textAlign:'center',padding:"6px"}} >
        
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={lang}
          onChange={handleChange}
          label="Age"
          disableUnderline
        >
          <MenuItem value="EN">
            <em>EN</em>
          </MenuItem>
          <MenuItem value={"HN"}>HN</MenuItem>
          <MenuItem value={"SP"}>SP</MenuItem>
          
        </Select>
      </FormControl>
      <Button variant="contained" style={{backgroundColor:"#3171DE",borderRadius:'50px',color:'white',textTransform:'capitalize'}}>
        Schedule a call
      </Button>
      </div>

        </Toolbar>
      </AppBar>
    
  );
}
