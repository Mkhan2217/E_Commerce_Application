import {
  Typography,
  AppBar,
  // Card,
  // CardActions,
  // CardContent,
  // CardMedia,
  CssBaseline,
  // Grid,
  Toolbar,
  // Container,
  // Button,
  Link,
} from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";
import useStyles from "./style";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function Navbar() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar className={classes.navbar} position="relative">
        <Toolbar>
          <Link className={classes.homelink} href="/">
          <HomeIcon className={classes.homeicon} />
          <Typography className={classes.home} variant="h6">
            Home
          </Typography>
          </Link>
          <Link className={classes.about} href="/about">
            <Typography className={classes.aboutop}  variant="h6">
              About
            </Typography>
          </Link>

          <Typography className={classes.login} variant="h6">
            Login
          </Typography>
          <LoginIcon className={classes.loginicon} /> 
          <Typography className={classes.cart} variant="h6">
      
         </Typography>	
         <Link className={classes.cart}  >

          <ShoppingCartIcon className={classes.carticon}  />
         </Link>
          
        </Toolbar>
      </AppBar>
       
    </>
  );
}

export default Navbar;
