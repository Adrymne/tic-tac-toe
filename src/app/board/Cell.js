import React from 'react';
import { Button } from 'reactstrap';
import './Cell.css';
import { EMPTY } from 'types';

const Cell = ({ contents, onClick }) => (
  <React.Fragment>
    {contents !== EMPTY ? (
      <div className="cell board-cell">{contents}</div>
    ) : (
      <Button
        className="cell empty-cell"
        outline
        color="secondary"
        onClick={onClick}
      />
    )}
  </React.Fragment>
);

export default Cell;
