import * as React from 'react';
import { useContext } from 'react'
import { BasketContext } from '../../../Context/BasketContext'
import { Box, Stack, Paper, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { BadgeContext } from '../../../Context/BadgeContext'

const BasketTable = () => {
const { basket, setBasket } = useContext(BasketContext);
const { count, setCount } = useContext(BadgeContext);
  return (
    <div style={{ height: 400, width: '100%'}}>
    <Stack>
    {basket.map((item, index) => {
      return (
        <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: "row"}}>
          <Paper width="100%">
          <Typography>
          {item.title}
          </Typography>
          <Typography>
          ${item.price}
          </Typography>
          <Button onClick={(i) => {
            const newBasket = basket.filter((items) => items.id !== item.id);
            setBasket(newBasket)
            setCount(count - 1)
            }
            }>
            Delete
          </Button>
          </Paper>
        </Box>
      )
    })}
    </Stack>
    </div>
  );
}

export default BasketTable;