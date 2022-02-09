import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar'

//Views
import ItemListContainer from './components/ItemListContainer';
import ItemDetailConatiner from './components/ItemDetailContainer';

function App() {
  return (
    <>
    <Router>
      <NavBar 
        list={[{id:1, title: 'Guerrero'}, {id:2, title: 'Mago'}, {id:3, title: 'Tanque'}]}
        brand="Runeterra Store"
      />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailConatiner />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
