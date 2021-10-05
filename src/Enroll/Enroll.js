import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import EnrolledCourse from '../EnrolledCourse/EnrolledCourse';
import { getStoredCart } from '../utilities/fakedb';

const Enroll = () => {
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);

    // load all course data from json file
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    // display enrolled course data after loading courses data
    useEffect(() => {
        if (courses.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {

                const addedProduct = courses.find(course => course.id === Number(key));
                if (addedProduct) {
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [courses])

    return (
        <div>
            {cart.length === 0 ? <div style={{ marginBottom: '500px', textAlign: 'center' }}><h1>Currently you're not registered for any course.</h1></div> : <h2 className='mb-4'>Welcome back <span className='text-success'>Martha</span>, ready for your next lesson?</h2>}
            <Row lg={4} className="g-4">
                {
                    cart.map(item => <EnrolledCourse
                        key={item.id}
                        course={item}></EnrolledCourse>)
                }
            </Row>

        </div>
    );
};

export default Enroll;