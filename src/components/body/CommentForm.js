import React from "react";
import { Button, Form } from "react-bootstrap";
import { Input } from "reactstrap";
import '../../StyleSheets/gradient.css';

const CommentForm = props => {
    //state hooks
    const [author, setAuthor] = React.useState("");
    const [rating, setRating] = React.useState("1");
    const [comment, setComment] = React.useState("");

    const handleStateUpdate = event => {
        // event.target.name(event.target.value);

        switch (event.target.name) {
            case "rating":
                setRating(event.target.value);
                break;
            case "comment":
                setComment(event.target.value);
                break;
            case "author":
                setAuthor(event.target.value);
                break;
            default:
                break;
        }
    }
    const handleSubmit = event => {
        event.preventDefault();
        console.log("handleSubmit ", props.dishId, author, comment, rating);
        props.addComment(props.dishId, author, comment, rating);
        //console.log(props.dishId);

        setRating("");
        setAuthor("");
        setComment("");
    }

    // React.useEffect(() => {
    // });

    //console.log("CommentForm", props);

    return (
        <div className="p-3 myBGT">
            <h3 className="display-5 text-center mb-3 text-info">post a comment</h3>
            <Form>
                <Form.Group className="mb-3" controlId="author">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="author" placeholder="full name..." value={author} onChange={event => handleStateUpdate(event)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="rating">
                    <Form.Label>Rating</Form.Label>
                    <Input type="select" name="rating" value={rating} onChange={event => handleStateUpdate(event)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </Form.Group>

                <Form.Group className="mb-3" controlId="comment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows={7} name="comment" placeholder="your experince...." required value={comment} onChange={event => handleStateUpdate(event)} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={event => handleSubmit(event)}>
                    Post
                </Button>
            </Form>
        </div>
    );
}

export default CommentForm;