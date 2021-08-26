import { Fragment, useEffect, useState } from 'react';
import './App.css';
import { UserCards } from './user/UserCards';
import Header from "./partials/Header"
import Footer from "./partials/Footer"
import { User } from '../entities/user';
import React from 'react';

const Home = () => {
    const [data, setData] = useState();
  const [dataCopy, setCopy]=useState()
  const fetchData = () =>
    fetch('https://randomuser.me/api/?results=15').then(response => {
      return response.json();
    }).then(response => {
      let userData = response.results.map(user => new User(`${user.name.first} ${user.name.last}`, user.email, user.dob, user.picture));
      setData(userData);
      setCopy(userData);
    })

  useEffect(() => {
    fetchData();
  }, []);

  const refresh = () => {
    fetchData();
  }

  const filterList = (event) => {
    
    let filtered = [];
    if(event.target.value) {
      filtered = dataCopy.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase()));
    } else {
      filtered = dataCopy;
    }
    setData(filtered);
  }

  return (
    <Fragment>
      <Header title="React Users" />
      <button onClick={refresh}>Refresh</button>
      <input type="text" onChange={filterList} placeholder="Search users by name" />
      <UserCards data={data} />
      <Footer />
    </Fragment>
  )
}

export default Home;