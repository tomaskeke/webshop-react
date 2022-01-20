import { useContext } from "react";
import { Box, Paper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { UserContext } from "../../../Context/UserContext";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { firstname, lastname } = useParams();
  const { setLoggedIn, setUser } = useContext(UserContext);

  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const handleLoginUser = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    firstname && lastname ? setUser({...loginUser, firstname, lastname})
    : setUser({...loginUser, firstname: "Olof", lastname: "elofsson" })
    navigate('/account')
  };
  const removeLinkStyling = {
    textDecoration: "none",
    color: "inherit",
  };

  // console.log(user.username, "from login");

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            px: 10,
            pb: 3,
            pt: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6">Login</Typography>
          <Box
            component="form"
            onSubmit={handleLoginUser}
            sx={{
              "& .MuiTextField-root": { m: 2 },
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <TextField
              id="standard"
              label="Username"
              name="username"
              variant="standard"
              m={4}
              onChange={handleInput}
            />
            <TextField
              id="standard-password-input"
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onChange={handleInput}
            />

            <Button
              sx={{ mt: 3 }}
              variant="contained"
              type="submit"
            >
              Login
            </Button>
          </Box>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="h6" mt={3}>
              or
            </Typography>
            <Link style={removeLinkStyling} to={"/register"}>
              <Button sx={{ mt: 3 }} variant="contained">
                Create account
              </Button>
            </Link>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Login;
