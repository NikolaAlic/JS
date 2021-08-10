import React from 'react';
import './StateTest.scss';

export class StateTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand:"Opel",
      model:"Corsa C",
      color:"Red",
      year:2004
    }
  }

  render() {
    return(
      <div>
        <h1>My Car: {this.state.brand} - {this.state.model}</h1>
        <h2>Color: {this.state.color}</h2>
        <button onClick={this.changeCar}>Update</button>
      </div>
    )
  }

  changeCar = ()=> {
    this.setState({brand:"Opel", model:"Astra H", color:"Gray"});
  }
}
