import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { loggedIn } = useContext(UserContext);
  console.log(loggedIn);

  // Så här ska koden egentligen se ut men eftersom vi fortfarande har bugget att vår content inte visas om logged in statet är true så gör returnernar jag endast child för att kunna se våran account page return loggedIn ? <>{children}</> : <Navigate to="/login" />;

  return <>{children} </>;
};

export default PrivateRoute;
