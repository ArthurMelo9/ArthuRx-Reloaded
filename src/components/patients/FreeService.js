import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

/**
* @author
* @function BMI
**/

const BMI = (props) => {
    return (
        <div>
            BMI  checker
            <Form>
                <Row>
                    <Col>
                        <Form.Control type="number" placeholder="Enter weight (kg)" />
                    </Col>
                    <Col>
                        <Form.Control type="number" placeholder="Enter height (m)" />
                    </Col>
                </Row>
            </Form>
        </div>
    )

}

export default BMI;