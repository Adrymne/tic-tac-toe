import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './Options.css';
import FillScreen from 'components/FillScreen';

const Options = () => (
  <FillScreen className="options">
    <ButtonGroup>
      <Button active size="lg">
        X
      </Button>
      <Button size="lg">O</Button>
    </ButtonGroup>
  </FillScreen>
);

export default Options;
