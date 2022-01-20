import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { Navigate } from "react-router-dom";


 const PrivateRoute = ({ children }) => {
  const { loggedIn } = useContext(UserContext);
  console.log(loggedIn);

  return (
    loggedIn ? <>{children}</> : <Navigate to="/login" />
  )
  };

export default PrivateRoute;
