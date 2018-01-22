import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Board from './app/Board';
import Score from './app/Score';
import Options from './app/Options';
import SourceLink from './app/SourceLink';

const App = () => (
  <React.Fragment>
    <SourceLink />
    <Container fluid>
      <Row>
        <Col>
          <Board style={{ height: '80vh', width: '95vw' }} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col xs={7}>
              <Score />
            </Col>
            <Col>
              <Options />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default App;
