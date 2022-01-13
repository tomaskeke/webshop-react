import { useEffect } from 'react'
import { Paper } from '@mui/material'

const MensClothing = () => {
    useEffect(() => {
    fetch(fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
    .then(res=>res.json())
    .then(json=>console.log(json)))
    })
    return(
        <Paper>
        
        </Paper>
    )
}

export default MensClothing