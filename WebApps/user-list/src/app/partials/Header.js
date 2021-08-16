  
import React from "react";
import PropTypes from "prop-types"

const Header = (props) => {
    const { title } = props;
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="index.html" className="brand-logo center">{title}</a>
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