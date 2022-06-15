import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import { base_url } from "../../redux/actTypes";
import LoadComments from "./LoadComments";
import PageLoad from "./PageLoad";

const mapStateToProps = state => {
    return {
        state: state.myReducer,
    }
}

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: props.state.comments,
        }
    }


    render() {
        //console.log("dishdetail render", this.props.comments);
        // const allComments = this.state.comments.map(comment => {
        //     if (this.props.dish.id === comment.dishId) {
        //         return (
        //             <LoadComments commentObj={comment} key={comment.id} noComment={false} />
        //         );
        //     }
        //     return (<LoadComments noComment={true} key={comment.id} />);
        // });
        let allComments = null;
        if (!this.props.isLoading) {
            allComments = this.props.comments.map(comment => {
                return (
                    <LoadComments key={comment.id} commentObj={comment} />
                )
            })
        }

        //console.log(this.props.comments);

        return (
            <div>
                <Card className="p-2">
                    <CardImg
                        top
                        src={this.props.axios ? base_url + this.props.dish.image : this.props.dish.image}
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
                        {this.props.isLoading ? <PageLoad /> : allComments}
                    </CardBody>
                </Card>
            </div>
        );
    };
}

export default connect(mapStateToProps)(DishDetail);