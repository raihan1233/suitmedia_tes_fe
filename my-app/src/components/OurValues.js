import React from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap'
import imgScale from '../images/balance-scale.png'

const OurValues = () => {
    return (
        <Container>
            <h5 className='fw-bold text-uppercase text-center mb-4'>our values</h5>
            <Row>
                <Col lg={4}>
                    <Card style={{ background: 'tomato', borderRadius: "0" }} className='px-3 py-4 border-none'>
                        <div className='d-flex justify-content-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-lightbulb" viewBox="0 0 16 16">
                                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
                            </svg>
                        </div>
                        <Card.Body className='text-center text-white'>
                            <Card.Title className="fw-bold text-uppercase">innovative</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores vero magni autem sint vel vero 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card style={{ background: '#355834', borderRadius: "0" }} className='px-3 py-4 border-none'>
                        <div className='d-flex justify-content-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-bank" viewBox="0 0 16 16">
                            <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z"/>
                            </svg>
                        </div>
                        <Card.Body className='text-center text-white'>
                            <Card.Title className="fw-bold text-uppercase">loyalty</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores vero magni autem sint vel vero 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card style={{ background: '#4682b4', borderRadius: "0" }} className='px-3 py-4 border-none'>
                        <div className='d-flex justify-content-center'>
                            <img src={imgScale} style={{ width: '30px' }} />
                        </div>
                        <Card.Body className='text-center text-white'>
                            <Card.Title className="fw-bold text-uppercase">respect</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores vero magni autem sint vel vero 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default OurValues;