import React from "react"
import { Link } from "react-router-dom"
const NotFound = () => {
    return (
        <div>
            <div>Route not found</div>
            <Link to="/home">Return to Home page</Link>
        </div>
    )
}

export default NotFound;