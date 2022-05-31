import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Input } from "reactstrap";

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
        return (
            <>
                <Row>
                    <Col className="my-3">
                        <h3 className="text-info">Send us your feedback</h3><hr className="text-info" />
                    </Col>
                </Row>
                <Row>
                    <Form className="col-md-6 mx-auto my-5 shadow p-5" onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-5" controlId="formBasicFullName">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control type="text" placeholder="name...." name="fullName" onChange={this.handleInput} />
                        </Form.Group>

                        <Form.Group className="mb-5" controlId="formBasicMessage">
                            <Row className="col-md-5 mx-auto mb-3">
                                {/* md={{ size: 3, offset: 5 }} */}
                                <Input type="select" name="constactType" onChange={this.handleSelect} >
                                    <option>Email</option>
                                    <option>Phone</option>
                                </Input>
                            </Row>
                            <Row>
                                {
                                    this.state.contactType === "Email" ?
                                        <Form.Group className="" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="email...." name="email" value={this.state.email} onChange={this.handleInput} />
                                        </Form.Group> :
                                        this.state.contactType === "Phone" ?
                                            <Form.Group className="" controlId="formBasicPhone">
                                                <Form.Control type="number" placeholder="phone...." name="phone" value={this.state.phone} onChange={this.handleInput} />
                                            </Form.Group> :
                                            <></>
                                }
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Label><strong>Your Message</strong></Form.Label>
                            <Form.Control as="textarea" rows={10} name="contactMessage" onChange={this.handleInput} />
                        </Form.Group>

                        <Form.Group className="mb-3 d-flex justify-content-center" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Agree to Term" checked={this.state.termAgree} onChange={this.handleCheckBox} />
                        </Form.Group>

                        <button className="px-4 py-2 btn rounded-pill myBtnBG" type="submit" disabled={!this.state.termAgree} >
                            Send Feedback
                        </button>
                    </Form>
                </Row>
            </>
        );
    }
}

export default Contact;