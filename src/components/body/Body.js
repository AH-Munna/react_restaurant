import React from "react";
import Menu from "./Menu";

const Body = () => {
    return (
        <div>
            <h1 className='text-info text-center display-4 fw-bold mt-5'>Food Options</h1><hr className='mb-5 shadow' />
            <Menu />
        </div>
    );
}

export default Body;