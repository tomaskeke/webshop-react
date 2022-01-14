import { useEffect, useContext } from 'react'
import { Box, Grid } from '@mui/material'
import { ProductContext } from '../../../Context/ProductContext'
import Card from '../../general/Card/Card'


const MensClothing = () => {
    const { products, setProducts } = useContext(ProductContext)
    useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
    .then(res=>res.json())
    .then(res => setProducts(res))
    }, [])
    return(
        <Box sx={{ flexGrow: 1}} display="flex" justifyContent="center" alignItems="center" >
        <Grid container spacing={1} xl={8}>
            <Grid container item spacing={3} gap={2} justifyContent="center" alignItems="center">
                <Card key={products.id} />
            </Grid>
            </Grid>
        </Box>
    )
}

export default MensClothing