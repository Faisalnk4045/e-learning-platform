import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../images/google-play-badge.png'
import img2 from '../images/app-store-badge.png'

const Footer = () => {
    return (
        <div className='bg-light py-5 mt-5'>
            <Container>
                <Row className='mb-4'>
                    <Col>
                        <p>Company</p>
                        <div><small>About</small></div>
                        <div><small>Carrers</small></div>
                        <div><small>Press</small></div>
                        <div><small>Blog</small></div>
                        <div><small>Affiliates</small></div>
                        <div><small>Partnership</small></div>

                    </Col>
                    <Col>
                        <p>Community</p>
                        <div><small>Go Premium</small></div>
                        <div><small>Team Plans</small></div>
                        <div><small>Refer a Friend</small></div>
                        <div><small>Limited Memberships</small></div>
                        <div><small>Scholarships</small></div>
                        <div><small>Free Classes</small></div>
                    </Col>
                    <Col>
                        <p>Teaching</p>
                        <div><small>Become a Teacher</small></div>
                        <div><small>Teaching Academy</small></div>
                        <div><small>Teacher Handbook</small></div>
                    </Col>
                    <Col>
                        <p>Mobile</p>
                        <div className='mb-2'>
                            <img style={{ width: '125px' }} src={img1} alt="" />
                        </div>
                        <div>
                            <img style={{ width: '125px' }} src={img2} alt="" />
                        </div>
                    </Col>
                </Row>
                <hr />
                <div className='d-flex justify-content-between'>
                    <div>
                        KNACK, Inc. 2021
                    </div>
                    <div>
                        <i class="fab fa-facebook-square fs-4 text-muted"></i>
                        <i class="fab fa-instagram-square fs-4 text-muted mx-3"></i>
                        <i class="fab fa-twitter-square fs-4 text-muted"></i>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;