import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from "@mui/styles";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}  

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '3.5em',
    margin: '0.5em'
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: '25px'
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight:'25px',
    height: '45px',
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  }

  return (
    <>
      <ElevationScroll>
        <AppBar
        position='fixed'
        color='success'
        text='secondary'
        sx={{
        color: 'white',        
        fontSize: 19,
        fontWeight: '700',
      }}>
          <Toolbar disableGutters>
            <img alt="company logo" className={classes.logo} src={logo} />
          <Tabs
            value={value}
            className={classes.tabContainer}
            onChange={handleChange}
            indicatorColor='success'
          >
            <Tab className={classes.tab} component={Link} to='/' label="Home" />
            <Tab className={classes.tab} component={Link} to='/coures' label="Courses" />
            <Tab className={classes.tab} component={Link} to='/services' label="Services" />
            <Tab className={classes.tab} component={Link} to='/about' label="Why AlienRoom" />
            <Tab className={classes.tab} component={Link} to='/contactus' label="Contact Us" />
          </Tabs>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}>
              Free Estimated
          </Button>          
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}
