import React, { Fragment } from "react";
import AboutContent from "./partials/AboutContent";
import Header from './partials/Header';
import Footer from './partials/Footer';

const About = (props) => {
    return (<Fragment>
        <Header />
        <AboutContent title={props.match.params.title}/>
        <Footer/>
    </Fragment>)
}

export default About;