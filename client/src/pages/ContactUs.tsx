import React, { useState } from 'react';
import '../styles/ContactUs.css';
import {Button, Row, Col, Card, Form, Container} from 'react-bootstrap';

const ContactUs: React.FC= () => {
  const [name, setName] = useState <string>('');
  const [email, setEmail] = useState <string>('');
  const [message, setMessage] = useState <string>('');

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Handle form submission, e.g., send data to a server
    console.log({ name, email, message });
    // Clear the form after submission
    setName('');
    setEmail('');
    setMessage('');
    };

  
    return (
      <><header style={{ paddingLeft: 0 }}>
            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400 }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <div className="contact">
                                <header className="contact-header">

                                    <Container>
                                        <Row>
                                            <Col>
                                                <Card.Body>
                                                    <Card.Title>
                                                        <h1 className="title">Wandering Tiny Homes</h1>
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <p className="body">HEADQUATERS</p>
                                                        <p className="body">Kansas City</p>
                                                        <p className="body">913-999-1234</p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Col>

                                            <Col>
                                                <Card.Body>
                                                    <Card.Title>
                                                        <h1 className="title">Wandering Tiny Homes</h1>
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <p className="body">BUILD LOCATION</p>
                                                        <p className="body">Atlanta</p>
                                                        <p className="body">913-999-1234</p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Container>
                                </header>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header><div className="contact-body">
                <text className="header">
                    Get in Touch
                </text>
                <Container>
                    <Row>
                        <Col>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email" />
                                </Form.Group>
                                <Form.Group controlId="formBasicMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>

                <text className="header">
                    Tiny House Questionnaire
                </text>


                <Container>
                    <Row>
                        <Col>
                            <form className="row row-cols-lg-auto g-3 align-items-center">
                                <div className="col-12">
                                    <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Name</label>
                                    <div className="input-group">
                                        <div className="input-group-text">@</div>
                                        <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Enter your name" />
                                    </div>
                                </div>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <form className="row row-cols-lg-auto g-3 align-items-center">
                                <div className="col-12">
                                    <label className="visually-hidden" htmlFor="inlineFormInputGroupEmail">Email</label>
                                    <div className="input-group">
                                        <div className="input-group-text">@</div>
                                        <input type="email" className="form-control" id="inlineFormInputGroupEmail" placeholder="Enter your email" />
                                    </div>
                                </div>
                            </form>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                                    Subscribe to our newsletter
                                </label>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <form className="row row-cols-lg-auto g-3 align-items-center">
                                <div className="col-12">
                                    <label className="visually-hidden" htmlFor="inlineFormInputGroupPhone">Phone</label>
                                    <div className="input-group">
                                        <div className="input-group-text">@</div>
                                        <input type="text" className="form-control" id="inlineFormInputGroupPhone" placeholder="Enter your phone number" />
                                    </div>
                                </div>
                            </form>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Number of tiny homes?</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="3">Four</option>
                                <option value="3">Five</option>
                                <option value="3">Six</option>
                            </select>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Which models are you interested in?</option>
                                <option value="1">Leviathan</option>
                                <option value="2">Icarus</option>
                                <option value="3">Clearance</option>
                                <option value="3">Mortedacy</option>
                                <option value="3">Love Shack</option>
                                <option value="3">arenthood</option>
                            </select>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>When do you want to purchase a tiny house?</option>
                                <option value="1">date</option>
                            </select>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>How do you plan to purchase?</option>
                                <option value="1">Bank Transfer</option>
                                <option value="2">Credit Card</option>
                                <option value="3">Cash</option>
                                <option value="3">Pay Pal</option>
                            </select>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Would you need it delivered?</option>
                                <option value="1">One Month</option>
                                <option value="2">Two Months</option>
                                <option value="3">Three Months</option>
                                <option value="3">Four Month</option>
                                <option value="3">Five Month</option>
                            </select>
                        </Col>
                    </Row>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                    </div>
                    <Row>
                        <Col>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Container>

                <Container>

                </Container>


            </div></> 
    );

};

export default ContactUs;
