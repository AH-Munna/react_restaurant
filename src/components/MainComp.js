import React from "react";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function MainComp() {
    return (
        <div>
            <Header />
            <div className="container">
                <Body />
            </div>
            <Footer />
        </div>
    );
}

export default MainComp;