import { useEffect, useContext } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { ProductContext } from "../../../Context/ProductContext";
import Card from "../../general/Card/Card";

const Jewelery = () => {
  const { products, setProducts } = useContext(ProductContext);
  useEffect(() => {
    setProducts([]);
    fetch(`https://fakestoreapi.com/products/category/jewelery`)
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);
  return (
    <Box
      sx={{ flexGrow: 1 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container xl={6} justifyContent="center" alignItems="center">
        <Paper sx={{ p: 3 }}>
          <Typography variant="p">Jewelery</Typography>
          <Grid
            container
            item
            sx={{ mt: 2 }}
            gap={2}
            justifyContent="center"
            alignItems="center"
          >
            <Card key={products.id} />
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
};

export default Jewelery;
