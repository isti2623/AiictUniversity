
import React from 'react';
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <Container>
                <h5 className="my-5 text-center fs-1">Contact US</h5>

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

            </Container>
        </div>
    );
};

export default Contact;