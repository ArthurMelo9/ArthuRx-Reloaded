import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import Doctor from '../home/images/telemedicine-760.jpg'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import fire from './fire';
/**
* @author
* @function DoctorsPortal
**/

const DoctorsPortal = () => {

    const history = useHistory()

    const handleLogout = () => {
        fire.auth().signOut()
            .then(() => { history.push('/doctors') })
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

            DoctorsPortal
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Doctor} />
                    <Card.Body>
                        <Card.Title>Doctors Corner</Card.Title>
                        <Card.Text>
                            Welcome Doctor! Ready to save some lives?
    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="/chat">Chat with patient</Card.Link>
                        <hr />
                        <Card.Link href="#">Appointments</Card.Link>
                        <hr />
                        <Card.Link href="/to-do-list">To-do-List</Card.Link>
                        <hr />

                        <button onClick={handleLogout} >Logout</button>
                    </Card.Body>
                </Card>
            </Container>

        </div>
    )

}

export default DoctorsPortal;