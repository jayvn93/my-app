import React, {useState} from "react";
import { Container, Row, Col } from "reactstrap";
import chooseImg from '../../assets/images/why-choose-us.png';
import './choose-us.css';
import ReactPlayer from 'react-player';

const ChooseUs = () => {

    const [showVideo, setShowVideo] = useState();

    return <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="choose__content">
                        <h2>Why Choose Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore excepturi ipsam sed officiis placeat harum assumenda cupiditate repudiandae nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit et, accusamus aperiam, architecto cupiditate voluptatum hic aliquid expedita veniam animi vitae deserunt quam placeat! Vero. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat sint debitis ipsa dolorem quas voluptas nam doloribus commodi adipisci sunt architecto quam non, obcaecati corporis.</p>
                    </div>
                </Col>

                <Col lg='6'>
                    <div className="choose__img">
                        {   
                            showVideo ? (<ReactPlayer url='https://www.youtube.com/watch?v=lbicNSnF7e0' 
                            controls 
                            width="100%"
                            height="300px"/>) : (<img src={chooseImg} alt="" className="w-100"/>)
                        }

                        {
                            !showVideo && <span className="play__icon">
                            <i class="ri-play-circle-line" onClick={() => setShowVideo(!showVideo)}></i>
                        </span>
                        }

                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default ChooseUs;