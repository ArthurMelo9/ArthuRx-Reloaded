import React, { useState } from 'react';
import Input from './BMI/Input';
import Buttons from './BMI/Button';
import { Badge, Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap'
import Pic from '../home/images/bmi.jpg';
import { useHistory } from 'react-router-dom';

/**
* @author
* @function BMI
**/

const BMI = (props) => {

    const history = useHistory()
    const navigateTo = (path) => {
        return (
            (e) => {
                e.preventDefault()
                history.push(path)
            }
        )
    }

    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [bmi, setBmi] = useState();
    const [bmiClass, setBmiClass] = useState();

    const handleHeightChange = (event) => setHeight(event.target.value)
    const handleWeightChange = (event) => setWeight(event.target.value)

    const computeBmi = () => {
        let bmiValue = (weight / (height / 100) ** 2).toFixed(2);
        setBmi(bmiValue);
        let bmiClass = getBmi(bmiValue);
        setBmiClass(bmiClass);
        setHeight('')
        setWeight('')
    };

    const getBmi = (bmi) => {
        if (bmi < 18.5) {
            return 'Underweight';
        }

        if (bmi >= 18.5 && bmi < 24.9) {
            return 'Normal weight';
        }

        if (bmi >= 25 && bmi < 29.9) {
            return 'Overweight';
        }

        if (bmi >= 30) {
            return 'Obesity';
        }
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
                <h3>Calculate your BMI</h3>
                <Row>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src={Pic} />
                            <Card.Body>
                                <Card.Text>
                                    <Input
                                        placeholder="Enter height in cm"
                                        handleChange={handleHeightChange}
                                        value={height}
                                        label="Height"
                                    />

                                    <Input
                                        placeholder="Enter weight in kg"
                                        handleChange={handleWeightChange}
                                        value={weight}
                                        label="Weight"
                                    />





                                    <Buttons onClick={computeBmi} label="Calculate" />
                                    {
                                        isNaN(bmi) ? null : <h3>
                                            <Badge variant="secondary">Your BMI = {bmi} </Badge>
                                        </h3>
                                    }

                                    <h3>{bmiClass} </h3>

                                </Card.Text>
                            </Card.Body>
                            <Button variant="dark" href='/patients' >Go to Patients login page</Button>
                        </Card>


                    </Col>
                </Row>


            </Container>

        </div>
    )

}

export default BMI