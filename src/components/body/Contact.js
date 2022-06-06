import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Input } from "reactstrap";
import '../../StyleSheets/gradient.css'

class Contact extends React.Component {
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
    handleCheckBox = () => {
        this.setState({
            termAgree: !this.state.termAgree,
        })
    }

    handleInput = event => {
        const inputValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        const inputName = event.target.name;
        this.setState({
            [inputName]: inputValue,
        });
    }

    handleSubmit = event => {
        console.log("handleSubmit", this.state);
        event.preventDefault();
    }

    render() {
        document.title = "Contact";
        return (
            <>
                <Row>
                    <Col className="my-2">
                        <h3 className="display-5 fw-bold text-secondary">Send us your feedback</h3><hr className="text-info" />
                    </Col>
                </Row>
                <Row>
                    <Form className="col-md-7 myBGT mx-auto my-2 shadow p-5" onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-5" controlId="formBasicFullName">
                            <Form.Label className="fs-4">Full name</Form.Label>
                            <Form.Control className="myBG" type="text" placeholder="name...." name="fullName" onChange={this.handleInput} />
                        </Form.Group>

                        <Form.Group className="mb-5" controlId="formBasicMessage">
                            <Row className="col-md-5 mx-auto mb-3">
                                {/* md={{ size: 3, offset: 5 }} */}
                                <Input className="myBG mx-auto" style={{ width: "250px" }} type="select" name="constactType" onChange={this.handleSelect} >
                                    <option>Email</option>
                                    <option>Phone</option>
                                </Input>
                            </Row>
                            <Row>
                                {
                                    this.state.contactType === "Email" ?
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control className="myBG" type="email" placeholder="email...." name="email" value={this.state.email} onChange={this.handleInput} />
                                        </Form.Group> :
                                        this.state.contactType === "Phone" ?
                                            <Form.Group controlId="formBasicPhone">
                                                <Form.Control className="myBG" type="number" placeholder="phone...." name="phone" value={this.state.phone} onChange={this.handleInput} />
                                            </Form.Group> :
                                            <></>
                                }
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Label className="fw-b fs-5">Your Message</Form.Label>
                            <Form.Control className="myBG fs-5" as="textarea" rows={10} name="contactMessage" onChange={this.handleInput} />
                        </Form.Group>

                        <Form.Group className="mb-3 d-flex justify-content-center" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Agree to Term" checked={this.state.termAgree} onChange={this.handleCheckBox} />
                        </Form.Group>

                        <button className="px-4 py-2 btn rounded-pill myBtnBG shadow" type="submit" disabled={!this.state.termAgree} >
                            Send Feedback
                        </button>
                    </Form>
                </Row>
            </>
        );
    }
}

export default Contact;