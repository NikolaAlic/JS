import { Link } from "react-router-dom";
import React from "react";

const NotFound = () => {
    return (<div><h1>ERROR 404</h1>
    <p><Link to="/home">Return to Home page</Link></p>
    </div>)
}

export default NotFound;