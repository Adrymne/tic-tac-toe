import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './Options.css';

const Options = () => (
  <div className="options">
    <ButtonGroup>
      <Button active size="lg">
        X
      </Button>
      <Button size="lg">O</Button>
    </ButtonGroup>
  </div>
);

export default Options;
