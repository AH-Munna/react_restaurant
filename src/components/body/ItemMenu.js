import React from "react";
import { Col } from "react-bootstrap";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from "reactstrap";
import "../../StyleSheets/ItemMenu.css";

const ItemMenu = props => {
    return (
        <Col xl={3} lg={4} md={6} className="my-cards">{/*xs={12} sm={12*/}
            <Card onClick={() => props.onDishSelect(props.dish)} className="my-5 p-1 shadow" style={{ cursor: "pointer" }}>
                <CardBody>
                    <CardImg
                        width="100%"
                        alt={props.dish.name}
                        src={props.dish.image}
                    //style={}
                    />
                </CardBody>
                <CardImgOverlay className="text-white fs-4">
                    <CardTitle
                        className="shadow bg-dark bg-opacity-50 m-1">{props.dish.name}
                    </CardTitle>
                </CardImgOverlay>
                <CardText className="text-success fw-b fs-5 pb-3">Price: &#2547;{props.dish.price}</CardText>
            </Card>
        </Col>
    );
}

export default ItemMenu;