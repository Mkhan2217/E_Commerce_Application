import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  Link,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import useStyles from "./style";
import { useLocation, useNavigate } from "react-router-dom";

function Cart() {
  const loc = useLocation();
  console.log(loc.state);
  let product = [...loc.state];
  const classes = useStyles();
  //   const deleteProduct = (id) => {
  //     ProductService.deleteProduct(id)
  //       .then((response) => {
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  return (
    <>
      <h1>Total Items Available In The Cart :{product.length}</h1>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
          {product &&
            product.map((data) => (
              <Grid item key={data.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`data:image/jpeg;base64,${data.img}`}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      className={classes.prodtitle}
                      align="left"
                      variant="h5"
                    >
                      {data.title}
                    </Typography>
                    <Typography className={classes.proddescp} align="left">
                      {data.descp}
                    </Typography>
                    <Typography className={classes.prodname} align="left">
                      {data.name}
                    </Typography>
                    <Typography className={classes.prodcode} align="left">
                      {data.code}
                    </Typography>
                    <Typography className={classes.prodprice} align="left">
                      {data.price}
                    </Typography>
                    <Typography className={classes.prodimage} align="left">
                      {data.img}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardaction}>
                    <Link href="/Payment">
                      <Button
                        variant="contained"
                        size="medium"
                        align="flex-end"
                        color=""
                        className={classes.buyBtn}
                      >
                        Procced to Pay
                      </Button>
                    </Link>

                    <Button
                      variant="contained"
                      size="medium"
                      color="default"
                      // onClick={() => deleteProduct(data.id)}
                    >
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}

export default Cart;
