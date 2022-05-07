
import { makeStyles } from '@mui/styles';
import ProductCard from "./ProductCard";
import PageWrapper from "./Page";
// import ProductData  from "./ProductData";
import Pagination from '@mui/material/Pagination';
import React,{ useState,useEffect } from "react";
import axios from 'axios';
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
 pagination:{
   display: 'flex',
   alignItems: 'center'
 }
}));

const ProductList = ()=>{
  const [product,setProduct]=useState([]);
  const getProductData=()=>{
      axios.get('http://localhost:4500/api/product/getAll')
      .then(res=>{
          setProduct(res.data.product);
          console.log(res.data.product);
      })
      .catch(err=>{
          console.log(err);   
      })
  }
  useEffect(()=>{
    getProductData();
  }
  ,[])
  console.log("product",product);
  const classes = useStyles();
    return(
      
      <PageWrapper>
         {/* <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 150 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box> */}
         <div className={classes.root}>
          {product.map(product=>{
                return(
                    <ProductCard product={product}/>
                )
            }
            )}
            
         </div>
         <div className={classes.pagination}>
           <Pagination count={10} variant="outlined" color="primary" />
         </div>
      </PageWrapper>
        
    )
}

export default ProductList;