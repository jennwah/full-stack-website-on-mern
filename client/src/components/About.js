import React, { useState } from 'react';
import { Container, Jumbotron, Form, Button, Alert, Modal } from 'react-bootstrap';

const About = () => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [display, setDisplay] = useState(false);
  const [modal, setModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === 'yes') { 
      setDisplay(true);
      setAnswer('');
      setError(null);
    } else {
      setError('Really? Try again :)');
      setAnswer('');
    }
  }

  const handleShowInfo = () => setModal(true);
  const handleCloseInfo = () => setModal(false);

  return (
    <div>
      {error !== null ? <Alert variant={'danger'}>{error}</Alert> : <></>}
      <Jumbotron fluid>
        <Container>
          <h1>Jenn Wah</h1>
          <p>
            So, you wanna know me? well, guess u have to answer the question below to unlock my info.
          </p>
          {display ? <Button onClick={handleShowInfo}>my info</Button> : <p>Unlock the question below</p>}
        </Container>
      </Jumbotron>
      <Container>
      <p>Question: Am i handsome? yes or no?</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Your answer</Form.Label>
          <Form.Control type="text" placeholder="Enter answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
          <Form.Text className="text-muted">
            Think before you answer
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>

      <Modal show={modal} onHide={handleCloseInfo}>
        <Modal.Body>
          I work as a software engineer at Grab.
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default About;