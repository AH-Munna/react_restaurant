import React, { Component } from "react";

class About extends Component {
    render() {
        document.title = "About Us";
        return (
            <>
                <h1 className="display-4 text-info fw-bold my-5">About page</h1>
            </>
        );
    }
}

export default About;