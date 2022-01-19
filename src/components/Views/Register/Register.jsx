import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { UserContext } from "../../../Context/UserContext";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

const Register = () => {
  const navigate = useNavigate();

  const [registerUser, setRegisterUser] = useState({
    firstname: "",
    lastname: "",
    adress: "",
    zipcode: "",
    username: "",
    password: "",
  });
  const { user, setUser } = useContext(UserContext);

  const handleInput = (e) => {
    setRegisterUser({ ...registerUser, [e.target.name]: e.target.value });
  };
  const handleRegisterUser = (e) => {
    e.preventDefault();
    alert(JSON.stringify(registerUser));
    setUser({ ...user, ...registerUser });
    navigate(`/login/${registerUser.firstname}/${registerUser.lastname}`);
  };

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
          <Typography variant="h6">Register</Typography>
          <Box
            component="form"
            onSubmit={handleRegisterUser}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box display="flex" flexDirection="row">
              <Box
                display="flex"
                flexDirection="column"
                sx={{ mx: 3, mt: 2, mb: 0 }}
              >
                <FormControl>
                  <InputLabel htmlFor="my-input">Username</InputLabel>
                  <Input
                    id="my-username"
                    aria-describedby="my-helper-text"
                    name="username"
                    onChange={handleInput}
                  />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="my-input">Firstname</InputLabel>
                  <Input
                    id="my-firstname"
                    aria-describedby="my-helper-text"
                    name="firstname"
                    onChange={handleInput}
                  />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="my-input">Lastname</InputLabel>
                  <Input
                    id="my-lastname"
                    aria-describedby="my-helper-text"
                    name="lastname"
                    onChange={handleInput}
                  />
                </FormControl>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                sx={{ mx: 3, mt: 1.5, mb: 0 }}
              >
                <FormControl>
                  <InputLabel htmlFor="my-input">Adress</InputLabel>
                  <Input
                    id="my-adress"
                    aria-describedby="my-helper-text"
                    name="adress"
                    onChange={handleInput}
                  />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="my-input">Zipcode</InputLabel>
                  <Input
                    id="my-zipcode"
                    aria-describedby="my-helper-text"
                    name="zipcode"
                    onChange={handleInput}
                  />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="my-input">Password</InputLabel>
                  <Input
                    id="my-input"
                    aria-describedby="my-helper-text"
                    name="password"
                    type="password"
                    onChange={handleInput}
                  />
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Button
              sx={{ mt: 3 }}
              variant="contained"
              type="submit"
              onClick={handleRegisterUser}
            >
              Create account
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Register;
