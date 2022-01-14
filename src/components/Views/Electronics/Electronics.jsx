import { useEffect, useContext } from 'react'
import { Paper } from '@mui/material'
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
        <Card key={products.id} />
    )
}

export default Electronics;