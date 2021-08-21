import React, {Component} from 'react';

export class LifeCycleB extends Component {
    constructor(props) {
        super(props);
        console.log("B constructor");
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log("B getDerivedStateFromProps");
    //     return null;
    // }

    render() {
        console.log("B render");
        return (<h2>Component B</h2>)
    }

    componentDidMount() {
        console.log("B componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("B shouldComponentUpdate");
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("B componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("B componentWillUnmount")
    }
}