import React from 'react';
import { Button } from 'reactstrap';
import './Cell.css';

const Cell = ({ contents }) => (
  <React.Fragment>
    {contents ? (
      <div className="cell board-cell">{contents}</div>
    ) : (
      <Button className="cell empty-cell" outline color="secondary" />
    )}
  </React.Fragment>
);

export default Cell;
