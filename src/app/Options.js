import React from 'react';
import { connect } from 'react-redux';
import { partial } from 'ramda';
import { Button, ButtonGroup } from 'reactstrap';
import './Options.css';
import { NOUGHT, CROSS } from 'types';
import * as actions from 'store/actions';
import { getP1Mark } from 'store/reducers';

const Options = ({ p1Mark, onClick }) => (
  <div className="options">
    <ButtonGroup>
      <Button
        size="lg"
        active={p1Mark === NOUGHT}
        onClick={partial(onClick, [NOUGHT])}
      >
        O
      </Button>
      <Button
        size="lg"
        active={p1Mark === CROSS}
        onClick={partial(onClick, [CROSS])}
      >
        X
      </Button>
    </ButtonGroup>
  </div>
);

const mapStateToProps = state => ({
  p1Mark: getP1Mark(state)
});
const mapDispatchToProps = {
  onClick: actions.setP1Mark
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);
