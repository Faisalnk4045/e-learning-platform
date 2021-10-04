import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Course = (props) => {
    // destructuring course data and event handler
    const { name, img, price, instructor} = props.course;
    const { handleAddToCart } = props;

    return (
        <div>
            {/* start - course component */}
            <Col className='h-100'>
                <Card className='p-0'>
                    <Card.Img style={{width: '448px', height: '190px'}} variant="top" className='img-fluid' src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text><small>by: {instructor}</small></Card.Text>
                        <Card.Text>Price: ${price}</Card.Text>
                        <Button onClick={() => handleAddToCart(props.course)} variant='outline-secondary' className='w-100'>Enroll now</Button>
                    </Card.Body>
                </Card>
            </Col>
            {/* end - course component */}
        </div>
    );
};

export default Course;