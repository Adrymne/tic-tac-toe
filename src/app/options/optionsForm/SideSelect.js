import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const SideSelect = ({ selected, values, onChange }) => (
  <FormGroup tag="fieldset">
    <legend>Select side</legend>
    {values.map((value, index) => (
      <FormGroup check inline key={index}>
        <Label check>
          <Input
            type="radio"
            name="select-side-radio"
            value={value}
            checked={selected === value}
            onChange={onChange}
          />{' '}
          {value}
        </Label>
      </FormGroup>
    ))}
  </FormGroup>
);

export default SideSelect;
