import React from 'react';
import sizeMe from 'react-sizeme';
import './Board.css';
import Cell from './board/Cell';

const DUMMY = [['X', '', 'O'], ['', 'X', ''], ['X', '', 'O']];

const calcDimensions = ({ width, height }) =>
  width < height ? { width, height: width } : { width: height, height };

const Board = ({ cells = DUMMY, size }) => (
  <div className="board" style={calcDimensions(size)}>
    {cells.map((row, i) => (
      <div className="board-row" key={i}>
        {row.map((cell, j) => (
          <div className="board-col" key={j}>
            <Cell contents={cell} />
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default sizeMe({ monitorHeight: true })(Board);
