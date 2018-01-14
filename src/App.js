import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Board from './app/Board';
import Score from './app/Score';
import Options from './app/Options';

const App = () => (
  <Container fluid>
    <Row>
      <Col>
        <Board />
      </Col>
    </Row>
    <Row>
      <Col>
        <Row>
          <Col xs={8}>
            <Score />
          </Col>
          <Col>
            <Options />
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default App;
