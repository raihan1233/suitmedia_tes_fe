import React, { useState } from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navbars = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
    setShowDropdown(true);
    };

    const handleMouseLeave = () => {
    setShowDropdown(false);
    };

    return (
        <Navbar expand="lg" bg="light">
            <Container className='justify-content-between'>
            <Navbar.Brand href="#home" className='fw-bold'>Company</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavDropdown
                        title="ABOUT"
                        renderMenuOnMount={true}
                        id="basic-nav-dropdown"
                        show={showDropdown}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        >
                        <NavDropdown.Item href="#history">History</NavDropdown.Item>
                        <NavDropdown.Item href="#vision-mission">
                            Vision Mission
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link" className="text-uppercase">our works</Nav.Link>
                    <Nav.Link href="#home" className="text-uppercase">our team</Nav.Link>
                    <Nav.Link href="#link" className="text-uppercase">contacts</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbars;