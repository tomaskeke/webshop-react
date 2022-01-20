import {React, useEffect} from "react";
import { Typography, Box, Paper, Rating, Divider, Button } from "@mui/material";
import { useContext } from "react";
import { ProductContext } from "../../../Context/ProductContext";
import { BasketContext } from "../../../Context/BasketContext";
import { BadgeContext } from "../../../Context/BadgeContext";
import { useParams } from 'react-router-dom';


const ProductPage = () => {
  const { viewProduct, setViewProduct } = useContext(ProductContext);
  const { basket, setBasket } = useContext(BasketContext);
  const { count, setCount } = useContext(BadgeContext);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setViewProduct(res));
  }, []);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", flexDirection: "row" }}
    >
      <Paper sx={{ p: 4 }}>
        <div
          style={{
            backgroundImage: `url(${viewProduct.image})`,
            width: "400px",
            height: "400px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </Paper>
      <div
        style={{
          width: "600px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" width="20ch" style={{ textAlign: "center" }}>
          {viewProduct.title}
        </Typography>
        <Box
          sx={{
            m: 4,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingBottom: "20px",
            }}
          >
            <Box
              style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "4px",
                padding: "10px 20px",
                textAlign: "center",
              }}
            >
              ${viewProduct.price}
            </Box>
            <Button
              size="large"
              color="success"
              variant="contained"
              onClick={() =>
                setBasket([...basket, viewProduct], setCount(count + 1))
              }
            >
              Buy
            </Button>
          </Box>
          <Typography variant="p">Rating:</Typography>
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.1}
            // value={viewProduct.rating.rate}
            readOnly
          />
          <Divider />
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Typography variant="p" width="40ch" padding="10px">
            {viewProduct.description}
          </Typography>
        </Box>
      </div>
    </Box>
  );
};

export default ProductPage;
