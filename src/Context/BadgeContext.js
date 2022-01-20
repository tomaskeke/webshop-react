import { createContext, useState } from "react";

export const BadgeContext = createContext();

const BadgeProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    return (
        <>
            <BadgeContext.Provider value={{ count, setCount }}>
                {children} 
            </BadgeContext.Provider>
        </>
    )
}

export default BadgeProvider;