import { useEffect, useContext } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { ProductContext } from "../../../Context/ProductContext";
import Card from "../../general/Card/Card";

const StartPage = () => {
  const { products, setProducts } = useContext(ProductContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((res) => {
        const topRated = res.filter((product) => product.rating.rate >= 4.7);
        setProducts(topRated);
      });
  }, []);

  return (
    <Box
      sx={{ flexGrow: 1 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container xl={8} justifyContent="center" alignItems="center">
        <Paper sx={{ p: 3 }}>
          <Typography variant="p">Hottest this week</Typography>
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

export default StartPage;
