import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const OpponentSelect = ({ selected, values, onChange }) => (
  <FormGroup>
    <Label for="opponent-select">Choose opponent type</Label>
    <Input
      type="select"
      name="opponentSelect"
      id="opponent-select"
      value={selected}
      onChange={onChange}
    >
      {values.map((value, index) => (
        <option value={value} key={index}>
          {capitalize(value)}
        </option>
      ))}
    </Input>
  </FormGroup>
);

export default OpponentSelect;
