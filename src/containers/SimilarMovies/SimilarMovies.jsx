import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MovieCards from '../../components/MovieCards/MovieCards';
import * as actions from '../../store/actions';
import Spinner from '../../components/Spinner/Spinner';
import { addGenres } from '../../utils';

class SimilarMovies extends Component {
  state = {
    movies: null,
  };

  static getDerivedStateFromProps(nextProps, state) {
    if (!state.movies && !nextProps.loading && nextProps.id) {
      nextProps.onFetchSimilar(nextProps.id);
      return null;
    } else if (nextProps.similar && nextProps.genres) {
      return {
        movies: addGenres(nextProps.similar, nextProps.genres),
      };
    }

    return null;
  }

  render() {
    // set the initial `movieCards` 
    let movieCards = null;
    if (this.props.loading) {
      // show `Spinnner` if movies is being loaded
      movieCards = <Spinner />;
    } else if (this.state.movies) {
      // show the `MovieCards` if `movies` is loaded
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

SimilarMovies.propTypes = {
  similar: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  genres: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool,
  onFetchSimilar: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    similar: state.similar.movies,
    genres: state.genres.genres,
    loading: state.similar.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchSimilar: id => dispatch(actions.fetchSimilar(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimilarMovies);
