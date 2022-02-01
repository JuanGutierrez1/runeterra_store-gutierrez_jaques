import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <NavBar 
      list={[{title: 'Inicio'}, {title: 'Categorias'}, {title: 'Vender'}, {title: 'Ofertas'}]}
      brand="Runeterra Store"
    />
    <ItemListContainer/>
    </>
  );
}

export default App;
