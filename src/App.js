import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar'
import { Button } from 'react-bootstrap';

function App() {
  return (
    <>
    <NavBar 
      list={[{title: 'Inicio'}, {title: 'Categorias'}, {title: 'Vender'}, {title: 'Ofertas'}]}
      brand="Runeterra Store"
    />
    <div className="App">
      <label>Holi</label>
    </div>
    </>
  );
}

export default App;
