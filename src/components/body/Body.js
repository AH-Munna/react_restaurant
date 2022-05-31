import React from "react";
import { Navigate, Route, Routes } from "react-router";
import About from "./About";
import Menu from "./Menu";
import Contact from "./Contact";
import Home from "./Home";


const Body = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Navigate replace to="/home" />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/menu" element={<Menu />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default Body;