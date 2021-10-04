import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import { addToDb } from '../utilities/fakedb';

const Courses = (props) => {
    //declare variable for storing current page on the route
    const currentPage = props.page;

    //declare state for course data and cart information
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);

    //load fake data from public directory
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    // handle click on enroll now button
    const handleAddToCart = (product) => {
        let newCart = [...cart];
        const exists = newCart.find(pd => pd.id === product.id);
        if (!exists) {
            newCart.push(product);
        }
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div>
            <h2 className='mb-3'>Get choice of your course</h2>
            {/* start - courses container */}
            <Row lg={4} className="g-4">
                {
                    currentPage !== 'home' ?
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                            handleAddToCart={handleAddToCart}></Course>)
                        :
                        courses.slice(0, 4).map(course => <Course
                            key={course.id}
                            course={course}
                            handleAddToCart={handleAddToCart}></Course>)
                }
            </Row>
            {/* end - courses container */}
        </div>
    );
};

export default Courses;