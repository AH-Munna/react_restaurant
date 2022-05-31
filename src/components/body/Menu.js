import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Foods from "../../data/Foods";
import ItemMenu from "./ItemMenu";
import DishDetail from "./DishDetail"
import ModalFood from "./ModalFood";
// import ReactModal from 'react-modal';

class Menu extends Component {
    state = {
        foods: Foods,
        selectedDish: null,
        modalToggle: false,
        show: false,
        setShow: false,
    }

    // for Modal
    /*handleClose = () => {
        this.setState({
            setShow: false,
        });
    };
    handleShow = () => {
        this.setState({
            setShow: true,
        });
    }; */

    onDishSelect = dish => {
        this.setState({
            selectedDish: dish,
        });
        this.modalHandler();
    }
    modalHandler = () => {
        this.setState({
            modalToggle: !this.state.modalToggle,
        })
    }

    render() {
        const menu = this.state.foods.map((item, index) => {
            return (
                <ItemMenu
                    dish={item}
                    key={index}
                    // should be key={item.id}
                    onDishSelect={this.onDishSelect}
                    handleShow={this.handleShow} />
            );
        })

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            dishDetail = <DishDetail dish={this.state.selectedDish} />
        }

        return (
            <Container>
                {/* <Button onClick={this.modalHandler2}>Open Test Modal</Button>
                <ReactModal isOpen={this.state.modalToggle2}>
                    <h1>Test Modal</h1>
                </ReactModal> */}
                <ModalFood
                    modalToggle={this.state.modalToggle}
                    dishDetail={dishDetail}
                    modalHandler={this.modalHandler}
                    dish={this.state.selectedDish} />
                <Row>
                    {menu}
                </Row>
            </Container>
        );
    };
}

export default Menu;