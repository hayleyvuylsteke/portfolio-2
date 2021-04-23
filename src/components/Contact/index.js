import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import { validateEmail } from '../../utils/helpers';


function Contact() {
    const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', message: '' });
    const { firstName, lastName, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
    };
  
    //
    console.log(formState);

      const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
         setFormState({ [e.target.name]: e.target.value });
          console.log('Form', formState);
          alert('Thank you! Your message has been sent.')
        }
      };

    return (
        <section className="section-block-purple">
            <Container>
            <Row className="section-block-content">
                <Col>
                    <h1 className="header-turquoise" id="contact">Let's get in touch!</h1>
                </Col>
            </Row>
            <Row className="section-block-content">
                <Col className="col-1" />
                <Col className="col-lg-5 col-md-12">
                I’m always open to a chat about an opportunity to work together or just life in general. Let’s grab a coffee or a glass of wine.
                </Col>
                <Col className="col-lg-5 col-md-12">
                    <h5>Drop your details below!</h5>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="firstname">
                            <Form.Label>First name:</Form.Label>
                                <Form.Control type="firstname" placeholder="Your first name" defaultValue={firstName} onBlur={handleChange} name="Your first name" />
                        </Form.Group>
                        <Form.Group controlId="firstname">
                            <Form.Label>Last name:</Form.Label>
                                <Form.Control type="lastname" placeholder="Your last name" defaultValue={lastName} onBlur={handleChange} name="Your last name"  />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" defaultValue={email} onBlur={handleChange} name="email" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your message:</Form.Label>
                            <Form.Control as="textarea" rows={3} defaultValue={message} onBlur={handleChange} name="Your message" />
                            {errorMessage && (
                              <div>
                                <p className="error-text">{errorMessage}</p>
                              </div>
                            )}
                        </Form.Group>
                        <br />

                        <Button variant="primary" className="portfolio-button" type="submit">GET IN TOUCH</Button>
                    </Form>
                </Col>
                <Col className="col-1" />
            </Row>
        </Container>
    </section>
    )
}

export default Contact