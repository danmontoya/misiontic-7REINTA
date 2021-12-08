import './App.css';
import { Cabecera } from './components/Cabecera';
import {  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Proyecto } from './components/Proyecto';
import { LoginUsers } from './components/LoginUsers';
import { RegistrarUser } from './components/RegistrarUser';
import ban from './imgs/banner.jpeg';
import { ListaProyectos } from './components/ListaProyectos';
import { VistaAdmiUsers } from './components/VistaAdmiUsers';
import { Perfil } from './components/Perfil';

function App() {
  return (
    <div className="App">
      <Router>
        <Cabecera />
        <div className="d-flex justify-content-center" >
        <img src={ban} className="img-fluid" alt="banner"/>
        </div>
        <Switch>
          <Route path="/crearproyecto" component={Proyecto}/>
          <Route path="/ingresar" component={LoginUsers}/>
          <Route path="/registrar" component={RegistrarUser}/>
          <Route path="/listaProyectos" component={ListaProyectos}/>
          <Route path="/usersList" component={VistaAdmiUsers}/>
          <Route path="/perfil" component={Perfil}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
