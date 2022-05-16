import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import { useCart } from 'react-use-cart';
export default function ButtonAppBar() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart

    }=useCart();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <Link to="/" className='home-link'>
           Home
            </Link>

          </Typography>

 
 
          <i class="fa-solid fa-cart-shopping">
              <Link to="/cart-list" className='home-link'>
          <Button color="inherit">Ordering ({totalUniqueItems})</Button>
            </Link>
          </i>
           
          <Link to="/login" className='home-link'>
          <Button color="inherit">Login</Button>
            </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
