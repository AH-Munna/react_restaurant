import React from "react";
import { Container, Row } from "react-bootstrap";
// import Foods from "../../data/Foods";
import ItemMenu from "./ItemMenu";
import DishDetail from "./DishDetail"
import ModalFood from "./ModalFood";
// import COMMENTS from "../../data/Comments";
import { connect } from "react-redux";
import { addComment, AsyncFetchDishes } from "../../redux/actionCreator";
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
        addComment: (dishId, author, comment, rating) => {
            console.log("menu dispatch", dishId, author, comment, rating);
            return dispatch(addComment(dishId, author, comment, rating))
        },
        fetchDishes: () => dispatch(AsyncFetchDishes()),
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
        console.log(this.props);
        this.props.fetchDishes();
    }

    render() {
        document.title = "Foods Menu";
        if (this.props.foods.isLoading) {
            return (
                <PageLoad />
            );
        }
        // console.log("props", this.props);
        const menu = this.props.foods.dishes.map((item, index) => {
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
            const selectedDishComments = this.props.comments.filter(comment => {
                return comment.dishId === this.state.selectedDish.id;
            })
            //console.log("selectedComments Filter", selectedDishComments);
            dishDetail = <DishDetail dish={this.state.selectedDish} comments={selectedDishComments} />
        }

        //console.log("menu.js", this.props.comments);

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
                    {menu}
                </Row>
            </Container>
        );
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);