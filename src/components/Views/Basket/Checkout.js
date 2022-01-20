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
import { Typography } from "@mui/material";

const Checkout = () => {
  const { user } = useContext(UserContext);
  const { basket, setBasket, setBasketOpen } = useContext(BasketContext);

  const navigate = useNavigate();
  const filteredBasket = useRemoveArrayDuplicates(basket);

  const [orderFulfilled, setOrderFulfilled] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState({
    username: "",
    firstname: "",
    lastname: "",
    adress: "",
    zipcode: "",
    products: [],
  });

  const gridItemStyle = {
    padding: "0px, 20px",
  };

  const handleInput = (e) => {
    setDeliveryInfo({ ...deliveryInfo, [e.target.name]: e.target.value });
  };

  const { count, setCount } = useContext(BadgeContext);

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
      username: user.username || "",
      firstname: user.firstname || "",
      lastname: user.lastname || "",
      adress: user.adress || "",
      zipcode: user.zipcode || "",
      products: filteredBasket,
    });
  }, [basket]);

  useEffect(() => {
    setBasketOpen(false);
  });

  return (
    <>
      <Container maxWidth="sm">
        <Paper elevation={1}>
          <div
            display="flex"
            flexDirection="column"
            sx={{ p: 2, border: "1px solid grey", height: "30rem" }}
          >
            <Box gridColumn="span 6">
              <Typography variant="h4" align="center">
                Checkout
              </Typography>
            </Box>
            {orderFulfilled && (
              <>
                <p>Thank you for your order!</p>
                <button onClick={() => navigate("/")}>Return to shop</button>
              </>
            )}
            {!orderFulfilled && basket.length <= 0 && (
              <>
                <p>You have nothing to order...</p>
                <button onClick={() => navigate("/")}>Return to shop</button>
              </>
            )}
            {!orderFulfilled && basket.length > 0 && (
              <Box>
                <div>
                  <Container maxWidth="xs">
                    <Typography variant="h5" align="center">
                      Delivery info
                    </Typography>
                    <form onSubmit={sendOrder}>
                      <input
                        name="username"
                        placeholder="Username"
                        onChange={handleInput}
                        value={deliveryInfo.username}
                        required
                      />

                      <input
                        name="firstname"
                        placeholder="Firstname"
                        onChange={handleInput}
                        value={deliveryInfo.firstname}
                        required
                      />

                      <input
                        name="lastname"
                        placeholder="Lastname"
                        onChange={handleInput}
                        value={deliveryInfo.lastname}
                        required
                      />

                      <input
                        name="adress"
                        placeholder="Adress"
                        onChange={handleInput}
                        value={deliveryInfo.adress}
                        required
                      />

                      <input
                        name="zipCode"
                        placeholder="Zip code"
                        onChange={handleInput}
                        value={deliveryInfo.zipcode}
                        required
                      />

                      <button type="submit">Send order</button>
                    </form>
                  </Container>
                </div>
              </Box>
            )}
          </div>
        </Paper>
      </Container>
    </>
  );
};

export default Checkout;
