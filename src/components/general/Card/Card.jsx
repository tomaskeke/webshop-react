import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import { ProductContext } from '../../../Context/ProductContext'



export default function MediaCard() {

    const { products, setProducts } = useContext(ProductContext);
    
    // React.useEffect(() => {
    //     fetch('https://fakestoreapi.com/products/').then(res=>res.json()).then(res => setProducts(res))
    // }, [])
    return (
        <>
            {products.map(productItem => {
                return ( 
                    <Card variant="outlined" sx={{ maxWidth: 345, height: '400px'}} key={productItem.id}>
                    <CardMedia
                        component="img"
                        height="140"
                        src={productItem.image}
                        alt="green iguana"
                    />
                    <CardContent sx={{height: '200px', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                        <Typography gutterBottom variant="h6" component="div">
                        {productItem.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {productItem.description}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-between' }}>
                        <Button size="small">Read More</Button>
                        <Button size="small" color='success' variant="contained">Buy</Button>
                    </CardActions>
                    </Card>
                )})}
        </>
    )
}
