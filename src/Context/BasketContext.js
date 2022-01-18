import { createContext, useState } from "react";

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);
    const [basketOpen, setBasketOpen] = useState(false);
    return (
        <>
            <BasketContext.Provider value={{ basket, setBasket, basketOpen, setBasketOpen }}>
                {children} 
            </BasketContext.Provider>
        </>
    )
}

export default BasketProvider;