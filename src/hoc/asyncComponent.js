import React, { Component } from 'react';
import PropTypes from 'prop-types';

const asyncComponent = importComponent => {
  return class lazyComponent extends Component {
    state = {
      component: null,
    };

    componentDidMount() {
      importComponent().then(cmp => {
        this.setState({ component: cmp.default });
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  };
};

asyncComponent.propTypes = {
  Component: PropTypes.func,
};

export default asyncComponent;
