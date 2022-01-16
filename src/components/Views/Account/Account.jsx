import { useContext } from "react";
import { Box, Paper, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import { UserContext } from "../../../Context/UserContext";
import Button from "@mui/material/Button";

const Account = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%">
      
        <Paper elevation={3}
          sx={{
            width: 500,
            height: 500,
            display: "flex",
            flexDirection: "column",

            
          }}
        >
        <Typography variant="h6" ml={3} mt={3}>Login</Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 2, width: "25ch" },
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              
            }}
          >
            <TextField id="standard" label="Username" variant="standard" m={4}/>
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />

            <Button sx={{ width: "25ch", mt: 3, }} variant="contained">Login</Button>
          </Box>
          <Box width="100%" display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h6" mt={3}>or</Typography>
          <Button sx={{ width: "25ch", mt: 3, }} variant="contained">Create account</Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Account;
