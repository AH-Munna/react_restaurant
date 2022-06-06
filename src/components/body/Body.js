import React from "react";
import { Navigate, Route, Routes } from "react-router";
import About from "./About";
import Menu from "./Menu";
import Contact from "./Contact";
import Home from "./Home";


const Body = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Navigate replace to="/home" />} />

                {/* from header */}
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/menu" element={<Menu />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />

                {/* from footer */}
                <Route exact path="/contact-ah-munna" element={<Contact />} />
            </Routes>
        </>
    );
}

export default Body;