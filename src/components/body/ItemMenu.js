import React from "react";
import { Col } from "react-bootstrap";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from "reactstrap";
import { base_url } from "../../redux/actTypes";
import "../../StyleSheets/ItemMenu.css";

const ItemMenu = props => {
    // console.log("itemMenu", props);
    return (
        <Col xxl={3} xl={4} lg={6} className="my-cards">{/*xs={12} sm={12*/}
            <Card onClick={() => props.onDishSelect(props.dish)} className="my-5 p-1 shadow" style={{ cursor: "pointer" }}>
                <CardBody>
                    <CardImg
                        width="100%"
                        alt={props.dish.name}
                        src={props.axios ? base_url + props.dish.image : props.dish.image}
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