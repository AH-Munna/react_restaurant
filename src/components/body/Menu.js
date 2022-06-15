import React from "react";
import { Alert, Container, Row } from "react-bootstrap";
// import Foods from "../../data/Foods";
import ItemMenu from "./ItemMenu";
import DishDetail from "./DishDetail"
import ModalFood from "./ModalFood";
// import COMMENTS from "../../data/Comments";
import { connect } from "react-redux";
import { addJsonComment, AsyncFetchComments, AsyncFetchDishes } from "../../redux/actionCreator";
import PageLoad from "./PageLoad";
// import { addComment } from "../../redux/actionCreator";
// import { ADD_COMMENT } from "../../redux/actTypes";
// import ReactModal from 'react-modal';

const mapStateToProps = state => {
    return {
        foods: state.myReducer.dishes,
        comments: state.myReducer.comments,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addComment: commentObj => {
            return dispatch(addJsonComment(commentObj))
        },
        fetchDishes: () => dispatch(AsyncFetchDishes()),
        fetchComments: () => dispatch(AsyncFetchComments())
    }
}

class Menu extends React.Component {
    state = {
        // foods: Foods,
        // comments: COMMENTS,
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
    componentDidMount() {
        //console.log("componentDidMount", this.props);
        this.props.fetchDishes();
        this.props.fetchComments();
    }

    render() {
        console.log(this.props);
        document.title = "Foods Menu";
        if (this.props.foods.isLoading) {
            return (
                <PageLoad />
            );
        } else if (this.props.foods.errorMessage !== null) {
            return (<Alert key="danger" variant="danger">
                Food menu <b className="warning">Failed</b> to Load from Json server
            </Alert>)
        }
        // console.log("props", this.props);
        const menu = this.props.foods.dishes.map((item, index) => {
            return (
                <ItemMenu
                    axios={this.props.foods.axios}
                    dish={item}
                    key={index}
                    // should be key={item.id}
                    onDishSelect={this.onDishSelect}
                    handleShow={this.handleShow} />
            );
        })

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            // debugger
            const selectedDishComments = this.props.comments.comments.filter(comment => {
                return comment.dishId === this.state.selectedDish.id;
            })
            //console.log("selectedComments Filter", selectedDishComments);
            dishDetail = <DishDetail
                axios={this.props.foods.axios}
                dish={this.state.selectedDish}
                comments={selectedDishComments}
                isLoading={this.props.comments.isLoading} />
        }

        //console.log("menu.js", this.props);

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
                    dish={this.state.selectedDish}
                    addComment={this.props.addComment} />
                <Row>
                    <h1>Axios = {this.props.foods.axios ? <>TRUE</> : <>FALSE</>} </h1>
                    {menu}
                </Row>
            </Container>
        );
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);