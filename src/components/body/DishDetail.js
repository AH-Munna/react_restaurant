import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import LoadComments from "./LoadComments";

class DishDetail extends Component {
    render() {
        const allComments = this.props.dish.comments.map(item => {
            return (
                <LoadComments
                    commentObj={item}
                    key={item.id} />
            );
        })

        //console.log(allComments);

        return (
            <div>
                <Card className="p-2">
                    <CardImg
                        top
                        src={this.props.dish.image}
                        alt={this.props.dish.name} />
                    <CardBody style={{ textAlign: "left" }}>
                        <CardTitle className="fw-b fs-4">{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText><br />
                        <CardText className="text-warning fs-5">Price: &#2547;{this.props.dish.price}</CardText>
                    </CardBody>
                </Card>
                <Card className="p-2 my-5">
                    <CardTitle className="display-6 text-center text-info mt-4">Comments</CardTitle>
                    <CardBody style={{ textAlign: "left" }}>
                        {allComments}
                    </CardBody>
                </Card>
            </div>
        );
    };
}

export default DishDetail;