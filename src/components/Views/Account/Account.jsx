import { useContext } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { UserContext } from "../../../Context/UserContext";
import Button from "@mui/material/Button";

const Account = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div>
        <Box
          sx={{
            width: 500,
            height: 500,
            backgroundColor: "teal",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "30%",
            left: "40%",
            justifyContent: 'center',
            borderRadius: '10px',
            border: '1px solid darkgreen'
          }}
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 2, width: "25ch" },
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              
            }}
          >
            <TextField id="standard" label="Username" variant="standard" />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />

            <Button sx={{ width: "25ch" }} variant="contained">Contained</Button>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Account;
