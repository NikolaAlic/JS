import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Footer from './partials/Footer'
import Header from './partials/Header'

const NotFound = () => {
    return (
        <Fragment>
            <Header title="React Users" showNav={false} />
            <div>
                <h1>Page not found</h1>
                <Link to="/home">Return to home</Link>
            </div>
            <Footer />
        </Fragment>
    )
}

export default NotFound;