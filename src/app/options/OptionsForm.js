import React from 'react';
import * as R from 'ramda';
import { connect } from 'react-redux';
import { Form, Button } from 'reactstrap';
import './OptionsForm.css';
import OpponentSelect from './optionsForm/OpponentSelect';
import SideSelect from './optionsForm/SideSelect';
import * as selectors from 'store/reducers';
import * as actions from 'store/actions';
import { NOUGHT, CROSS, PLAYER, HARD_COM } from 'types';

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
  onSubmit = event => {
    const { form, isModified } = this.state;
    event.preventDefault();
    if (isModified) {
      this.props.onSubmit(form);
      this.props.onDone();
    }
  };

  render() {
    const { form, isModified } = this.state;
    const { possibleValues, isGameInProgress } = this.props;

    return (
      <Form onSubmit={this.onSubmit}>
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
          <Button type="submit" color="danger" disabled={!isModified}>
            Save
          </Button>
        </div>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  isGameInProgress: selectors.isGameInProgress(state),
  values: {
    side: selectors.getP1Mark(state),
    opponent: selectors.getP2Type(state)
  },
  possibleValues: {
    side: [CROSS, NOUGHT],
    opponent: [PLAYER, HARD_COM]
  }
});
const mapDispatchToProps = { onSubmit: actions.updateSettings };

export default connect(mapStateToProps, mapDispatchToProps)(OptionsForm);
