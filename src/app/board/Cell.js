import React from 'react';
import { Button } from 'reactstrap';
import './Cell.css';

const Cell = ({ contents }) => (
  <div className="cell">
    {contents ? (
      <div className="board-cell">{contents}</div>
    ) : (
      <Button className="empty-cell" outline color="secondary" />
    )}
  </div>
);

export default Cell;
