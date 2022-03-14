import React, { useState } from 'react';
import {Box, Button, IconButton, Typography} from '@mui/material';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';

const ItemCount = ({initial, stock, onAdd}) => {
  const [cant, setCant] = useState(initial);
  const [nuevoStock, setNuevoStock] = useState(stock)
  
  const handleButton = (val) => {
    setCant(cant + val)
  }

  const handleBuy = () => {
    setCant(stock - cant)
    setNuevoStock(stock - cant)
    onAdd(cant)
  }
  return nuevoStock ? (
    <Box justifyContent= {'center'} display= {'flex'} alignItems={'center'} gap={2} >
      <IconButton disabled={cant <= 1} onClick={() => {handleButton(-1)}}>
        <RemoveSharpIcon/>
      </IconButton>
      {cant}
      <IconButton disabled={cant >= stock} onClick={() => {handleButton(1)}}>
        <AddSharpIcon/>
      </IconButton>
      <Button variant="contained" onClick={handleBuy} sx={{m:1}}>Añadir al carrito</Button>
    </Box>
  ) : ( <Typography sx={{mr: 4}} color={'red'}>Sin stock</Typography>)
}

export default ItemCount