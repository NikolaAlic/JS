import React, { Fragment } from "react";
import AboutContent from "./partials/AboutContent";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

const About = (props) => {
    return (
        <Fragment>
            <Header />
            <AboutContent title={props.match.params.title} />
            <Footer />
        </Fragment>
    )
}

export default About;