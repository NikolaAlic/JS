import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './app/Home';
import NotFound from './app/NotFound';
import Header from './app/partials/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
// import AddStudent from './app/AddStudent';
import AddCourse from './app/AddCourse';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container mt-3">
          <Switch>
            <Route path="/home" component={Home}></Route>
            {/* <Route path="/add-student" component={AddStudent} />
            <Route path="/edit-student/:id" component={AddStudent} /> */}
            <Route path="/add-course" component={AddCourse} />
            <Route path="/edit-course/:id" component={AddCourse} />
            <Redirect from="/" to="/home"></Redirect>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>)
}

export default App;
