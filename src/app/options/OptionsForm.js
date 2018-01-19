import React from 'react';
import * as R from 'ramda';
import { connect } from 'react-redux';
import { Form, Button } from 'reactstrap';
import './OptionsForm.css';
import OpponentSelect from './optionsForm/OpponentSelect';
import SideSelect from './optionsForm/SideSelect';

class OptionsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: props.values,
      isModified: false
    };
  }

  onChangeSide = event => this.onChange('side', event.target.value);
  onChangeOpponent = event => this.onChange('opponent', event.target.value);
  onChange = (field, value) => {
    const form = R.assoc(field, value, this.state.form);
    this.setState({
      form,
      isModified: !R.equals(this.props.values, form)
    });
  };

  render() {
    const { form, isModified } = this.state;
    const { possibleValues, isGameInProgress } = this.props;

    return (
      <Form>
        <SideSelect
          selected={form.side}
          values={possibleValues.side}
          onChange={this.onChangeSide}
        />
        <OpponentSelect
          selected={form.opponent}
          values={possibleValues.opponent}
          onChange={this.onChangeOpponent}
        />
        <hr />
        <div className="options-form-output">
          {isGameInProgress && isModified ? (
            <small className="text-danger">
              Changing settings will reset the current game.
            </small>
          ) : (
            ''
          )}{' '}
          <Button type="button" color="danger" disabled={!isModified}>
            Save
          </Button>
        </div>
      </Form>
    );
  }
}

// TODO: connect to state
const mapStateToProps = state => ({
  isGameInProgress: true,
  values: {
    side: 'X',
    opponent: 'player'
  },
  possibleValues: {
    side: ['X', 'O'],
    opponent: ['player', 'opponent']
  }
});

export default connect(mapStateToProps)(OptionsForm);
