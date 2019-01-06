import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieCards from '../../components/MovieCards/MovieCards';
import * as actions from '../../store/actions';
import Spinner from '../../components/Spinner/Spinner';
import { addGenres } from '../../utils';

class SimilarMovies extends Component {
  state = {
    movies: null
  };

  static getDerivedStateFromProps(nextProps, state) {
    if (!state.movies && !nextProps.loading && nextProps.id) {
      nextProps.onFetchSimilar(nextProps.id);
      return null;
    } else if (nextProps.similar && nextProps.genres) {
      return {
        movies: addGenres(nextProps.similar, nextProps.genres)
      };
    }

    return null;
  }

  render() {
    let movieCards = null;
    if (this.props.loading) {
      movieCards = <Spinner />;
    } else if (this.state.movies) {
      movieCards = <MovieCards list={this.state.movies.slice(0, 6)} />;
    }

    return (
      <div>
        <h2 style={{ marginBottom: 0, textAlign: 'center' }}>Similar Movies</h2>
        {movieCards}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    similar: state.similar.movies,
    genres: state.genres.genres,
    loading: state.similar.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchSimilar: id => dispatch(actions.fetchSimilar(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimilarMovies);
