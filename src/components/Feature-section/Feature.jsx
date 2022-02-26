import React from "react";
import { Container, Row, Col } from "reactstrap";
import './feature.css';

const FeatureData = [
    {
        title: 'Quick Learning',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum placeat ducimus modi reprehenderit esse numquam?",
        icon: 'ri-draft-line'
    },
    {
        title: 'All time support',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae earum aut ad, dolorum harum doloremque eos.",
        icon: 'ri-discuss-line'
    },
    {
        title: 'Certification',
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore nam qui repellat consectetur, eveniet asperiores quos nostrum.",
        icon: 'ri-contacts-book-line'
    },
]

const Feature = () => {
    return (
        <section>
            <Container>
                <Row>
                    {
                        FeatureData.map((item,index) =>
                        <Col lg='4' md='6' key={index}>
                            <div className="single__feature text-center px-4">
                                <h2 className="mb-3"><i className={item.icon}></i></h2>
                                <h6>{item.title}</h6>
                                <p>{item.desc}</p>
                            </div>
                        </Col>
                        ) 
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Feature;