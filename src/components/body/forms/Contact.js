import React from "react";
import { Alert, Col, Row } from "react-bootstrap";
import { Form, Field } from 'react-final-form';
import { Input } from "reactstrap";
import axios from 'axios';
// import { dishLoadedFromAxios } from "../../../redux/actionCreator.js";
// import { InitialValues1 } from "./initValues.js";
// import { Input } from "reactstrap";
import '../../../StyleSheets/gradient.css';
import { base_url } from "../../../redux/actTypes.js";

class Contact extends React.Component {
    /*
    constructor(props) {
        super(props);

        this.state = {
            fullName: "",
            email: "",
            phone: "",
            termAgree: false,
            contactMessage: "",
            contactType: "Email",
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput = event => {
        const inputValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        const inputName = event.target.name;
        this.setState({
            [inputName]: inputValue,
        });
    }
    validate = () => {

    }
    InterestPicker = () => {

    }

    handleSubmit = event => {
        console.log("handleSubmit", this.state);
        event.preventDefault();
    } */

    state = {
        contactType: "Email",
        termAgree: false,
        alertShow: false,
        variant: "info",
        alertMessage: "",
    };
    handleSelect = () => {
        if (this.state.contactType === "Email") {
            this.setState({
                contactType: "Phone"
            })
        } else {
            this.setState({
                contactType: "Email"
            })
        }
    }

    validate = event => {
        const errors = {};
        //email
        if (event.Email && !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(event.Email))) errors.Email = 'Enter valid Email';
        if (this.state.contactType === "Email" && !event.Email) errors.Email = "Enter Email";
        //phone
        if (this.state.contactType === "Phone" && !event.Phone) errors.Phone = "Enter Contact";
        //message
        if (event.message && event.message.length < 5) errors.message = 'Too short';
        //term agree
        if (!event.termAgree || !event.termAgree.length) errors.termAgree = "Agree to Continue";

        return errors;
    }
    onSubmit = inputs => {
        inputs.termAgree[0] === 'termAgreeCheck' ? inputs.termAgree = true : inputs.termAgree = false;
        this.state.contactType === "Email" ? inputs.Phone = null : inputs.Email = null;
        if (!inputs.fullName) this.state.contactType === "Email" ? inputs.fullName = inputs.Email : inputs.fullName = inputs.Phone;

        const feedbackObj = {
            firstName: inputs.fullName,
            lastName: null,
            telNum: inputs.Phone,
            email: inputs.Email,
            agree: inputs.termAgree,
            contactType: this.state.contactType,
            message: inputs.message
        }

        axios.post(base_url + "feedback", feedbackObj)
            .then(response => {
                if (response.status === 201) {
                    this.setState({
                        alertShow: true,
                        alertMessage: "Your feedback has been accepted. We will get back to you as soon as we can.",
                        variant: "success",
                    })
                    setTimeout(() => {
                        this.setState({
                            alertShow: false,
                        })
                    }, 5000);
                } else {
                    this.setState({
                        alertShow: true,
                        alertMessage: "Form submission error. Try again",
                        variant: "warning",
                    })
                    setTimeout(() => {
                        this.setState({
                            alertShow: false,
                        })
                    }, 5000);
                }
            }).catch(error => {
                this.setState({
                    alertShow: true,
                    alertMessage: `${error.message}.`,
                    variant: "danger",
                })
                setTimeout(() => {
                    this.setState({
                        alertShow: false,
                    })
                }, 5000);
            });
    }
    render() {
        document.title = "Contact";
        return (
            <>
                {this.state.alertShow ?
                    <Alert key={this.state.variant} variant={this.state.variant}>
                        {this.state.alertMessage}
                    </Alert> : <></>
                }
                <Row>
                    <Col className="mt-3">
                        <h3 className="display-5 fw-bold text-secondary">Send us your feedback</h3><hr className="text-info" />
                    </Col>
                </Row>
                <Row className="mb-5 d-flex justify-content-center py-5">
                    <Col xs md={7} lg={6} className="myBGT p-5">
                        <Form
                            onSubmit={this.onSubmit}
                            validate={this.validate}
                            subscription={{ submitting: true, pristine: true }}
                            // initialValues={InitialValues1}
                            render={({ handleSubmit, form, submitting, pristine }) => (
                                <form onSubmit={handleSubmit}>

                                    <Field name="fullName">
                                        {({ input, meta }) => (
                                            <div className="mb-4">
                                                <label className="form-label">Full Name</label><br />
                                                <input className="form-control myBG" type="text" {...input} placeholder="name..." />
                                                {meta.touched && meta.error && <span>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>

                                    <Row className="col-md-5 mx-auto mt-4 mb-2">
                                        {/* md={{ size: 3, offset: 5 }} */}
                                        <Input className="myBG mx-auto" style={{ width: "250px" }} type="select" name="contactType" onChange={this.handleSelect} >
                                            <option>Email</option>
                                            <option>Phone</option>
                                        </Input>
                                    </Row>
                                    {
                                        this.state.contactType === "Email" ?
                                            <Field name="Email">
                                                {({ input, meta }) => (
                                                    <div>
                                                        <input className="form-control myBG" type="email" {...input} placeholder="example@mail.com" />
                                                        {meta.touched && meta.error && <span className="text-danger fs-6 fw-bold">{meta.error}</span>}
                                                    </div>
                                                )}
                                            </Field> :
                                            this.state.contactType === "Phone" ?
                                                <Field name="Phone">
                                                    {({ input, meta }) => (
                                                        <div>
                                                            <input className="form-control myBG" type="number" {...input} placeholder="888-88-888-88" />
                                                            {meta.touched && meta.error && <span>{meta.error}</span>}
                                                        </div>
                                                    )}
                                                </Field> :
                                                <>No field selected.. but wait this part of code was never supposed to run. WHAT HAPPENED?</>
                                    }

                                    <Field name="message">
                                        {({ input, meta }) => (
                                            <div className="mt-4">
                                                <label className="form-label">Your Message</label><br />
                                                <textarea required={true} rows={7} className="form-control myBG" {...input} placeholder="message..." />
                                                {meta.touched && meta.error && <span>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>

                                    <Field name="termAgree">
                                        {({ input, meta }) => (
                                            <div className="mt-4">
                                                <Field
                                                    name="termAgree"
                                                    component="input"
                                                    type="checkbox"
                                                    value="termAgreeCheck"
                                                    className="form-check-input"
                                                    id="termAgree4"
                                                />
                                                <label className="form-label" htmlFor="termAgree">
                                                    &nbsp;Agree to Term
                                                </label><br />
                                                {meta.touched && meta.error && <span className='text-danger'>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>

                                    <button type="submit" className="btn myBtnBG rounded-pill px-5 py-2 fw-bold fs-6 text-light mt-3">Post</button>
                                </form>
                            )} />
                    </Col>
                </Row>
                <Row>

                </Row>
            </>
        );
    }
}

export default Contact;