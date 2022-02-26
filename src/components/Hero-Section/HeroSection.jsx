import React from "react";
import './hero-section.css';
import { Container, Row, Col } from "reactstrap";
import heroImg from '../../assets/images/hero-img1.png';
const HeroSection = () => {
    return (
        <Container>
            <Row>
            <Col lg='6' md='6'>
                <div className="hero__content">
                <h2 className="mb-4">
                    Anytime Anywhere <br /> Learn on your<br /> Suitable Schedule<br />
                </h2>

                <p className="mb-4">Lorem ipsum dolor sit amet<br />consectetur adipisicing elit. <br />Itaque sint numquam suscipit, inventore expedita eius?</p>

                <div className="search">
                    <input type="text" placeholder="Search" />
                    <button className="btn">Search</button>
                </div>
                </div>
            </Col>

            <Col lg='6' md='6'>
                <img src={heroImg} alt="" className="w-100" />
            </Col>
            </Row>
        </Container>

    )
}

export default HeroSection;