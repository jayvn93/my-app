import React from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import './footer.css';

const footerQuickLinks = [
    {
        display: 'Privacy Policy',
        url: '#'
    },
    {
        display: 'Membership',
        url: '#'
    },
    {
        display: 'Purchases Guide',
        url: '#'
    },
    {
        display: 'Terms of Service',
        url: '#'
    }
]

const Footer = () => {
  return <footer className="footer">
      <Container>
          <Row>
              <Col lg='3'>
                  <h2 className='d-flex align-items-center gap-1'><i className="ri-pantone-line"></i>Learners.</h2>

                  <div className="follows">
                      <p className='mb-0'>Follow us</p>
                     <span>
                         {" "}
                         <a href="facebook.com">
                             <i class="ri-facebook-line"></i>
                         </a>
                     </span>

                     <span>
                        {" "}
                         <a href="facebook.com">
                             <i class="ri-instagram-line"></i>
                         </a>
                     </span>

                     <span>
                     {" "}
                         <a href="facebook.com">
                             <i class="ri-twitter-line"></i>
                         </a>
                     </span>

                     <span>
                         <a href="facebook.com">
                             <i class="ri-facebook-line"></i>
                         </a>
                     </span>

                     <span>
                     {" "}
                         <a href="facebook.com">
                             <i className="ri-google-line"></i>
                         </a>
                     </span>
                  </div>
              </Col>

              <Col lg='3'>
                  <h6>Explore</h6>
                  <ListGroup className='link__list'>
                      {
                          footerQuickLinks.map((item,index) => (
                              <ListGroupItem key={index} className='border-0 ps-0 link__item'><a href={item.url}>{item.display}</a></ListGroupItem>
                          ))
                      }
                  </ListGroup>
              </Col>

              <Col lg='3'>
                  <h6>Quick Links</h6>
                  <ListGroup className='link__list'>
                      {
                          footerQuickLinks.map((item,index) => (
                              <ListGroupItem key={index} className='border-0 ps-0 link__item'><a href={item.url}>{item.display}</a></ListGroupItem>
                          ))
                      }
                  </ListGroup>
              </Col>

              <Col lg='3'>
                  <h6 className="fw-bold">
                      Get in Touch
                  </h6>
                  <p>Email: example@gmail.com</p>
                  <p>Mobile: example@gmail.com</p>
                  <p>Address: example@gmail.com</p>
              </Col>
          </Row>
      </Container>
  </footer>
}

export default Footer