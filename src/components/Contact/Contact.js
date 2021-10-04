
import React from 'react';
import { Container, FloatingLabel, Form, Button, Row, Col } from 'react-bootstrap';


const Contact = () => {
    return (
        <div>
            <Container className="my-5">
                <h5 className="my-5 text-center fw-bold fs-1">Get In Touch
                </h5>


                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInputCustom">Name</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInputCustom">Phone</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInputCustom">Email address</label>
                </Form.Floating>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <Button className="mt-3" variant="success">Submit</Button>


                <h5 className="my-5 text-center fw-bold fs-1">Other Branches
                </h5>
                <Row>
                    <Col className="card p-1 m-3 ms-3" lg={6} md={4}>
                        <h5 className="mt-5 text-center text-success fw-bold fs-1">Dhanmondi Campus
                        </h5>
                        <p className="ms-5 text-center fw-bold">House# 75/A (2nd Floor), <br />
                            Road# 5/A, Satmasjid Road, <br />
                            Dhanmondi, Dhaka-1209</p>
                    </Col>

                    <Col className="card p-1 m-3 ms-3" lg={5} md={4}>
                        <h5 className="mt-5 text-center text-success fw-bold fs-1">Mirpur Campus
                        </h5>
                        <p className="ms-5 text-center fw-bold">BSCIC Electronics Complex, Level-6, <br />
                            Mirpur (11 No Bus Stand), <br />
                            Dhaka-1216</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;