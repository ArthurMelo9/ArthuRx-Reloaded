import React from 'react'
import { Card, ListGroup, ListGroupItem, Row, Col, Table } from 'react-bootstrap'
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
           <Row>
                    <Col>
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
                    </Col>
                    <Col>
                        <br />
                        <br />
                        Appointments
                        <hr />
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Gender</th>
                                    <th>Age</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Male</td>
                                    <td>35</td>
                                    <td>14th November, 2020</td>

                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>Male</td>
                                    <td>53</td>
                                    <td>16th November, 2020</td>

                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td >Abigail</td>
                                    <td>Badu</td>
                                    <td>Female</td>
                                    <td>47</td>
                                    <td>20th November, 2020</td>

                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

        </div >
    )

}

export default DoctorsPortal;