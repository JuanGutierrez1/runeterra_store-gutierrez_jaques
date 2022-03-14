import { Box, Grid, Typography, Button } from "@mui/material"
import ItemCount from './ItemCount'
import { useNavigate } from "react-router-dom"
import { useCart } from "../contexts/CartContext";
import { useState } from "react";

const ItemDetail = ({item}) => {
  const cart = useCart();
  const navigate = useNavigate()
  const [stock, setStock] = useState(Math.floor(Math.random() * 3) + 5)
  const onAdd = (quantity) =>{
    cart.addItem({...item, quantity:quantity})
    setStock(stock - quantity)
  }

  return(
    <Box sx={{width: '50%', boxShadow: 3, m: 5}}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img src={item.pictureUrl} alt={item.title} width={200}/> 
        </Grid>
        <Grid container item xs={8}>
          <Grid item xs={12}>
            <Typography variant="h4">
              {item.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {item.description}
          </Grid>
          <Grid item xs={12} sx={{display: 'flex', alignItems: 'center'}} >
            <Typography variant="h4" sx={{flexGrow: 1}}>
            ${item.price}
            </Typography>
            <ItemCount onAdd={onAdd} initial={1} stock={stock}/>
          </Grid>
        </Grid>
        <Grid xs={12} item sx={{display:'flex', justifyContent:'flex-end'}}>
          <Button variant="outlined" onClick={() => navigate(-1)} sx={{m:1}}>Volver</Button>
          <Button variant="contained" onClick={() => navigate('/cart')} sx={{m:1}}>Terminar compra</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ItemDetail