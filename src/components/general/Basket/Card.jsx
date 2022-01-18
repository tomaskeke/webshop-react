import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { useContext } from 'react';
import { ProductContext } from '../../../Context/ProductContext'
import { BasketContext } from '../../../Context/BasketContext'


export default function MediaCard() {

    const { products, setProducts } = useContext(ProductContext);
    const { basket, setBasket } = useContext(BasketContext);

    console.log(basket)
    return (
        <>
            {products.map(productItem => {
                return ( 
                    <Card variant="outlined" sx={{ maxWidth: 200, height: '300px'}} key={productItem.id}>
                    <CardMedia
                        component="img"
                        height="100"
                        src={productItem.image}
                        alt="green iguana"
                    />
                    <Tooltip title={productItem.title}>
                    <CardContent sx={{maxHeight: '100px', width: '200px', overflow: 'hidden'}}>
                        <Typography gutterBottom variant="p" component="div" width="" sx={{width: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                        {productItem.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{width: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                        {productItem.description}
                        </Typography>
                    </CardContent>
                    </Tooltip>
                    <Divider />
                    <CardActions sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} >
                    <Typography variant="body2" color="text.secondary">
                            Rating: {productItem.rating.rate}
                    </Typography>
                    <Box>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.1} value={productItem.rating.rate} readOnly />
                    <Divider />
                    </Box>
                    </CardActions>
                    <Tooltip title={productItem.title}>
                    <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}  >
                    <Button size="small">Read More</Button>
                    <Button size="small" color='success' variant="contained" onClick={() => setBasket([...basket, productItem])}>Buy</Button>
                    </CardActions>
                    </Tooltip>
                    </Card>
                )})}
        </>
    )
}
