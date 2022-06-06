import React from "react";
import Body from "./body/Body";
import FooterControl from "./footer/FooterControl";
import Header from "./header/Header";

function MainComp() {
    return (
        <div>
            <Header />
            <div className="container">
                <Body />
            </div>
            <FooterControl />
        </div>
    );
}

export default MainComp;