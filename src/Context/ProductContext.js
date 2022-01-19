import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [viewProduct, setViewProduct] = useState([]);

    return (
        <>
            <ProductContext.Provider value={{ products, setProducts, viewProduct, setViewProduct}}>
                {children} 
            </ProductContext.Provider>
        </>
    )
}

export default ProductProvider;