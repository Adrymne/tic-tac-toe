import React from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import './Options.css';
import OptionsForm from './options/OptionsForm';

class Options extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <Button color="secondary" outline onClick={this.toggleModal}>
          Options
        </Button>
        <Modal isOpen={isOpen} toggle={this.toggleModal}>
          <ModalBody>
            <OptionsForm onDone={this.toggleModal} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Options;
