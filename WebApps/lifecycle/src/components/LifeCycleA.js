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

    changeName = () => {
        this.setState({ name: "Nikola Alic" })
    }

    render() {
        console.log("A render");
        let component = <LifeCycleB />
        if (this.state.name != "Nikola") {
            component = null;
        }

        return (<div>
            <input value={this.state.name} onChange={this.changeInput} />
            <button onClick={this.changeName}>Change name</button>
            <h1>Component A</h1>
            {component}
        </div>)
    }

    changeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    componentDidMount() {
        console.log("A componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("A shouldComponentUpdate");
        console.log(nextState);
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("A componentDidUpdate");
        console.log(`Current: ${this.state.name}; Previous: ${prevState.name}`)

    }

}