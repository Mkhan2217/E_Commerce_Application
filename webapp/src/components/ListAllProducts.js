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
import { Stack } from "@mui/material";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function ListAllProducts() {
  const [product, setProduct] = useState([]);
  const [prodArray, setProdArray] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = () => {
    ProductService.getProduct()

      .then((res) => {
        setProduct(res.data.data);

        console.log(res.data.data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const classes = useStyles();

  const deleteProduct = (id) => {
    ProductService.deleteProduct(id)
      .then((response) => {
        getProduct();
        // alert("product Deleted successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const updateProduct = (id) => {

  //   ProductService.updateProductById(id, product)
  //     .then((response) => {
  //       console.log(response)
  //       getProduct();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const addtoCart = (product) => {
    console.log(product);

    if (product !== null) {
      setProdArray([...prodArray, product]);
      alert("product added successfully");
    }

    console.log(prodArray);
  };

  const ShowCartBtn = () => {
    navigate("/cart", { state: prodArray });
  };
  const buyNow = () => {
    navigate("/payment");
  };
  return (
    <>
      <main
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/1292443598/photo/flying-shopping-cart-with-shopping-bags-on-a-pink-background.jpg?s=170667a&w=0&k=20&c=d-0iNUYsC3I-cX4iaV4BNPOf9QYWth2fyWO2HvnghWo=)",
          backgroundSize: "cover", // or "contain"
          backgroundRepeat: "no-repeat",
        }}
      >
        <Stack direction="row" spacing={10} sx={{ marginLeft: "800px" }}>
          <Link href="/addproducts">
            <Button variant="contained" color="primary" className={classes.add}>
              Add Product
            </Button>
          </Link>
          <Link href="/cart">
            <Button
              className={classes.add}
              variant="contained"
              color="primary"
              onClick={() => {
                ShowCartBtn();
              }}
            >
              Show Cart
            </Button>
          </Link>
        </Stack>

        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
            {product.map((data) => (
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
                    {/* <Typography className={classes.proddescp} align="left">
                      {data.descp}
                    </Typography> */}
                    <Typography className={classes.prodname} align="left">
                      {data.name}
                    </Typography>
                    <Typography className={classes.prodcode} align="left">
                      Code__ {data.code}
                    </Typography>
                    <Typography className={classes.prodprice} align="left">
                      Price__ {data.price}.00/ ₹ Only
                    </Typography>
                    <Typography className={classes.proddescp} align="left">
                     Details __    {data.description}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardaction}>
                    <Link>
                      <Button
                        variant="contained"
                        size="medium"
                        align="flex-end"
                        color="default"
                        className={classes.buyBtn}
                        onClick={() => {
                          buyNow(data);
                        }}
                      >
                        Buy Now
                      </Button>
                    </Link>
                    <Link href={`/updateproduct/${data.id}`}>
                      <Button
                        variant="contained"
                        size="medium"
                        color="primary"
                        
                        // onClick={() => updateProduct(data.id)}
                        
                      >
                        Edit
                      </Button>
                    </Link>
                    <Link>
                      <Button
                        variant="contained"
                        size="medium"
                        color="secondary"
                        onClick={() => deleteProduct(data.id)}
                      >
                        Delete
                      </Button>
                    </Link>
                    <Link>
                      <Button
                        variant="contained"
                        size="medium"
                        color="default"
                        onClick={() => {
                          addtoCart(data);
                        }}
                      >
                        Add to cart
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default ListAllProducts;
