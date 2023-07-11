import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const FormUser = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [emailError, setEmailError] = useState('');
    const [validated, setValidated] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        
        if (form.checkValidity() === false) {
            setValidated(true);
        } else {
            const isValidEmail = /\S+@\S+\.\S+/.test(formData.email);
            if (!isValidEmail) {
                setEmailError('Email is not valid');
            return;
            }
        }
        console.log('Form submitted');
    };
  
    return (
        <Container>
            <Row>
                <Col lg={{ span: 4, offset:4 }}>
                    <h5 className='fw-bold text-uppercase text-center'>contact us</h5>
                    <Form onSubmit={handleSubmit} noValidate validated={validated}>
                        <Form.Group controlId="formName" className='mb-3'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={formData.name}
                                name="name"
                                onChange={handleChange}
                                required={true}
                            />
                            <Form.Control.Feedback type="invalid">
                                This field is required
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formEmail" className='mb-3'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                name="email"
                                required={true}
                            />
                            <Form.Control.Feedback type="invalid">
                                Invalid email address
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formMessage" className='mb-3'>
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Enter your message"
                                value={formData.message}
                                onChange={handleChange}
                                name="message"
                                required={true}
                            />
                            <Form.Control.Feedback type="invalid">
                                This field is required
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit" className='w-100'>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default FormUser;