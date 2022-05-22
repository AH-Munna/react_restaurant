import React, { Component } from "react";
import Foods from "../../data/Foods";
import ItemMenu from "./ItemMenu";

class Menu extends Component {
    state = {
        foods: Foods
    }

    render() {
        const menu = this.state.foods.map(item => {
            return (
                <ItemMenu dish={item} key={item.id} />
            );
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        {menu}
                    </div>
                    <div className="col-md">

                    </div>
                </div>
            </div>
        );
    };
}

export default Menu;