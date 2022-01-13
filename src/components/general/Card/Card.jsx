import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function MediaCard() {
    const [storeItems, setStoreItems] = React.useState([]);
    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products/').then(res=>res.json()).then(res => setStoreItems(res))
    }, [])
    console.log(storeItems)
    
    return (
    <Grid item xs={6}>
    {storeItems.map(storeItem => {
        return ( 
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
        component="img"
        height="140"
        src={storeItem.image}
        alt="green iguana"
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {storeItem.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {storeItem.description}
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
