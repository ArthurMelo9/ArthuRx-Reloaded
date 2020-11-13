import React from 'react';
import { Container, Row, Col, Navbar, Nav, Carousel, Media, Button } from 'react-bootstrap';
import Comm from '../home/images/comm.jpg';
import Tele1 from './images/telemedicine-760.jpg';
import Tele from './images/tele.png'


import { useHistory } from 'react-router-dom';
import './style.css'
import Tips from './images/tips.jpg'
import Coro from './images/coro.jpg'
import Diabetes from './images/diabetes.jpg'

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
                <Row>
                    <Col>
                        <br />
                        <h3>Welcome to ArthuRx</h3>
                        <hr />
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Comm}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Experience a virtual consultation with our doctors</h3>
                                    <p>This cutting-edge technology allows you to face-time with doctors</p>
                                </Carousel.Caption>

                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Tele1}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Any complaints? </h3>
                                    <p>Text us. Our on-demand doctors are always online to respond to you!</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Tele}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Meet our doctors in person</h3>
                                    <p>Book an appointment with our consultants now.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>

                    <Col>
                        <br />
                        <h4>Tips corner</h4>
                        <hr />
                        <Media>
                            <img
                                width={64}
                                height={64}
                                className="align-self-start mr-3"
                                src={Tips}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>5 healthy habits to live by</h5>
                                <p>
                                    Maintaining five healthy habits — eating a healthy diet, exercising regularly, keeping a healthy
                                    body weight, not drinking too much alcohol, and not smoking — at middle-age may increase
                                    years lived free of Type 2 diabetes, cardiovascular disease, and cancer, according to a
                                    new study led by Harvard T.H. Chan School of Public Health.
      </p>


                            </Media.Body>
                        </Media>

                        <Media>
                            <img
                                width={64}
                                height={64}
                                className="align-self-center mr-3"
                                src={Coro}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>COVID-19</h5>
                                <p>
                                    The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected
                                    person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly
                                    fall on floors or surfaces.
                                    You can be infected by breathing in the virus if you are within
                                    close proximity of someone who has COVID-19, or by touching a
                                    contaminated surface and then your eyes, nose or mouth.
      </p>


                            </Media.Body>
                        </Media>

                        <Media>
                            <img
                                width={64}
                                height={64}
                                className="align-self-end mr-3"
                                src={Diabetes}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>Diabetes</h5>
                                <p>
                                    Diabetes mellitus, commonly known as diabetes, is a metabolic disease that causes high blood
                                    sugar. The hormone insulin moves sugar from the blood into your cells to be stored or used for
                                    energy. With diabetes, your body either doesn't make enough insulin or can't effectively use the
                                    insulin it does make.
      </p>


                            </Media.Body>
                        </Media>
                    </Col>
                </Row>

                <hr />

                <footer className="footer" >
                    <Button variant="dark" href="/patients" >Patients login</Button>
                    <Button variant="dark" href="/doctors" >Doctors login</Button>

                </footer>
            </Container>
        </div>
    )

}

export default Home