import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const EnrolledCourse = (props) => {
    const { name, img, instructor, duration } = props.course;
    return (
        <Col>
            <Card className='p-0'>
                <Card.Img variant="top" className='img-fluid ' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='text-muted mb-4'><small>by: {instructor}</small></Card.Text>
                    <Card.Text>duration: {duration}</Card.Text>
                    <Button variant='dark' className='w-100'>Continue course</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default EnrolledCourse;