import React from 'react';
import { Button } from 'react-bootstrap';
import img from '../images/banner-1.jpg'
import './Header.css'

const Header = () => {
    return (
        // start - header section
        <div className='mb-5 position-relative'>
            <div className='img-gradient'>
                <img id='header-img' src={img} alt="" />
            </div>
            <div className='p-5 mt-4 w-75 position-absolute top-0 start-0 text-light'>
                <h1 className='info-text display-4 fw-bold mb-4'>Online Calligraphy Classes</h1>
                <h5 className='info-text'>Explore new skills, deepen existing passions, and get lost in creativity. What you find just might surprise and inspire you.</h5>
                <Button id='btn-get-started' variant='light' className='mt-5 w-50'>Get Started for Free</Button>
            </div>
        </div>
        //end - header section
    );
};

export default Header;