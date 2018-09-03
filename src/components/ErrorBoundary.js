import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      hasErrors: true,
    })
  }

  render() {
    return this.state.hasErrors
    ? <h1>Oooops! Something went wrong!</h1>
    : this.props.children
  }
}

export default ErrorBoundary;