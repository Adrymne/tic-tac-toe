import React from 'react';

class FillScreen extends React.Component {
  static defaultProps = {
    fillRate: 1
  };

  constructor(props) {
    super(props);

    this.state = {
      windowHeight: document.documentElement.clientHeight
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.calculateHeight);
    this.calculateHeight();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateHeight);
  }

  saveRef = node => (this.node = node);
  calculateHeight = () => {
    const windowHeight = document.documentElement.clientHeight;
    const { top } = this.node.getBoundingClientRect();
    const { fillRate } = this.props;
    this.setState({
      height: (windowHeight - top) * fillRate
    });
  };

  render() {
    const { children, fillRate, ...rest } = this.props;
    const { height } = this.state;
    return (
      <div style={{ height }} ref={this.saveRef} {...rest}>
        {children}
      </div>
    );
  }
}

export default FillScreen;
