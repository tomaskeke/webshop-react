import Basket from "./Basket";
import { useState, useContext, useEffect } from "react";
import { BasketContext } from "../../../Context/BasketContext";
import { UserContext } from "../../../Context/UserContext";
import useRemoveArrayDuplicates from "../../../hooks/useRemoveArrayDuplicates";
import { useNavigate } from "react-router-dom";
import { BadgeContext } from "../../../Context/BadgeContext";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { TextField, Typography, Button } from "@mui/material";

const Checkout = () => {
  const { user } = useContext(UserContext);
  const { basket, setBasket, setBasketOpen } = useContext(BasketContext);

  const navigate = useNavigate();
  const filteredBasket = useRemoveArrayDuplicates(basket);
  let mappedProducts = [];
  filteredBasket.map(item => mappedProducts.push(item.title + " $"+ item.price))

  const [orderFulfilled, setOrderFulfilled] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState({
    username: "",
    firstname: "",
    lastname: "",
    adress: "",
    zipcode: "",
    products: [],
  });


  const handleInput = (e) => {
    setDeliveryInfo({ ...deliveryInfo, [e.target.name]: e.target.value });
  };

  const { setCount } = useContext(BadgeContext);

  const sendOrder = (e) => {
    e.preventDefault();
    alert(JSON.stringify(deliveryInfo));
    setOrderFulfilled(true);
    setBasket([]);
    setCount(0);
  };

  useEffect(() => {
    setDeliveryInfo({
      ...deliveryInfo,
      firstname: user.firstname || "",
      lastname: user.lastname || "",
      adress: user.adress || "",
      zipcode: user.zipcode || "",
      products: mappedProducts,
    })
  }, [basket]);

  useEffect(() => {
    setBasketOpen(false);
  });

  return (
    <>
      <Container maxWidth="sm">
        <Paper elevation={1} padding="20px">
          <Box
            display="flex"
            sx={{ 
              flexDirection: "column",
              justifyContent: "center", 
              height: "30rem" 
              }}>
              <Typography variant="h4" align="center" sx={{mt: "20px"}}>
                Checkout
              </Typography>
            {orderFulfilled && (
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography variant="p" margin="25px">Thank you for your order!</Typography>
                <Button variant="contained" onClick={() => navigate("/")}>Return to shop</Button>
              </Box>
            )}
            {!orderFulfilled && basket.length <= 0 && (
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography variant="p" margin="25px">You have nothing to order...</Typography>
                <Button variant="contained" onClick={() => navigate("/")}>Return to shop</Button>
              </Box>
            )}
            {!orderFulfilled && basket.length > 0 && (
              <Box padding="20px">
                <div>
                  <Container maxWidth="xs">
                    <Typography variant="h5" align="center" marginBottom="20px">
                      Delivery info
                    </Typography>
                    <form onSubmit={sendOrder}>
                    <Box sx={{display: 'flex', }}>
                    <Box>
                        <TextField
                          name="firstname"
                          label="firstname"
                          placeholder="Firstname"
                          onChange={handleInput}
                          value={deliveryInfo.firstname}
                          required
                          sx={{margin: '5px'}}
                        />

                        <TextField
                          name="lastname"
                          label="lastname"
                          placeholder="Lastname"
                          onChange={handleInput}
                          value={deliveryInfo.lastname}
                          required
                          sx={{margin: '5px'}}
                        />
                    </Box>
                    <Box>
                      <TextField
                        name="adress"
                        label="adress"
                        placeholder="Adress"
                        onChange={handleInput}
                        value={deliveryInfo.adress}
                        required
                        sx={{margin: '5px'}}
                      />
                      <TextField
                        name="zipcode"
                        label="zip code"
                        onChange={handleInput}
                        value={deliveryInfo.zipcode}
                        required
                        sx={{margin: '5px'}}
                      />
                      </Box>
                      </Box>
                      <Box textAlign="center" marginTop="30px">
                      <Button variant="contained" type="submit">Send order</Button>
                      </Box>
                    </form>
                  </Container>
                </div>
              </Box>
            )}
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Checkout;
