import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'

/**
* @author
* @function Input
**/

const Input = (props) => {
    return (
        <div>


            <InputGroup className="mb-3">
                <FormControl
                    placeholder={props.placeholder}
                    type="Number"
                    value={props.value}
                    onChange={props.handleChange}
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2">{props.label} </InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )

}

export default Input