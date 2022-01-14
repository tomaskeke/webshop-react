import { useEffect, useContext } from 'react'
import { Paper } from '@mui/material'
import { ProductContext } from '../../../Context/ProductContext'
import Card from '../../general/Card/Card'


const Jewelery = () => {
    const { products, setProducts } = useContext(ProductContext)
    useEffect(() => {
    setProducts([]);
    fetch(`https://fakestoreapi.com/products/category/jewelery`)
    .then(res=>res.json())
    .then(res => setProducts(res))
    }, [])
    return(
        <Card key={products.id} />
    )
}

export default Jewelery;