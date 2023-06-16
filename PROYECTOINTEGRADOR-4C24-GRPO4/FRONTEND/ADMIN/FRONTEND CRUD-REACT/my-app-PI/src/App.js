import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';
import Menu from './components/Menu';
import Usuario from './components/Usuario';
import Administrador from './components/Administrador';

const App = () => {
  return (
    <Router> {/* Envuelve todo el contenido con el componente Router */}
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/menu" component={Menu} />
          <Route path="/usuarios" render={() => <Menu content={<Usuario />} />} />
          <Route path="/administradores" render={() => <Menu content={<Administrador />} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
