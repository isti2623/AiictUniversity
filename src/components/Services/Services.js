import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Academy from '../Academy/Academy';

const Services = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        fetch('./fake.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])
    return (
        <div>
            <Row xs={1} md={2} className="g-4 mt-5">
                {
                    subjects.map(subject => <Academy
                        key={subject.id}
                        subject={subject}
                    ></Academy>)
                }


            </Row>
        </div>
    );
};

export default Services;