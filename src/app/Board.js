import React from 'react';
import sizeMe from 'react-sizeme';
import { connect } from 'react-redux';
import { partial } from 'ramda';
import './Board.css';
import Cell from './board/Cell';
import { getBoard } from 'store/reducers';
import * as actions from 'store/actions';

const calcDimensions = ({ width, height }) =>
  width < height ? { width, height: width } : { width: height, height };

const Board = ({ cells, size, onCellClick }) => (
  <div className="board" style={calcDimensions(size)}>
    {cells.map((row, i) => (
      <div className="board-row" key={i}>
        {row.map((cell, j) => (
          <div className="board-col" key={j}>
            <Cell contents={cell} onClick={partial(onCellClick, [i, j])} />
          </div>
        ))}
      </div>
    ))}
  </div>
);

const mapStateToProps = state => ({
  cells: getBoard(state)
});
const mapDispatchToProps = {
  onCellClick: actions.pickSquare
};

export default connect(mapStateToProps, mapDispatchToProps)(
  sizeMe({ monitorHeight: true })(Board)
);
