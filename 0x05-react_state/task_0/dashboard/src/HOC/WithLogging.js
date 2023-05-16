import React from 'react';
import { Component } from 'react';

const WithLogging = (component) => {
  const name = component.name || component.displayName || 'Component';

  class newComponent extends Component {
    componentDidMount() {
      console.log(`Component ${name} is mounted`);
    }
    componentWillUnmount() {
      console.log('Component ${name} is going to unmount');
    }
    render() {
      return <component {...this.props}/>;
    }
  };
  newComponent.displayName = `WithLogging(${name})`;
  return newComponent;
}

export default WithLogging;