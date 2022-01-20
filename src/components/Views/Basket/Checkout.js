import Basket from "./Basket";
import { useState, useContext, useEffect } from "react";
import { BasketContext } from "../../../Context/BasketContext";
import { UserContext } from "../../../Context/UserContext";
import useRemoveArrayDuplicates from "../../../hooks/useRemoveArrayDuplicates";
import { useNavigate } from "react-router-dom";
import { BadgeContext } from "../../../Context/BadgeContext";

const Checkout = () => {
  const { user } = useContext(UserContext);
  const { basket, setBasket } = useContext(BasketContext);

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

  const { count } = useContext(BadgeContext);
  const resetCount = (i) => {
    count[i] = 0;
  };

  const sendOrder = (e) => {
    e.preventDefault();
    alert(JSON.stringify(deliveryInfo));
    setOrderFulfilled(true);
    setBasket([]);
    resetCount();
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

  return (
    <>
      <h1>Checkout</h1>
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
        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <div style={gridItemStyle}>
            <h2>Your products</h2>
            <Basket isBasket={false} />
          </div>
          <div style={gridItemStyle}>
            <h2>Delivery info</h2>
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
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
