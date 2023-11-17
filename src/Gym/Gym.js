import React from "react";
import "./Gym.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import AboutUs from "./Component/About Us";
import Contact from "./Component/Contact";
import Member from "./Component/Member";
import Navbar from "./Navbar";


let Gym = () => {

    return (
        <div>
            <BrowserRouter>
                <div className="bg">
                <Navbar />
                <Routes>
                    <Route path="home" Component={Home} />
                    <Route path="about" Component={AboutUs} />
                    <Route path="member" Component={Member} />
                    <Route path="contact" Component={Contact} />
                </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Gym;