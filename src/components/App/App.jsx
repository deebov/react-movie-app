import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import LandingPage from '../../pages/LandingPage';
import { LANDING, MOVIE } from '../../constants/routes';
import { fetchGenres } from '../../store/actions';
import MoviePage from '../../pages/MoviePage';
import Search from '../../containers/Search/Search';

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
            render={props => (
              <MoviePage key={props.match.params.movieId} {...props} />
            )}
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
