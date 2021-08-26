import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import About from "./About";
import Home from "./Home";
import NotFound from "./NotFound";
const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about/:title" component={About} />
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  )
}

export default App;