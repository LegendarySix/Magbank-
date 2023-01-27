import React from 'react';
import { Container, Col, Button } from 'react-bootstrap';

const CenteredButton = ({ children }) => (
  <Container>
      <Col className='d-flex justify-content-center'>
      <Button className='my-5 px-5 py-3' variant='success' size='lg'>
        {children}
      </Button>
      </Col>
  </Container>
);

export default CenteredButton;