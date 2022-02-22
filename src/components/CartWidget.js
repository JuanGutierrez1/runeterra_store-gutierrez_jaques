import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCart } from "../contexts/CartContext";

const CartWidget = () => {
  const cartContext = useCart();
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    let acumulador = 0
    const reduceItems = cartContext.cart.addedItems.reduce((previo, actual) => previo + actual.quantity, acumulador)
    setTotalItems(reduceItems)
  }, [cartContext.cart.addedItems])

  return (
    totalItems > 0 &&
    <>
      {totalItems}
      <ShoppingCartOutlinedIcon />
    </>

  )
}

export default CartWidget