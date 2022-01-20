import * as React from "react";
import { useContext } from "react";
import { BasketContext } from "../../../Context/BasketContext";
import { BadgeContext } from "../../../Context/BadgeContext";
import { Paper, Stack, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const BasketTable = () => {
  const { basket } = useContext(BasketContext);
  const { count, setCount } = useContext(BadgeContext);
  const navigate = useNavigate();
  let total = 0;
  basket.map((item) => total += item.price);

  return (
    <div
      style={{
        height: 400,
        width: "100%",
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "20px",
          maxWidth: "50%",
        }}
      >
        <Typography>Product name:</Typography>
        <Typography>Price:</Typography>
      </Box>
      <Typography textAlign="right" marginRight="25px">total: {total}</Typography>
      {basket.map((item, i) => {
        return (
          <Paper sx={{ maxWidth: "100%", margin: "20px" }} key={(item.id += i)}>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <Typography>{item.title}</Typography>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant="bold">${item.price}</Typography>
                <IconButton
                  onClick={() => {
                    return basket.splice(i, 1), setCount(count - 1);
                  }}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </Box>
            </Stack>
          </Paper>
        );
      })}
    </div>
  );
};

export default BasketTable;
