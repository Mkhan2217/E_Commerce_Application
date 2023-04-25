import React from "react";
import { Button, Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useStyles from "./style";
import { useState, useEffect } from "react";
import ProductService from "../services/ProductService";
import { useNavigate, useParams } from "react-router-dom";

function AddProduct() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();
  const { id } = useParams();
  useEffect(() => {
    ProductService.getProductById(id)

      .then((response) => {
        setName(response.data.data.name);

        setCode(response.data.data.code);

        setPrice(response.data.data.price);

        setDescription(response.data.data.description);

        setImg(response.data.data.img);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);
  const titleHead = () => {
    if (id) {
      return <h3 className={classes.updateProduct}>Update Product</h3>;
    } else {
      return <h3 className={classes.updateProduct}>Add Product</h3>;
    }
  };

  const [message, setMessage] = useState("");

  const saveOrUpdateProduct = (e) => {
    const product = { name, code, price, description, img };
    if (id) {
      ProductService.updateProductById(id, product)

        .then((response) => {
          console.log(response.data.message);

          setMessage(response.data.message);

          console.log(response.data);

          if (response.data.code === "OK") {
            alert("Product data Updated Successfully");

            navigate("/");
          }
        })

        // .catch((error) => {
        //   console.log(error);
        // });
    } else {
      e.preventDefault();
      
      // console.log(product);
      ProductService.createProduct(product)

        .then((response) => {
          console.log(response.data.code);

          setMessage(response.data.message);

          if (response.data.code === "OK") {
            alert("Product data Saved Successfully");

            navigate("/");
          }
        })

        .catch((error) => {
          console.log(error);
        });
    }

    // ProductService.createProduct(product)
    //   .then((response) => {
    //     console.log(response.data);
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const uploadImage = async (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    const withoutPrefix = base64.replace(/^data:image\/\w+;base64,/, "");
    console.log(withoutPrefix);
    setImg(withoutPrefix);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const validate=()=>{
     
  }
  return (
    <>
      {/* <Typography className={classes.heading} variant="h3">
        Add Products to Cart
      </Typography> */}
      {titleHead()}
      <Box
        className={classes.boxinput}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "65ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          placeholder="Enter Product's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error
          helperText="Name should be  Alphabeticonly  And not Empty"
        />
        <TextField
          id="outlined-basic"
          label="code"
          variant="outlined"
          placeholder="Enter Product's Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          error
          helperText="Code should be  Alphabeticonly  And not Empty"
        />

        <TextField
          id="outlined-basic"
          label="price"
          variant="outlined"
          placeholder="Enter Product's Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          error
          helperText="Price should be  Numeric  And not Empty"
        />
        <TextField
          id="outlined-basic"
          label="description"
          variant="outlined"
          placeholder="Enter Product's Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          error
          helperText= "Name should be  Alphabeticonly  And not Empty"
        />

        <Button
          className={classes.updatebtn}
          variant="contained"
          color="primary"
          component="label"
          value={img}
          onChange={(e) => {
            uploadImage(e);
          }}
        >
          {" "}
          Upload
          <input hidden accept="image/*" multiple type="file" />{" "}
        </Button>
        <p>{message}</p>
        <Button
          className={classes.submitbtn}
          variant="contained"
          onClick={(e) => saveOrUpdateProduct(e)}
        >
          {" "}
          Submit{" "}
        </Button>
      </Box>
    </>
  );
}

export default AddProduct;
