import React from "react";

class ChangingProgressProvider extends React.Component {
  static defaultProps = {
    interval: 1000,
  };

  state = {
    value: "10/10",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        value: "10/10",
      });
    }, this.props.interval);
  }

  render() {
    return this.props.children(this.state.value);
  }
}

export default ChangingProgressProvider;