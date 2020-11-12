import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import TextField from '@material-ui/core/TextField'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './chat.css';
/**
* @author
* @function 
**/

const socket = io.connect('http://localhost:4000')

const Chat = (props) => {
    const [state, setState] = useState({ message: '', name: '' })
    const [chat, setChat] = useState([])

    useEffect(() => {
        socket.on('message', ({ name, message }) => {
            setChat([...chat, { name, message }])
        })
    })

    const onTextChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const onMessageSubmit = e => {
        e.preventDefault()
        const { name, message } = state
        socket.emit('message', { name, message })
        setState({ message: '', name })
    }


    const renderChat = () => {
        return chat.map(({ name, message }, index) => (
            <div key={index}>
                <h3>{name}:<span>{message}</span></h3>
            </div>
        ))
    }
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand>ArthuRx</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contactUs">Contact Us</Nav.Link>
                    <Nav.Link href="/aboutUs">About Us</Nav.Link>
                    <Nav.Link href="/services">Services</Nav.Link>
                    <Nav.Link href="/signUp">Sign Up</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
            <div className='card'>
                <form onSubmit={onMessageSubmit} >
                    <h1>Messenger</h1>
                    <div className='name-field'>
                        <TextField name='name'
                            onChange={e => onTextChange(e)}
                            value={state.name}
                            label='Name' />
                    </div>
                    <div >
                        <TextField name='message'
                            onChange={e => onTextChange(e)}
                            value={state.message}
                            id='outlined-multiline-static'
                            variant='outlined'
                            label='Message' />
                    </div>
                    <button onClick={onMessageSubmit}>Send message</button>
                </form>
                <div className='render-chat'>
                    <h1>Chat Log</h1>
                    {renderChat()}
                </div>

            </div>

        </div>
    )

}

export default Chat;