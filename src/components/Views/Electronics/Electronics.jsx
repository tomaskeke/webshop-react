import { useEffect, useContext } from 'react'
import { Paper, Box, Grid } from '@mui/material'
import { ProductContext } from '../../../Context/ProductContext'
import Card from '../../general/Card/Card'


const Electronics = () => {
    const { products, setProducts } = useContext(ProductContext)
    useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/electronics`)
    .then(res=>res.json())
    .then(res => setProducts(res))
    }, [])
    return(
        <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={1}>
            <Grid container item spacing={3} gap={2} justifyContent="center" alignItems="center">
                <Card key={products.id} />
            </Grid>
            </Grid>
        </Box>
    )
}

export default Electronics;