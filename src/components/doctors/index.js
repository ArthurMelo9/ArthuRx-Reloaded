import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Doctor from '../home/images/telemedicine-760.jpg'
import Login from './Login';
import fire from './fire';
import DoctorsPortal from './DoctorsPortal';


/**
* @author
* @function Doctors
**/

const Doctors = (props) => {
    const history = useHistory()
    const navigateTo = (path) => {
        return (
            (e) => {
                e.preventDefault()
                history.push(path)
            }
        )
    }

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState('false');

    const clearInput = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {

                history.push('/doctorsPortal')
            })
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });

    };

    const handleSignup = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            });

    };



    //a listener to check if user exists
    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInput();
                setUser(user);
            } else {
                setUser('');
            }
        })
    };

    useEffect(() => {
        authListener();
    }, []);
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
                <Card>
                    <Card.Img variant="top" src={Doctor} />
                    <Card.Body>
                        <Card.Title>Doctors' login</Card.Title>
                        <Card.Text>
                            Hello Doctor! Welcome to ArthuRx! Please login to access your portal.
      </Card.Text>

                        <Login
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            handleLogin={handleLogin}
                            handleSignup={handleSignup}
                            hasAccount={hasAccount}
                            setHasAccount={setHasAccount}
                            emailError={emailError}
                            passwordError={passwordError}
                        />




                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Our virtual consultation is top-notch!</small>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    )

}

export default Doctors;