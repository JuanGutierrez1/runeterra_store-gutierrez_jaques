import { Box, Typography, IconButton, Button } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () =>{
  let navigate = useNavigate()
  const cartContext = useCart();
  const deleteItem = (idItem) =>{
    cartContext.removeItem(idItem)
  }

  const continuarCompra = () =>{
    navigate('/checkout')
  }
  return(
    <Box display={'flex'} flexDirection={'column'} m={4} gap={5} p={2} boxShadow={3}>
      <Typography variant="h3" sx={{display:'flex', justifyContent:'center'}}>
        Carrito
      </Typography>
      {cartContext.cart.addedItems.length > 0 ? cartContext.cart.addedItems.map(item =>
        <Box display={'flex'} key={item.id} justifyContent='center' gap={2}>
          <img src={item.pictureUrl} alt={item.title} width={100} height={100}/>
          <Box display={'flex'} gap={10}>
            <Box display={'flex'} gap={2} flexDirection={'column'}>
              <Typography variant="h4">
                {item.title}
              </Typography>
              <Typography>
                Cantidad:{item.quantity}
              </Typography>
            </Box>
            <Typography variant="h4">
              {item.price} $
            </Typography>
            <IconButton sx={{heigth: '20px'}} onClick={() => deleteItem(item.id)}>
              <DeleteOutlineIcon/>
            </IconButton>
          </Box>
        </Box>
      )
      : <Typography sx={{display:'flex', justifyContent:'center'}} variant="h4">
        No se han añadido items al carrito. <a  onClick={() => navigate("/")} href="#">Volver al Inicio</a>
      </Typography>}
      {cartContext.cart.addedItems.length > 0 ? (
        <>
          <Typography variant="h5" sx={{display:'flex', justifyContent:'center'}}>Total: ${cartContext.cart.totalPrice}</Typography> 
          <Box display="flex" justifyContent="center">
            <Button variant="contained" onClick={continuarCompra}>Continuar con el pago</Button>
          </Box>
        </>
      ): null}
    </Box>
  )
}

export default Cart