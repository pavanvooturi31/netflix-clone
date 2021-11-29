import React, { useState, useEffect } from 'react'
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);



    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className = "nav__logo"
            src = "https://variety.com/wp-content/uploads/2019/02/netflix-logo-originals.jpg?w=640"
            alt = "Netflix Logo"

            />

            <img
            className = "nav__avatar"
            src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt= "Netflix Logo"

            />

            
        </div>
    )
}

export default Nav
