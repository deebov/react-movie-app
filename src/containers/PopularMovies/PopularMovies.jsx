import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPopular } from '../../store/actions';
import MovieCards from '../../components/MovieCards/MovieCards';
import { addGenres } from '../../utils';

class PopularMovies extends Component {
  state = {
    movies: null,
    page: null,
    _genres: false
  };

  componentDidMount() {
    this.props.onFetchPopular(1);
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.popular && nextProps.genres) {
      return {
        movies: addGenres(nextProps.popular, nextProps.genres),
        page: nextProps.page
      };
    }

    return null;
  }

  onPaginatedSearch = () => this.props.onFetchPopular(this.state.page + 1);

  render() {
    return (
      <div>
        <MovieCards
          movies={this.state.movies}
          page={this.state.page}
          loading={this.props.loading}
          onPaginatedSearch={this.onPaginatedSearch}
        />
      </div>
    );
  }
}

PopularMovies.propTypes = {
  popular: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool,
  genres: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onFetchPopular: PropTypes.func
};

const mapStateToProps = state => {
  return {
    popular: state.popular.movies,
    loading: state.popular.loading,
    genres: state.genres.genres,
    page: state.popular.popularInfo.page
  };
};

const mapDispatchToProps = dispatch => {
  return { onFetchPopular: page => dispatch(fetchPopular(page)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularMovies);
