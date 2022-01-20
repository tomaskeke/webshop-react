import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Navigate } from "react-router-dom";
const UnPrivateRoute = ({ children }) => {
  const { loggedIn } = useContext(UserContext);
  console.log(loggedIn);
  return !loggedIn ? <>{children}</> : <Navigate to="/account" />;
};

export default UnPrivateRoute;
