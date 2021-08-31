import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './app/partials/Header';
import Home from './app/Home';
import AddCourse from './app/AddCourse';
import NotFound from './app/NotFound';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container mt-3">
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/add-course" component={AddCourse}></Route>
            <Route path="/edit-course/:id" component={AddCourse}></Route>
            <Redirect from="/" to="/home"></Redirect>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
