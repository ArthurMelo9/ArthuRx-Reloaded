import React from 'react';
import { Container, Row, Col, Navbar, Nav, Carousel, Card, ListGroup, ListGroupItem, CardDeck } from 'react-bootstrap';
import Comm from '../home/images/comm.jpg';
import Tele1 from './images/telemedicine-760.jpg';
import Tele from './images/tele.png'
import Cartoon from './images/cartoon.jpg';
import Lab from './images/labreports.png';
import Diag from './images/diag.png';
import { useHistory } from 'react-router-dom';
import './style.css'

/**
* @author
* @function Home
**/

const Home = (props) => {
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
        <div>Home
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
                <Row>
                    <Col>1 of 2
                    <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Comm}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Tele1}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Tele}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>

                    <Col>2 of 2
                   
                    </Col>
                </Row>

                <footer className="footer" >
                    <Nav.Link href="/patients">Patients login</Nav.Link>
                    <Nav.Link href="/doctors">Doctors login</Nav.Link>
                </footer>
            </Container>
        </div>
    )

}

export default Home