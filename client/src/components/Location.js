import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Alert, ListGroup, Spinner, Form, Button } from 'react-bootstrap';

const Location = () => {
  const [location, setLocation] = useState([]);
  const [name, setName] = useState('');
  const [notification, setNotification] = useState(null);
  const [reason, setReason] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('/api/locations')
      .then((res) => {
        setLocation(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching locations from db!');
        setLoading(false);
      });
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault(); 
    axios.post('/api/locations', {
      name: name,
      reason: reason,
    })
    .then(function(response) {
      setNotification(response.data.message)
      setLocation([...location, response.data.location])
      setName('')
      setReason('')

    })
    .catch(function(error) {
      setError('Error sending location data to server! try again ')
      setName('')
      setReason('')
    })
  }

  const handleDelete = (id) => {
    axios.delete(`/api/locations/${id}`)
      .then((res) => {
        setNotification(res.data.message);
        setLocation(location.filter(l => l._id !== id))
      })
      .catch((err) => {
        setError('Error deleting location data!')
      })
  }

  return (
    <Container>
      {notification !== null ? <Alert variant={'success'} onClose={() => setNotification(null)} dismissible>{notification}</Alert> : <></>}
      {error !== null ? <Alert variant={'danger'}>{error}</Alert> : <></>}
      <h1>Suggest me somewhere nice for my vacation!</h1>
      <p>A list of locations already suggested by others: </p>
      {loading ? <Spinner animation={'border'}/> : <></>}
      {location.length === 0 ? <p>Ops, no locations yet!</p> : <ListGroup>
          {location.map((l, i) => <ListGroup.Item>{l.name} - {l.reason} <Button variant='dark' size='sm' onClick={() => handleDelete(l._id)}>Delete</Button></ListGroup.Item>)}
        </ListGroup>
      }
      <br></br>
      <p> What are u waiting for?</p> 

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Location Name</Form.Label>
          <Form.Control type="text" placeholder="Enter location name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Reason</Form.Label>
          <Form.Control type="text" placeholder="Why u suggest that place?" value={reason} onChange={(e) => setReason(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
};

export default Location;