import React from 'react';
import { Button } from 'react-bootstrap';

/**
* @author
* @function Buttons
**/

const Buttons = (props) => {
    return (
        <Button variant="dark" onClick={props.onClick} >{props.label} </Button>
    )

}

export default Buttons;