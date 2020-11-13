import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

/**
* @author
* @function AboutUs
**/

const AboutUs = (props) => {
    const history = useHistory()
    const navigateTo = (path) => {
        return (
            (e) => {
                e.preventDefault()
                history.push(path)
            }
        )


    }
    return (

        <div>
            <Container fluid>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">ArthuRx</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link onClick={navigateTo("/")}>Home</Nav.Link>
                        <Nav.Link onClick={navigateTo("/aboutUs")}>About Us</Nav.Link>
                        <Nav.Link onClick={navigateTo("/contactUs")}>Contact Us</Nav.Link>
                        <Nav.Link onClick={navigateTo("/signUp")}>Sign Up</Nav.Link>
                    </Nav>
                </Navbar>
            AboutUs
            </Container>
        </div>
    )

}

export default AboutUs;