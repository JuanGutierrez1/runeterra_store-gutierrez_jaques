import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar'

//Views
import ItemListContainer from './views/ItemListContainer';
import ItemDetailConatiner from './views/ItemDetailContainer';
import Cart from './views/Cart';

//Context
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <>
    <CartProvider>
      <Router>
        <NavBar 
          list={[{id:1, title: 'Guerrero'}, {id:2, title: 'Mago'}, {id:3, title: 'Tanque'}]}
          brand="Runeterra Store"
        />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailConatiner />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
    </>
  );
}

export default App;
