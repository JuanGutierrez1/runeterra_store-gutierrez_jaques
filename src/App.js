import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  let items = {
    title:"Anillo de Doran", 
    text:"Da mana y poder de habilidad", 
    src:'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfeb794f72ab86ce5/5fa1ef94fe49b57a83a1717c/1056_Mage_T1_DoransRing.png'
  }
  return (
    <>
    <NavBar 
      list={[{title: 'Inicio'}, {title: 'Categorias'}, {title: 'Vender'}, {title: 'Ofertas'}]}
      brand="Runeterra Store"
    />
    <ItemListContainer items={items}/>
    </>
  );
}

export default App;
