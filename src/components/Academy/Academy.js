import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';

const Academy = (props) => {
    const { name, img, price } = props.subject;
    return (
        <div>
            <Col>
                <Container>
                    <Card>
                        <Card.Img className="img-fluid w-100" variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Subject Name :{name}</Card.Title>
                            <Card.Text>
                                Course Fee:{price}$
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Container>
            </Col>
        </div>
    );
};

export default Academy;