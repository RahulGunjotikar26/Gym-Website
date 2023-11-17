import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom"

let Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav>
                            <div className="logo">NavBar</div>
                            <div className="content">
                                <ul>
                                    <li>
                                        <Link to="home">Home</Link>
                                    </li>

                                    <li>
                                        <Link to="about">About Us</Link>
                                    </li>

                                    <li>
                                        <Link to="member">Membership</Link>
                                    </li>

                                    <li>
                                        <Link to="contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;