import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Account = () => {
  const { user, loggedIn } = useContext(UserContext);
  console.log(loggedIn)
  return (
    <>
      <Container maxWidth="sm">
        <Paper elevation={1}>
          <Box sx={{ p: 2, border: "1px solid grey" }}>
            <h1>Account</h1>
            <p>
              Welcome to DevShop {user.firstname} {user.lastname}!
            </p>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Account;
