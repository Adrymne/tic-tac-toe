import React from 'react';
import { connect } from 'react-redux';
import './Score.css';
import { getScore, isVsCom, getP1Mark, getP2Mark } from 'store/reducers';
import { P1, P2 } from 'types';

const Score = ({ score, isVsCom, p1, p2 }) => (
  <div className="score">
    <div>
      <b>P1</b> <small className="text-muted">{p1}</small>
      <br />
      {score[P1]}
    </div>
    <div>
      <b>Tie</b>
      <br />
      {score.tie}
    </div>
    <div>
      <b>{isVsCom ? 'COM' : 'P2'}</b> <small className="text-muted">{p2}</small>
      <br />
      {score[P2]}
    </div>
  </div>
);

const mapStateToProps = state => ({
  score: getScore(state),
  isVsCom: isVsCom(state),
  p1: getP1Mark(state),
  p2: getP2Mark(state)
});

export default connect(mapStateToProps)(Score);
