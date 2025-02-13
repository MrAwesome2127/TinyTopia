import React, { useState } from 'react';
import {Button, Row, Col, Card, Form, Container} from 'react-bootstrap';
const ContactUs: React.FC= () => {
  const [name, setName] = useState <string>('');
  const [email, setEmail] = useState <string>('');
  const [message, setMessage] = useState <string>('');
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Handle form submission, e.g., send data to a server
    console.log({ name, email, message });

    const formData = {
        name,
        email,
        message,
    }
        const contacts = readLocalStorage ();
        contacts.push ((formData));
        localStorage.setItem("contactForm", JSON.stringify(contacts));
    
    // Clear the form after submission
    setName('');
    setEmail('');
    setMessage('');
    };
    
    const readLocalStorage = () => {
        const data = localStorage.getItem("contactForm");
        return data ? JSON.parse(data) : [];
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
                                                        <h1 className="title">Tiny Topia</h1>
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <p className="body">Full Tiny Home Service</p>
                                                        <p className="body">Call Us To Learn More</p>
                                                        <p className="body">786-763-1234</p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Col>
                                            <Col>
                                                <Card.Body>
                                                    <Card.Title>
                                                        <h1 className="title">Tiny Homes</h1>
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <p className="body">We Build On Location</p>
                                                        <p className="body">Call Us TO Learn More</p>
                                                        <p className="body">786-763-1234</p>
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
                            <Form onSubmit={handleSubmit} id="contactForm">
                                <Form.Group controlId="formBasicName">
                                    <Form.Label htmlFor="name">Name</Form.Label>
                                    <Form.Control value= {name} onChange= {(event)=>setName(event.target.value)} type="text" id="name"placeholder="Enter Name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label htmlFor="email">Email</Form.Label>
                                    <Form.Control value= {email} onChange= {(event)=>setEmail(event.target.value)} type="email" id="email"placeholder="Enter Email" />
                                </Form.Group>
                                <Form.Group controlId="formBasicMessage">
                                    <Form.Label htmlFor="message">Message</Form.Label>
                                    <Form.Control value= {message} onChange= {(event)=>setMessage(event.target.value)} as="textarea" id="message" rows={3} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div></> 
    );
};
export default ContactUs;

// line 19-22

















