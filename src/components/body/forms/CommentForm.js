import React from "react";
import '../../../StyleSheets/gradient.css';
import { Form, Field } from 'react-final-form';
import { InitialValues2 } from "./initValues";

const CommentForm = props => {
    //state hooks
    /*const [author, setAuthor] = React.useState("");
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
    } */

    const handleSubmit = event => {
        // debugger
        const commentObj = {
            dishId: props.dishId,
            author: event.fullName,
            comment: event.comment,
            rating: event.rating
        }
        props.addComment(commentObj);

        //console.log("handleSubmit ", props.dishId, author, comment, rating);
        //console.log(props.dishId);
        // setRating("");
        // setAuthor("");
        // setComment("");
    }
    const validate = value => {
        // debugger
        let errors = {};

        if (value.rating === 'select rating..') value.rating = null;
        if (!value.rating)
            errors.rating = "please select a rating"

        return errors;
    }

    // React.useEffect(() => {
    // });
    //console.log("CommentForm", props);

    return (
        <div className="p-3 myBGT">
            <h3 className="display-5 fw-bold text-center mb-3 text-info text-shadow">post a comment</h3>

            <Form
                onSubmit={handleSubmit}
                validate={validate}
                subscription={{ submitting: true, pristine: true }}
                initialValues={InitialValues2}
                render={({ handleSubmit, form, submitting, pristine }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="fullName">
                            {({ input, meta }) => (
                                <div className="mb-2">
                                    <input required={true} name="author" className="form-control myBG" type="text" {...input} placeholder="Name" />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <Field name="rating">
                            {({ input, meta }) => (
                                <div className="mt-4">
                                    <select className="form-control myBG" {...input}>
                                        <option>select rating..</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    {meta.touched && meta.error && <span className="text-danger ms-1">{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        {/* <Field name="rating">
                            {props => (
                                <div>
                                    <label className="form-label">Rating</label>
                                    <select required={true} className="myBG form-select mb-3" {...props.input}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            )}
                        </Field> */}

                        <Field name="comment">
                            {({ input, meta }) => (
                                <div className="mt-4">
                                    <textarea required={true} rows={7} className="form-control myBG" {...input} placeholder="your comment" />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <button type="submit" className="btn mx-auto myBtnBG rounded-pill px-5 py-2 fw-bold fs-6 text-light mt-3">Comment</button>
                    </form>)} />
            {/* 
                <Form.Group className="mb-3" controlId="comment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows={7} name="comment" placeholder="your experince...." required value={comment} onChange={event => handleStateUpdate(event)} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={event => handleSubmit(event)}>
                    Post
                </Button>
            </Form> */}
        </div>
    );
}

export default CommentForm;