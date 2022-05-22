import React from "react";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <div>
            <NavBar />
            <h1 className='text-info text-center display-4 fw-bold mt-5'>React Restaurant</h1><hr className='mb-5 shadow' />
        </div>
    );
}

export default Header;