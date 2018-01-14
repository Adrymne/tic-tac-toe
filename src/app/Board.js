import React from 'react';
import { Row, Col } from 'reactstrap';
import './Board.css';
import Cell from './board/Cell';

const DUMMY = ['X', '', 'O', '', 'X', '', 'X', '', 'O'];

const Board = ({ cells = DUMMY }) => (
  <Row>
    {cells.map((cell, i) => (
      <Col className="cell-container" xs={4} key={i}>
        <Cell contents={cell} />
      </Col>
    ))}
  </Row>
);

export default Board;
