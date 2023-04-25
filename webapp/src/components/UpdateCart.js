import React from "react";
import { Button, Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useStyles from "./style";

function UpdateCart() {
    const classes = useStyles();   
  return (
    <>
      <Typography className={classes.heading} variant="h3">
        Update Cart to add Products
      </Typography>
      <form>
        <Box
          className={classes.boxinput}
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "65ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="name" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Release Date"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="code" variant="outlined" />
          <TextField id="outlined-basic" label="price" variant="outlined" />
          <TextField id="outlined-basic" label="description" variant="outlined" />
          {/* <TextField
            id="outlined-basic"
            label="Product Cast"
            variant="outlined"
          /> */}
          <Button className={classes.updatebtn} variant="contained" color="primary">
            {" "}
            Update{" "}
          </Button>
        </Box>
      </form>
    </>
  );
}

export default UpdateCart