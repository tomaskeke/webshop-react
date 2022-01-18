import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { BasketContext } from '../../../Context/BasketContext';
import BasketCard from '../../general/Card/BasketCard'
import BasketTable from '../../general/BasketTable/BasketTable'

const Basket = () => {

    const {basket, setBasket, basketOpen, setBasketOpen} = useContext(BasketContext);

    const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    bgcolor: 'background.paper',
    border: '2px solid none',
    borderRadius: '4px',
    boxShadow: 24,
    p: 4,
    };
    
    const handleClose = () => setBasketOpen(false);

    const basketIsOpen = () => {
        return (
            <div>
                <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={basketOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={basketOpen}>
                <Box sx={style}>
                    { basket.length <= 0 ? 'basket is empty!' : <BasketTable /> }
                </Box>
                </Fade>
            </Modal>
            </div>
        )
    }

  return (
    <>
        {basketOpen ? basketIsOpen() : null }
    </>
  );
}

export default Basket;