import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Container>
                <Row>

                    <Col className="bg-success my-5 p-5 text-center" md={6}>
                        <h5 className="text-white">Ahsanullah Institute of Information & Communication Technology (AIICT)</h5>
                        <h5 className="text-white">H # B-91, R # E-2, Eastern Housing Ltd. Pallabi, Mirpur, Dhaka-1216</h5>
                        <h5 className="text-white">Phone : +880-2-9008711, +8801553451307, +8801787658138, +8801913399965
                        </h5>
                        <h5 className="text-white">Office (01726-008028)
                        </h5>
                        <h5 className="text-white">E-mail: aiict2001@gmail.com
                        </h5>

                    </Col>
                    <Col className="bg-success my-5 p-5 text-center" md={6}>
                        <h5 className="text-white">Message from President
                        </h5>
                        <p className="text-white">Ahsanullah Institute of Information and Communication Technology (AIICT) was established in 2001 by Dhaka Ahsania Mission with a view to produce high quality graduates in the field of ICT and Business. Dhaka Ahsania Mission, a leading NGO in Bangladesh which was founded in 1958 by Hazrat Khan Bahadur Ahsanullah (R.) a great sufi saint, philosopher, renowned educationist and social reformer....</p>
                    </Col>

                </Row>
                <p className="text-center">© 2021 · Ahsanullah Institute of Information & Communication Technology(AIICT)</p>
            </Container>
        </div>
    );
};

export default Footer;