import { useState, createContext, useContext } from "react";
import ItemList from "../components/ItemList";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const INITIAL_STATE = {
  addedItems: [],
  totalPrice: 0
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(INITIAL_STATE);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      // ya existe el item, entonces agrego la nueva cantidad y actualizo el precio total
      const itemActual = cart.addedItems.find(itemActual => itemActual.id === item.id)
      let newItems =cart.addedItems.filter(itemActual => itemActual.id !== item.id)
      newItems.push({...item, quantity: item.quantity + itemActual.quantity})
      const newTotalPrice = cart.totalPrice + item.price * item.quantity
      setCart({ ...cart, addedItems: newItems, totalPrice: newTotalPrice} );
      return;
    }
    const newItems = [...cart.addedItems, item]
    const newTotalPrice = cart.totalPrice + item.price * item.quantity
    setCart({ ...cart, addedItems: newItems, totalPrice: newTotalPrice} );
  };

  const isInCart = (id) => {
    return cart.addedItems.some((addedItem) => addedItem.id === id)
  }

  const removeItem = (itemId) => {
    const removedItemList = cart.addedItems.filter(item => item.id !== itemId)
    const removedItem = cart.addedItems.find(item => item.id === itemId)
    const newTotalPrice = cart.totalPrice - removedItem.price * removedItem.quantity
    setCart({...cart, addedItems: removedItemList, totalPrice: newTotalPrice})
  }

  const clear = () => {
    setCart(INITIAL_STATE);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, clear, isInCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};