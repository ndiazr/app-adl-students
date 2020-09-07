import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/home';
import NewStudent from './pages/new-student';
import EditStudent from './pages/edit-student';
import Error404 from './pages/error';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/new-student"} className="nav-link">
                Agregar Estudiante
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/new-student" exact component={NewStudent} />
            <Route path="/student/:id" exact component={EditStudent} />
            <Route path="*" component={Error404} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
