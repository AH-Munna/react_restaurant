import React, { Component } from "react";
import Foods from "../../data/Foods";
import DishDetail from "./DishDetail";
import ItemMenu from "./ItemMenu";

class Menu extends Component {
    state = {
        foods: Foods,
        selectedDish: null,
    }

    onDishSelect = dish => {
        this.setState({
            selectedDish: dish,
        });
    }

    render() {
        const menu = this.state.foods.map(item => {
            return (
                <ItemMenu
                    dish={item}
                    key={item.id}
                    onDishSelect={this.onDishSelect} />
            );
        })

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            dishDetail = <DishDetail dish={this.state.selectedDish} />
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        {menu}
                    </div>
                    <div className="col-md-8">
                        <div
                            //style={{ position: "fixed", width: "50%" }}
                            className="sticky-top">
                            {dishDetail}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Menu;