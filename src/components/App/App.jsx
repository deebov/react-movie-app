import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import LandingPage from '../../pages/LandingPage';
import { LANDING, MOVIE } from '../../constants/routes';
import { fetchGenres } from '../../store/actions';
import Search from '../../containers/Search/Search';
import asyncComponent from '../../hoc/asyncComponent';

const asyncMoviePage = asyncComponent(() => import('../../pages/MoviePage'));

class App extends Component {
  componentDidMount() {
    this.props.onFetchGenres();
  }

  render() {
    return (
      <div>
        <Helmet titleTemplate="%s | Movies App" />
        <Search />
        <Switch>
          <Route path={LANDING} exact component={LandingPage} />
          <Route
            path={MOVIE}
            component={asyncMoviePage}
            key={this.props.location.pathname}
          />
          <Route render={() => <Redirect to={LANDING} />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie.movie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchGenres: () => dispatch(fetchGenres())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
