import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import img from '../images/about-1.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <div className='d-flex'>
                <div className='me-5 pe-5'>
                    <h1 className='mb-4'>Our Story</h1>
                    <p>KNACK was founded by Daphne Koller and Andrew Ng in 2012 with a vision of providing life-transforming learning experiences to learners around the world. Today, KNACK is a global online learning platform that offers anyone, anywhere, access to online courses and degrees from leading universities and companies. KNACK received B Corp certification in February 2021, which means that we have a legal duty not only to our shareholders, but to also make a positive impact on society more broadly, as we continue our efforts to reduce barriers to world-class education for all.</p>
                </div>
                <img style={{ borderRadius: '5px', width: '500px', height: 'auto' }} src={img} alt="" />
            </div>

            <div style={{ backgroundColor: '#ebf3ff', color: 'rgb(0,86,210)' }} className='text-center my-5 p-5 rounded'>
                <h4 className='mb-4'>Join our global community of progress makers and start learning today!</h4>
                <Button className='btn-join' variant='outline-light'>Join now</Button>
            </div>

            <h2 className='mt-5 mb-4'>More About Knack</h2>
            <Row lg={4} className="g-4 text-light fs-6">
                <Col><div className='more-info p-5 h-100 rounded'>Learn how to get started on KNACK  <i className="fas fa-arrow-right"></i></div></Col>
                <Col><div className='more-info p-5 h-100 rounded'>Read about KNACK in the news <i className="fas fa-arrow-right"></i></div></Col>
                <Col><div className='more-info p-5 h-100 rounded'>Join our team <i className="fas fa-arrow-right"></i></div></Col>
                <Col><div className='more-info p-5 h-100 rounded'>Meet our leadership team <i className="fas fa-arrow-right"></i></div></Col>
            </Row>
        </div>
    );
};

export default About;