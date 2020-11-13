import React, { Component } from 'react';
import './signUp.css';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';


/**
* @author
* @function SignUp
**/

const SignUp = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;
    return (

        <Container fluid>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">ArthuRx</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/aboutUs">About Us</Nav.Link>
                    <Nav.Link href="/contactUs">Contact Us</Nav.Link>
                    <Nav.Link href="/signUp">Sign Up</Nav.Link>
                </Nav>
            </Navbar>
            <section className="login">
                <div className="loginContainer">
                    <label>Username</label>
                    <input
                        type="text"
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <p className="errorMsg">{emailError} </p>
                    <label>Password</label>
                    <input
                        type="password"
                        autoFocus
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <p className="errorMsg" >{passwordError} </p>
                    <div className="btnContainer" >
                        {hasAccount ? (
                            <>
                                <button className="signin" onClick={handleLogin}   >Sign in</button>
                                <p>Don't have an acount?
                                <span onClick={() => setHasAccount(!hasAccount)} >Sign up</span>
                                </p>
                            </>
                        ) : (
                                <>
                                    <button className="signin" onClick={handleSignup} >Sign up</button>
                                    <p>Have an account?
                                     <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                                    </p>
                                </>
                            )}
                    </div>
                </div>
            </section>
        </Container>
    )

}

export default SignUp;

/*const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
          --SUBMITTING--
          First Name: ${this.state.firstName}
          Last Name: ${this.state.lastName}
          Email: ${this.state.email}
          Password: ${this.state.password}
        `);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "firstName":
                formErrors.firstName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "lastName":
                formErrors.lastName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "password":
                formErrors.password =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {
        const { formErrors } = this.state;

        return (

            <div>
                <Container fluid>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">ArthuRx</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/aboutUs">About Us</Nav.Link>
                            <Nav.Link href="/contactUs">Contact Us</Nav.Link>
                            <Nav.Link href="/signUp">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar>
                    <div className="wrapper">
                        <div className="form-wrapper">
                            <h1>Sign Up</h1>
                            <form onSubmit={this.handleSubmit} noValidate>
                                <div className="firstName">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        className={formErrors.firstName.length > 0 ? "error" : null}
                                        placeholder="First Name"
                                        type="text"
                                        name="firstName"
                                        noValidate
                                        onChange={this.handleChange}
                                    />
                                    {formErrors.firstName.length > 0 && (
                                        <span className="errorMessage">{formErrors.firstName}</span>
                                    )}
                                </div>
                                <div className="lastName">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        className={formErrors.lastName.length > 0 ? "error" : null}
                                        placeholder="Last Name"
                                        type="text"
                                        name="lastName"
                                        noValidate
                                        onChange={this.handleChange}
                                    />
                                    {formErrors.lastName.length > 0 && (
                                        <span className="errorMessage">{formErrors.lastName}</span>
                                    )}
                                </div>
                                <div className="email">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        className={formErrors.email.length > 0 ? "error" : null}
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        noValidate
                                        onChange={this.handleChange}
                                    />
                                    {formErrors.email.length > 0 && (
                                        <span className="errorMessage">{formErrors.email}</span>
                                    )}
                                </div>
                                <div className="password">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        className={formErrors.password.length > 0 ? "error" : null}
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                        noValidate
                                        onChange={this.handleChange}
                                    />
                                    {formErrors.password.length > 0 && (
                                        <span className="errorMessage">{formErrors.password}</span>
                                    )}
                                </div>
                                <div className="createAccount">
                                    <button type="submit">Sign Up</button>
                                    <small>Already Have an Account?</small>
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default SignUp;*/