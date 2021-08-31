import React from "react"
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/home" className="nav-link">
                        Home
                    </Link>
                </li>
                {/* <li className="nav-item">
                    <Link to="/add-student" className="nav-link">
                        Add Student
                    </Link>
                </li> */}
                <li className="nav-item">
                    <Link to="/add-course" className="nav-link">
                        Add Course
                    </Link>
                </li>
            </div>
        </nav>)
}

export default Header;