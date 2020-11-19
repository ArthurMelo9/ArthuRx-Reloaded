import React from 'react';
import { Navbar, Nav, Card, CardDeck, Container, Button } from 'react-bootstrap';
import Comm from '../home/images/comm.jpg';
import Diagnose from '../home/images/diagnose.jpg'
import Tele from '../home/images/tele.png';
import { useHistory } from 'react-router-dom';
import fire from './fire';


/**
* @author
* @function PatientsPortal
**/

const PatientsPortal = (props) => {
    const history = useHistory()

    const handleLogout = () => {
        fire.auth().signOut()
            .then(() => { history.push('/patients') })
    };

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
                <h3>Patient sPortal</h3>

                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={Comm} />
                        <Card.Body>
                            <Card.Title>Speak to a doctor</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                         </Card.Text>
                            <Card.Link href="#"></Card.Link>
                            <hr />
                            <Card.Link href="#">Speak to a doctor</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Our virtual consultation is top notch!</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Diagnose} />
                        <Card.Body>
                            <Card.Title>Spot on diagnosis!</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                         </Card.Text>
                            <Card.Link href="#"></Card.Link>
                            <hr />
                            <Card.Link href="/join">Chat with a doctor in  a consulting room</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Our virtual consultation is top notch!</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Tele} />
                        <Card.Body>
                            <Card.Title>Want to see the doctor in person?</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                         </Card.Text>
                            <Card.Link href="#"></Card.Link>
                            <hr />
                            <Card.Link href="#">Book an appointment</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Our virtual consultation is top notch!</small>
                        </Card.Footer>
                    </Card>

                </CardDeck>
                <Button variant="dark" onClick={handleLogout} >Logout</Button>
            </Container>
        </div>
    )

}

export default PatientsPortal;