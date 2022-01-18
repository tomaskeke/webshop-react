import { useContext } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { BasketContext } from '../../../Context/BasketContext'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';

const BasketCard = () => { 

    const { basket, setBasket } = useContext(BasketContext);


    return (
        <>
        {basket.map(productItem => {
            return ( 
                <Box display="flex" flexDirection="row" width="100%">
                    <Tooltip title={productItem.title}>
                            <Typography gutterBottom variant="p" component="div" sx={{fontSize: 14}}>
                            {productItem.title}
                            </Typography>
                    </Tooltip>
                    <Divider />
                        <Tooltip title={productItem.title}>
                        <Button size="small">Read More</Button>
                    </Tooltip>
                    <Box>
                        <Typography>
                        Price: ${productItem.price}
                        </Typography>
                     </Box>
                </Box>
               
            )})}
    </>
    )

}

export default BasketCard;