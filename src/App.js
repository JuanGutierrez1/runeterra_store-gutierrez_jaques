import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailConatiner from './components/ItemDetailContainer';

function App() {
  return (
    <>
    <NavBar 
      list={[{title: 'Inicio'}, {title: 'Categorias'}, {title: 'Vender'}, {title: 'Ofertas'}]}
      brand="Runeterra Store"
    />
    <ItemListContainer/>
    <ItemDetailConatiner/>
    </>
  );
}

export default App;
