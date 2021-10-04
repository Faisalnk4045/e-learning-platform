import React from 'react';
import { Button } from 'react-bootstrap';
import img from '../images/browse-banner-2.jpg'
import './Header.css'

const Header = () => {
    return (
        // start - header section
        <div className='mb-5 position-relative'>
            <div className='img-gradient'>
                <img style={{ width: '100%', borderRadius: '10px' }} src={img} alt="" />
            </div>
            <div className='p-5 mt-4 position-absolute top-0 start-0 text-light'>
                <h1 className='fw-bold mb-4'>Online Calligraphy Classes</h1>
                <h5>Find what fascinates you as you explore these calligraphy classes.</h5>
                <Button variant='warning' className='mt-5 w-50'>Get Started for Free</Button>
            </div>
        </div>
        //end - header section
    );
};

export default Header;