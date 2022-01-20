import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({
    username: "",
    firstname: "Örjan",
    lastname: "Svensson",
    adress: "",
    zipcode: "",
    password: "",
  });

  console.log(user);

  return (
    <>
      <UserContext.Provider value={{ loggedIn, setLoggedIn, user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserProvider;
