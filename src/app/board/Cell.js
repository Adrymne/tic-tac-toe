import React from 'react';
import CSSReplaceTransition from 'react-css-transition-replace';
import './Cell.css';
import { EMPTY } from 'types';
import EmptyCell from './cell/EmptyCell';
import SelectedCell from './cell/SelectedCell';

const Cell = ({ contents, onClick, nextMark }) => (
  <CSSReplaceTransition
    className="cell-container"
    transitionName="fade-wait"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}
  >
    {contents === EMPTY ? (
      <EmptyCell key={contents} nextMark={nextMark} onClick={onClick} />
    ) : (
      <SelectedCell key={contents} contents={contents} />
    )}
  </CSSReplaceTransition>
);

export default Cell;
