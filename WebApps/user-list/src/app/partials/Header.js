  
import React from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const Header = (props) => {
    const { title } = props;
    return (
        <nav>
            <div className="nav-wrapper">
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to="/about/About">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
Header.defaultProps = {
    title: "My App"
}

export default Header;