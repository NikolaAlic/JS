import React, { Component } from 'react';
import { LifeCycleB } from './LifeCycleB.js';

export class LifeCycleA extends Component {
    constructor(props) {
        super(props);
        console.log("A constructor");
        this.state = {
            name: "Nikola"
        }
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log("A getDerivedStateFromProps");
    //     return null;
    // }

    changeName = ()=> {
        this.setState({name:"Nikola Alic"});
    }

    render() {
        console.log("A render");
        let component = <LifeCycleB />
        if(this.state.name !="Nikola") {
            component = <h1>{this.state.name}</h1>;
        }

        return (<div>
            <button onClick={this.changeName}>Change name</button>
            <input type="text" value={this.state.name} onChange={this.changeInput}/>
            <h1>Component A</h1>
            {component}
        </div>)
    }

    changeInput = (event) => {
        this.setState({name:event.target.value});
    }

    componentDidMount() {
        console.log("A componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState);
        console.log('A shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(props, state) {
        console.log(state);
        console.log(this.state);
        console.log('A componentDidUpdate')
    }
}