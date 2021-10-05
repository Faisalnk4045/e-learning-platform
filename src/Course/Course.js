import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Course = (props) => {
    // destructuring course data and event handler
    const { name, img, price, instructor, duration } = props.course;
    const { handleAddToCart } = props;

    return (
        <div>
            {/* start - course component */}
            <Col>
                <Card className='p-0 shadow-sm'>
                    <Card.Img style={{ width: '448px', height: '190px' }} variant="top" className='img-fluid' src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text><small className='text-muted'>by: {instructor}</small></Card.Text>
                        <div className='d-flex justify-content-between mt-4'>
                            <Card.Text><i className="far fa-clock"></i> {duration}</Card.Text>
                            <Card.Text className='fw-bold'>${price}</Card.Text>
                        </div>
                        <Button onClick={() => handleAddToCart(props.course)} variant='outline-dark' className='w-100'>Enroll now</Button>
                    </Card.Body>
                </Card>
            </Col>
            {/* end - course component */}
        </div>
    );
};

export default Course;