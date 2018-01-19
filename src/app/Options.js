import React from 'react';
import * as R from 'ramda';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, Form } from 'reactstrap';
import './Options.css';
import OpponentSelect from './options/OpponentSelect';
import SideSelect from './options/SideSelect';

class Options extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      form: props.values,
      isModified: false
    };
  }

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  onChange = (field, value) => {
    const form = R.assoc(field, value, this.state.form);
    this.setState({
      form,
      isModified: !R.equals(this.props.values, form)
    });
  };

  render() {
    const { isOpen, form, isModified } = this.state;
    const { possibleValues, isGameInProgress } = this.props;

    return (
      <div>
        <Button color="secondary" outline onClick={this.toggleModal}>
          Options
        </Button>
        <Modal isOpen={isOpen} toggle={this.toggleModal}>
          <ModalBody>
            <Form>
              <SideSelect
                selected={form.side}
                values={possibleValues.side}
                onChange={event => this.onChange('side', event.target.value)}
              />
              <OpponentSelect
                selected={form.opponent}
                values={possibleValues.opponent}
                onChange={event =>
                  this.onChange('opponent', event.target.value)
                }
              />
              <hr />
              <div style={{ float: 'right' }}>
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
          </ModalBody>
        </Modal>
      </div>
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

export default connect(mapStateToProps)(Options);
