

import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import banner from '../../images/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Container className="banner-container">
                <Row >
                    <Col className="my-5" md={8}>
                        <h2 className="text-success fw-bold">Welcome To Visit AIICT</h2>
                        <p className="mt-2">Ahsanullah Institute of Information & Communication Technology (AIICT) was established in 2001 with a view to produce high quality graduates in the field of ICT and Business Administration. The aim of AIICT is to provide quality service to the society in the field of dissemination of information technology .The aim of the AIICT is to provide quality service to the society in the field of dissemination of information technology gradually extending the network to the rural areas. AIICT has achieved admirable reputation by providing quality education, service and by grooming and creating their students highly qualified ,skilled & expert in business, telecommunication and IT sector.</p>
                        <Button variant="success">Learn More</Button>
                    </Col>
                    <Col md={4}>
                        <img className="w-100 my-5" src={banner} alt="" srcset="" />
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Banner;