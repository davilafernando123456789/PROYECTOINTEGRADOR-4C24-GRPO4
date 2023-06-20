import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';
import Menu from './components/Menu';
import Usuario from './components/Usuario';
import Administrador from './components/Administrador';
import Profesor from './components/Profesor';
import Curso from './components/Curso';

const App = () => {
  const [adminName, setAdminName] = useState('');

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login setAdminName={setAdminName} />
          </Route>
          <Route path="/menu">
            {adminName ? <Menu adminName={adminName} /> : <Redirect to="/" />}
          </Route>
          <Route path="/usuarios" render={() => <Menu content={<Usuario />} adminName={adminName} />} />
          <Route path="/administradores" render={() => <Menu content={<Administrador />} adminName={adminName} />} />
          <Route path="/profesores" render={() => <Menu content={<Profesor />} adminName={adminName} />} />
          <Route path="/cursos" render={() => <Menu content={<Curso />} adminName={adminName} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
