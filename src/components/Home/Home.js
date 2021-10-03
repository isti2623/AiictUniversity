
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Academy from '../Academy/Academy';

import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';


const Home = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        fetch('./four.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <h2 className="text-center fw-bold text-success mt-5">Academic Program</h2>
            <Row xs={1} md={2} className="g-4 mt-5">
                {
                    subjects.map(subject => <Academy
                        key={subject.id}
                        subject={subject}
                    ></Academy>)
                }

                )
            </Row>

        </div>
    );
};

export default Home;