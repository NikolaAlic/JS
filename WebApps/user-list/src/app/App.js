import { Fragment } from 'react';
import './App.css';
import { UserCards } from './user/UserCards';
import Header from "./partials/Header"
import Footer from "./partials/Footer"
import { getUsers } from '../services/user.service';

const usersData = getUsers();
const App = (props) => {
  return (
    <Fragment>
      <Header title="React Users" />
      <UserCards data={ usersData } />
      <Footer />
    </Fragment>
  )
}

export default App;