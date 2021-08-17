import { Fragment } from 'react';
import './App.css';
import { UserCards } from './user/UserCards';
import Header from "./partials/Header"
import Footer from "./partials/Footer"
import { User } from '../entities/user';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    }
  }

  render() {
    return (
      <Fragment>
        <Header title="React Users" />
        <UserCards data={ this.state.data } />
        <Footer />
      </Fragment>
    )
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=15').then(response=> {
      return response.json();
    }).then(response=> {
      let userData = response.results.map(user=> new User(`${user.name.first} ${user.name.last}`, user.email, user.dob, user.picture));
      this.setState({data: userData});
    });
  }
}

export default App;