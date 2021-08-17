import React, {Component} from 'react';

export class LifeCycleB extends Component {
    constructor(props) {
        super(props);
        console.log("B constructor");
    }

    render() {
        console.log("B render");
        return <h1>Component B</h1>;
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log("B getDerivedStateFromProps");
    //     return null;
    // }

    componentDidMount() {
        console.log("B componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('B shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(props, state) {
        console.log('B componentDidUpdate')
    }

    componentWillUnmount() {
        console.log("B componentWillUnmount")
    }
}