import React from "react"
import './Navbar.css'

const Navbar = (props) => {
    return (
        <nav className="Navbar">
            <a href="Home">Home</a>
            <a href="Lesson">Lesson</a>
            <a href="Messages">Messages</a>
            <a href="Notes">Notes</a>
        </nav>
    );
}

export default Navbar;