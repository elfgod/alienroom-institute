import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from "@mui/styles"

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
      marginBottom: "3em"
    },
    logo: {
      height: "3.5em",
      margin: "0.5em"
    }
}))

export default function Header(props) {
  const classes = useStyles()

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <img alt="company logo" className={classes.logo} src={logo} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}
