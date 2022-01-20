import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import { BasketContext } from "../../../Context/BasketContext";
import { FormatAlignJustify } from "@mui/icons-material";
import { Tooltip, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BasketTable = () => {
  const { basket } = useContext(BasketContext);
  const navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "Title", headerName: "Product" },
    {
      field: "Price",
      headerName: "Price",
      type: "number",
    },
  ];

  const rows = [];

  basket.map((item, index) => {
    return rows.push({
      id: index + 1,
      Title: item.title,
      Price: "$" + item.price,
    });
  });

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        columnBuffer={4}
        autoHeight={true}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <Button onClick={() => navigate("/checkout")}>Test</Button>
    </div>
  );
};

export default BasketTable;
