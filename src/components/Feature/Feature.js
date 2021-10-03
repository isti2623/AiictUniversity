import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

import coverTwo from '../../images/coverTwo.jpg'
import coverThree from '../../images/coverThree.jpg'

const Feature = () => {
    return (
        <div>
            <Container className="mt-5">
                <h5 className="text-center text-success fs-2 fw-bold my-5">Feature</h5>


                <Carousel>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={coverTwo}
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={coverThree}
                            alt="Third slide"
                        />


                    </Carousel.Item>
                </Carousel>
            </Container>

        </div>
    );
};

export default Feature;