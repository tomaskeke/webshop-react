import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Account = () => {
  const { user, loggedIn } = useContext(UserContext);
  console.log(loggedIn);
  return (
    <>
      <Container maxWidth="sm">
        <Paper elevation={1} sx={{ p: "25px" }}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h4" marginBottom="15px">
              Account
            </Typography>
            <Typography variant="subtitle1">
              Welcome to DevShop{" "}
              <strong>
                {user.firstname} {user.lastname}!{" "}
              </strong>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Account;
