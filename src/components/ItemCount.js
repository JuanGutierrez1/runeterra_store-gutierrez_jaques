import React, { useState } from 'react';
import {Box, Button, IconButton} from '@mui/material';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';

const ItemCount = ({initial, stock, onAdd}) => {
  const [cant, setCant] = useState(initial);
  
  const handleButton = (val) => {
    setCant(cant + val)
  }

  const handleBuy = () => {
    onAdd(cant)
    
  }
  return (
    <Box justifyContent= {'center'} display= {'flex'} alignItems={'center'} gap={2} >
      <IconButton disabled={cant <= 0} onClick={() => {handleButton(-1)}}>
        <RemoveSharpIcon/>
      </IconButton>
      {cant}
      <IconButton disabled={cant >= stock} onClick={() => {handleButton(1)}}>
        <AddSharpIcon/>
      </IconButton>
      <Button variant="contained" onClick={handleBuy} sx={{m:1}}>Añadir al carrito</Button>
    </Box>
  );
}

export default ItemCount