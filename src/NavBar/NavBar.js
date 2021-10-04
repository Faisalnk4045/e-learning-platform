import React from 'react';
import { Container, Form, FormControl, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='shadow-sm mb-5'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container className='py-3'>
                    <Navbar.Brand href="#home"><b className='fs-3'>KNACK</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <nav className="ms-3 me-auto">
                            <Link className="text-muted text-decoration-none me-3" to='/home'>Home</Link>
                            <Link className="text-muted text-decoration-none me-3" to='/courses'>Courses</Link>
                            <Link className="text-muted text-decoration-none me-3" to='/enrolled'>My classes</Link>
                            <Link className="text-muted text-decoration-none me-3" to='/about'>About us</Link>
                        </nav>
                        <Form className="d-flex w-25 ">
                            <FormControl
                                type="search"
                                placeholder="search..."
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                        
                        <i className="far fa-bell fs-4 text-muted p-1 mx-2"></i>
                        <i className="far fa-user-circle fs-4 text-muted p-1"></i>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;