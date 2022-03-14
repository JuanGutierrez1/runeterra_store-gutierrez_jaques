import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const initialState = {
	name: '',
	phone: '',
	email: '',
};

const Checkout = () =>{
  let navigate = useNavigate()
  const cartContext = useCart();
  const [buyer, setBuyer] = useState(initialState)
  const [orden, setOrden] = useState('')
  const [emailConfirmado, setEmailConfirmado] = useState('')

  const formularioCompleto = () =>{
    return (
      buyer.name !== '' &&
      buyer.phone !== '' &&
      buyer.email !== '' &&
      emailConfirmado !== '' && 
      emailConfirmado === buyer.email
    )
  }

  const handleOnChange = (e) => {
		const { value, name } = e.target;
		setBuyer({ ...buyer, [name]: value });
	};
  const finalizarCompra = async () =>{
      const values = {buyer: buyer, items: cartContext.cart.addedItems.map(el => {return {id:el.id, title:el.title, price:el.price}}) , date: new Date(), total: cartContext.cart.totalPrice}
      const docRef = await addDoc(collection(db, 'orders'), {
      	values,
      });
      setOrden(docRef.id)
      setBuyer(initialState)
      cartContext.clear()
  }
  return(
    <Box display="flex" justifyContent="center">
      <Box display="flex" alignItems='center' gap={2} m={4} p={3} width="60%" flexDirection={"column"} boxShadow={3}>
        {!orden ? (<>
        <Typography variant="h3">CHECKOUT</Typography>
        <TextField value={buyer.name} label="Nombre" name='name' onChange={handleOnChange} type="text"/>
        <TextField value={buyer.phone} label="Telefono" name='phone' onChange={handleOnChange} type="number"/>
        <TextField value={buyer.email} label="Email" name='email' onChange={handleOnChange} type="text"/>
        <TextField value={emailConfirmado} label="Confirmar email" name='confirm-email' onChange={(e) => setEmailConfirmado(e.target.value)} type="email"/>
        {emailConfirmado !== '' && emailConfirmado !== buyer.email ? (<Typography variant="h6" color={'red'}>No coinciden los email</Typography>) : null}
        <Button variant="contained" disabled={!formularioCompleto()} onClick={finalizarCompra}>Finalizar compra</Button></>)
        : <>
        <Typography variant="h4">Gracias por su compra.</Typography>
        <Typography variant="h4">Nro de orden: {orden}</Typography>
        <Button variant="contained" onClick={() => navigate('/')}>Volver al inicio</Button>
        </>}
      </Box>
    </Box>
  )
}

export default Checkout