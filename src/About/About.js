import React from 'react';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <h1 className='mb-4'>Our Story</h1>
            <p>KNACK was founded by Daphne Koller and Andrew Ng in 2012 with a vision of providing life-transforming learning experiences to learners around the world. Today, KNACK is a global online learning platform that offers anyone, anywhere, access to online courses and degrees from leading universities and companies. KNACK received B Corp certification in February 2021, which means that we have a legal duty not only to our shareholders, but to also make a positive impact on society more broadly, as we continue our efforts to reduce barriers to world-class education for all.</p>

            <h2 className='mt-5 mb-4'>More About Knack</h2>
            <Row lg={4} className="g-4 text-light fs-6">
                <Col><div style={{ backgroundColor: '#ebf3ff', color: 'rgb(0,86,210)' }} className='p-5 h-100 rounded'>Learn how to get started on KNACK  <i class="fas fa-arrow-right"></i></div></Col>
                <Col><div style={{ backgroundColor: '#ebf3ff', color: 'rgb(0,86,210)' }} className='p-5 h-100 rounded'>Read about KNACK in the news <i class="fas fa-arrow-right"></i></div></Col>
                <Col><div style={{ backgroundColor: '#ebf3ff', color: 'rgb(0,86,210)' }} className='p-5 h-100 rounded'>Join our team <i class="fas fa-arrow-right"></i></div></Col>
                <Col><div style={{ backgroundColor: '#ebf3ff', color: 'rgb(0,86,210)' }} className='p-5 h-100 rounded'>Meet our leadership team <i class="fas fa-arrow-right"></i></div></Col>
            </Row>
        </div>
    );
};

export default About;