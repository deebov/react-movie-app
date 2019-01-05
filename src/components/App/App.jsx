import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import LandingPage from '../../pages/LandingPage';
import { LANDING } from '../../constants/routes';
import { fetchGenres } from '../../store/actions';

class App extends Component {
  componentDidMount() {
    this.props.onFetchGenres();
  }

  render() {
    return (
      <div>
        <Helmet titleTemplate="%s | Movies App" />
        <Switch>
          <Route path={LANDING} exact component={LandingPage} />
          <Route render={() => <Redirect to={LANDING} />} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchGenres: () => dispatch(fetchGenres())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
