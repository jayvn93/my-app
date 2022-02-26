import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './free-course.css';

import courseImg01 from '../../assets/images/web-development.png';
import courseImg02 from '../../assets/images/kids-learning.png';
import courseImg03 from '../../assets/images/seo.png';
import courseImg04 from '../../assets/images/ui-ux.png';

import FreeCourseCard from "./FreeCourseCard";

const freeCourseData = [
    {
        id: '01',
        title: 'Basic Web Development Course',
        imgUrl: courseImg01,
        students: 1.5,
        rating: 1.5
    },
    {
        id: '02',
        title: 'Lorem ipsum dolor sit amet consectetur.',
        imgUrl: courseImg02,
        students: 1.5,
        rating: 1.5
    },
    {
        id: '03',
        title: 'Lorem ipsum dolor sit amet.',
        imgUrl: courseImg03,
        students: 1.5,
        rating: 1.5
    },
    {
        id: '04',
        title: 'Lorem ipsum dolor sit amet.',
        imgUrl: courseImg04,
        students: 1.5,
        rating: 1.5
    }
];

const FreeCourse = () => {
    return <section>
        <Container>
            <Row>
                <Col lg='12' className='text-center mb-5 text-center'>
                    <h2 className='fw-bold'>Our Free Courses</h2>
                </Col>
                
                    {
                        freeCourseData.map((item) => (
                            <Col lg='3' key={item.id}>
                                <FreeCourseCard items={item} />
                            
                            </Col>
                        ))}
            </Row>
        </Container>
    </section>
}

export default FreeCourse;