import React from 'react';
import { Button } from 'reactstrap';
import './EmptyCell.css';

const EmptyCell = ({ nextMark, onClick }) => (
  <Button
    className="cell empty-cell"
    outline
    color="secondary"
    onClick={onClick}
  >
    {nextMark}
  </Button>
);

export default EmptyCell;
