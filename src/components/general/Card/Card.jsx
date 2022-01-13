import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import { BasketContext } from '../../../Context/BasketContext'



export default function MediaCard() {

    const { basket, setBasket } = useContext(BasketContext);
    
    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products/').then(res=>res.json()).then(res => setBasket(res))
    }, [])
    console.log(basket)
    
    return (
    <Grid item xs={6}>
    {basket.map(basketItem => {
        return ( 
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
        component="img"
        height="140"
        src={basketItem.image}
        alt="green iguana"
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {basketItem.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {basketItem.description}
        </Typography>
    </CardContent>
    <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
    </CardActions>
    </Card>
 )})}
 </Grid>
     )
}
