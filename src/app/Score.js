import React from 'react';
import './Score.css';

const Score = () => (
  <div className="score">
    <div>
      <b>P1</b>
      <br />|
    </div>
    <div>
      <b>Tie</b>
      <br />
      <s>||||</s>
    </div>
    <div>
      <b>COM</b>
      <br />1
    </div>
  </div>
);

export default Score;
