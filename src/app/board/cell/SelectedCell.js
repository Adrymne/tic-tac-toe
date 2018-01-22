import React from 'react';
import { EMPTY } from 'types';
import './SelectedCell.css';

class SelectedCell extends React.Component {
  constructor(props) {
    super(props);

    this.state = { oldContents: props.contents };
  }
  render() {
    const { contents } = this.props;
    const { oldContents } = this.state;
    return (
      <div className="cell board-cell">
        {contents !== EMPTY ? contents : oldContents}
      </div>
    );
  }
}

export default SelectedCell;
