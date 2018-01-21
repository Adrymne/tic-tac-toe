import React from 'react';
import { connect } from 'react-redux';
import './Score.css';
import { getScore, isVsCom } from 'store/reducers';
import { P1, P2 } from 'types';

const Score = ({ score, isVsCom }) => (
  <div className="score">
    <div>
      <b>P1</b>
      <br />
      {score[P1]}
    </div>
    <div>
      <b>Tie</b>
      <br />
      {score.tie}
    </div>
    <div>
      <b>{isVsCom ? 'COM' : 'P2'}</b>
      <br />
      {score[P2]}
    </div>
  </div>
);

const mapStateToProps = state => ({
  score: getScore(state),
  isVsCom: isVsCom(state)
});

export default connect(mapStateToProps)(Score);
