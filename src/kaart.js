import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import linnad from './linnad';

function LinnadeKaart() {
  return (
    <Row xs={1} md={2} className="g-4">
      {linnad.map((linn, index) => (
        <Col key={index}>
          <Card>
            <Card.Img variant="top" src={linn.pilt} alt={linn.nimi} />
            <Card.Body>
              <Card.Title>{linn.nimi}</Card.Title>
              <Card.Text>{linn.tekst}</Card.Text>
              <Card.Text>{`Autor: ${linn.autor}`}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default LinnadeKaart;