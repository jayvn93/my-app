import React from "react";
import './testimonial.css';
import { Container, Row, Col } from "reactstrap";

import img from '../../assets/images/branding.png';
import Slider from "react-slick";

const Testimonial = () => {

    const settings = {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        autoPlay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1
      };

    return <section>
        <Container>
            <Row>
                <Col lg='10' className="m-auto">
                    <div className="testimonial__wrapper d-flex justify-content-between align-items-center">
                        <div className="testimonial__img w-50">
                            <img src={img} alt="" className="w-100" />
                        </div>

                        <div className="testimonial__content w-50">
                            <h2 className="mb-4">Our Student Voice</h2>
                        

                        <Slider {...settings}> 
                        <div>
                        <div className="single__testimonial">
                                <h6 className="mb-3 fw-bold">Excellent Course of materials</h6>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, sed! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste nisi labore, eaque suscipit excepturi culpa. </p>
                                
                                <div className="student__info mt-4">
                                    <h6 className="fw-bold">John Doe</h6>
                                    <p>California, US</p>
                                </div>
                        </div>
                        </div>

                        <div>
                        <div className="single__testimonial">
                                <h6 className="mb-3 fw-bold">Excellent Course of materials</h6>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, sed! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste nisi labore, eaque suscipit excepturi culpa. </p>
                                
                                <div className="student__info mt-4">
                                    <h6 className="fw-bold">John Doe</h6>
                                    <p>California, US</p>
                                </div>
                        </div>
                        </div>

                        <div>
                        <div className="single__testimonial">
                                <h6 className="mb-3 fw-bold">Excellent Course of materials</h6>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, sed! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste nisi labore, eaque suscipit excepturi culpa. </p>
                                
                                <div className="student__info mt-4">
                                    <h6 className="fw-bold">John Doe</h6>
                                    <p>California, US</p>
                                </div>
                        </div>
                        </div>
                        </Slider>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Testimonial;