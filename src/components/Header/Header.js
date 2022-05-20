import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Link,Router,Switch } from "react-router-dom";

import useStyles from './styles.js';

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title} style={{fontWeight:'bold'}}>
         Smart City App
        </Typography>

          
        <Box display="flex">
        <button  style={{backgroundColor:"#e7e7e7",borderRadius:"10px",color:"white",padding:"10px",marginLeft:"10px",marginRight:"20px"}}>
        <Link to="/login" style={{textDecoration:'none'}}> get started </Link>
</button>
         
          <Typography variant="h6" className={classes.title} style={{fontWeight:'bold'}}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
