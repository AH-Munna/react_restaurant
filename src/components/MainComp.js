import React from "react";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function MainComp() {
    return (
        <div>
            <h1 className='text-info text-center display-4 fw-bold mt-5'>React Restaurant</h1><hr className='mb-5 shadow' />
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default MainComp;